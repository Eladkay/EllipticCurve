package eladkay.ellipticcurve.mathengine.elliptic

import eladkay.ellipticcurve.mathengine.Vec2d
import java.util.*

class EllipticCurveHelper(private val curve: EllipticCurve) {

    // an elliptic curve over a finite field using this operation is a finite abelian group
    // moreover, each point generates a cyclic subgroup
    fun add(a: Vec2d, b: Vec2d): Vec2d {
        if (a.isInfinite()) return b
        if (b.isInfinite()) return a
        if (curve is FiniteEllipticCurve) return addFinite(a, b)

        val (x1, y1) = a
        val (x2, y2) = b
        val lambda = if (a == b) if (y1 == 0.0) return Vec2d.PT_AT_INF else (3 * x1 * x1 + curve.aValue) / (2 * y1)
        else if (x1 == x2) return Vec2d.PT_AT_INF
        else (y1 - y2) / (x1 - x2)
        val x3 = lambda * lambda - x1 - x2
        val y3 = lambda * (x2 - x3) - y2
        return Vec2d(x3, y3)
    }

    private fun inv(int: Long): Double {
        if (curve !is FiniteEllipticCurve) return 1.0 / int
        for (i in 1 until curve.modulus) if (int * i % curve.modulus == 1L) return i.toDouble()
        return -1.0
    }

    private fun generateInversionTable(): Map<Vec2d, Vec2d> {
        if (curve !is FiniteEllipticCurve) throw UnsupportedOperationException("This function is only defined for finite elliptic curves!")
        val ret = mutableMapOf(Vec2d.PT_AT_INF to Vec2d.PT_AT_INF)
        for (p1 in curve.curvePoints) for (p2 in curve.curvePoints)
            if (add(p1, p2) == Vec2d.PT_AT_INF) ret[p1] = p2
        return ret
    }

    private val inversionTable by lazy { generateInversionTable() }

    fun invPoint(vec2d: Vec2d): Vec2d {
        if (curve !is FiniteEllipticCurve) return vec2d.invertY()
        return inversionTable[vec2d]!!
    }

    private fun addFinite(a: Vec2d, b: Vec2d): Vec2d {
        var (x1, y1) = a
        var (x2, y2) = b
        this.curve as FiniteEllipticCurve
        if (curve.field == "z2" || curve.field == "z3")
            throw IllegalArgumentException("elliptic curves over Z2 or Z3 don't quite work the same") // besides, when working with elliptic curve cryptography, we generally want to use large primes anyways
        if (a.isInfinite()) return b
        if (b.isInfinite()) return a
        val card = curve.modulus
        x1 %= card
        y1 %= card
        x2 %= card
        y2 %= card
        val s = if (a.x == b.x) {
            if (a.y != b.y || mod(2 * a.y, card) == 0L) return Vec2d.PT_AT_INF
            else mod((3 * a.x * a.x + curve.aValue) * inv(mod(2 * a.y, card)), card)
        } else mod((a.y - b.y) * inv(mod(a.x - b.x, card)), card)
        val x3 = mod(s * s - a.x - b.x, card)
        val y3 = mod(s * a.x - s * x3 - a.y, card)
        return Vec2d(x3, y3)

    }

    fun subgroup(p: Vec2d): List<Vec2d> {
        if (curve !is FiniteEllipticCurve) throw UnsupportedOperationException("This function is only defined for finite elliptic curves!")
        val ret = mutableListOf(p)
        var pt = p
        while (pt != Vec2d.PT_AT_INF) {
            pt = add(pt, p)
            ret.add(pt)
        }
        return ret
    }

    private val additionTable by lazy { generateAdditionTable() }

    private fun generateAdditionTable(): Map<Pair<Vec2d, Vec2d>, Vec2d> {
        if (curve !is FiniteEllipticCurve) throw UnsupportedOperationException("This function is only defined for finite elliptic curves!")
        val ret = mutableMapOf<Pair<Vec2d, Vec2d>, Vec2d>()
        val pts = curve.curvePoints
        for (x in pts) for (y in pts) {
            ret[x to y] = add(x, y)
            ret[Vec2d.PT_AT_INF to y] = y
            ret[x to Vec2d.PT_AT_INF] = x
        }
        return ret
    }

