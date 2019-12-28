package eladkay.ellipticcurve.gui

import javax.swing.JTextArea

class InformationalScreen(val string: String, nm: String = +"gui.informationalscreen") : EllipticCurveWindow((EllipticCurveWindow.getScreenSize() / 4.5).vec2i()) {
    val textbox = JTextArea(string)
    init {
        this.title = nm
        textbox.isEditable = false
        textbox.lineWrap = true
        textbox.size = this.getSize()
        add(textbox)
    }
}