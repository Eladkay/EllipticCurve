package eladkay.ellipticcurve.mathengine

class EllipticCurveHelper(private val curve: EllipticCurve) {
    private val field: Field = curve.field

    // an elliptic curve over a finite field using this operation is a finite abelian group
    fun add(a: Vec2d, b: Vec2d): Vec2d {
     /* if (!curve.isPointOnCurve(a)) throw IllegalArgumentException("point $a not on curve!")
        if (!curve.isPointOnCurve(b)) throw IllegalArgumentException("point $b not on curve!") */ // since we're working with very crude approximations, this can't be

        val (x1, y1) = a
        val (x2, y2) = b
        return field {
            if (a == b) {
                if (y1 == 0.0) return@field Vec2d.PT_AT_INF

                val m = (!3.0 * (!x1 exp 2) + !curve.aValue) / (!2.0 * !y1)
                val x3 = (m exp 2) + !-2.0 * !x1
                val y3 = m * (!x1 - x3) - !y1
                Vec2d(!x3, !y3).takeUnless { it.isNaN() } ?: Vec2d.PT_AT_INF
            } else {
                if (x1 == x2) return@field Vec2d.PT_AT_INF

                val m = !(y2 - y1) / !(x2 - x1)
                val x3 = (m exp 2) - !x1 - !x2
                val y3 = m * (!x1 - x3) - !y1
                Vec2d(!x3, !y3).takeUnless { it.isNaN() } ?: Vec2d.PT_AT_INF
            }
        }
    }

    fun multiply(a: Vec2d, num: Int): Vec2d {
        return if (num == 1)
            a
        else
            add(a, multiply(a, num - 1))
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
