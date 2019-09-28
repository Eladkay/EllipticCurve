package eladkay.ellipticcurve.mathengine

data class Vec2i(val x: Int, val y: Int) {
    operator fun times(int: Int) = Vec2i(x * int, y * int)
    operator fun Int.times(size: Vec2i) = size * this
    operator fun div(int: Int) = Vec2i((x / int.toDouble()).toInt(), (y / int.toDouble()).toInt())

    operator fun times(int: Double) = Vec2d(x * int, y * int)
    operator fun Double.times(size: Vec2i) = size * this
    operator fun div(int: Double) = Vec2d(x / int, y / int)
}