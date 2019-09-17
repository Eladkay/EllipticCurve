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

    fun isPointOnCurve(p: Point): Boolean {
        return field { p.y.ef(2) == p.x.ef(3) + aValue*p.x + bValue }
    }

    operator fun <T> invoke(action: EllipticCurve.()->T) = this.action()
    operator fun Point.plus(b: Point): Point = EllipticCurveHelper(this@EllipticCurve).add(this, b)
    operator fun Point.minus(b: Point): Point = EllipticCurveHelper(this@EllipticCurve).add(this, -b)
    operator fun Point.times(b: Int): Point = EllipticCurveHelper(this@EllipticCurve).multiply(this, b)
    operator fun Point.unaryMinus(): Point = this.invertY()
}