    fun generateAdditionTableFormatting(): String {
        additionTable // finiteness checked here
        fun format(it: Vec2d) = if (it.isInfinite()) "∞" else it.toString()
        val strings = additionTable.mapValues { format(it.value) }.mapKeys { format(it.key.first) to format(it.key.second) }
        val pts = (curve as FiniteEllipticCurve).curvePoints.map { it.toString() }
        return buildString {
            append("+")
            for (pt in pts) append("\t$pt")
            append("\n")
            for (pt1 in pts) {
                append("$pt1\t")
                for (pt2 in pts) {
                    val str = if (pt1 == Vec2d.PT_AT_INF.toString()) pt2 else if (pt2 == Vec2d.PT_AT_INF.toString()) pt1 else strings[pt1 to pt2]
                    append("${if (str == Vec2d.PT_AT_INF.toString()) "∞" else str}\t")
                }
                append("\n")
            }

        }
    }

    fun order(vec2d: Vec2d): Int {
        if (vec2d == Vec2d.PT_AT_INF) return 0
        if (curve !is FiniteEllipticCurve) throw UnsupportedOperationException("This function is only defined for finite elliptic curves!")
        var order = 1
        var vector = vec2d
        while (vector != Vec2d.PT_AT_INF) {
            vector = add(vector, vec2d)
            order++
            if (order > curve.order()) return -1
        }
        return order
    }

    fun mod(x: Double, r: Long) = (((x % r) + r) % r).toLong() // normalized mod function

    // this is logarithmic in d, O(log2(d))
    fun multiply(p: Vec2d, d: Int): Vec2d {
        return when {
            d < 0 -> multiply(p.invertY(), -d)
            d == 0 -> Vec2d.PT_AT_INF
            d == 1 -> p
            d % 2 == 1 -> add(p, multiply(p, d - 1))
            else -> multiply(add(p, p), d / 2)
        }
    }

    // the right-hand-side of the curve equation
    fun rhs(y: Double) = if (curve is FiniteEllipticCurve) y * y % curve.modulus else y * y

    // the left-hand-side of the curve equation
    fun lhs(x: Double) = x * x * x + curve.aValue * x + curve.bValue % ((curve as? FiniteEllipticCurve)?.modulus ?: 1)


    companion object {
        val asciiTable = listOf('\u0000', '\u0001', '\u0002', '\u0003', '\u0004', '\u0005', '\u0006', '\u0007', '\u0008', '\u0009', '\u000a', '\u000b', '\u000c', '\u000d', '\u000e', '\u000f', '\u0010', '\u0011', '\u0012', '\u0013', '\u0014', '\u0015', '\u0016', '\u0017', '\u0018', '\u0019', '\u001a', '\u001b', '\u001c', '\u001d', '\u001e', '\u001f', '\u0020', '\u0021', '\u0022', '\u0023', '\u0024', '\u0025', '\u0026', '\u0027', '\u0028', '\u0029', '\u002a', '\u002b', '\u002c', '\u002d', '\u002e', '\u002f', '\u0030', '\u0031', '\u0032', '\u0033', '\u0034', '\u0035', '\u0036', '\u0037', '\u0038', '\u0039', '\u003a', '\u003b', '\u003c', '\u003d', '\u003e', '\u003f', '\u0040', '\u0041', '\u0042', '\u0043', '\u0044', '\u0045', '\u0046', '\u0047', '\u0048', '\u0049', '\u004a', '\u004b', '\u004c', '\u004d', '\u004e', '\u004f', '\u0050', '\u0051', '\u0052', '\u0053', '\u0054', '\u0055', '\u0056', '\u0057', '\u0058', '\u0059', '\u005a', '\u005b', '\u005c', '\u005d', '\u005e', '\u005f', '\u0060', '\u0061', '\u0062', '\u0063', '\u0064', '\u0065', '\u0066', '\u0067', '\u0068', '\u0069', '\u006a', '\u006b', '\u006c', '\u006d', '\u006e', '\u006f', '\u0070', '\u0071', '\u0072', '\u0073', '\u0074', '\u0075', '\u0076', '\u0077', '\u0078', '\u0079', '\u007a', '\u007b', '\u007c', '\u007d', '\u007e', '\u007f')
    }

