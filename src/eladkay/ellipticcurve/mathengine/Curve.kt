package eladkay.ellipticcurve.mathengine

interface Curve {
    fun isPointOnCurve(vec2d: Vec2d): Boolean
    fun difference(x: Double, y: Double): Double
}