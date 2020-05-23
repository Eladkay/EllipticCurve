package eladkay.ellipticcurve.test

import eladkay.ellipticcurve.gui.EllipticCurveWindow
import eladkay.ellipticcurve.mathengine.othercurves.GeneralCurve
import eladkay.ellipticcurve.simulationengine.OtherCurvesPanel
import java.awt.EventQueue
import javax.swing.WindowConstants

fun main(args: Array<String>) {
    val viewer = EllipticCurveWindow(EllipticCurveWindow.getScreenSize())
    //val curve = GeneralCurve(0.00421113479299) { x, y -> y-5*Math.sin(5*x) }
    //var curve = GeneralCurve(0.04121113479299) { x, y -> y-x*x }
    var curve = GeneralCurve(0.05) { x, y -> Math.pow(x, y) - Math.pow(y, x) }
    val panel = OtherCurvesPanel(viewer.size, curve)

    viewer.contentPane.add(panel)
    viewer.defaultCloseOperation = WindowConstants.DISPOSE_ON_CLOSE
    viewer.isResizable = true
    EventQueue.invokeLater(viewer::createAndShow)
//    Thread {
//        while(true) {
//            curve = GeneralCurve(0.04121113479299) { x, y -> y - x * x * sin(System.currentTimeMillis().toDouble()) }
//            panel.curveRepresented = curve
//            Thread.sleep(100)
//            panel.redraw()
//        }
//    }.start()

}