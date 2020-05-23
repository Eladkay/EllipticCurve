package eladkay.ellipticcurve.mathengine

interface Curve {
    fun isPointOnCurve(vec2d: Vec2d): Boolean {
        return difference(vec2d.x, vec2d.y) == 0.0
    }
    fun difference(x: Double, y: Double): Double
    fun error(): Double = 0.035
}