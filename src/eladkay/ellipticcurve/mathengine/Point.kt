package eladkay.ellipticcurve.mathengine

data class Point(val x: Double, val y: Double) {

    companion object {
        val PT_AT_INF = Point(Double.POSITIVE_INFINITY, Double.POSITIVE_INFINITY)
    }

    constructor(x: Number, y: Number) : this(x.toDouble(), y.toDouble())

    fun invertY(): Point {
        return Point(x, -y)
    }

    fun isNaN() = x.isNaN() || y.isNaN()

    override fun toString(): String {
        return "($x,$y)"
    }
}
