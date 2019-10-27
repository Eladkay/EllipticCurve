package eladkay.ellipticcurve.gui

import eladkay.ellipticcurve.mathengine.*
import eladkay.ellipticcurve.simulationengine.CurvePanel
import eladkay.ellipticcurve.simulationengine.EllipticSimulator
import java.awt.Color
import java.awt.Font
import java.awt.Font.BOLD
import java.awt.event.*
import java.io.File
import javax.swing.*
import javax.swing.event.ChangeEvent
import kotlin.math.sign
import javax.swing.JFrame
import javax.swing.filechooser.FileFilter
import javax.swing.filechooser.FileNameExtensionFilter


object OperationCalculator : EllipticCurveWindow(getScreenSize()), MouseListener {

    var p1: Vec2i? = null
    var p2: Vec2i? = null

    override fun mouseReleased(e: MouseEvent?) {}

    override fun mouseEntered(e: MouseEvent?) {}

    override fun mouseExited(e: MouseEvent?) {}

    override fun createAndShow() {
        super.createAndShow()
        extendedState = extendedState or JFrame.MAXIMIZED_BOTH

    }

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
    val checkboxGridsAndTicks = JCheckBox(+"gui.operationcalculator.gridsandticks")
    val fc = JFileChooser()
    init {
        contentPane.add(panel)
        panel.addMouseListener(this)
        defaultCloseOperation = WindowConstants.DISPOSE_ON_CLOSE
        isResizable = true

        fc.fileFilter = FileNameExtensionFilter("Elliptic curve files", "curve")

        val menuBar = JMenuBar()

        val menuCurve = JMenu(+"gui.operationcalculator.curve")
        menuCurve.mnemonic = KeyEvent.VK_C

        val changeCurve = JMenuItem(+"gui.operationcalculator.curve.changecurve", KeyEvent.VK_C)
        changeCurve.addActionListener(this)
        changeCurve.actionCommand = "changecurve"
        menuCurve.add(changeCurve)

        val changeField = JMenu(+"gui.operationcalculator.curve.changefield")
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
        menuFile.mnemonic = KeyEvent.VK_F

        val saveCurve = JMenuItem(+"gui.operationcalculator.file.savecurve")
        saveCurve.addActionListener(this)
        saveCurve.actionCommand = "savecurve"
        menuFile.add(saveCurve)

        val openCurve = JMenuItem(+"gui.operationcalculator.file.opencurve")
        openCurve.addActionListener(this)
        openCurve.actionCommand = "opencurve"
        menuFile.add(openCurve)

        val exit = JMenuItem(+"gui.operationcalculator.file.exit")
        exit.addActionListener(this)
        exit.actionCommand = "exit"
        menuFile.add(exit)

        val menuVisualization = JMenu(+"gui.operationcalculator.visualization")
        menuVisualization.mnemonic = KeyEvent.VK_V

        val changeScale = JMenuItem(+"gui.operationcalculator.changescale")
        changeScale.addActionListener(this)
        changeScale.actionCommand = "changescale"
        changeScale.mnemonic = KeyEvent.VK_S
        menuVisualization.add(changeScale)

        val clear = JMenuItem(+"gui.operationcalculator.clear")
        clear.addActionListener(this)
        clear.actionCommand = "clear"
        clear.mnemonic = KeyEvent.VK_R
        menuVisualization.add(clear)

        checkboxGridsAndTicks.addItemListener(this)
        checkboxGridsAndTicks.mnemonic = KeyEvent.VK_G
        checkboxGridsAndTicks.isSelected = false
        menuVisualization.add(checkboxGridsAndTicks)

        val menuOperation = JMenu(+"gui.operationcalculator.operation")
        menuOperation.mnemonic = KeyEvent.VK_O

        menuBar.add(menuFile)
        menuBar.add(menuCurve)
        menuBar.add(menuVisualization)
        menuBar.add(menuOperation)
        jMenuBar = menuBar

    }
    override fun actionPerformed(e: ActionEvent?) {
        super.actionPerformed(e!!)
        when (e.actionCommand) {
            "changecurve" -> CurveChanger.createAndShow()
            "changescale" -> ScaleChanger.createAndShow()
            "clear" -> {
                panel.clear()
                panel.redraw()
            }
            "savecurve" -> {
                val ret = fc.showSaveDialog(this)
                if(ret == JFileChooser.APPROVE_OPTION) {
                    val fileSelected = fc.selectedFile
                    val file = File(fileSelected.absolutePath + ".curve")
                    file.createNewFile()
                    file.writeText(serializeCurveFrame(panel))
                }
            }
            "opencurve" -> {
                val ret = fc.showOpenDialog(this)
                if(ret == JFileChooser.APPROVE_OPTION) {
                    val file = fc.selectedFile
                    panel.curve = deserializeCurveFrame(file.readText())
                    panel.redraw()
                    ScaleChanger.sliderScale.value = EllipticSimulator.scale
                    CurveChanger.sliderA.value = panel.curve.aValue.toInt()
                    CurveChanger.sliderB.value = panel.curve.bValue.toInt()
                }
            }
            "exit" -> this.isVisible = false
        }
    }

