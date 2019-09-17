package eladkay.ellipticcurve.mathengine

class Vec2d(private val xParam: Double, private val yParam: Double, val field: Field = Field.REALS) {

    val x: Double
        get() {
            return this@Vec2d.field.realsToField(xParam)
        }

    val y: Double
        get() {
            return this@Vec2d.field.realsToField(yParam)
        }

    companion object {
        val PT_AT_INF = Vec2d(Double.POSITIVE_INFINITY, Double.POSITIVE_INFINITY)
    }

    constructor(x: Number, y: Number) : this(x.toDouble(), y.toDouble())
    constructor(x: Number, y: Number, field: Field) : this(x.toDouble(), y.toDouble(), field)

    fun invertY(): Vec2d {
        return Vec2d(x, -y)
    }

    fun isNaN() = x.isNaN() || y.isNaN()

    override fun toString(): String {
        return "($x,$y)"
    }



    operator fun component1() = x
    operator fun component2() = y

    override fun hashCode(): Int {
        var result = x.hashCode()
        result = 31 * result + y.hashCode()
        result = 31 * result + field.hashCode()
        return result
    }

    override fun equals(other: Any?): Boolean {
        if (this === other) return true
        if (javaClass != other?.javaClass) return false

        other as Vec2d

        if (x != other.x) return false
        if (y != other.y) return false
        if (field != other.field) return false

        return true
    }
}
