package eladkay.ellipticcurve.simulationengine

import eladkay.ellipticcurve.mathengine.EllipticCurve
import eladkay.ellipticcurve.mathengine.FiniteEllipticCurve
import eladkay.ellipticcurve.mathengine.Vec2i
import java.awt.BasicStroke
import java.awt.Color
import java.awt.Graphics
import java.awt.Graphics2D
import java.awt.geom.Line2D
import javax.swing.JPanel

class CurvePanel(private val size: Vec2i, curve: EllipticCurve) : CurveFrame, JPanel() {


    override var curve: EllipticCurve = curve
        set(newCurve) {
            clear()
            field = newCurve
            redraw()
        }

    init {
        setBounds(0, 0, size.x, size.y)
        background = Color.lightGray
    }


    /**
     * -----List of legal operations-----
     * First is Vec2i:
     * **Second is also a Vec2i: if the first and the second are equal, draw a dot at that point. Else, draw a line
     *                          between them.
     * **Second is a String: write that string at that point.
     * **Second is an Int: draw a dot at that point with the size given by the int.
     * First is a Color:
     * **Second is the same Color: change the drawing color to that color.
     * First is a Int:
     * **Second is the same Int: change the size of drawing to that int.
     * First is itself a Pair:
     * **Both its elements are Vec2is and the second is a Float: draw a line between the elements of the pair with width
     *                                                          given by the float.
     * ----------------------------------
     */
    private val operations: MutableList<Pair<Any, Any>> = mutableListOf()


    private var redraw: Boolean = false
    var gridsAndTicks: Boolean = false
    private val pointLines = mutableListOf<Vec2i>()
    private val pointText = mutableListOf<Pair<Vec2i, String>>()
    private val linesOfSymmetry = mutableListOf<Pair<Vec2i, Vec2i>>()
    override fun paint(g: Graphics?) {
        super.paint(g)

        // start handling by EllipticSimulator

        if (operations.isEmpty() || redraw) {
            if (curve is FiniteEllipticCurve) {
                changePointSize(5)
                EllipticSimulator.drawFiniteCurve(curve as FiniteEllipticCurve, this, false)
            } else EllipticSimulator.drawCurveApprox(curve, this, 0.035 + (EllipticSimulator.scale - 1) / 32.0, false)

            EllipticSimulator.drawAxis(this)
            if (gridsAndTicks) {
                EllipticSimulator.drawTicks(this)
                EllipticSimulator.drawGridlines(this)
            }
            if (showLineOfSymmetry) {
                EllipticSimulator.drawLineOfSymmetry(this)
            }
            redraw = false
        }

        // end handling by EllipticSimulator

        // start drawing auxiliary shapes

        val g2 = g as Graphics2D
        g2.color = Color.BLACK
        var size = 3
        for (operation in operations) {
            val (first, second) = operation
            when (first) {
                is Vec2i -> when (second) {
                    first -> g2.fillOval(first.x, first.y, size, size)
                    is Vec2i -> g2.draw(Line2D.Double(first.x.toDouble(), first.y.toDouble(), second.x.toDouble(), second.y.toDouble()))
                    is String -> g2.drawString(second, first.x, first.y)
                    is Int -> g2.fillOval(first.x, first.y, second, second)
                    else -> throw UnsupportedOperationException(operation.toString())
                }
                is Color -> if (second == first) g2.color = first else throw UnsupportedOperationException(operation.toString())
                is Int -> if (second == first) size = first else throw UnsupportedOperationException(operation.toString())
                is Pair<*, *> -> {
                    val (v1, v2) = first
                    if (v1 is Vec2i && v2 is Vec2i && second is Float) {
                        val stroke = g2.stroke
                        g2.stroke = BasicStroke(second)
                        g2.draw(Line2D.Double(v1.x.toDouble(), v1.y.toDouble(), v2.x.toDouble(), v2.y.toDouble()))
                        g2.stroke = stroke
                    } else throw UnsupportedOperationException(operation.toString())
                }
                else -> throw UnsupportedOperationException(operation.toString())
            }
        }

        for (line in pointLines) {
            g2.color = Color.MAGENTA
            g2.draw(Line2D.Double(line.x.toDouble(), 0.0, line.x.toDouble(), this.size.y.toDouble()))
            g2.draw(Line2D.Double(0.0, line.y.toDouble(), this.size.x.toDouble(), line.y.toDouble()))
        }

        for (text in pointText) {
            g2.drawString(text.second, text.first.x + 5, text.first.y)
            g2.color = Color.BLACK
        }

        for (p in linesOfSymmetry) {
            g2.color = Color.RED
            g2.draw(Line2D.Double(p.first.x.toDouble(), p.first.y.toDouble(), p.second.x.toDouble(), p.second.y.toDouble()))
            g2.color = Color.BLACK
        }

        changeColor(Color.BLACK)

        // end drawing auxiliary shapes
    }

    // start methods for CurveFrame impl

    override fun clear() {
        operations.clear()
    }

    override fun redraw() {
        redraw = true
        repaint()
    }

    override fun drawPoint(vec2i: Vec2i) {
        val size = 3
        operations.add(Vec2i(vec2i.x - size / 2, vec2i.y - size / 2) to Vec2i(vec2i.x - size / 2, vec2i.y - size / 2))
    }

    override fun drawPoint(vec2i: Vec2i, size: Int) {
        operations.add(Vec2i(vec2i.x - size / 2, vec2i.y - size / 2) to size)
    }

    override fun drawLine(a: Vec2i, b: Vec2i) {
        operations.add(a to b)
    }

    override fun drawLine(a: Vec2i, b: Vec2i, size: Float) {
        operations.add((a to b) to size)
    }

    override fun drawText(vec2i: Vec2i, string: String) {
        operations.add(vec2i to string)
    }

    override fun changeColor(color: Color) {
        operations.add(color to color)
    }

    override fun changePointSize(int: Int) {
        operations.add(int to int)
    }

    override fun frameSize(): Vec2i {
        return size
    }

    override fun clearPointLines() {
        pointLines.clear()
        pointText.clear()
    }

    override fun addPointLines(vec2i: Vec2i) {
        pointLines.add(vec2i)
    }

    override fun drawPointLineText(vec2i: Vec2i, string: String) {
        pointText.add(vec2i to string)
    }

    override fun drawLineOfSymmetry(a: Vec2i, b: Vec2i) {
        linesOfSymmetry.add(Pair(a, b))
    }

    private var showLineOfSymmetry: Boolean = false
    override fun shouldShowLineOfSymmetry(boolean: Boolean) {
        showLineOfSymmetry = boolean
        linesOfSymmetry.clear()
    }

    // end methods for CurveFrame impl

}
