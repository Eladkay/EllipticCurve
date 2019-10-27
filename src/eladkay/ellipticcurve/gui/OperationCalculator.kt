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
import javax.swing.*
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

    var panel = CurvePanel(Vec2i(size.x, size.y/* / 3*/), EllipticCurve(-1.0, 1.0, Field.REALS))

    init {
        contentPane.add(panel)
        panel.addMouseListener(this)
        defaultCloseOperation = WindowConstants.DISPOSE_ON_CLOSE
        isResizable = true

        val menuBar = JMenuBar()

        val menuCurve = JMenu(+"gui.operationcalculator.curve")
        menuCurve.mnemonic = KeyEvent.VK_C

        val changeCurve = JMenuItem(+"gui.operationcalculator.curve.changecurve", KeyEvent.VK_C)
        changeCurve.addActionListener(this)
        changeCurve.actionCommand = "changecurve"
        menuCurve.add(changeCurve)

        val changeField = JMenu(+"gui.operationcalculator.curve.changefield")
        changeField.addActionListener(this)
        changeField.actionCommand = "changefield"
        val realsField = JMenuItem(+"fields.reals")
        changeField.addActionListener(this)
        changeField.actionCommand = "changefield_reals"
        changeField.add(realsField)
        val finiteField = JMenuItem(+"gui.operationcalculator.curve.changetozp")
        changeField.addActionListener(this)
        changeField.actionCommand = "changefield_zp"
        changeField.add(finiteField)
        menuCurve.add(changeField)

        val menuFile = JMenu(+"gui.operationcalculator.file")
        menuCurve.mnemonic = KeyEvent.VK_F

        val menuVisualization = JMenu(+"gui.operationcalculator.visualization")
        menuCurve.mnemonic = KeyEvent.VK_V

        val menuOperation = JMenu(+"gui.operationcalculator.operation")
        menuCurve.mnemonic = KeyEvent.VK_O

        menuBar.add(menuFile)
        menuBar.add(menuCurve)
        menuBar.add(menuVisualization)
        menuBar.add(menuOperation)
        jMenuBar = menuBar

    }

    override fun actionPerformed(e: ActionEvent?) {
        super.actionPerformed(e!!)
        when (e.actionCommand) {

        }
    }



}