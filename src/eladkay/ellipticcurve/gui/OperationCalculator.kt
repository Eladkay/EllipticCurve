package eladkay.ellipticcurve.gui

import eladkay.ellipticcurve.mathengine.*
import eladkay.ellipticcurve.simulationengine.CurveFrame
import eladkay.ellipticcurve.simulationengine.CurvePanel
import eladkay.ellipticcurve.simulationengine.EllipticSimulator
import java.awt.Color
import java.awt.Font
import java.awt.Font.BOLD
import java.awt.Toolkit
import java.awt.datatransfer.StringSelection
import java.awt.event.*
import java.io.File
import javax.swing.*
import javax.swing.event.ChangeEvent
import javax.swing.filechooser.FileNameExtensionFilter
import kotlin.math.sign


object OperationCalculator : EllipticCurveWindow(getScreenSize()), MouseListener, MouseMotionListener {

    override fun mouseDragged(e: MouseEvent?) {}

    override fun mouseMoved(e: MouseEvent?) {
        e!!
        val x = e.x
        val y = e.y
        if (drawPtLocs) {
            panel.clearPointLines()
            panel.changeColor(Color.ORANGE)
            panel.addPointLines(Vec2i(x, y))
            panel.drawPointLineText(Vec2i(x + 5, y), "(${Math.round(100.0 * modifyX(x)) / 100.0}, ${Math.round(100.0 * modifyY(y)) / 100.0})")
            panel.repaint()
        }
    }

    override fun mouseReleased(e: MouseEvent?) {}

    override fun mouseEntered(e: MouseEvent?) {}

    override fun mouseExited(e: MouseEvent?) {}

    override fun createAndShow() {
        super.createAndShow()
        extendedState = extendedState or JFrame.MAXIMIZED_BOTH

    }

    private fun modifyX(x: Number): Double {
        if(panel.curve !is FiniteEllipticCurve) return (x.toDouble() - panel.frameSize().x / 2 - EllipticSimulator.X_OFFSET) / EllipticSimulator.defaultXScale.toDouble()
        @Suppress("NAME_SHADOWING")
        val x = x.toInt()
        val ellipticCurve = panel.curve as FiniteEllipticCurve
        val modulus = ellipticCurve.modulus
        return (x - 10) * modulus / (panel.frameSize().x - 10).toDouble()
    }
    private fun modifyY(y: Number): Double {
        if(panel.curve !is FiniteEllipticCurve) return (-y.toDouble() + panel.frameSize().y / 2) / EllipticSimulator.defaultYScale.toDouble()
        @Suppress("NAME_SHADOWING")
        val y = y.toInt()
        val ellipticCurve = panel.curve as FiniteEllipticCurve
        val modulus = ellipticCurve.modulus
        return (y + 100 - panel.frameSize().y) * modulus / (100 - panel.frameSize().y).toDouble()
    }
    override fun mousePressed(e: MouseEvent) {
        val x = e.x
        val y = e.y
        val xModified = modifyX(x)
        val yModified = modifyY(y)
        var condition = panel.curve.isPointOnCurve(Vec2d(xModified, yModified))
        val errorTerm = panel.errorFunction(xModified, yModified)
        if (!condition && panel.curve.difference(xModified + errorTerm, yModified + errorTerm).sign
                != panel.curve.difference(xModified - errorTerm, yModified - errorTerm).sign)
            condition = true

        panel.changeColor(Color.GREEN)
        panel.changePointSize(5)
        if (condition) {
            if (p1 == null || !autoAdd) {
                p1 = Vec2i(x, y)
                p1modified = Vec2d(modifyX(x), modifyY(y))
                panel.drawPoint(Vec2i(x, y))
            } else if (p2 == null) {
                p2 = Vec2i(x, y)

                panel.drawLine(p1 as Vec2i, p2 as Vec2i, 3f)
                panel.changeColor(Color.RED)
                panel.drawPoint(p1 as Vec2i, 10)
                panel.drawPoint(p2 as Vec2i, 10)
                panel.changeColor(Color.BLUE)

                val sum = panel.curve { Vec2d(xModified, yModified) + Vec2d(modifyX(p1!!.x), modifyY(p1!!.y)) }
                val max = EllipticSimulator.getMaxBoundsOfFrame(panel)
                val min = EllipticSimulator.getMinBoundsOfFrame(panel)

                if (sum.x > max.x && sum.x > min.x || sum.y > max.y && sum.y > min.y || sum.x < min.x && sum.x < max.x || sum.y < min.y && sum.y < max.y)
                    JOptionPane.showMessageDialog(null, +"gui.outofbounds" + sum.map { Math.round(it * 100) / 100.0 }.toString())
                else panel.drawPoint(Vec2i(EllipticSimulator.demodifyX(sum.x, panel), EllipticSimulator.demodifyY(sum.y, panel)), 15)

                p1 = null
                p1modified = null
                p2 = null

            }
        }
        panel.changeColor(Color.BLACK)
        panel.changePointSize(3)
        panel.repaint()
    }

