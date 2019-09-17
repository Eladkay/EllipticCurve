package eladkay.ellipticcurve.gui

import javax.swing.JFrame

@Suppress("LeakingThis") // it's fine, trust me
open class EllipticCurveWindow(val xSize: Int, val ySize: Int) : JFrame() {
    init {
        title = +"gui.${javaClass.simpleName.toLowerCase()}"
        defaultCloseOperation = JFrame.EXIT_ON_CLOSE
        setSize(xSize, ySize)
        setLocationRelativeTo(null)
    }
    fun createAndShow() {
        isVisible = true
    }
}