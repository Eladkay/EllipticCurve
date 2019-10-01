package eladkay.ellipticcurve.gui

import eladkay.ellipticcurve.mathengine.EllipticCurve
import eladkay.ellipticcurve.mathengine.Field
import eladkay.ellipticcurve.mathengine.Vec2d
import eladkay.ellipticcurve.mathengine.Vec2i
import eladkay.ellipticcurve.simulationengine.CurvePanel
import eladkay.ellipticcurve.simulationengine.EllipticSimulator
import java.awt.Color
import java.awt.Font
import java.awt.Font.BOLD
import java.awt.event.ActionEvent
import java.awt.event.KeyEvent
import java.awt.event.MouseEvent
import java.awt.event.MouseListener
import javax.swing.JButton
import javax.swing.JSlider
import javax.swing.WindowConstants
import javax.swing.event.ChangeEvent
import kotlin.math.sign


object OperationCalculator : EllipticCurveWindow(getScreenSize()), MouseListener {
    override fun mouseReleased(e: MouseEvent?) { }

    override fun mouseEntered(e: MouseEvent?) { }

    override fun mouseExited(e: MouseEvent?) { }

    override fun mousePressed(e: MouseEvent) {
        val x = e.x
        val y = e.y
        val xModified = (x - panel.frameSize().x / 2 - EllipticSimulator.X_OFFSET) / EllipticSimulator.defaultXScale.toDouble()
        val yModified = (-y + panel.frameSize().y / 2) / EllipticSimulator.defaultYScale.toDouble()
        var condition = panel.curve.isPointOnCurve(Vec2d(xModified, yModified))
        val errorTerm = panel.errorFunction(xModified, yModified)*Math.sin(Math.PI/4) // this can but should not be replaced with 1/sqrt2.
        if (!condition && panel.curve.difference(xModified + errorTerm, yModified + errorTerm).sign
                != panel.curve.difference(xModified - errorTerm, yModified - errorTerm).sign)
            condition = true;


        panel.changeColor(Color.GREEN)
        panel.changePointSize(5)
        if(condition) panel.drawPoint(Vec2i(x, y))
        panel.changeColor(Color.BLACK)
        panel.changePointSize(3)
        repaint()
    }

    override fun mouseClicked(e: MouseEvent) { }

    var panel = CurvePanel(Vec2i(size.x, size.y/3), EllipticCurve(-1.0, 1.0, Field.REALS))
    val sliderA = JSlider(JSlider.HORIZONTAL, -5, 5, -1)
    init {
        contentPane.add(panel)
        panel.addMouseListener(this)
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
        panel.clear()
        if(!slider.valueIsAdjusting) {
            panel.curve = EllipticCurve(slider.value.toDouble(), 1.0, Field.REALS)
            panel.repaint()
        }
    }

    /*override fun actionPerformed(e: ActionEvent?) {
        super.actionPerformed(e!!)
        when (e.actionCommand) {
            "update" -> {
                remove(panel)
                panel = CurvePanel(Vec2i(size.x, size.y/3), EllipticCurve(sliderA.value.toDouble(), 1.0, Field.REALS))
                add(panel)
            }
        }
    }*/


}