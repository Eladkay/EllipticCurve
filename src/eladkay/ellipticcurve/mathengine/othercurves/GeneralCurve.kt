package eladkay.ellipticcurve.mathengine.othercurves

import eladkay.ellipticcurve.mathengine.Curve

class GeneralCurve(private val error: Double = 0.035, private val difference: (Double, Double)->Double): Curve { // *salutes
    override fun difference(x: Double, y: Double): Double {
        return this.difference.invoke(x, y)
    }

    override fun error(): Double {
        return error
    }

}