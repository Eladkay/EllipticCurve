package eladkay.ellipticcurve.gui

import java.awt.Dimension
import java.awt.Point
import java.awt.event.ActionEvent
import java.awt.event.KeyEvent
import javax.swing.*

object MainScreen : EllipticCurveWindow((getScreenSize() * 2) / 3) {
    val operationCalc = JButton(+"gui.operationcalculator")
    val encryptionHelper = JButton(+"gui.encryptionHelper")
    val studyHelper = JButton(+"gui.studyHelper")
    val titleL1 = JLabel(+"gui.welcomeL1")
    val titleL2 = JLabel(+"gui.welcomeL2")
    val jComboBox = JComboBox(languages.toTypedArray())

    init {
        defaultCloseOperation = JFrame.EXIT_ON_CLOSE

        operationCalc.mnemonic = KeyEvent.VK_C
        operationCalc.actionCommand = "operationcalculator"
        operationCalc.setBounds(size.x * 1 / 12, size.y * 7 / 8, 200, 40)
        operationCalc.addActionListener(MainScreen)
        add(operationCalc)


        encryptionHelper.mnemonic = KeyEvent.VK_E
        encryptionHelper.actionCommand = "encryptionHelper"
        encryptionHelper.setBounds(size.x * 9 / 24, size.y * 7 / 8, 200, 40)
        encryptionHelper.addActionListener(MainScreen)
        add(encryptionHelper)


        studyHelper.mnemonic = KeyEvent.VK_S
        studyHelper.actionCommand = "studyHelper"
        studyHelper.setBounds(size.x * 2 / 3, size.y * 7 / 8, 200, 40)
        studyHelper.addActionListener(MainScreen)
        add(studyHelper)

        titleL1.setBounds(size.x * 28 / 81, size.y * 1 / 8, 400, 40)
        titleL1.font = titleL1.font.deriveFont(18f)
        add(titleL1)

        titleL2.setBounds(size.x * 29 / 81, size.y * 5 / 32, 400, 40)
        titleL2.font = titleL2.font.deriveFont(18f)
        add(titleL2)

        jComboBox.setBounds(size.x * 60 / 81, size.y * 2 / 32, 200, 40)
        jComboBox.font = jComboBox.font.deriveFont(18f)
        jComboBox.actionCommand = "changelang"
        jComboBox.addActionListener(this)
        add(jComboBox)
    }

    override fun updateTextForI18n() {
        super.updateTextForI18n()
        operationCalc.text = +"gui.operationcalculator"
        encryptionHelper.text = +"gui.encryptionHelper"
        studyHelper.text = +"gui.studyHelper"
        titleL1.text = +"gui.welcomeL1"
        titleL2.text = +"gui.welcomeL2"
    }

    override fun actionPerformed(e: ActionEvent?) {
        super.actionPerformed(e!!)
        when (e.actionCommand) {
            "operationcalculator" -> OperationCalculator.createAndShow()
            "changelang" -> {
                currentLoc = VALID_LOCS.first { getTranslatedString("this", it) == (e.source as? JComboBox<String>)?.selectedItem }
                EllipticCurveWindow.updateI18n()
            }
        }
    }

    private object ButtonsPanel : JPanel() {
        init {
            val operationCalc = JButton(+"gui.operationcalculator")
            //layout = null
            operationCalc.mnemonic = KeyEvent.VK_C
            operationCalc.actionCommand = "operationcalculator"
            operationCalc.size = Dimension(200, 50)

            size = Dimension(((getScreenSize() * 2) / 3).x, ((getScreenSize() * 4) / 8).y)
            location = Point(0, ((getScreenSize() * 1) / 4).y)
            operationCalc.setBounds(getScreenSize().x / 3, getScreenSize().y * 7 / 8, 200, 50)
            add(operationCalc)
            operationCalc.location = Point(getScreenSize().x / 3, getScreenSize().y * 7 / 8)
            isOpaque = true
            operationCalc.addActionListener(MainScreen)
            //background = Color.BLACK
        }
    }
}