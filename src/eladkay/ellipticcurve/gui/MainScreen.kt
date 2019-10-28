package eladkay.ellipticcurve.gui

import java.awt.Dimension
import java.awt.Point
import java.awt.event.ActionEvent
import java.awt.event.KeyEvent
import javax.swing.JButton
import javax.swing.JFrame
import javax.swing.JLabel
import javax.swing.JPanel

object MainScreen : EllipticCurveWindow((getScreenSize() * 2) / 3) {
    init {
        defaultCloseOperation = JFrame.EXIT_ON_CLOSE

        val operationCalc = JButton(+"gui.operationcalculator")
        operationCalc.mnemonic = KeyEvent.VK_C
        operationCalc.actionCommand = "operationcalculator"
        operationCalc.setBounds(size.x * 1 / 12, size.y * 7 / 8, 200, 40)
        operationCalc.addActionListener(MainScreen)
        add(operationCalc)


        val encryptionHelper = JButton(+"gui.encryptionHelper")
        encryptionHelper.mnemonic = KeyEvent.VK_E
        encryptionHelper.actionCommand = "encryptionHelper"
        encryptionHelper.setBounds(size.x * 9 / 24, size.y * 7 / 8, 200, 40)
        encryptionHelper.addActionListener(MainScreen)
        add(encryptionHelper)


        val studyHelper = JButton(+"gui.studyHelper")
        studyHelper.mnemonic = KeyEvent.VK_S
        studyHelper.actionCommand = "studyHelper"
        studyHelper.setBounds(size.x * 2 / 3, size.y * 7 / 8, 200, 40)
        studyHelper.addActionListener(MainScreen)
        add(studyHelper)

        val titleL1 = JLabel(+"gui.welcomeL1")
        titleL1.setBounds(size.x * 28 / 81, size.y * 1 / 8, 400, 40)
        titleL1.font = titleL1.font.deriveFont(18f)
        add(titleL1)

        val titleL2 = JLabel(+"gui.welcomeL2")
        titleL2.setBounds(size.x * 29 / 81, size.y * 5 / 32, 400, 40)
        titleL2.font = titleL2.font.deriveFont(18f)
        add(titleL2)
    }

    override fun actionPerformed(e: ActionEvent?) {
        super.actionPerformed(e!!)
        when (e.actionCommand) {
            "operationcalculator" -> OperationCalculator.createAndShow()
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