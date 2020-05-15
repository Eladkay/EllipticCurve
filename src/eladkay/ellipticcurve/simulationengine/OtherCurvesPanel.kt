package eladkay.ellipticcurve.simulationengine

import eladkay.ellipticcurve.mathengine.Curve
import eladkay.ellipticcurve.mathengine.DiscreteCurve
import eladkay.ellipticcurve.mathengine.Vec2i
import java.awt.BasicStroke
import java.awt.Color
import java.awt.Graphics
import java.awt.Graphics2D
import java.awt.geom.Line2D
import javax.swing.JPanel

class OtherCurvesPanel(private val size: Vec2i, override var curveRepresented: Curve) : CurveFrame, JPanel() {

    init {
        setBounds(0, 0, size.x, size.y)
        background = Color.lightGray
    }

    private val points = mutableMapOf<Vec2i, Int>()
    var pointSize = 3
    private val lines = mutableMapOf<Pair<Vec2i, Vec2i>, Float>()
    private val text = mutableMapOf<Vec2i, String>()
    private val pointLines = mutableListOf<Vec2i>()
    private val pointText = mutableMapOf<Vec2i, String>()
    var gridsAndTicks = false
    override fun paint(g: Graphics?) {
        super.paint(g)

        if (redraw) {
            println("hi")
            if (curveRepresented is DiscreteCurve) {
                FunctionSimulator.drawDiscreteCurve(curveRepresented as DiscreteCurve, this, false)
            } else FunctionSimulator.drawCurveApprox(curveRepresented, this, 0.035 + (FunctionSimulator.scale - 1) / 32.0, false)

            FunctionSimulator.drawAxis(this)
            if (gridsAndTicks) {
                FunctionSimulator.drawTicks(this)
                FunctionSimulator.drawGridlines(this)
            }
            redraw = false
        }
        val g2 = g as Graphics2D
        for(point in points) g2.fillOval(point.key.x, point.key.y, point.value, point.value)
        for(line in lines) {
            val stroke = g2.stroke
            val (first, second) = line
            val (v1, v2) = first
            g2.stroke = BasicStroke(second)
            g2.draw(Line2D.Double(v1.x.toDouble(), v1.y.toDouble(), v2.x.toDouble(), v2.y.toDouble()))
            g2.stroke = stroke
        }
        for(str in text) g2.drawString(str.value, str.key.x, str.key.y)
        for(line in pointLines) {
            val stroke = g2.stroke
            val (v1, v2) = line
            g2.stroke = BasicStroke(pointSize.toFloat())
            g2.draw(Line2D.Double(0.0, v2.toDouble(), frameSize().x.toDouble(), v2.toDouble()))
            g2.draw(Line2D.Double(v1.toDouble(), 0.0, v1.toDouble(), frameSize().y.toDouble()))
            g2.stroke = stroke
        }
        for(str in pointText) g2.drawString(str.value, str.key.x, str.key.y)
    }

    override fun drawPoint(vec2i: Vec2i) {
        points[vec2i] = pointSize
    }

    override fun drawPoint(vec2i: Vec2i, size: Int) {
        points[vec2i] = size
    }

    override fun drawLine(a: Vec2i, b: Vec2i) {
        lines[a to b] = pointSize.toFloat()
    }

    override fun drawLine(a: Vec2i, b: Vec2i, size: Float) {
        lines[a to b] = size
    }

    override fun frameSize(): Vec2i {
        return size
    }

    override fun drawText(vec2i: Vec2i, string: String) {
        text[vec2i] = string
    }

    override fun changeColor(color: Color) {
        // not implemented
    }

    override fun changePointSize(int: Int) {
        pointSize = int
    }

    private var redraw = true
    override fun redraw() {
        redraw = true
        repaint()
    }

    override fun clear() {
        points.clear()
        lines.clear()
        text.clear()
        pointSize = 3
    }

    override fun addPointLines(vec2i: Vec2i) {
        pointLines.add(vec2i)
    }

    override fun drawPointLineText(vec2i: Vec2i, string: String) {
        pointText[vec2i] = string
    }

    override fun clearPointLines() {
        pointLines.clear()
        pointText.clear()
    }

}