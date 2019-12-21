package eladkay.ellipticcurve.gui

import eladkay.ellipticcurve.mathengine.EllipticCurve
import eladkay.ellipticcurve.mathengine.FiniteEllipticCurve
import eladkay.ellipticcurve.mathengine.MathHelper
import eladkay.ellipticcurve.mathengine.Vec2i
import eladkay.ellipticcurve.simulationengine.CurveFrame
import eladkay.ellipticcurve.simulationengine.CurvePanel
import eladkay.ellipticcurve.simulationengine.EllipticSimulator
import java.awt.Font
import java.awt.event.*
import java.io.File
import javax.swing.*
import javax.swing.event.ChangeEvent
import javax.swing.filechooser.FileNameExtensionFilter

object EncryptDecryptHelper : EllipticCurveWindow(getScreenSize()), MouseListener, MouseMotionListener {
    override fun mouseReleased(e: MouseEvent?) {  }

    override fun mouseEntered(e: MouseEvent?) {  }

    override fun mouseClicked(e: MouseEvent?) {  }

    override fun mouseExited(e: MouseEvent?) {  }

    override fun mousePressed(e: MouseEvent?) {  }

    override fun mouseMoved(e: MouseEvent?) {  }

    override fun mouseDragged(e: MouseEvent?) {  }

    private fun modifyX(x: Number): Double = (x.toDouble() - panel.frameSize().x / 2 - EllipticSimulator.X_OFFSET) / EllipticSimulator.defaultXScale.toDouble()
    private fun modifyY(y: Number): Double = (-y.toDouble() + panel.frameSize().y / 2) / EllipticSimulator.defaultYScale.toDouble()
    
    var panel = CurvePanel(Vec2i(size.x, size.y), EllipticCurve(-1.0, 1.0, MathHelper.REALS))
    private val fc = JFileChooser()
    
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

        menuVisualization.mnemonic = KeyEvent.VK_V

        changeScale.addActionListener(this)
        changeScale.actionCommand = "changescale"
        changeScale.mnemonic = KeyEvent.VK_S
        menuVisualization.add(changeScale)

        clear.addActionListener(this)
        clear.actionCommand = "clear"
        clear.mnemonic = KeyEvent.VK_R
        menuVisualization.add(clear)

        return menuVisualization
    }

    private lateinit var menuOperation: JMenu
    private lateinit var mult: JMenuItem
    private lateinit var flip: JMenuItem
    private lateinit var select: JMenuItem
    private fun getOperationMenu(): JMenu {
        menuOperation = JMenu(+"gui.operationcalculator.operation")
        select = JMenuItem(+"gui.operationcalculator.selectpt")

        menuOperation.mnemonic = KeyEvent.VK_O

        select.addActionListener(this)
        select.actionCommand = "select"
        select.mnemonic = KeyEvent.VK_S
        menuOperation.add(select)

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
            "select" -> +"noop"
            "changefield_zp" -> FieldZp.createAndShow()
            "changefield_reals" -> panel.curve = EllipticCurve(OperationCalculator.panel.curve.aValue, OperationCalculator.panel.curve.bValue, MathHelper.REALS)

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
            val font = Font("Serif", Font.BOLD, 18)
            sliderScale.setBounds(ScaleChanger.size.x * 1 / 2 - 200, ScaleChanger.size.y * 5 / 16, 400, 40)
            sliderScale.majorTickSpacing = 1
            sliderScale.paintLabels = true
            sliderScale.paintTicks = true
            sliderScale.font = font
            sliderScale.addChangeListener(this)
            labelA.setBounds(ScaleChanger.size.x * 1 / 2 - 18, 0, 80, 30)
            labelA.verticalTextPosition = JLabel.TOP
            labelA.font = font
            labelA.isVisible = true
            labelA.isOpaque = true
            ScaleChanger.add(labelA)
            ScaleChanger.add(sliderScale)
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
            val font = Font("Serif", Font.BOLD, 18)

            sliderA.setBounds(CurveChanger.size.x * 1 / 2 - 200, CurveChanger.size.y * 1 / 8, 400, 40)
            sliderA.majorTickSpacing = 1
            sliderA.paintLabels = true
            sliderA.paintTicks = true
            sliderA.font = font
            sliderA.toolTipText = "a value for curve"
            sliderA.addChangeListener(this)
            sliderA.isOpaque = false
            labelA.setBounds(CurveChanger.size.x * 1 / 2, 0, 20, 30)
            labelA.verticalTextPosition = JLabel.TOP
            labelA.font = font
            labelA.isVisible = true
            labelA.isOpaque = true
            CurveChanger.add(labelA)
            CurveChanger.add(sliderA)

            sliderB.setBounds(CurveChanger.size.x * 1 / 2 - 200, CurveChanger.size.y * 4 / 8, 400, 40)
            sliderB.majorTickSpacing = 1
            sliderB.paintLabels = true
            sliderB.paintTicks = true
            sliderB.font = font
            sliderB.toolTipText = "b value for curve"
            sliderB.addChangeListener(this)
            sliderB.isOpaque = false
            labelB.setBounds(CurveChanger.size.x * 1 / 2, CurveChanger.size.y * 3 / 8, 20, 30)
            labelB.font = font
            labelB.isVisible = true
            labelB.isOpaque = true
            CurveChanger.add(labelB)
            CurveChanger.add(sliderB)
        }

        override fun stateChanged(e: ChangeEvent?) {
            super.stateChanged(e!!)
            val slider = e.source as? JSlider
            panel.clear()
            if (slider?.valueIsAdjusting?.not() == true) {
                try {
                    if(panel.curve !is FiniteEllipticCurve)
                        panel.curve = EllipticCurve(sliderA.value.toDouble(), sliderB.value.toDouble(), MathHelper.REALS)
                    else panel.curve = FiniteEllipticCurve(sliderA.value.toDouble(), sliderB.value.toDouble(), (panel.curve as FiniteEllipticCurve).modulus)
                } catch (e: IllegalArgumentException) {
                    JOptionPane.showMessageDialog(null, +"gui.invalidcurve!")
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
            val font = Font("Serif", Font.BOLD, 18)
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

                    panel.curve = FiniteEllipticCurve(panel.curve.aValue, panel.curve.bValue, spinner.value as Int)
                }
            }
        }

    }

}