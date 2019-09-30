package eladkay.ellipticcurve.gui

import eladkay.ellipticcurve.mathengine.Vec2i
import java.awt.Toolkit
import java.awt.event.ActionEvent
import java.awt.event.ActionListener
import javax.swing.JFrame
import javax.swing.event.ChangeEvent
import javax.swing.event.ChangeListener

@Suppress("LeakingThis") // it's fine, trust me
open class EllipticCurveWindow(xSize: Int, ySize: Int) : JFrame(), ActionListener, ChangeListener {
    override fun stateChanged(e: ChangeEvent?) {

    }

    override fun actionPerformed(e: ActionEvent?) {

    }

    internal val size = Vec2i(xSize, ySize)

    constructor(size: Vec2i) : this(size.x, size.y)
    constructor() : this((getScreenSize() * 2) / 3)

    init {
        title = +"gui.${javaClass.simpleName.toLowerCase()}"
        defaultCloseOperation = JFrame.EXIT_ON_CLOSE
        setSize(xSize, ySize)
        setLocationRelativeTo(null)
        isResizable = false
        layout = null
    }

    open fun createAndShow() {
        isVisible = true
    }

    companion object {
        fun getScreenSize(): Vec2i {
            val size = Toolkit.getDefaultToolkit().screenSize
            return Vec2i(size.width, size.height)
        }
    }
}