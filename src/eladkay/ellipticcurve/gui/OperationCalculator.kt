package eladkay.ellipticcurve.gui

import eladkay.ellipticcurve.mathengine.*
import eladkay.ellipticcurve.simulationengine.CurveFrame
import eladkay.ellipticcurve.simulationengine.CurvePanel
import eladkay.ellipticcurve.simulationengine.EllipticSimulator
import java.awt.Color
import java.awt.Font
import java.awt.Font.BOLD
import java.awt.MenuBar
import java.awt.event.*
import java.io.File
import javax.swing.*
import javax.swing.event.ChangeEvent
import kotlin.math.sign
import javax.swing.JFrame
import javax.swing.filechooser.FileFilter
import javax.swing.filechooser.FileNameExtensionFilter


object OperationCalculator : EllipticCurveWindow(getScreenSize()), MouseListener, MouseMotionListener {

    override fun mouseDragged(e: MouseEvent?) {}

    override fun mouseMoved(e: MouseEvent?) {
        e!!
        val x = e.x
        val y = e.y
        if(drawPtLocs) {
            panel.clearPointLines()
            panel.changeColor(Color.ORANGE)
            panel.addPointLines(Vec2i(x, y))
            panel.drawPointLineText(Vec2i(x + 5, y), "(${Math.round(100.0*modifyX(x))/100.0}, ${Math.round(100.0*modifyY(y))/100.0})")
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
            if (p1 == null || !autoAdd) {
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
                    JOptionPane.showMessageDialog(null, +"gui.outofbounds"+sum.map { Math.round(it * 100) / 100.0 }.toString());
                else panel.drawPoint(Vec2i(EllipticSimulator.demodifyX(sum.x, panel), EllipticSimulator.demodifyY(sum.y, panel)), 15)
                println(Vec2i(EllipticSimulator.demodifyX(sum.x, panel), EllipticSimulator.demodifyY(sum.y, panel)))
                println(sum)
                p1 = null
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

    var panel = CurvePanel(Vec2i(size.x, size.y/* / 3*/), EllipticCurve(-1.0, 1.0, Field.REALS))
    val checkboxGridsAndTicks = JCheckBox(+"gui.operationcalculator.gridsandticks")
    val checkboxPtLoc = JCheckBox(+"gui.operationcalculator.checkboxPtLoc")
    val checkboxAutoadd = JCheckBox(+"gui.operationcalculator.checkboxAutoadd")

    val fc = JFileChooser()
    var drawPtLocs: Boolean = false
    var autoAdd: Boolean = false
    var p1: Vec2i? = null
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
    lateinit var menuFile: JMenu
    lateinit var saveCurve: JMenuItem
    lateinit var openCurve: JMenuItem
    lateinit var exit: JMenuItem
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

    lateinit var menuCurve: JMenu
    lateinit var changeCurve: JMenuItem
    lateinit var changeField: JMenuItem
    lateinit var realsField: JMenuItem
    lateinit var finiteField: JMenuItem
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

        changeField.addActionListener(this)
        changeField.actionCommand = "changefield_reals"
        changeField.add(realsField)
        changeField.addActionListener(this)
        changeField.actionCommand = "changefield_zp"
        changeField.add(finiteField)
        menuCurve.add(changeField)
        return menuCurve
    }

    lateinit var menuVisualization: JMenu
    lateinit var changeScale: JMenuItem
    lateinit var clear: JMenuItem
    lateinit var showPointInfo: JMenuItem
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

        showPointInfo.addActionListener(this)
        showPointInfo.actionCommand = "ptinfo"
        showPointInfo.mnemonic = KeyEvent.VK_P
        menuVisualization.add(showPointInfo)

        return menuVisualization
    }

    lateinit var menuOperation: JMenu
    lateinit var mult: JMenuItem
    lateinit var flip: JMenuItem
    lateinit var select: JMenuItem
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
            "changescale" -> ScaleChanger.createAndShow()
            "clear" -> {
                p1 = null
                p2 = null
                panel.clear()
                panel.redraw()
            }
            "savecurve" -> {
                val ret = fc.showSaveDialog(this)
                if(ret == JFileChooser.APPROVE_OPTION) {
                    val fileSelected = fc.selectedFile
                    val file = File(fileSelected.absolutePath + ".curve")
                    file.createNewFile()
                    file.writeText(panel.serializeCurveFrame())
                }
            }
            "opencurve" -> {
                val ret = fc.showOpenDialog(this)
                if(ret == JFileChooser.APPROVE_OPTION) {
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
                if(p1 == null) JOptionPane.showMessageDialog(null, +"gui.operationcalculator.choosept")
                else PointMultiplier.createAndShow()
            }
            "flip" -> {
                if(p1 == null) JOptionPane.showMessageDialog(null, +"gui.operationcalculator.choosept")
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
                }
            }
            "select" -> PointSelector.createAndShow()
            "ptinfo" -> if(p1 == null) JOptionPane.showMessageDialog(null, +"gui.operationcalculator.choosept") else PointInfo.createAndShow()
        }
    }


    override fun itemStateChanged(e: ItemEvent?) {
        val source = e!!.itemSelectable
        if(source == checkboxGridsAndTicks) {
            panel.gridsAndTicks = !panel.gridsAndTicks
            panel.redraw()
            if(e.stateChange == ItemEvent.DESELECTED) panel.clear()
        } else if(source == checkboxPtLoc) {
            drawPtLocs = !drawPtLocs
            panel.redraw()
            if(e.stateChange == ItemEvent.DESELECTED) {
                panel.clearPointLines()
                panel.repaint()
            }
        } else if(source == checkboxAutoadd) {
            autoAdd = e.stateChange != ItemEvent.DESELECTED
        }
        super.itemStateChanged(e)
    }

    private object PointInfo : EllipticCurveWindow((EllipticCurveWindow.getScreenSize()/9.0).vec2i()) {
        val pointInfoBox = JTextField()
        override fun createAndShow() {
            super.createAndShow()
            pointInfoBox.text = "(${Math.round(100.0*modifyX(p1!!.x))/100.0}, ${Math.round(100.0*modifyY(p1!!.y))/100.0})"
        }

        init {
            pointInfoBox.isEnabled = false
            pointInfoBox.setBounds(size.x * 1/6, size.y * 1/6, size.x * 4/6, 40)
            pointInfoBox.disabledTextColor = Color.BLACK
            pointInfoBox.text = "(${Math.round(100.0*modifyX(p1!!.x))/100}, ${Math.round(100.0*modifyY(p1!!.y))/100})"
            pointInfoBox.horizontalAlignment = JTextField.CENTER
            add(pointInfoBox)
        }


    }

    private object PointSelector : EllipticCurveWindow((EllipticCurveWindow.getScreenSize()/4.5).vec2i()) {
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
            labelA.setBounds(size.x * 1 / 2 - 75, size.y * 1/8, 200, 30)
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
            when(e!!.actionCommand) {
                "ok" -> {
                    this.isVisible = false
                    val x = xBox.text.toDoubleOrNull()
                    if(x == null) {
                        JOptionPane.showMessageDialog(null, +"gui.invalidnumber")
                        return
                    }
                    val y = yBox.text.toDoubleOrNull()
                    if(y == null) {
                        JOptionPane.showMessageDialog(null, +"gui.invalidnumber")
                        return
                    }
                    panel.changeColor(Color.GREEN)
                    panel.changePointSize(5)
                    if(p1 == null || !autoAdd) {
                        p1 = Vec2i(EllipticSimulator.demodifyX(x, panel), EllipticSimulator.demodifyY(y, panel))
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
                            JOptionPane.showMessageDialog(null, +"gui.outofbounds"+sum.map { Math.round(it * 100) / 100.0 }.toString());
                        else panel.drawPoint(Vec2i(EllipticSimulator.demodifyX(sum.x, panel), EllipticSimulator.demodifyY(sum.y, panel)), 15)
                        p1 = null
                        p2 = null
                    }
                    panel.changeColor(Color.BLACK)
                    panel.repaint()
                }
            }
        }
    }

    private object PointMultiplier : EllipticCurveWindow((EllipticCurveWindow.getScreenSize()/4.5).vec2i()) {
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
            when(e!!.actionCommand) {
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
                    p1 = Vec2i(EllipticSimulator.demodifyX(multiplied.x, panel), EllipticSimulator.demodifyY(multiplied.y, panel)) // todo, do i want this?
                }
            }
        }

    }

    private object ScaleChanger : EllipticCurveWindow((EllipticCurveWindow.getScreenSize()/4.5).vec2i()) {

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
                    JOptionPane.showMessageDialog(null, +"gui.invalidcurve!");
                }
                panel.redraw()
            }

        }
    }



}
