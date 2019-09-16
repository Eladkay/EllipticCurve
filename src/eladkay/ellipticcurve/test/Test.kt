package eladkay.ellipticcurve.test

import eladkay.ellipticcurve.mathengine.EllipticCurve
import eladkay.ellipticcurve.mathengine.EllipticCurveHelper
import eladkay.ellipticcurve.mathengine.Field
import eladkay.ellipticcurve.mathengine.Point

fun main(args: Array<String>) {
    val curve = EllipticCurve(-1.0, 1.0, Field.REALS)
    val helper = EllipticCurveHelper(curve)
    val p1 = Point(0, 1)
    val p2 = Point(0, -1)
    println(helper.add(p1, p2))
}