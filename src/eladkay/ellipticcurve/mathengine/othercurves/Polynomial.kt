package eladkay.ellipticcurve.mathengine.othercurves

import eladkay.ellipticcurve.mathengine.Curve
import eladkay.ellipticcurve.mathengine.Vec2d

class Polynomial(vararg val coefficients: Double) : Curve {

    fun value(x: Double): Double {
        var current = 1.0
        var overall = 0.0
        for(coeff in coefficients) {
            overall += current * coeff
            current *= x
        }
        return overall
    }

    override fun isPointOnCurve(vec2d: Vec2d): Boolean {
        return vec2d.y == value(vec2d.x)
    }

    override fun difference(x: Double, y: Double): Double {
        return value(x) - y
    }
}