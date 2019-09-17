package eladkay.ellipticcurve.mathengine


class EllipticCurve(val aValue: Double, val bValue: Double, val field: Field) {
    init {
        if (determinant() == 0.0 || !field.belongsTo(aValue) || !field.belongsTo(bValue)) throw IllegalArgumentException("Invalid curve!")
    }

    private fun determinant(): Double {
        return field.realsToField(-16 * (4 * Math.pow(aValue, 3.0) + 27 * Math.pow(bValue, 2.0)))
    }

    override fun toString(): String {
        return if (aValue != 0.0) {
            if (bValue != 0.0)
                "y²=x³ + " + this.aValue + "x + " + bValue
            else
                "y²=x³ + " + this.aValue + "x"
        } else {
            if (bValue != 0.0)
                "y²=x³ + " + this.bValue
            else
                throw IllegalStateException()
        }

    }

    fun isPointOnCurve(p: Vec2d): Boolean {
        return field { p.y.ef(2) == p.x.ef(3) + aValue*p.x + bValue }
    }

    operator fun <T> invoke(action: EllipticCurve.()->T) = this.action()
    operator fun Vec2d.plus(b: Vec2d): Vec2d = EllipticCurveHelper(this@EllipticCurve).add(this, b)
    operator fun Vec2d.minus(b: Vec2d): Vec2d = EllipticCurveHelper(this@EllipticCurve).add(this, -b)
    operator fun Vec2d.times(b: Int): Vec2d = EllipticCurveHelper(this@EllipticCurve).multiply(this, b)
    operator fun Vec2d.unaryMinus(): Vec2d = this.invertY()
}