    override fun mouseClicked(e: MouseEvent) {}

    override fun updateTextForI18n() {
        super.updateTextForI18n()
        checkboxGridsAndTicks.text = +"gui.operationcalculator.gridsandticks"
        checkboxPtLoc.text = +"gui.operationcalculator.checkboxPtLoc"
        checkboxAutoadd.text = +"gui.operationcalculator.checkboxAutoadd"
        checkboxLineOfSymmetry.text = +"gui.operationcalculator.checkboxLineOfSymmetry"

        menuFile.text = +"gui.operationcalculator.file"
        saveCurve.text = +"gui.operationcalculator.file.savecurve"
        openCurve.text = +"gui.operationcalculator.file.opencurve"
        exit.text = +"gui.operationcalculator.file.exit"

        menuCurve.text = +"gui.operationcalculator.curve"
        changeCurve.text = +"gui.operationcalculator.curve.changecurve"
        changeField.text = +"gui.operationcalculator.curve.changefield"
        realsField.text = +"fields.reals"
        finiteField.text = +"gui.operationcalculator.curve.changetozp"

        menuVisualization.text = +"gui.operationcalculator.visualization"
        changeScale.text = +"gui.operationcalculator.changescale"
        clear.text = +"gui.operationcalculator.clear"

        menuOperation.text = +"gui.operationcalculator.operation"
        mult.text = +"gui.operationcalculator.mult"
        flip.text = +"gui.operationcalculator.flip"
        select.text = +"gui.operationcalculator.selectpt"

    }

    var panel = CurvePanel(Vec2i(size.x, size.y), EllipticCurve(-1L, 1L, MathHelper.REALS))
    private val checkboxGridsAndTicks = JCheckBox(+"gui.operationcalculator.gridsandticks")
    private val checkboxPtLoc = JCheckBox(+"gui.operationcalculator.checkboxPtLoc")
    private val checkboxAutoadd = JCheckBox(+"gui.operationcalculator.checkboxAutoadd")
    private val checkboxLineOfSymmetry = JCheckBox(+"gui.operationcalculator.checkboxLineOfSymmetry")

    private val fc = JFileChooser()
    private var drawPtLocs: Boolean = false
    var autoAdd: Boolean = false
    var p1: Vec2i? = null
    private var p1modified: Vec2d? = null
    var p2: Vec2i? = null

    init {
        contentPane.add(panel)
        panel.addMouseListener(this)
        panel.addMouseMotionListener(this)
        defaultCloseOperation = WindowConstants.DISPOSE_ON_CLOSE
        isResizable = true


        val menuBar = JMenuBar()

        menuBar.add(getFileMenu())
        menuBar.add(getCurveMenu())
        menuBar.add(getVisualizationMenu())
        menuBar.add(getOperationMenu())
        jMenuBar = menuBar

    }

