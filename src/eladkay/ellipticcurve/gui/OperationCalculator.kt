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
import javax.swing.JOptionPane
import javax.swing.JSlider
import javax.swing.WindowConstants
import javax.swing.event.ChangeEvent
import kotlin.math.sign


object OperationCalculator : EllipticCurveWindow(getScreenSize()), MouseListener {

    var p1: Vec2i? = null
    var p2: Vec2i? = null

    override fun mouseReleased(e: MouseEvent?) {}

    override fun mouseEntered(e: MouseEvent?) {}

    override fun mouseExited(e: MouseEvent?) {}

    private fun modifyX(x: Number): Double = (x.toDouble() - panel.frameSize().x / 2 - EllipticSimulator.X_OFFSET) / EllipticSimulator.defaultXScale.toDouble()
    private fun modifyY(y: Number): Double = (-y.toDouble() + panel.frameSize().y / 2) / EllipticSimulator.defaultYScale.toDouble()
    override fun mousePressed(e: MouseEvent) {
        val x = e.x
        val y = e.y
        val xModified = modifyX(x)
        val yModified = modifyY(y)
        var condition = panel.curve.isPointOnCurve(Vec2d(xModified, yModified))
        val errorTerm = panel.errorFunction(xModified, yModified) * Math.sin(Math.PI / 4) // this can but should not be replaced with 1/sqrt2. todo: i forgot why
        if (!condition && panel.curve.difference(xModified + errorTerm, yModified + errorTerm).sign
                != panel.curve.difference(xModified - errorTerm, yModified - errorTerm).sign)
            condition = true;

        panel.changeColor(Color.GREEN)
        panel.changePointSize(5)
        if (condition) {
            if (p1 == null) {
                p1 = Vec2i(x, y)
                panel.drawPoint(Vec2i(x, y))
            } else if (p2 == null) {
                p2 = Vec2i(x, y)
                //panel.drawPoint(Vec2i(x, y))
                panel.drawLine(p1 as Vec2i, p2 as Vec2i, 3f)
                panel.changeColor(Color.RED)
                panel.drawPoint(p1 as Vec2i, 10)
                panel.drawPoint(p2 as Vec2i, 10)
                panel.changeColor(Color.BLUE)
                //val slope = MathHelper.slope(Vec2d(xModified, yModified), Vec2d(modifyX(p1!!.x), modifyY(p1!!.y)))
                //println(slope)
                val sum = panel.curve { Vec2d(xModified, yModified) + Vec2d(modifyX(p1!!.x), modifyY(p1!!.y)) }
                val max = EllipticSimulator.getMaxBoundsOfFrame(panel)
                val min = EllipticSimulator.getMinBoundsOfFrame(panel)
                println(max)
                println(min)
                if (sum.x > max.x && sum.x > min.x || sum.y > max.y && sum.y > min.y || sum.x < min.x && sum.x < max.x || sum.y < min.y && sum.y < max.y)
                    JOptionPane.showMessageDialog(null, "The result is out of bounds: ${sum.map { Math.round(it * 100) / 100.0 }}");
                else panel.drawPoint(Vec2i(EllipticSimulator.demodifyX(sum.x, panel), EllipticSimulator.demodifyY(sum.y, panel)), 15)
                println(Vec2i(EllipticSimulator.demodifyX(sum.x, panel), EllipticSimulator.demodifyY(sum.y, panel)))
                println(sum)

            } else {
                p1 = null
                p2 = null
            }
        }
        panel.changeColor(Color.BLACK)
        panel.changePointSize(3)
        panel.repaint()
    }

    override fun mouseClicked(e: MouseEvent) {}

    var panel = CurvePanel(Vec2i(size.x, size.y / 3), EllipticCurve(-1.0, 1.0, Field.REALS))
    val sliderA = JSlider(JSlider.HORIZONTAL, -5, 5, -1)
    val sliderB = JSlider(JSlider.HORIZONTAL, -5, 5, 1)
    val sliderScale = JSlider(JSlider.HORIZONTAL, 1, 10, 1)

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

        val toggleGridsAndTicks = JButton(+"gui.toggleGridsAndTicks")
        toggleGridsAndTicks.mnemonic = KeyEvent.VK_E
        toggleGridsAndTicks.actionCommand = "toggleGridsAndTicks"
        toggleGridsAndTicks.setBounds(MainScreen.size.x * 9 / 24, MainScreen.size.y * 7 / 8, 200, 40)
        toggleGridsAndTicks.addActionListener(OperationCalculator)
        add(toggleGridsAndTicks)

    }

    override fun actionPerformed(e: ActionEvent?) {
        super.actionPerformed(e!!)
        when (e.actionCommand) {
            "toggleGridsAndTicks" -> {
                // todo, somewhy this only works in one direction?
                panel.gridsAndTicks = !panel.gridsAndTicks
                panel.redraw()
            }
        }
    }

    override fun stateChanged(e: ChangeEvent?) {
        super.stateChanged(e!!)
        val slider = e.source as? JSlider
        panel.clear()
        if (slider?.valueIsAdjusting?.not() == true) {
            try {
                panel.curve = EllipticCurve(sliderA.value.toDouble(), sliderB.value.toDouble(), Field.REALS)
                EllipticSimulator.scale = sliderScale.value
            } catch (e: IllegalArgumentException) {
                JOptionPane.showMessageDialog(null, "Invalid elliptic curve!");
            }
            panel.redraw()
        }

    }


}