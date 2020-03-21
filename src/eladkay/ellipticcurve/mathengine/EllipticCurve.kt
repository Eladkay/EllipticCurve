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
                throw IllegalStateException() // invalid curve, determinant 0
        }

    }

    open fun isPointOnCurve(p: Vec2d): Boolean {
        return (p.y * p.y) == (p.x * p.x * p.x) + (aValue * p.x) + bValue
    }

    /**
     * 0 if and only if (x, y) is on the curve.
     * Let wlog y be constant anc consider difference(x). For every x1, x2, y1, y2 s.t. sgn(difference(x1,y1)) != sgn(difference(x2,y2))
     * there exists an x3 between x1 and x2 and a y3 between y1 and y2 s.t (x3, y3) is on the curve. This is a provable consequence of the
     * mean value theorem, given the curve is continuous of course, for a suitable definition of this term.
     */
    open fun difference(x: Double, y: Double) = y * y  - (x * x * x) - (aValue * x) - bValue


    // in absolute value
    // take positive branch: y = sqrt(x^3+bx+c)
    // take derivative: y' = (3x^2+b)/(2sqrt(x^3+bx+c))
    // equal to 0 iff x = sqrt(-b/3) which is defined (over the reals!) if b<0
    fun getMinMaxXValue(): Double {
        if (bValue > 0) throw IllegalArgumentException("This function is not defined for b>0")
        else return Math.sqrt(-bValue / 3.0)
    }
    val helper: EllipticCurveHelper by lazy { EllipticCurveHelper(this) }
    companion object {
        val REALS = "reals"
    }
}
