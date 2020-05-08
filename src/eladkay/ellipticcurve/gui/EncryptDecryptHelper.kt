package eladkay.ellipticcurve.gui

import eladkay.ellipticcurve.mathengine.*
import eladkay.ellipticcurve.simulationengine.CurveFrame
import eladkay.ellipticcurve.simulationengine.CurvePanel
import eladkay.ellipticcurve.simulationengine.EllipticSimulator
import java.awt.Color
import java.awt.Font
import java.awt.event.*
import java.io.File
import javax.swing.*
import javax.swing.event.ChangeEvent
import javax.swing.filechooser.FileNameExtensionFilter
import kotlin.math.sign

object EncryptDecryptHelper : EllipticCurveWindow(getScreenSize()), MouseListener, MouseMotionListener, MouseWheelListener {

    override fun mouseWheelMoved(e: MouseWheelEvent) {
        EllipticSimulator.scale = Math.max(1.0, Math.min(EllipticSimulator.scale - e.wheelRotation.sign * 0.5, 10.0))
        ScaleChanger.sliderScale.value = EllipticSimulator.scale.toInt()
        panel.clear()
        panel.redraw()
    }

    override fun mouseReleased(e: MouseEvent?) {}

    override fun mouseEntered(e: MouseEvent?) {}

    override fun mouseClicked(e: MouseEvent?) {}

    override fun mouseExited(e: MouseEvent?) {}

    override fun mousePressed(e: MouseEvent?) {}

    override fun mouseMoved(e: MouseEvent?) {}

    override fun mouseDragged(e: MouseEvent?) {}

    var panel = CurvePanel(Vec2i(size.x, size.y), EllipticCurve(-1L, 1L, EllipticCurve.REALS))
    private val fc = JFileChooser()

