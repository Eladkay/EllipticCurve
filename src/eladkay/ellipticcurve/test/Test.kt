package eladkay.ellipticcurve.test

import eladkay.ellipticcurve.gui.MainScreen
import eladkay.ellipticcurve.mathengine.EllipticCurve
import eladkay.ellipticcurve.mathengine.Field
import eladkay.ellipticcurve.mathengine.Vec2d
import java.awt.EventQueue

fun main(args: Array<String>) {
    EventQueue.invokeLater(MainScreen::createAndShow)
    val z17 = Field.createModuloField(17)
    z17 {
        println(!5.0+!13.0)
        /*val curve = EllipticCurve(16.0, 1.0, z17)
        val p1 = Vec2d(3, 5, z17)
        val p2 = Vec2d(0, 1, z17)
        curve {
            println(p1 + p2)
        }*/
    }
}