package eladkay.ellipticcurve.gui

import java.awt.event.ActionEvent
import java.awt.event.KeyEvent
import javax.swing.JButton
import javax.swing.JComboBox
import javax.swing.JFrame
import javax.swing.JLabel

object MainScreen : EllipticCurveWindow((getScreenSize() * 2) / 3) {
    private val operationCalc = JButton(+"gui.operationcalculator")
    private val encryptionHelper = JButton(+"gui.encryptdecrypthelper")
    private val titleL1 = JLabel(+"gui.welcomeL1")
    private val titleL2 = JLabel(+"gui.welcomeL2")
    private val jComboBox = JComboBox(languages.toTypedArray())

    init {
        defaultCloseOperation = JFrame.EXIT_ON_CLOSE

        operationCalc.mnemonic = KeyEvent.VK_C
        operationCalc.actionCommand = "operationcalculator"
        operationCalc.setBounds(size.x * 1 / 12, size.y * 7 / 8, 200, 40)
        operationCalc.addActionListener(MainScreen)
        add(operationCalc)


        encryptionHelper.mnemonic = KeyEvent.VK_E
        encryptionHelper.actionCommand = "encryptionhelper"
        encryptionHelper.setBounds(size.x * 2 / 3, size.y * 7 / 8, 200, 40)
        encryptionHelper.addActionListener(MainScreen)
        add(encryptionHelper)


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
        if (ALLOW_LANG_CHANGE) add(jComboBox)
    }

    override fun updateTextForI18n() {
        super.updateTextForI18n()
        operationCalc.text = +"gui.operationcalculator"
        encryptionHelper.text = +"gui.encryptdecrypthelper"
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
            "encryptionhelper" -> EncryptDecryptHelper.createAndShow()
        }
    }

}