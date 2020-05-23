package eladkay.ellipticcurve.mathengine.othercurves

import eladkay.ellipticcurve.mathengine.Curve
import eladkay.ellipticcurve.mathengine.Vec2d

open class Ellipse(val radius1: Double, val radius2: Double, val center: Vec2d) : Curve {

    override fun difference(x: Double, y: Double): Double {
        return Math.pow((x - center.x)/radius1, 2.0) + Math.pow((y - center.y)/radius2, 2.0) - 1.0
    }

}