    private lateinit var menuFile: JMenu
    private lateinit var saveCurve: JMenuItem
    private lateinit var openCurve: JMenuItem
    private lateinit var exit: JMenuItem
    private fun getFileMenu(): JMenu {
        menuFile = JMenu(+"gui.operationcalculator.file")
        saveCurve = JMenuItem(+"gui.operationcalculator.file.savecurve")
        openCurve = JMenuItem(+"gui.operationcalculator.file.opencurve")
        exit = JMenuItem(+"gui.operationcalculator.file.exit")

        menuFile.mnemonic = KeyEvent.VK_F

        saveCurve.addActionListener(this)
        saveCurve.actionCommand = "savecurve"
        menuFile.add(saveCurve)

        openCurve.addActionListener(this)
        openCurve.actionCommand = "opencurve"
        menuFile.add(openCurve)

        exit.addActionListener(this)
        exit.actionCommand = "exit"
        menuFile.add(exit)

        fc.fileFilter = FileNameExtensionFilter("Elliptic curve files", "curve")
        return menuFile
    }

    private lateinit var menuCurve: JMenu
    private lateinit var changeCurve: JMenuItem
    private lateinit var changeField: JMenuItem
    private lateinit var realsField: JMenuItem
    private lateinit var finiteField: JMenuItem
    private fun getCurveMenu(): JMenu {
        menuCurve = JMenu(+"gui.operationcalculator.curve")
        changeCurve = JMenuItem(+"gui.operationcalculator.curve.changecurve")
        changeField = JMenu(+"gui.operationcalculator.curve.changefield")
        realsField = JMenuItem(+"fields.reals")
        finiteField = JMenuItem(+"gui.operationcalculator.curve.changetozp")

        menuCurve.mnemonic = KeyEvent.VK_C

        changeCurve.addActionListener(this)
        changeCurve.actionCommand = "changecurve"
        menuCurve.add(changeCurve)

        realsField.addActionListener(this)
        realsField.actionCommand = "changefield_reals"
        changeField.add(realsField)
        finiteField.addActionListener(this)
        finiteField.actionCommand = "changefield_zp"
        changeField.add(finiteField)
        menuCurve.add(changeField)
        return menuCurve
    }

    private lateinit var menuVisualization: JMenu
    private lateinit var changeScale: JMenuItem
    private lateinit var clear: JMenuItem
    private lateinit var showPointInfo: JMenuItem
    private fun getVisualizationMenu(): JMenu {
        menuVisualization = JMenu(+"gui.operationcalculator.visualization")
        changeScale = JMenuItem(+"gui.operationcalculator.changescale")
        clear = JMenuItem(+"gui.operationcalculator.clear")
        showPointInfo = JMenuItem(+"gui.operationcalculator.pointinfo")

        menuVisualization.mnemonic = KeyEvent.VK_V

        changeScale.addActionListener(this)
        changeScale.actionCommand = "changescale"
        changeScale.mnemonic = KeyEvent.VK_S
        menuVisualization.add(changeScale)

        clear.addActionListener(this)
        clear.actionCommand = "clear"
        clear.mnemonic = KeyEvent.VK_R
        menuVisualization.add(clear)

        checkboxGridsAndTicks.addItemListener(this)
        checkboxGridsAndTicks.mnemonic = KeyEvent.VK_G
        checkboxGridsAndTicks.isSelected = false
        menuVisualization.add(checkboxGridsAndTicks)

        checkboxPtLoc.addItemListener(this)
        checkboxPtLoc.mnemonic = KeyEvent.VK_L
        checkboxPtLoc.isSelected = false
        menuVisualization.add(checkboxPtLoc)

        checkboxLineOfSymmetry.addItemListener(this)
        checkboxLineOfSymmetry.mnemonic = KeyEvent.VK_M
        checkboxLineOfSymmetry.isSelected = false
        menuVisualization.add(checkboxLineOfSymmetry)

        showPointInfo.addActionListener(this)
        showPointInfo.actionCommand = "ptinfo"
        showPointInfo.mnemonic = KeyEvent.VK_P
        menuVisualization.add(showPointInfo)

        return menuVisualization
    }