    init {
        contentPane.add(panel)
        panel.addMouseListener(this)
        panel.addMouseMotionListener(this)
        panel.addMouseWheelListener(this)
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
    private lateinit var stringToPts: JMenuItem
    private lateinit var ptsToString: JMenuItem
    private lateinit var encryptor: JMenuItem
    private lateinit var decryptor: JMenuItem
    private lateinit var showAgreedUponPt: JMenuItem
    private lateinit var showGenerators: JMenuItem
    private lateinit var createKey: JMenuItem
    private fun getOperationMenu(): JMenu {
        menuOperation = JMenu(+"gui.operationcalculator.operation")
        stringToPts = JMenuItem(+"gui.encryptdecrypthelper.stringtopts")
        ptsToString = JMenuItem(+"gui.encryptdecrypthelper.ptstostring")
        encryptor = JMenuItem(+"gui.encryptdecrypthelper.encryptor")
        decryptor = JMenuItem(+"gui.encryptdecrypthelper.decryptor")
        showAgreedUponPt = JMenuItem(+"gui.encryptdecrypthelper.showAgreedUponPt")
        showGenerators = JMenuItem(+"gui.encryptdecrypthelper.showGenerators")
        createKey = JMenuItem(+"gui.encryptdecrypthelper.createKey")
        menuOperation.mnemonic = KeyEvent.VK_O

        stringToPts.addActionListener(this)
        stringToPts.actionCommand = "stringToPts"
        stringToPts.mnemonic = KeyEvent.VK_C
        menuOperation.add(stringToPts)

        ptsToString.addActionListener(this)
        ptsToString.actionCommand = "ptsToString"
        ptsToString.mnemonic = KeyEvent.VK_P
        menuOperation.add(ptsToString)

        encryptor.addActionListener(this)
        encryptor.actionCommand = "encrypt"
        encryptor.mnemonic = KeyEvent.VK_E
        menuOperation.add(encryptor)

        decryptor.addActionListener(this)
        decryptor.actionCommand = "decrypt"
        decryptor.mnemonic = KeyEvent.VK_D
        menuOperation.add(decryptor)

        showAgreedUponPt.addActionListener(this)
        showAgreedUponPt.actionCommand = "showAgreedUponPt"
        showAgreedUponPt.mnemonic = KeyEvent.VK_A
        menuOperation.add(showAgreedUponPt)

        showGenerators.addActionListener(this)
        showGenerators.actionCommand = "generators"
        showGenerators.mnemonic = KeyEvent.VK_G
        menuOperation.add(showGenerators)

        createKey.addActionListener(this)
        createKey.actionCommand = "createKey"
        createKey.mnemonic = KeyEvent.VK_K
        menuOperation.add(createKey)

        return menuOperation
    }


    override fun actionPerformed(e: ActionEvent?) {
        super.actionPerformed(e!!)
        when (e.actionCommand) {
            "changecurve" -> CurveChanger.createAndShow()
            "changescale" -> {
                if (panel.curve is FiniteEllipticCurve) {
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
                    val a = panel.curve.aValue
                    val b = panel.curve.bValue
                    panel.redraw()
                    ScaleChanger.sliderScale.value = EllipticSimulator.scale.toInt()
                    CurveChanger.sliderA.value = a.toInt()
                    CurveChanger.sliderB.value = b.toInt()
                    if (panel.curve is FiniteEllipticCurve) FieldZp.spinner.value = (panel.curve as FiniteEllipticCurve).modulus
                }
            }
            "exit" -> this.isVisible = false
            "changefield_zp" -> FieldZp.createAndShow()
            "changefield_reals" -> panel.curve = EllipticCurve(OperationCalculator.panel.curve.aValue, OperationCalculator.panel.curve.bValue, EllipticCurve.REALS)
            "stringToPts" -> StringToPts.createAndShow()
            "ptsToString" -> PtsToString.createAndShow()
            "encrypt" -> Encryptor.createAndShow()
            "decrypt" -> Decryptor.createAndShow()
            "showAgreedUponPt" -> InformationalScreen(panel.curve.helper.agreedUponPt.toString()).createAndShow()
            "generators" -> {
                val pts = EllipticCurveHelper.asciiTable.map { it to panel.curve.helper.getPointOnCurveFromString(it.toString())[0] }
                fun checkDuplicates(): Set<Pair<Char, Vec2d>> {
                    val ret = mutableSetOf<Pair<Char, Vec2d>>()
                    for (p in pts) for (q in pts) if (p.first != p.first && p.second == q.second) {
                        ret.add(p); ret.add(q)
                    }
                    return ret
                }

                val duplicates = checkDuplicates()
                val text1 = pts.joinToString("\n") { "${it.first} ${it.second}" }
                val text2 = "\n\nDuplicates: ${if (duplicates.isEmpty()) "None" else duplicates.toString()}"
                val screen = InformationalScreen(text1 + text2, true)
                screen.setSize(EllipticCurveWindow.getScreenSize() * 2 / 5)
                screen.createAndShow()
            }
            "createKey" -> KeyCreator.createAndShow()
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
                EllipticSimulator.scale = sliderScale.value.toDouble()
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
                    if (panel.curve !is FiniteEllipticCurve)
                        panel.curve = EllipticCurve(sliderA.value.toLong(), sliderB.value.toLong(), EllipticCurve.REALS)
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
                    val value = spinner.value as Int
                    if (value == 2 || value == 3) {
                        JOptionPane.showMessageDialog(null, +"gui.curveover2or3")
                        return
                    }
                    if (!FiniteEllipticCurve.isPrime(value)) {
                        JOptionPane.showMessageDialog(null, +"gui.notaprime")
                        return
                    }
                    val newCurve = FiniteEllipticCurve(panel.curve.aValue, panel.curve.bValue, value.toLong())
                    fun predicate(int: Int): Boolean {
                        val curve = FiniteEllipticCurve(panel.curve.aValue, panel.curve.bValue, int.toLong())
                        return curve.curvePoints.all { curve.helper.order(it) < 128 }
                    }
                    // all bad numbers up to 10,000: (took about 40 minutes to calculate)
                    val badNumbers = listOf(5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101, 103, 107, 109, 167, 173, 211, 223, 1117)
                    if (value in badNumbers || predicate(value)) {
                        var first = 0
                        val second: Int
                        for (i in (value - 2).downTo(5).step(2)) {
                            if (FiniteEllipticCurve.isPrime(i) && i !in badNumbers && !predicate(i)) {
                                first = i
                                break
                            }
                        }
                        var i = value + 2
                        while (true) {
                            if (FiniteEllipticCurve.isPrime(i) && i !in badNumbers && !predicate(i)) {
                                second = i
                                break
                            }
                            i += 2
                        }
                        JOptionPane.showMessageDialog(null, +"gui.encryptdecrypthelper.badcurve" + "p=${if (first != 0) "$first, " else ""}$second")
                        return
                    }
                    panel.curve = newCurve
                }
            }
        }

    }

    private object StringToPts : EllipticCurveWindow((EllipticCurveWindow.getScreenSize() / 4.5).vec2i()) {
        val okButton = JButton(+"gui.ok")
        val text = JTextArea()

        init {
            okButton.mnemonic = KeyEvent.VK_S
            okButton.actionCommand = "ok"
            okButton.setBounds(size.x * 1 / 2 - 200, 0, 400, 40)
            okButton.addActionListener(this)
            text.setBounds(0, size.y * 4 / 16, 800, 400)
            add(okButton)
            add(text)
        }

        override fun actionPerformed(e: ActionEvent?) {
            super.actionPerformed(e)
            when (e!!.actionCommand) {
                "ok" -> {
                    this.isVisible = false
                    val points = try {
                        EncryptDecryptHelper.panel.curve.helper.getPointOnCurveFromString(text.text)
                    } catch (e: UnsupportedOperationException) {
                        JOptionPane.showMessageDialog(null, +"gui.notascii")
                        return
                    }
                    if (panel.curve is FiniteEllipticCurve) {
                        panel.changeColor(Color.RED)
                        panel.changePointSize(10)
                        for (pt in points) {
                            val x = EllipticSimulator.demodifyX(pt.x, panel)
                            val y = EllipticSimulator.demodifyY(pt.y, panel)
                            panel.drawPoint(Vec2i(x, y))
                        }
                        panel.changeColor(Color.BLACK)
                        panel.redraw()
                    } // else, it doesn't look good because of rounding
                    val stringResult = points.joinToString("\n") { "(${it.x}, ${it.y})" }
                    InformationalScreen(stringResult, true, +"gui.stringtopts").createAndShow()
                }
            }
        }
    }

    private object PtsToString : EllipticCurveWindow((EllipticCurveWindow.getScreenSize() / 4.5).vec2i()) {
        val okButton = JButton(+"gui.ok")
        val text = JTextArea()

        init {
            okButton.mnemonic = KeyEvent.VK_S
            okButton.actionCommand = "ok"
            okButton.setBounds(size.x * 1 / 2 - 200, size.y * 12 / 16, 400, 40)
            okButton.addActionListener(this)
            text.setBounds(0, 0, 800, 400)
            add(okButton)
            add(text)
        }

        override fun actionPerformed(e: ActionEvent?) {
            super.actionPerformed(e)
            when (e!!.actionCommand) {
                "ok" -> {
                    this.isVisible = false
                    var vectors = text.text.replace(+"decrypted" + ":", "").split("\n").filterNot { it.isBlank() }.map { Vec2d.of(it) }
                    if (vectors.any { it == null }) {
                        JOptionPane.showMessageDialog(null, +"gui.invalidpoints")
                        return
                    }
                    vectors = vectors.requireNoNulls().map { it.round(2) }
                    if (vectors.any { it !in panel.curve.helper.asciiGeneratorTable }) {
                        JOptionPane.showMessageDialog(null, +"gui.invalidpoints")
                        return
                    }
                    val stringResult = panel.curve.helper.getStringFromPointOnCurve(vectors)
                    InformationalScreen(stringResult, true, +"gui.ptstostring").createAndShow()
                }
            }
        }
    }

    private object Encryptor : EllipticCurveWindow((EllipticCurveWindow.getScreenSize() / 4.5).vec2i()) {
        val text = JTextArea()
        val pubKey = JTextField()
        val okButton = JButton(+"gui.ok")
        override fun updateTextForI18n() {
            super.updateTextForI18n()
            okButton.text = +"gui.ok"
        }

        init {
            okButton.mnemonic = KeyEvent.VK_S
            okButton.actionCommand = "ok"
            okButton.setBounds(size.x * 1 / 2 - 200, size.y * 12 / 16, 400, 40)
            okButton.addActionListener(this)
            text.setBounds(0, 50, 800, 400)
            pubKey.setBounds(0, 25, 800, 20)
            add(okButton)
            add(pubKey)
            add(text)
        }

        override fun actionPerformed(e: ActionEvent?) {
            super.actionPerformed(e)
            when (e!!.actionCommand) {
                "ok" -> {
                    this.isVisible = false
                    val bobKey = Vec2d.of(pubKey.text)
                    if (bobKey == null) {
                        InformationalScreen(+"gui.encryptdecrypthelper.invalidpubkey").createAndShow()
                        return
                    }
                    val vecs = text.text.split("\n").map {
                        Vec2d.of(it)
                    }
                    if (vecs.any { it == null }) {
                        JOptionPane.showMessageDialog(null, +"gui.invalidpoints")
                        return
                    }
                    val helper = panel.curve.helper
                    val k = if (panel.curve is FiniteEllipticCurve)
                        helper.rand.nextInt((panel.curve as FiniteEllipticCurve).modulus.toInt())
                    else helper.rand.nextInt(100)

                    val encrypted = vecs.requireNoNulls().map { panel.curve.helper.encrypt(it, bobKey, helper.agreedUponPt, k) }
                    val first = encrypted[0].first
                    val theRest = encrypted.map { it.second }
                    val stringText = "${+"shared"}: $first\n" + "${+"ordered"}: {${theRest.joinToString(";\n")}}"
                    InformationalScreen(stringText, true, +"gui.encryptor").createAndShow()
                }
            }
        }

    }

    private object Decryptor : EllipticCurveWindow((EllipticCurveWindow.getScreenSize() / 4.5).vec2i()) {
        val text = JTextArea()
        val privKey = JTextField()
        val okButton = JButton(+"gui.ok")
        override fun updateTextForI18n() {
            super.updateTextForI18n()
            okButton.text = +"gui.ok"
        }

        init {
            okButton.mnemonic = KeyEvent.VK_S
            okButton.actionCommand = "ok"
            okButton.setBounds(size.x * 1 / 2 - 200, size.y * 12 / 16, 400, 40)
            okButton.addActionListener(this)
            text.setBounds(0, 50, 800, 400)
            privKey.setBounds(0, 25, 800, 20)
            add(okButton)
            add(privKey)
            add(text)
        }

        override fun actionPerformed(e: ActionEvent?) {
            super.actionPerformed(e)
            when (e!!.actionCommand) {
                "ok" -> {
                    this.isVisible = false
                    val clean = listOf(+"ordered", +"shared", "{", "}", ":")
                    var str = text.text
                    for (item in clean) str = str.replace(item, "")
                    val lines = str.split("\n")
                    val first = Vec2d.of(lines[0])
                    val seconds = lines.subList(1, lines.size).joinToString("").split(";")
                            .filter { !it.isBlank() }.map { it.removeSurrounding(",").trim() }
                    val bobkey = privKey.text.toIntOrNull()
                    if (bobkey == null) {
                        JOptionPane.showMessageDialog(null, +"gui.invalidnumber")
                        return
                    }
                    if (seconds.any { !Vec2d.isValid(it) } || first == null) {
                        JOptionPane.showMessageDialog(null, +"gui.invalidpoints")
                        return
                    }
                    val decrypted = seconds.map { Vec2d.of(it)!! }.map { panel.curve.helper.decrypt(Pair(first, it), bobkey) }
                    val stringText = "${+"decrypted"}: \n${decrypted.joinToString("\n")}"
                    InformationalScreen(stringText, true, +"gui.decryptor").createAndShow()
                }
            }
        }

    }

    private object KeyCreator : EllipticCurveWindow((EllipticCurveWindow.getScreenSize() / 4.5).vec2i()) {
        val okButton = JButton(+"gui.ok")
        val text = JTextArea()

        init {
            okButton.mnemonic = KeyEvent.VK_S
            okButton.actionCommand = "ok"
            okButton.setBounds(size.x * 1 / 2 - 200, 0, 400, 40)
            okButton.addActionListener(this)
            text.setBounds(0, size.y * 4 / 16, 800, 400)
            add(okButton)
            add(text)
        }

        override fun actionPerformed(e: ActionEvent?) {
            super.actionPerformed(e)
            when (e!!.actionCommand) {
                "ok" -> {
                    this.isVisible = false
                    if (text.text.toIntOrNull() == null) {
                        InformationalScreen(+"gui.encryptdecrypthelper.invalidprivkey")
                        return
                    }
                    val k = text.text.toInt()
                    val pt = panel.curve.helper.createPublicKey(k, panel.curve.helper.agreedUponPt)
                    InformationalScreen(pt.toString(), true, this.title).createAndShow()
                }
            }
        }
    }

}