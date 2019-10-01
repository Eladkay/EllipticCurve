package eladkay.ellipticcurve.gui

import eladkay.ellipticcurve.mathengine.*
import eladkay.ellipticcurve.simulationengine.CurvePanel
import eladkay.ellipticcurve.simulationengine.EllipticSimulator
import java.awt.Color
import java.awt.Font
import java.awt.Font.BOLD
import java.awt.event.*
import javax.swing.*
import javax.swing.event.ChangeEvent
import kotlin.math.sign


object OperationCalculator : EllipticCurveWindow(getScreenSize()), MouseListener, ItemListener {

    var p1: Vec2i? = null
    var p2: Vec2i? = null

    override fun mouseReleased(e: MouseEvent?) { }

    override fun mouseEntered(e: MouseEvent?) { }

    override fun mouseExited(e: MouseEvent?) { }

    private fun modifyX(x: Number): Double = (x.toDouble() - panel.frameSize().x / 2 - EllipticSimulator.X_OFFSET) / EllipticSimulator.defaultXScale.toDouble()
    private fun modifyY(y: Number): Double = (-y.toDouble() + panel.frameSize().y / 2) / EllipticSimulator.defaultYScale.toDouble()
    override fun mousePressed(e: MouseEvent) {
        val x = e.x
        val y = e.y
        val xModified = modifyX(x)
        val yModified = modifyY(y)
        var condition = panel.curve.isPointOnCurve(Vec2d(xModified, yModified))
        val errorTerm = panel.errorFunction(xModified, yModified)*Math.sin(Math.PI/4) // this can but should not be replaced with 1/sqrt2.
        if (!condition && panel.curve.difference(xModified + errorTerm, yModified + errorTerm).sign
                != panel.curve.difference(xModified - errorTerm, yModified - errorTerm).sign)
            condition = true;

        panel.changeColor(Color.GREEN)
        panel.changePointSize(5)
        if(condition) {
            if(p1 == null) {
                p1 = Vec2i(x, y)
                panel.drawPoint(Vec2i(x, y))
            } else if(p2 == null) {
                p2 = Vec2i(x, y)
                panel.drawPoint(Vec2i(x, y))
                panel.drawLine(p1!!, p2!!)
                val slope = MathHelper.slope(Vec2d(xModified, yModified), Vec2d(modifyX(p1!!.x), modifyY(p1!!.y)))
                println(slope)
                val sum = panel.curve { Vec2d(xModified, yModified) + Vec2d(modifyX(p1!!.x), modifyY(p1!!.y)) }
                println(Vec2i(EllipticSimulator.demodifyX(sum.x, panel), EllipticSimulator.demodifyX(sum.y, panel)))
                panel.drawPoint(Vec2i(EllipticSimulator.demodifyX(sum.x, panel), EllipticSimulator.demodifyX(sum.y, panel)))
            } else {
                p1 = null
                p2 = null
            }
        }
        panel.changeColor(Color.BLACK)
        panel.changePointSize(3)
        panel.repaint()
    }

    override fun mouseClicked(e: MouseEvent) { }

    var panel = CurvePanel(Vec2i(size.x, size.y/3), EllipticCurve(-1.0, 1.0, Field.REALS))
    val sliderA = JSlider(JSlider.HORIZONTAL, -5, 5, -1)
    val sliderB = JSlider(JSlider.HORIZONTAL, -5, 5, 1)
    val sliderScale = JSlider(JSlider.HORIZONTAL, 1, 10, 1)
    val gridsAndTicksCheckbox = JCheckBox()
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

        sliderB.setBounds(size.x * 40 / 81, size.y * 6 / 8, 400, 40)
        sliderB.majorTickSpacing = 1
        sliderB.paintLabels = true
        sliderB.paintTicks = true
        sliderB.font = font
        sliderB.addChangeListener(this)
        add(sliderB)

        sliderScale.setBounds(size.x * 40 / 81, size.y * 7 / 8, 400, 40)
        sliderScale.majorTickSpacing = 1
        sliderScale.paintLabels = true
        sliderScale.paintTicks = true
        sliderScale.font = font
        sliderScale.addChangeListener(this)
        add(sliderScale)

        gridsAndTicksCheckbox.setBounds(size.x * 35 / 81, size.y * 7 / 8, 40, 40)
        gridsAndTicksCheckbox.addItemListener(this)
        add(gridsAndTicksCheckbox)

    }

    override fun stateChanged(e: ChangeEvent?) {
        super.stateChanged(e!!)
        val slider = e.source as? JSlider
        panel.clear()
        if(slider?.valueIsAdjusting?.not() ?: false) {
            try {
                panel.curve = EllipticCurve(sliderA.value.toDouble(), sliderB.value.toDouble(), Field.REALS)
                EllipticSimulator.scale = sliderScale.value
            } catch(e: IllegalArgumentException) {
                JOptionPane.showMessageDialog(null, "Invalid elliptic curve!");
            }
            panel.repaint()
        }

    }

    override fun itemStateChanged(e: ItemEvent?) {
        panel.gridsAndTicks = gridsAndTicksCheckbox.isSelected
        panel.repaint()
    }



}