    val rand = Random()

    var generator: Vec2d = Vec2d.PT_AT_INF
        get() {
            if (field == Vec2d.PT_AT_INF) {
                field = if (curve is FiniteEllipticCurve)
                    curve.curvePoints.toList()[rand.nextInt(curve.order())]
                else {
                    val x = rand.nextInt(35)
                    Vec2d(x + 1, Math.sqrt(lhs(x * 1.0)))
                }
            }
            return field
        }
    var agreedUponPt: Vec2d = Vec2d.PT_AT_INF
        get() {
            if (field == Vec2d.PT_AT_INF) {
                field = if (curve is FiniteEllipticCurve)
                    curve.curvePoints.toList()[rand.nextInt(curve.order())]
                else {
                    val x = rand.nextInt(35)
                    Vec2d(x + 1, Math.sqrt(lhs(x * 1.0)))
                }
            }
            return field
        }
    var asciiGeneratorTable: List<Vec2d> = listOf()
        get() {
            while (field.toSet().size != 128) {
                generator = Vec2d.PT_AT_INF
                val list = mutableListOf<Vec2d>()
                for (i in 1..128) list.add(multiply(generator, i).truncate(2)) // the constant is empirically derived
                field = list
            }
            return field
        }
    // the following two functions ought to be bijections, otherwise obviously one of them won't be defined (they are not exactly bijections)
    // Encoding methodology due to
    // Reyad, Omar. (2018). Text Message Encoding Based on Elliptic Curve Cryptography and a Mapping Methodology. 10.12785/isl/070102.

    // the bee movie script encoded in this method: https://hastebin.com/kakewudubi.css
    fun getPointOnCurveFromString(string: String): List<Vec2d> {
        val list = mutableListOf<Vec2d>()
        for (ch in string) {
            if (ch !in asciiTable) throw UnsupportedOperationException("That's not an ASCII string!")
            list.add(asciiGeneratorTable[asciiTable.indexOf(ch)])
        }
        return list
    }

    fun getStringFromPointOnCurve(vec2d: List<Vec2d>): String {
        return buildString {
            for (vec in vec2d.map { it.round(2) }) {
                if (vec in asciiGeneratorTable) append(asciiTable[asciiGeneratorTable.indexOf(vec)])
            }
        }
    }

    // Below is the sequence of steps for encryption and decryption of a message from Alice to Bob:
    // Let Alice's private key be denoted by x and Bob's, by y.
    // Let M be the message as encoded by [getPointOnCurveFromString], let p be the modulus of the field and k a random
    // integer selected by Alice. G is a point agreed on by both sides. Alice's public key is A = xG and Bob's, B = yG.
    // The encrypted message is ((kG), (M+kB)).
    // If the encrypted message is (P, Q), then Bob can decrypt it as Q-yP.

    fun createPublicKey(privateKey: Int, agreedUponPt: Vec2d = this.agreedUponPt) = multiply(agreedUponPt, privateKey)

    fun encrypt(message: Vec2d, bobPublicKey: Vec2d, agreedUponPt: Vec2d = this.agreedUponPt): Pair<Vec2d, Vec2d> {
        val k = if (curve is FiniteEllipticCurve) rand.nextInt(curve.modulus.toInt()) else rand.nextInt(100)
        return encrypt(message, bobPublicKey, agreedUponPt, k)
    }

    fun encrypt(message: Vec2d, bobPublicKey: Vec2d, agreedUponPt: Vec2d = this.agreedUponPt, k: Int): Pair<Vec2d, Vec2d> {
        return Pair(multiply(agreedUponPt, k), add(message, multiply(bobPublicKey, k)))
    }

    fun decrypt(encryptedMessage: Pair<Vec2d, Vec2d>, bobPrivateKey: Int) = add(encryptedMessage.second, invPoint(multiply(encryptedMessage.first, bobPrivateKey)))


    /**
     * A description of the Elliptic Curve Diffie-Hellman:
     * Let G, E, p be parameters known to the public.
     * Let Alice select her private key a and Bob select his private key b
     * Alice calculates the public key aG and Bob calculates the public key bG
     * They swap the public keys in public, and they both can calculate the session key abG.
     */
}
