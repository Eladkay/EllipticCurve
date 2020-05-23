package eladkay.ellipticcurve.mathengine.othercurves

import eladkay.ellipticcurve.mathengine.Curve

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

    override fun difference(x: Double, y: Double): Double {
        return value(x) - y
    }
}