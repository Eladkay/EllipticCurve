package eladkay.ellipticcurve.mathengine

import java.lang.Math.cos
import java.lang.Math.sin

object MathHelper {
    fun rotate(point: Vec2d, theta: Double): Vec2d {
        return Vec2d(point.x * cos(theta) - point.y * sin(theta), point.x * sin(theta) + point.y * cos(theta))
    }

    fun slope(p1: Vec2d, p2: Vec2d): Double {
        if (p1 == Vec2d.PT_AT_INF || p2 == Vec2d.PT_AT_INF) return Double.POSITIVE_INFINITY
        return (p1.y - p2.y) / (p1.x - p2.x)
    }
}