    private lateinit var menuOperation: JMenu
    private lateinit var mult: JMenuItem
    private lateinit var flip: JMenuItem
    private lateinit var select: JMenuItem
    private fun getOperationMenu(): JMenu {
        menuOperation = JMenu(+"gui.operationcalculator.operation")
        mult = JMenuItem(+"gui.operationcalculator.mult")
        flip = JMenuItem(+"gui.operationcalculator.flip")
        select = JMenuItem(+"gui.operationcalculator.selectpt")

        menuOperation.mnemonic = KeyEvent.VK_O

        mult.addActionListener(this)
        mult.actionCommand = "mult"
        mult.mnemonic = KeyEvent.VK_M
        menuOperation.add(mult)

        flip.addActionListener(this)
        flip.actionCommand = "flip"
        flip.mnemonic = KeyEvent.VK_F
        menuOperation.add(flip)

        select.addActionListener(this)
        select.actionCommand = "select"
        select.mnemonic = KeyEvent.VK_S
        menuOperation.add(select)

        checkboxAutoadd.addItemListener(this)
        checkboxAutoadd.mnemonic = KeyEvent.VK_A
        checkboxAutoadd.isSelected = false
        menuOperation.add(checkboxAutoadd)

        return menuOperation
    }


    override fun actionPerformed(e: ActionEvent?) {
        super.actionPerformed(e!!)
        when (e.actionCommand) {
            "changecurve" -> CurveChanger.createAndShow()
            "changescale" -> {
                if(panel.curve is FiniteEllipticCurve) {
                    JOptionPane.showMessageDialog(null, +"gui.discretecurve")
                    return
                } else ScaleChanger.createAndShow()
            }
            "clear" -> {
                p1 = null
                p1modified = null
                p2 = null
                panel.clear()
                panel.redraw()
            }
            "savecurve" -> {
                val ret = fc.showSaveDialog(this)
                if (ret == JFileChooser.APPROVE_OPTION) {
                    val fileSelected = fc.selectedFile
                    val file = File(fileSelected.absolutePath + ".curve")
                    file.createNewFile()
                    file.writeText(panel.serializeCurveFrame())
                }
            }
            "opencurve" -> {
                val ret = fc.showOpenDialog(this)
                if (ret == JFileChooser.APPROVE_OPTION) {
                    val file = fc.selectedFile
                    panel.curve = CurveFrame.deserializeCurveFrame(file.readText())
                    panel.redraw()
                    ScaleChanger.sliderScale.value = EllipticSimulator.scale
                    CurveChanger.sliderA.value = panel.curve.aValue.toInt()
                    CurveChanger.sliderB.value = panel.curve.bValue.toInt()
                }
            }
            "exit" -> this.isVisible = false
            "mult" -> {
                if (p1 == null) JOptionPane.showMessageDialog(null, +"gui.operationcalculator.choosept")
                else PointMultiplier.createAndShow()
            }
            "flip" -> {
                if (p1 == null) JOptionPane.showMessageDialog(null, +"gui.operationcalculator.choosept")
                else {
                    val (x, y) = p1!!
                    val multiplied = panel.curve { Vec2d(modifyX(x), modifyY(y)).invertY() }
                    panel.changeColor(Color.BLUE)
                    panel.drawPoint(Vec2i(EllipticSimulator.demodifyX(multiplied.x, panel), EllipticSimulator.demodifyY(multiplied.y, panel)), 15)
                    panel.changeColor(Color.GREEN)
                    panel.drawPoint(p1!!, 15)
                    panel.changeColor(Color.BLACK)
                    panel.repaint()
                    p1 = Vec2i(EllipticSimulator.demodifyX(multiplied.x, panel), EllipticSimulator.demodifyY(multiplied.y, panel))
                    p1modified = multiplied
                }
            }
            "select" -> PointSelector.createAndShow()
            "ptinfo" -> if (p1 == null) JOptionPane.showMessageDialog(null, +"gui.operationcalculator.choosept") else PointInfo.createAndShow()
            "changefield_zp" -> FieldZp.createAndShow()
            "changefield_reals" -> panel.curve = EllipticCurve(panel.curve.aValue, panel.curve.bValue, MathHelper.REALS)
        }
    }


