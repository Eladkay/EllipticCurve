package eladkay.ellipticcurve.mathengine

class Vec2d(val x: Double, val y: Double) {


    companion object {
        val PT_AT_INF = Vec2d(Double.POSITIVE_INFINITY, Double.POSITIVE_INFINITY)
        fun of(string: String): Vec2d {
            val strippedSplit = string.removeSurrounding("(", ")").split(", ").map { it.toDouble() }
            return Vec2d(strippedSplit[0], strippedSplit[1])

        }
    }

    constructor(x: Number, y: Number) : this(x.toDouble(), y.toDouble())

    fun invertY(): Vec2d {
        return Vec2d(x, -y)
    }

    fun isNaN() = x.isNaN() || y.isNaN()

    override fun toString(): String {
        return "($x, $y)"
    }

    operator fun component1() = x
    operator fun component2() = y

    fun map(map: (Double) -> Double): Vec2d {
        return Vec2d(map(x), map(y))
    }

    override fun hashCode(): Int {
        var result = x.hashCode()
        result = 31 * result + y.hashCode()
        return result
    }

    override fun equals(other: Any?): Boolean {
        if (this === other) return true
        if (javaClass != other?.javaClass) return false

        other as Vec2d

        if (x != other.x) return false
        if (y != other.y) return false

        return true
    }

    fun vec2i() = Vec2i(x.toInt(), y.toInt())
}
