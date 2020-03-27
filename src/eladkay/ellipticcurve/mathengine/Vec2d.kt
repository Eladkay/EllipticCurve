package eladkay.ellipticcurve.mathengine

class Vec2d(val x: Double, val y: Double) {


    companion object {
        val PT_AT_INF = Vec2d(Double.POSITIVE_INFINITY, Double.POSITIVE_INFINITY)
        private val MATCHING_REGEX = "\\(((?:-)*\\d+(?:.\\d+)*),(?:\\s)*((?:-)*\\d+(?:.\\d+)*)\\)".toRegex()
        fun of(string: String): Vec2d? {
            if (!isValid(string)) return null
            val groups = MATCHING_REGEX.matchEntire(string)!!.groups
            return Vec2d(groups[1]!!.value.toDouble(), groups[2]!!.value.toDouble())
        }

        fun isValid(text: String): Boolean {
            return text.matches(MATCHING_REGEX)
        }
    }

    constructor(x: Number, y: Number) : this(x.toDouble(), y.toDouble())

    fun invertY(): Vec2d { // are you looking for EllipticCurveHelper#invPoint?
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

    /**
     * Cut the precision of this Vec2d down to [num] decimal places.
     */
    fun truncate(num: Int): Vec2d {
        val pow10 = Math.pow(10.0, num.toDouble())
        return map { (it * pow10).toInt() / pow10 }
    }

    fun round(num: Int): Vec2d {
        val pow10 = Math.pow(10.0, num.toDouble())
        return map { Math.round(it * pow10) / pow10 }
    }

    fun isInfinite(): Boolean = this == PT_AT_INF


}
