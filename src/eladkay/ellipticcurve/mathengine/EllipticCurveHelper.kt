package eladkay.ellipticcurve.mathengine

import java.math.BigInteger
import java.util.*
import kotlin.math.roundToLong

class EllipticCurveHelper(private val curve: EllipticCurve) {

    // an elliptic curve over a finite field using this operation is a finite abelian group
    // moreover, each point generates a cyclic subgroup
    fun add(a: Vec2d, b: Vec2d): Vec2d {
        /* if (!curve.isPointOnCurve(a)) throw IllegalArgumentException("point $a not on curve!")
           if (!curve.isPointOnCurve(b)) throw IllegalArgumentException("point $b not on curve!") */ // since we're working with very crude approximations, this can't be
        if (a == Vec2d.PT_AT_INF) return b
        if (b == Vec2d.PT_AT_INF) return a

        var (x1, y1) = a
        var (x2, y2) = b
        if (curve is FiniteEllipticCurve) {
            if (curve.field == "z2" || curve.field == "z3") throw IllegalArgumentException("elliptic curves over Z2 or Z3 don't quite work the same") // besides, when working with elliptic curve cryptography, we generally want to use large primes anyways
            else {
                x1 %= curve.modulus
                y1 %= curve.modulus
                x2 %= curve.modulus
                y2 %= curve.modulus
                val specificDefinition = curve {
                    operator fun Double.not() = FiniteEllipticCurve.NumberWrapper(this, curve.modulus)
                    if (a == b) {
                        if (y1 == 0.0) return@curve Vec2d.PT_AT_INF

                        val m = (!3.0 * (!x1 exp 2) + !curve.aValue.toDouble()) / (!2.0 * !y1)
                        val x3 = (m exp 2) + !-2.0 * !x1
                        val y3 = m * (!x1 - x3) - !y1
                        Vec2d(!x3, !y3).takeUnless { it.isNaN() } ?: Vec2d.PT_AT_INF
                    } else {
                        if (x1 == x2) return@curve Vec2d.PT_AT_INF

                        val m = !(y2 - y1) / !(x2 - x1)
                        val x3 = (m exp 2) - !x1 - !x2
                        val y3 = m * (!x1 - x3) - !y1
                        Vec2d(!x3, !y3).takeUnless { it.isNaN() } ?: Vec2d.PT_AT_INF
                    }
                }
                fun BigInteger.floorMod(int: Long): Double {
                    return this.minus(BigInteger.valueOf(int).multiply(this.divide(BigInteger.valueOf(int)))).toDouble()
                }
                return specificDefinition.map { BigInteger.valueOf(curve.modulus).floorMod(it.roundToLong()) }
            }
        } else return if (a == b) {
            if (y1 == 0.0) return Vec2d.PT_AT_INF

            val m = (3.0 * (x1 * x1) + curve.aValue) / (2.0 * y1)
            val x3 = (m * m) + -2.0 * x1
            val y3 = m * (x1 - x3) - y1
            Vec2d(x3, y3).takeUnless { it.isNaN() } ?: Vec2d.PT_AT_INF
        } else {
            if (x1 == x2) return Vec2d.PT_AT_INF

            val m = (y2 - y1) / (x2 - x1)
            val x3 = (m * m) - x1 - x2
            val y3 = m * (x1 - x3) - y1
            Vec2d(x3, y3).takeUnless { it.isNaN() } ?: Vec2d.PT_AT_INF
        }
    }

    // this is naiive. O(2^k)
    fun multiply(a: Vec2d, num: Int): Vec2d {
        if(num < 0) return multiply(a.invertY(), -num)
        if(num == 0) return Vec2d.PT_AT_INF
        return if (num == 1)
            a
        else
            add(a, multiply(a, num - 1))
    }

    // this is better, O(k), if it had worked. todo
    fun fastMultiply(a: Vec2d, num: Int): Vec2d {
        var numTemp = num
        val bits = generateSequence {
            if (numTemp == 0) return@generateSequence null
            val bit = numTemp and 1
            numTemp = numTemp shr 1
            bit
        }
        var addend = a
        var result = Vec2d.PT_AT_INF
        for (bit in bits) {
            if (bit == 1) result = add(result, addend)
            addend = add(addend, addend)
        }
        return result
    }

    // the right-hand-side of the curve equation
    private fun rhs(y: Double) = if(curve is FiniteEllipticCurve) y * y % curve.modulus else y * y

    // the left-hand-side of the curve equation
    private fun lhs(x: Double) = x * x * x + curve.aValue * x + curve.bValue % (if(curve is FiniteEllipticCurve) curve.modulus else 1)

