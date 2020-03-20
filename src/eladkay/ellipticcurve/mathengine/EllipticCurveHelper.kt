package eladkay.ellipticcurve.mathengine

import java.util.*
import javax.swing.JOptionPane

class EllipticCurveHelper(private val curve: EllipticCurve) {

    // an elliptic curve over a finite field using this operation is a finite abelian group
    // moreover, each point generates a cyclic subgroup
    fun add(a: Vec2d, b: Vec2d): Vec2d {
        /* if (!curve.isPointOnCurve(a)) throw IllegalArgumentException("point $a not on curve!")
           if (!curve.isPointOnCurve(b)) throw IllegalArgumentException("point $b not on curve!") */ // since we're working with very crude approximations, this can't be
        if (a == Vec2d.PT_AT_INF) return b
        if (b == Vec2d.PT_AT_INF) return a
        if (curve is FiniteEllipticCurve) return addFinite(a, b)

        val (x1, y1) = a
        val (x2, y2) = b
        val lambda =
                if (a == b)
                    if (y1 == 0.0) return Vec2d.PT_AT_INF
                    else (3 * x1 * x1 + curve.aValue) / (2 * y1)
                else if (x1 == x2) return Vec2d.PT_AT_INF
                else (y1 - y2) / (x1 - x2)
        val x3 = lambda * lambda - x1 - x2
        val y3 = lambda * (x2 - x3) - y2
        return Vec2d(x3, y3)
    }

    // invert on finite field fast
    private val inv: Map<Long, Long>? by lazy {
        if(curve !is FiniteEllipticCurve) return@lazy null
        val map = mutableMapOf<Long, Long>()
        for(i in 0 until curve.modulus)
            for(j in i until curve.modulus)
                if((i*j)%curve.modulus == 1L) {
                    map.put(i, j)
                    map.put(j, i)
                }
        return@lazy map
    }

    private fun addFinite(a: Vec2d, b: Vec2d): Vec2d {
        var (x1, y1) = a
        var (x2, y2) = b
        this.curve as FiniteEllipticCurve
        if (curve.field == "z2" || curve.field == "z3") throw IllegalArgumentException("elliptic curves over Z2 or Z3 don't quite work the same") // besides, when working with elliptic curve cryptography, we generally want to use large primes anyways
        val card = curve.modulus
        x1 %= card
        y1 %= card
        x2 %= card
        y2 %= card
        val invSafe = inv!!
        fun mod(x: Double, r: Long) = (((x % r) + r) % r).toLong()
        if (a == Vec2d.PT_AT_INF) return b
        if (b == Vec2d.PT_AT_INF) return a
        val s = if(a.x == b.x) {
            if(a.y != b.y || a.y == 0.0) return Vec2d.PT_AT_INF
            else mod((3*a.x*a.x + curve.aValue)*invSafe[mod(2*a.y, card)]!!, card)
        } else mod((a.y - b.y)*invSafe[mod(a.x - b.x, card)]!!, card)
        val x3 = mod(s*s-a.x-b.x, card)
        val y3 = mod(s*a.x - s*x3 - a.y, card)
        return Vec2d(x3, y3)

    }

    // this is naiive. O(2^k)
    @Deprecated("This is naiive and slow I will remove it later")
    fun slowMultiply(a: Vec2d, num: Int): Vec2d {
        if (num < 0) return slowMultiply(a.invertY(), -num)
        if (num == 0) return Vec2d.PT_AT_INF
        return if (num == 1)
            a
        else
            add(a, slowMultiply(a, num - 1))
    }

    // this is way better, O(k)
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
    fun lhs(x: Double) = x * x * x + curve.aValue * x + curve.bValue % (if (curve is FiniteEllipticCurve) curve.modulus else 1)


