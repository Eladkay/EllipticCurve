package eladkay.ellipticcurve.mathengine


open class EllipticCurve(val aValue: Long, val bValue: Long, val field: String) {
    init {
        if (determinant() == 0.0) throw IllegalArgumentException("Invalid curve!")
    }

    protected open fun determinant(): Double {
        return -16 * (4 * Math.pow(aValue.toDouble(), 3.0) + 27 * Math.pow(bValue.toDouble(), 2.0))
    }

    override fun toString(): String {
        return if (aValue != 0L) {
            if (bValue != 0L)
                "y²=x³ + " + this.aValue + "x + " + bValue
            else
                "y²=x³ + " + this.aValue + "x"
        } else {
            if (bValue != 0L)
                "y²=x³ + " + this.bValue
            else
                throw IllegalStateException()
        }

    }

    open fun isPointOnCurve(p: Vec2d): Boolean {
        return  (p.y * p.y) == (p.x * p.x * p.x) + (aValue * p.x) + bValue
    }

    /**
     * 0 if and only if (x, y) is on the curve.
     * Let wlog y be constant anc consider difference(x). If x1!=x2 implies sgn(difference(x1)) != sgn(difference(x2))
     * then there exists an x3 between x1 and x2 such that (x3, y) is on the curve. This is a direct consequence of the
     * mean value theorem.
     */
    open fun difference(x: Double, y: Double) = y * y  - (x * x * x) - (aValue * x) - bValue

    // not fieldified, todo
    // https://i.imgur.com/uSvI4bF.jpg
    // i have no idea what this value means. it seems to be garbage and the real value is getPeak2
    @Deprecated("this returns garbage and I will remove it as soon as I realize what this is")
    fun getPeak1(): Vec2d {
        val k = aValue / 3.0
        val rec = Math.cbrt((-bValue + Math.sqrt(bValue * bValue + 4.0 * k * k)) / 2)
        return Vec2d(rec - k / rec, 0)
    }

    // not fieldified, todo
    // https://i.imgur.com/uSvI4bF.jpg
    // this seems to have a slight negative bias from the true value. that's okay
    fun getPeak2(): Vec2d {
        val k = aValue / 3.0
        val rec = Math.cbrt((-bValue - Math.sqrt(bValue * bValue + 4.0 * k * k)) / 2)
        return Vec2d(rec - k / rec, 0)
    }

    // in absolute value
    // take positive branch: y = sqrt(x^3+bx+c)
    // take derivative: y' = (3x^2+b)/(2sqrt(x^3+bx+c))
    // equal to 0 iff x = sqrt(-b/3) which is defined (over the reals!) if b<0
    fun getMinMaxXValue(): Double {
        if (bValue > 0) throw IllegalArgumentException("This function is not defined for b>0")
        else return Math.sqrt(-bValue / 3.0)
    }

    operator fun <T> invoke(action: EllipticCurve.() -> T) = this.action()
    operator fun Vec2d.plus(b: Vec2d): Vec2d = EllipticCurveHelper(this@EllipticCurve).add(this, b)
    operator fun Vec2d.minus(b: Vec2d): Vec2d = EllipticCurveHelper(this@EllipticCurve).add(this, -b)
    operator fun Vec2d.times(b: Int): Vec2d = EllipticCurveHelper(this@EllipticCurve).multiply(this, b)
    operator fun Vec2d.unaryMinus(): Vec2d = this.invertY()
}
