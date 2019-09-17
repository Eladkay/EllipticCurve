package eladkay.ellipticcurve.gui

import java.awt.Button
import java.awt.Color
import java.awt.Dimension
import java.awt.Point
import java.awt.event.ActionEvent
import java.awt.event.KeyEvent
import javax.swing.JButton
import javax.swing.JFrame
import javax.swing.JPanel

object MainScreen : EllipticCurveWindow((getScreenSize()*2)/3) {
    init {
        add(ButtonsPanel)
        //layout = null
        //pack()
    }

    override fun actionPerformed(e: ActionEvent?) {
        super.actionPerformed(e!!)
        when(e.actionCommand) {
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

            size = Dimension(((getScreenSize()*2)/3).x, ((getScreenSize()*4)/8).y)
            location = Point(0, ((getScreenSize()*1)/4).y)
            operationCalc.setBounds(getScreenSize().x/3, getScreenSize().y*7/8, 200, 50)
            add(operationCalc)
            operationCalc.location = Point(getScreenSize().x/3, getScreenSize().y*7/8)
            isOpaque = true
            operationCalc.addActionListener(MainScreen)
            //background = Color.BLACK
        }
    }
}