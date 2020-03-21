package eladkay.ellipticcurve.gui

import eladkay.ellipticcurve.mathengine.Vec2i
import java.awt.event.ComponentAdapter
import java.awt.event.ComponentEvent
import javax.swing.JTextArea

class InformationalScreen(val string: String, resizable: Boolean = false, nm: String = +"gui.informationalscreen") : EllipticCurveWindow((EllipticCurveWindow.getScreenSize() / 4.5).vec2i()) {
    val textbox = JTextArea(string)

    init {
        this.title = nm
        textbox.isEditable = false
        textbox.lineWrap = true
        textbox.size = this.getSize()
        isResizable = resizable

        add(textbox)
        addComponentListener(object : ComponentAdapter() {
            override fun componentResized(e: ComponentEvent?) {
                textbox.size = this@InformationalScreen.getSize()
            }
        })
    }

    override fun setSize(vec2i: Vec2i) {
        super.setSize(vec2i)
        textbox.setSize(vec2i.x, vec2i.y)
    }


}