package eladkay.ellipticcurve.gui

import eladkay.ellipticcurve.mathengine.EllipticCurve
import eladkay.ellipticcurve.mathengine.Field
import eladkay.ellipticcurve.mathengine.Vec2i
import eladkay.ellipticcurve.simulationengine.CurvePanel
import java.awt.Font
import java.awt.Font.BOLD
import java.awt.event.ActionEvent
import java.awt.event.KeyEvent
import javax.swing.JButton
import javax.swing.JSlider
import javax.swing.WindowConstants
import javax.swing.event.ChangeEvent


object OperationCalculator : EllipticCurveWindow(getScreenSize()) {

    var panel = CurvePanel(Vec2i(size.x, size.y/3), EllipticCurve(-1.0, 1.0, Field.REALS))
    val sliderA = JSlider(JSlider.HORIZONTAL, -5, 5, -1)
    init {
        contentPane.add(panel)
        defaultCloseOperation = WindowConstants.DISPOSE_ON_CLOSE
        isResizable = true

        sliderA.setBounds(size.x * 40 / 81, size.y * 5 / 8, 400, 40)
        sliderA.majorTickSpacing = 1
        sliderA.paintLabels = true
        sliderA.paintTicks = true
        val font = Font("Serif", BOLD, 15)
        sliderA.font = font
        sliderA.addChangeListener(this)
        add(sliderA)

        val update = JButton("update")
        update.mnemonic = KeyEvent.VK_S
        update.actionCommand = "update"
        update.setBounds(size.x * 2 / 3, size.y * 7 / 8, 200, 40)
        update.addActionListener(this)
        add(update)
    }

    override fun stateChanged(e: ChangeEvent?) {
        super.stateChanged(e!!)
        val slider = e.source as JSlider
        if(!slider.valueIsAdjusting) panel.curve = EllipticCurve(slider.value.toDouble(), 1.0, Field.REALS)
    }

    override fun actionPerformed(e: ActionEvent?) {
        super.actionPerformed(e!!)
        when (e.actionCommand) {
            "update" -> {
                remove(panel)
                panel = CurvePanel(Vec2i(size.x, size.y/3), EllipticCurve(sliderA.value.toDouble(), 1.0, Field.REALS))
                add(panel)
            }
        }
    }


}