    override fun itemStateChanged(e: ItemEvent?) {
        val source = e!!.itemSelectable
        if (source == checkboxGridsAndTicks) {
            panel.gridsAndTicks = !panel.gridsAndTicks
            panel.redraw()
            if (e.stateChange == ItemEvent.DESELECTED) panel.clear()
        } else if (source == checkboxPtLoc) {
            drawPtLocs = !drawPtLocs
            panel.redraw()
            if (e.stateChange == ItemEvent.DESELECTED) {
                panel.clearPointLines()
                panel.repaint()
            }
        } else if (source == checkboxAutoadd) {
            autoAdd = e.stateChange != ItemEvent.DESELECTED
        } else if (source == checkboxLineOfSymmetry) {
            panel.shouldShowLineOfSymmetry(e.stateChange != ItemEvent.DESELECTED)
            panel.redraw()
        }
        super.itemStateChanged(e)
    }

    private object PointInfo : EllipticCurveWindow((EllipticCurveWindow.getScreenSize() / 6.0).vec2i()) {
        val pointInfoBox = JTextField()
        val button = JButton(+"gui.copytoclipboard")
        override fun updateTextForI18n() {
            super.updateTextForI18n()
            pointInfoBox.text = "(${Math.round(100.0 * modifyX(p1!!.x)) / 100.0}, ${Math.round(100.0 * modifyY(p1!!.y)) / 100.0})"
        }

        init {
            updateTextForI18n()
            pointInfoBox.isEnabled = false
            pointInfoBox.setBounds(size.x * 1 / 6, size.y * 1 / 6, size.x * 4 / 6, 40)
            pointInfoBox.disabledTextColor = Color.BLACK
            pointInfoBox.text = "(${Math.round(100.0 * modifyX(p1!!.x)) / 100}, ${Math.round(100.0 * modifyY(p1!!.y)) / 100})"
            pointInfoBox.horizontalAlignment = JTextField.CENTER
            button.setBounds(size.x * 1/6, size.y * 2/6, size.x * 4/6, 40)
            button.actionCommand = "copy"
            button.addActionListener(this)
            add(pointInfoBox)
            add(button)
        }
        override fun actionPerformed(e: ActionEvent?) {
            super.actionPerformed(e)
            when (e!!.actionCommand) {
                "copy" -> {
                    val ss = StringSelection("$p1modified")
                    Toolkit.getDefaultToolkit().systemClipboard.setContents(ss, ss)
                }
            }
        }

    }

    private object PointSelector : EllipticCurveWindow((EllipticCurveWindow.getScreenSize() / 4.5).vec2i()) {
        val okButton = JButton(+"gui.ok")
        val xBox = JTextField(2)
        val yBox = JTextField(2)
        val labelA = JLabel(+"gui.pointselector.selectpt")
        override fun updateTextForI18n() {
            super.updateTextForI18n()
            okButton.text = +"gui.ok"
            labelA.text = +"gui.pointselector.selectpt"
        }

        init {
            val font = Font("Serif", BOLD, 18)
            labelA.setBounds(size.x * 1 / 2 - 75, size.y * 1 / 8, 200, 30)
            labelA.verticalTextPosition = JLabel.TOP
            labelA.font = font
            labelA.isVisible = true
            labelA.isOpaque = true

            okButton.mnemonic = KeyEvent.VK_S
            okButton.actionCommand = "ok"
            okButton.setBounds(size.x * 1 / 2 - 200, size.y * 9 / 16, 400, 40)
            okButton.addActionListener(this)
            add(okButton)

            xBox.setBounds(size.x * 1 / 2 - 30, size.y * 6 / 16, 25, 20)
            yBox.setBounds(size.x * 1 / 2 + 15, size.y * 6 / 16, 25, 20)
            add(xBox)
            add(yBox)
            add(labelA)
        }

