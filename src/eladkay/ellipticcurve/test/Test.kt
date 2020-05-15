package eladkay.ellipticcurve.test

import eladkay.ellipticcurve.gui.EllipticCurveWindow
import eladkay.ellipticcurve.mathengine.Vec2d
import eladkay.ellipticcurve.mathengine.othercurves.Ellipse
import eladkay.ellipticcurve.simulationengine.OtherCurvesPanel
import java.awt.EventQueue
import javax.swing.WindowConstants

fun main(args: Array<String>) {
    val viewer = EllipticCurveWindow(EllipticCurveWindow.getScreenSize())
    val panel = OtherCurvesPanel(viewer.size, Ellipse(1.0, 10.0, Vec2d(2.0, 0)))

    viewer.contentPane.add(panel)
    viewer.defaultCloseOperation = WindowConstants.DISPOSE_ON_CLOSE
    viewer.isResizable = true
    EventQueue.invokeLater(viewer::createAndShow)

}