    override fun itemStateChanged(e: ItemEvent?) {
        val source = e!!.itemSelectable
        if(source == checkboxGridsAndTicks) {
            panel.gridsAndTicks = !panel.gridsAndTicks
            panel.redraw()
            if(e.stateChange == ItemEvent.DESELECTED) panel.clear()
        }
        super.itemStateChanged(e)
    }

    private object ScaleChanger : EllipticCurveWindow((EllipticCurveWindow.getScreenSize()/4.5).vec2i()) {

        val sliderScale = JSlider(JSlider.HORIZONTAL, 1, 10, 1)
        val labelA = JLabel(+"gui.scalechanger.scale")
        init {
            val font = Font("Serif", BOLD, 18)
            sliderScale.setBounds(size.x * 1 / 2 - 200, size.y * 5 / 16, 400, 40)
            sliderScale.majorTickSpacing = 1
            sliderScale.paintLabels = true
            sliderScale.paintTicks = true
            sliderScale.font = font
            sliderScale.addChangeListener(this)
            labelA.setBounds(size.x * 1 / 2 - 18, 0, 80, 30)
            labelA.verticalTextPosition = JLabel.TOP
            labelA.font = font
            labelA.isVisible = true
            labelA.isOpaque = true
            add(labelA)
            add(sliderScale)
        }

        override fun stateChanged(e: ChangeEvent?) {
            super.stateChanged(e!!)
            val slider = e.source as? JSlider
            panel.clear()
            if (slider?.valueIsAdjusting?.not() == true) {
                try {
                    EllipticSimulator.scale = sliderScale.value
                } catch (e: IllegalArgumentException) {
                    JOptionPane.showMessageDialog(null, "Invalid elliptic curve!");
                }
                panel.redraw()
            }

        }
    }

    private object CurveChanger : EllipticCurveWindow((EllipticCurveWindow.getScreenSize()/4.5).vec2i()) {
        val sliderA = JSlider(JSlider.HORIZONTAL, -5, 5, -1)
        val sliderB = JSlider(JSlider.HORIZONTAL, -5, 5, 1)
        val labelA = JLabel("a")
        val labelB = JLabel("b", JLabel.CENTER)
        init {
            val font = Font("Serif", BOLD, 18)

            sliderA.setBounds(size.x * 1 / 2 - 200, size.y * 1 / 8, 400, 40)
            sliderA.majorTickSpacing = 1
            sliderA.paintLabels = true
            sliderA.paintTicks = true
            sliderA.font = font
            sliderA.toolTipText = "a value for curve"
            sliderA.addChangeListener(this)
            sliderA.isOpaque = false
            labelA.setBounds(size.x * 1 / 2, 0, 20, 30)
            labelA.verticalTextPosition = JLabel.TOP
            labelA.font = font
            labelA.isVisible = true
            labelA.isOpaque = true
            add(labelA)
            add(sliderA)

            sliderB.setBounds(size.x * 1 / 2 - 200, size.y * 4 / 8, 400, 40)
            sliderB.majorTickSpacing = 1
            sliderB.paintLabels = true
            sliderB.paintTicks = true
            sliderB.font = font
            sliderB.toolTipText = "b value for curve"
            sliderB.addChangeListener(this)
            sliderB.isOpaque = false
            labelB.setBounds(size.x * 1 / 2, size.y * 3 / 8, 20, 30)
            labelB.font = font
            labelB.isVisible = true
            labelB.isOpaque = true
            add(labelB)
            add(sliderB)
        }
        override fun stateChanged(e: ChangeEvent?) {
            super.stateChanged(e!!)
            val slider = e.source as? JSlider
            panel.clear()
            if (slider?.valueIsAdjusting?.not() == true) {
                try {
                    panel.curve = EllipticCurve(sliderA.value.toDouble(), sliderB.value.toDouble(), Field.REALS)
                } catch (e: IllegalArgumentException) {
                    JOptionPane.showMessageDialog(null, "Invalid elliptic curve!");
                }
                panel.redraw()
            }

        }
    }



}