    companion object {
        // please forgive me, i will excuse this by saying it was done in the name of speed
        val asciiTable = listOf('\u0000', '\u0001', '\u0002', '\u0003', '\u0004', '\u0005', '\u0006', '\u0007', '\u0008', '\u0009', '\u000a', '\u000b', '\u000c', '\u000d', '\u000e', '\u000f', '\u0010', '\u0011', '\u0012', '\u0013', '\u0014', '\u0015', '\u0016', '\u0017', '\u0018', '\u0019', '\u001a', '\u001b', '\u001c', '\u001d', '\u001e', '\u001f', '\u0020', '\u0021', '\u0022', '\u0023', '\u0024', '\u0025', '\u0026', '\u0027', '\u0028', '\u0029', '\u002a', '\u002b', '\u002c', '\u002d', '\u002e', '\u002f', '\u0030', '\u0031', '\u0032', '\u0033', '\u0034', '\u0035', '\u0036', '\u0037', '\u0038', '\u0039', '\u003a', '\u003b', '\u003c', '\u003d', '\u003e', '\u003f', '\u0040', '\u0041', '\u0042', '\u0043', '\u0044', '\u0045', '\u0046', '\u0047', '\u0048', '\u0049', '\u004a', '\u004b', '\u004c', '\u004d', '\u004e', '\u004f', '\u0050', '\u0051', '\u0052', '\u0053', '\u0054', '\u0055', '\u0056', '\u0057', '\u0058', '\u0059', '\u005a', '\u005b', '\u005c', '\u005d', '\u005e', '\u005f', '\u0060', '\u0061', '\u0062', '\u0063', '\u0064', '\u0065', '\u0066', '\u0067', '\u0068', '\u0069', '\u006a', '\u006b', '\u006c', '\u006d', '\u006e', '\u006f', '\u0070', '\u0071', '\u0072', '\u0073', '\u0074', '\u0075', '\u0076', '\u0077', '\u0078', '\u0079', '\u007a', '\u007b', '\u007c', '\u007d', '\u007e', '\u007f')
    }

    val generator: Vec2d by lazy {
        val x = if (curve is FiniteEllipticCurve) rand.nextInt(curve.modulus.toInt()) else rand.nextInt(35)
        Vec2d(x + 1, Math.sqrt(lhs(x * 1.0)))
    }
    val agreedUponPt: Vec2d by lazy {
        val x = if (curve is FiniteEllipticCurve) rand.nextInt(curve.modulus.toInt()) else rand.nextInt(35)
        Vec2d(x + 1, Math.sqrt(lhs(x * 1.0)))
    }
    private val asciiGeneratorTable: List<Vec2d> by lazy {
        val list = mutableListOf<Vec2d>()
        for (i in 0..127) list.add(multiply(generator, i).truncate(2)) // the constant is empirically derived
        list
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

    val rand = Random()
    fun encrypt(message: Vec2d, bobPublicKey: Vec2d, agreedUponPt: Vec2d = this.agreedUponPt): Pair<Vec2d, Vec2d> {
        val k = if (curve is FiniteEllipticCurve) rand.nextInt(curve.modulus.toInt()) else rand.nextInt(100)
        return encrypt(message, bobPublicKey, agreedUponPt, k)
    }

    fun encrypt(message: Vec2d, bobPublicKey: Vec2d, agreedUponPt: Vec2d = this.agreedUponPt, k: Int): Pair<Vec2d, Vec2d> {
        if (isDebug) JOptionPane.showMessageDialog(null, "The random constant is $k")
        return curve { Pair(agreedUponPt * k, message + bobPublicKey * k) }
    }

    fun decrypt(encryptedMessage: Pair<Vec2d, Vec2d>, bobPrivateKey: Int) = curve { encryptedMessage.second - encryptedMessage.first * bobPrivateKey }


    private var isDebug = false
    fun setDebug(value: Boolean) {
        isDebug = value
    }

    /**
     * A description of the Elliptic Curve Diffie-Hellman:
     * Let G, E, p be parameters known to the public.
     * Let Alice select her private key a and Bob select his private key b
     * Alice calculates the public key aG and Bob calculates the public key bG
     * They swap the public keys in public, and they both can calculate the session key abG.
     */
}