        override fun actionPerformed(e: ActionEvent?) {
            super.actionPerformed(e)
            when (e!!.actionCommand) {
                "ok" -> {
                    this.isVisible = false
                    val x = xBox.text.toDoubleOrNull()
                    if (x == null) {
                        JOptionPane.showMessageDialog(null, +"gui.invalidnumber")
                        return
                    }
                    val y = yBox.text.toDoubleOrNull()
                    if (y == null) {
                        JOptionPane.showMessageDialog(null, +"gui.invalidnumber")
                        return
                    }
                    panel.changeColor(Color.GREEN)
                    panel.changePointSize(5)
                    if (p1 == null || !autoAdd) {
                        p1 = Vec2i(EllipticSimulator.demodifyX(x, panel), EllipticSimulator.demodifyY(y, panel))
                        p1modified = Vec2d(x, y)
                        panel.drawPoint(p1!!)
                    } else {
                        p2 = Vec2i(EllipticSimulator.demodifyX(x, panel), EllipticSimulator.demodifyY(y, panel))
                        panel.drawLine(p1 as Vec2i, p2 as Vec2i, 3f)
                        panel.changeColor(Color.RED)
                        panel.drawPoint(p1 as Vec2i, 10)
                        panel.drawPoint(p2 as Vec2i, 10)
                        panel.changeColor(Color.BLUE)
                        val sum = panel.curve { Vec2d(x, y) + Vec2d(modifyX(p1!!.x), modifyY(p1!!.y)) }
                        val max = EllipticSimulator.getMaxBoundsOfFrame(panel)
                        val min = EllipticSimulator.getMinBoundsOfFrame(panel)
                        if (sum.x > max.x && sum.x > min.x || sum.y > max.y && sum.y > min.y || sum.x < min.x && sum.x < max.x || sum.y < min.y && sum.y < max.y)
                            JOptionPane.showMessageDialog(null, +"gui.outofbounds" + sum.map { Math.round(it * 100) / 100.0 }.toString())
                        else panel.drawPoint(Vec2i(EllipticSimulator.demodifyX(sum.x, panel), EllipticSimulator.demodifyY(sum.y, panel)), 15)
                        p1 = null
                        p1modified = null
                        p2 = null
                    }
                    panel.changeColor(Color.BLACK)
                    panel.repaint()
                }
            }
        }
    }

    private object PointMultiplier : EllipticCurveWindow((EllipticCurveWindow.getScreenSize() / 4.5).vec2i()) {
        val spinner = JSpinner(SpinnerNumberModel(1, 1, 100, 1))
        val labelA = JLabel(+"gui.pointmultiplier")
        val okButton = JButton(+"gui.ok")
        override fun updateTextForI18n() {
            super.updateTextForI18n()
            labelA.text = +"gui.pointmultiplier"
            okButton.text = +"gui.ok"
        }

        init {
            val font = Font("Serif", BOLD, 18)
            spinner.setBounds(size.x * 1 / 2 - 200, size.y * 5 / 16, 400, 40)
            spinner.addChangeListener(this)
            labelA.setBounds(size.x * 1 / 2 - 18, 0, 80, 30)
            labelA.verticalTextPosition = JLabel.TOP
            labelA.font = font
            labelA.isVisible = true
            labelA.isOpaque = true
            okButton.mnemonic = KeyEvent.VK_S
            okButton.actionCommand = "ok"
            okButton.setBounds(size.x * 1 / 2 - 200, size.y * 12 / 16, 400, 40)
            okButton.addActionListener(this)
            add(okButton)
            add(labelA)
            add(spinner)
        }

