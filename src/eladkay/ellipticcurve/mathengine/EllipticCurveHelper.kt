package eladkay.ellipticcurve.mathengine

class EllipticCurveHelper(private val curve: EllipticCurve) {
    private val field: Field = curve.field

    fun add(a: Vec2d, b: Vec2d): Vec2d {
        if (!curve.isPointOnCurve(a)) throw IllegalArgumentException("point $a not on curve!")
        if (!curve.isPointOnCurve(b)) throw IllegalArgumentException("point $b not on curve!")

        val (x1, y1) = a
        val (x2, y2) = b
        return field {
            if (a == b) {
                val m = (3*x1.ef(2) + curve.aValue)/(2*y1)
                val x3 = m.ef(2) + -2.0 * x1
                val y3 = m * (x1 - x3) - y1
                 Vec2d(x3, y3).takeUnless { it.isNaN() } ?: Vec2d.PT_AT_INF
            } else {
                val m = (y2-y1)/(x2-x1)
                val x3 = m.ef(2) - x1 - x2
                val y3 = m*(x1-x3)-y1
                Vec2d(x3, y3).takeUnless { it.isNaN() } ?: Vec2d.PT_AT_INF
            }
        }
    }

    fun multiply(a: Vec2d, num: Int): Vec2d {
        return if (num == 1)
            a
        else
            add(a, multiply(a, num - 1))
    }

}
