package eladkay.ellipticcurve.mathengine

class EllipticCurveHelper(private val curve: EllipticCurve) {

    // an elliptic curve over a finite field using this operation is a finite abelian group
    // moreover, each point generates a cyclic subgroup
    fun add(a: Vec2d, b: Vec2d): Vec2d {
     /* if (!curve.isPointOnCurve(a)) throw IllegalArgumentException("point $a not on curve!")
        if (!curve.isPointOnCurve(b)) throw IllegalArgumentException("point $b not on curve!") */ // since we're working with very crude approximations, this can't be
        if(a == Vec2d.PT_AT_INF) return b
        if(b == Vec2d.PT_AT_INF) return a

        var (x1, y1) = a
        var (x2, y2) = b
        // well then screw this, this does NOT seem like good code does it? but it is
        if(curve is FiniteEllipticCurve) if(curve.field == "z2" || curve.field == "z3") throw IllegalArgumentException("elliptic curves over Z2 or Z3 don't quite work the same")
        else {
            x1 %= curve.modulus
            y1 %= curve.modulus
            x2 %= curve.modulus
            y2 %= curve.modulus
            val specificDefinition = curve {
                operator fun Double.not() = FiniteEllipticCurve.NumberWrapper(this, curve.modulus)
                if (a == b) {
                    if (y1 == 0.0) return@curve Vec2d.PT_AT_INF

                    val m = (!3.0 * (!x1 exp 2) + !curve.aValue) / (!2.0 * !y1)
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
            return specificDefinition
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
    //@Deprecated("this is slow and naiive and kept here for 1. brevity 2. future use perhaps in the study helper")
    fun multiply(a: Vec2d, num: Int): Vec2d {
        return if (num == 1)
            a
        else
            add(a, multiply(a, num - 1))
    }

    // this is better, O(k), if it had worked. todo
    fun fastMultiply(a: Vec2d, num: Int): Vec2d {
        var numTemp = num
        val bits = generateSequence {
            if(numTemp == 0) return@generateSequence null
            val bit = numTemp and 1
            numTemp = numTemp shr 1
            bit
        }
        var addend = a
        var result = Vec2d.PT_AT_INF
        for(bit in bits) {
            if(bit == 1) result = add(result, addend)
            addend = add(addend, addend)
        }
        return result
    }

    // Encoding methodology due to
    // Reyad, Omar. (2018). Text Message Encoding Based on Elliptic Curve Cryptography and a Mapping Methodology. 10.12785/isl/070102.

    fun getPointOnCurveFromString(string: String): Vec2d {
        TODO()
    }

    fun getStringFromPointOnCurve(vec2d: Vec2d): String {
        TODO()
    }

    // Below is the sequence of steps for encryption and decryption of a message from Alice to Bob:
    // Let Alice's private key be denoted by x and Bob's, by y.
    // Let M be the message as encoded by [getPointOnCurveFromString], let p be the modulus of the field and k a random
    // integer selected by Alice. G is a point agreed on by both sides. Alice's public key is A = xG and Bob's, B = yG.
    // The encrypted message is ((kG), (M+kB)).
    // If the encrypted message is (P, Q), then Bob can decrypt it as Q-yP.
}
