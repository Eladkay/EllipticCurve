package eladkay.ellipticcurve.gui

import eladkay.ellipticcurve.mathengine.EllipticCurve
import eladkay.ellipticcurve.mathengine.Field
import eladkay.ellipticcurve.mathengine.Vec2d
import eladkay.ellipticcurve.mathengine.Vec2i
import eladkay.ellipticcurve.simulationengine.CurveFrame
import eladkay.ellipticcurve.simulationengine.EllipticSimulator
import eladkay.ellipticcurve.simulationengine.EllipticSimulator.drawAxis
import eladkay.ellipticcurve.simulationengine.EllipticSimulator.drawCurve
import java.awt.Color
import java.awt.Graphics
import java.awt.Graphics2D
import java.awt.geom.Line2D
import javax.swing.JPanel

object OperationCalculator : EllipticCurveWindow(getScreenSize()) {


    private object CurvePanel : CurveFrame, JPanel() {


        override fun frameSize(): Vec2i {
            return Vec2i(size.width, size.height)
        }

        val points: MutableList<Vec2i> = mutableListOf()
        val lines: MutableList<Pair<Vec2i, Vec2i>> = mutableListOf()
        val strings: MutableList<Pair<Vec2i, String>> = mutableListOf()

        override fun paint(g: Graphics?) {
            super.paint(g)
            drawCurve(EllipticCurve(-1.0, 1.0, Field.REALS), this)
            drawAxis(this)
            val g2 = g as Graphics2D
            g2.color = Color(0, 0, 0)
            for(line in lines)
                g2.draw(Line2D.Double(line.first.x.toDouble(), line.first.y.toDouble(), line.second.x.toDouble(), line.second.y.toDouble()))
            for(point in points)
                g2.fillOval(point.x, point.y, 6, 6)
            for(string in strings)
                g2.drawString(string.second, string.first.x, string.first.y)
            points.clear()
            lines.clear()
            strings.clear()
        }
        override fun drawPoint(vec2i: Vec2i) {
            points.add(vec2i)
        }

        override fun drawLine(a: Vec2i, b: Vec2i) {
            lines.add(a to b)
        }
        override fun drawText(vec2i: Vec2i, string: String) {
            strings.add(vec2i to string)
        }
    }

    init {
        contentPane.add(CurvePanel)
    }


}