    // please forgive me, i will excuse this by saying it was done in the name of speed
    val asciiTable = listOf('\u0000', '\u0001', '\u0002', '\u0003', '\u0004', '\u0005', '\u0006', '\u0007', '\u0008', '\u0009', '\u000a', '\u000b', '\u000c', '\u000d', '\u000e', '\u000f', '\u0010', '\u0011', '\u0012', '\u0013', '\u0014', '\u0015', '\u0016', '\u0017', '\u0018', '\u0019', '\u001a', '\u001b', '\u001c', '\u001d', '\u001e', '\u001f', '\u0020', '\u0021', '\u0022', '\u0023', '\u0024', '\u0025', '\u0026', '\u0027', '\u0028', '\u0029', '\u002a', '\u002b', '\u002c', '\u002d', '\u002e', '\u002f', '\u0030', '\u0031', '\u0032', '\u0033', '\u0034', '\u0035', '\u0036', '\u0037', '\u0038', '\u0039', '\u003a', '\u003b', '\u003c', '\u003d', '\u003e', '\u003f', '\u0040', '\u0041', '\u0042', '\u0043', '\u0044', '\u0045', '\u0046', '\u0047', '\u0048', '\u0049', '\u004a', '\u004b', '\u004c', '\u004d', '\u004e', '\u004f', '\u0050', '\u0051', '\u0052', '\u0053', '\u0054', '\u0055', '\u0056', '\u0057', '\u0058', '\u0059', '\u005a', '\u005b', '\u005c', '\u005d', '\u005e', '\u005f', '\u0060', '\u0061', '\u0062', '\u0063', '\u0064', '\u0065', '\u0066', '\u0067', '\u0068', '\u0069', '\u006a', '\u006b', '\u006c', '\u006d', '\u006e', '\u006f', '\u0070', '\u0071', '\u0072', '\u0073', '\u0074', '\u0075', '\u0076', '\u0077', '\u0078', '\u0079', '\u007a', '\u007b', '\u007c', '\u007d', '\u007e', '\u007f')
    val generator: Vec2d by lazy {
        val x = if(curve is FiniteEllipticCurve) rand.nextInt(curve.modulus.toInt()) else 55//rand.nextInt(35)
        Vec2d(x, Math.sqrt(lhs(x*1.0)))
    }
    val agreedUponPt: Vec2d by lazy {
        val x = if(curve is FiniteEllipticCurve) rand.nextInt(curve.modulus.toInt()) else 55//rand.nextInt(35)
        Vec2d(x, Math.sqrt(lhs(x*1.0)))
    }
    private val asciiGeneratorTable : List<Vec2d> by lazy {
        val list = mutableListOf<Vec2d>()
        for(i in 0..127) list.add(multiply(generator, i))
        list
    }
    // the following two functions ought to be bijections, otherwise obviously one of them won't be defined (they are not exactly bijections)
    // Encoding methodology due to
    // Reyad, Omar. (2018). Text Message Encoding Based on Elliptic Curve Cryptography and a Mapping Methodology. 10.12785/isl/070102.

    // the bee movie script encoded in this method: https://hastebin.com/kakewudubi.css
    fun getPointOnCurveFromString(string: String): List<Vec2d> {
        val list = mutableListOf<Vec2d>()
        for(ch in string) {
            if(ch !in asciiTable) throw UnsupportedOperationException("That's not an ASCII string!")
            list.add(asciiGeneratorTable[asciiTable.indexOf(ch)])
        }
        return list
    }

    fun getStringFromPointOnCurve(vec2d: List<Vec2d>): String {
        return buildString {
            for(vec in vec2d) {
                if(vec !in asciiGeneratorTable) throw UnsupportedOperationException("That's not an ASCII string!")
                append(asciiTable[asciiGeneratorTable.indexOf(vec)])
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
        val k = if(curve is FiniteEllipticCurve) rand.nextInt(curve.modulus.toInt()) else rand.nextInt(100)
        return curve { Pair(agreedUponPt*k, message + bobPublicKey*k)}
    }
    fun decrypt(encryptedMessage: Pair<Vec2d, Vec2d>, bobPrivateKey: Int)
            = curve { encryptedMessage.second - encryptedMessage.first * bobPrivateKey}

    /**
     * A description of the Elliptic Curve Diffie-Hellman:
     * Let G, E, p be parameters known to the public.
     * Let Alice select her private key a and Bob select his private key b
     * Alice calculates the public key aG and Bob calculates the public key bG
     * They swap the public keys in public, and they both can calculate the session key abG.
     */
}
