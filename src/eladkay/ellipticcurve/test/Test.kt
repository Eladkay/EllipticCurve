package eladkay.ellipticcurve.test

import eladkay.ellipticcurve.gui.MainScreen
import eladkay.ellipticcurve.mathengine.EllipticCurve
import eladkay.ellipticcurve.mathengine.Field
import eladkay.ellipticcurve.mathengine.Vec2i
import eladkay.ellipticcurve.simulationengine.BezierSplines
import java.awt.EventQueue

fun main(args: Array<String>) {
    EventQueue.invokeLater(MainScreen::createAndShow)
//    EllipticCurve(-1.0, 1.0, Field.REALS) ({
//        println(getPeak2())
//    })
    /*BezierSplines.vertices.add(Vec2i(60, 60))
    BezierSplines.vertices.add(Vec2i(220, 300))
    BezierSplines.vertices.add(Vec2i(420, 300))
    BezierSplines.vertices.add(Vec2i(700, 240))
    BezierSplines.updateSplines()*/
}