        override fun actionPerformed(e: ActionEvent?) {
            super.actionPerformed(e)
            when (e!!.actionCommand) {
                "ok" -> {
                    this.isVisible = false
                    val (x, y) = p1!!
                    val multiplied = panel.curve { Vec2d(modifyX(x), modifyY(y)).times(spinner.value as Int) }
                    spinner.value = 1
                    panel.changeColor(Color.BLUE)
                    panel.drawPoint(Vec2i(EllipticSimulator.demodifyX(multiplied.x, panel), EllipticSimulator.demodifyY(multiplied.y, panel)), 15)
                    panel.changeColor(Color.GREEN)
                    panel.drawPoint(p1!!, 15)
                    panel.changeColor(Color.BLACK)
                    panel.repaint()
                    p1 = Vec2i(EllipticSimulator.demodifyX(multiplied.x, panel), EllipticSimulator.demodifyY(multiplied.y, panel))
                    p1modified = multiplied
                }
            }
        }

    }

    private object ScaleChanger : EllipticCurveWindow((EllipticCurveWindow.getScreenSize() / 4.5).vec2i()) {

        val sliderScale = JSlider(JSlider.HORIZONTAL, 1, 10, 1)
        val labelA = JLabel(+"gui.scalechanger.scale")
        override fun updateTextForI18n() {
            super.updateTextForI18n()
            labelA.text = +"gui.scalechanger.scale"
        }

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
                EllipticSimulator.scale = sliderScale.value
                panel.redraw()
            }

        }
    }

    private object CurveChanger : EllipticCurveWindow((EllipticCurveWindow.getScreenSize() / 4.5).vec2i()) {
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
                    if(panel.curve !is FiniteEllipticCurve)
                        panel.curve = EllipticCurve(sliderA.value.toLong(), sliderB.value.toLong(), MathHelper.REALS)
                    else panel.curve = FiniteEllipticCurve(sliderA.value.toLong(), sliderB.value.toLong(), (panel.curve as FiniteEllipticCurve).modulus)
                } catch (e: IllegalArgumentException) {
                    JOptionPane.showMessageDialog(null, +"gui.invalidcurve")
                }
                panel.redraw()
            }

        }
    }

    private object FieldZp : EllipticCurveWindow((EllipticCurveWindow.getScreenSize() / 4.5).vec2i()) {
        val spinner = JSpinner(SpinnerNumberModel(1, 1, 1000000, 1))
        val labelA = JLabel(+"gui.fieldzp")
        val okButton = JButton(+"gui.ok")
        override fun updateTextForI18n() {
            super.updateTextForI18n()
            labelA.text = +"gui.fieldzp"
            okButton.text = +"gui.ok"
        }

        init {
            val font = Font("Serif", BOLD, 18)
            spinner.setBounds(size.x * 1 / 2 - 200, size.y * 5 / 16, 400, 40)
            spinner.addChangeListener(this)
            labelA.setBounds(size.x * 1 / 2 - 18, 0, 200, 30)
            labelA.verticalTextPosition = JLabel.TOP
            labelA.font = font
            labelA.isVisible = true
            labelA.isOpaque = true
            okButton.mnemonic = KeyEvent.VK_S
            okButton.actionCommand = "ok"
            okButton.setBounds(size.x * 1 / 2 - 200, size.y * 12 / 16, 400, 40)
            okButton.addActionListener(this)
            add(okButton)
            add(labelA)
            add(spinner)
        }

        override fun actionPerformed(e: ActionEvent?) {
            super.actionPerformed(e)
            when (e!!.actionCommand) {
                "ok" -> {
                    this.isVisible = false
                    if(spinner.value == 2 || spinner.value == 3) {
                        JOptionPane.showMessageDialog(null, +"gui.curveover2or3")
                        return
                    }
                    if(!MathHelper.isPrime(spinner.value as Int)) {
                        JOptionPane.showMessageDialog(null, +"gui.notaprime")
                        return
                    }

                    panel.curve = FiniteEllipticCurve(panel.curve.aValue, panel.curve.bValue, spinner.value as Long)
                }
            }
        }

    }


}
