package eladkay.ellipticcurve.test

import eladkay.ellipticcurve.mathengine.EllipticCurve
import eladkay.ellipticcurve.mathengine.EllipticCurveHelper
import eladkay.ellipticcurve.mathengine.Field
import eladkay.ellipticcurve.mathengine.Point

fun main(args: Array<String>) {
    val z17 = Field.createModuloField(17)
    z17 {
        val curve = EllipticCurve(16.0, 1.0, z17)
        val p1 = Point(3, 5, z17)
        val p2 = Point(0, 1, z17)
        curve {
            println(p1 + p2)
        }
    }
}