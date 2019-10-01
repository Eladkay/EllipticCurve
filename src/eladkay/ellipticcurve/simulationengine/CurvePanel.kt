package eladkay.ellipticcurve.simulationengine

import eladkay.ellipticcurve.gui.EllipticCurveWindow
import eladkay.ellipticcurve.gui.OperationCalculator
import eladkay.ellipticcurve.mathengine.EllipticCurve
import eladkay.ellipticcurve.mathengine.Field
import eladkay.ellipticcurve.mathengine.Vec2d
import eladkay.ellipticcurve.mathengine.Vec2i
import java.awt.Color
import java.awt.Graphics
import java.awt.Graphics2D
import java.awt.event.MouseEvent
import java.awt.event.MouseListener
import java.awt.geom.Line2D
import javax.swing.JPanel
import kotlin.math.sign

class CurvePanel(val size: Vec2i, curve: EllipticCurve) : CurveFrame, JPanel(), MouseListener {



    var curve: EllipticCurve = curve
        set(newCurve) {
            clear()
            field = newCurve
        }

    init {
        addMouseListener(this)
        setBounds(0, 0, size.x, size.y);
        background = Color.gray;
    }

    override fun frameSize(): Vec2i {
        return size
    }

    val operations: MutableList<Pair<Any, Any>> = mutableListOf() // forgive me as i have sinned

    /**
     * Let (x,y) be a point on the grid, and e=error(x, y) be a real number.
     * Then (x,y) is colored in if and only if difference(x+e, x-e) is different in sign to difference(x-e, y-e)
     */
    private fun errorFunction(x: Double, y: Double): Double {
        return Math.min(Math.max(1/Math.log(Math.abs(x*y)+1)/50, 0.03) + if(y>0 && x>0) 0.15 else if(y>0 && x<0) 0.02 else 0.0, 0.17)

        // alternative approach
        /*if(x>0)
            if(y>0) 0.2 else 0.07
        else
            if(x<-0.1) 0.02 else 0.045*/
    }

    var redraw: Boolean = false

    override fun paint(g: Graphics?) {
        super.paint(g)

        // start handling by EllipticSimulator
        if(operations.isEmpty() || redraw) {
            EllipticSimulator.drawCurveApprox(curve, this, ::errorFunction, false)
            //EllipticSimulator.drawCurveApprox(EllipticCurve(-1.0, 1.0, Field.REALS), this, ::errorFunction, false)
            //drawCurve(EllipticCurve(4.0, 1.0, Field.createModuloField(5)), this, false)
            EllipticSimulator.drawAxis(this)
            EllipticSimulator.drawTicks(this)
            EllipticSimulator.drawGridlines(this)
            redraw = false
        }

        // end handling by EllipticSimulator

        val g2 = g as Graphics2D
        g2.color = Color(0, 0, 0)
        var size = 3
        for(operation in operations) {
            val (first, second) = operation
            if(first is Vec2i) {
                when (second) {
                    first -> g2.fillOval(first.x, first.y, size, size)
                    is Vec2i -> g2.draw(Line2D.Double(first.x.toDouble(), first.y.toDouble(), second.x.toDouble(), second.y.toDouble()))
                    is String -> g2.drawString(second, first.x, first.y)
                    else -> throw UnsupportedOperationException(operation.toString())
                }
            } else if(first is Color) {
                if(second == first) g2.color = first
                else throw UnsupportedOperationException(operation.toString())
            } else if(first is Int) {
                if(second == first) size = first
                else throw UnsupportedOperationException(operation.toString())
            } else throw UnsupportedOperationException(operation.toString())
        }
    }

    fun clear() {
        operations.clear()
    }

    fun redraw() {
        redraw = true
    }

    override fun drawPoint(vec2i: Vec2i) {
        operations.add(vec2i to vec2i)
    }

    override fun drawLine(a: Vec2i, b: Vec2i) {
        operations.add(a to b)
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

    override fun mouseReleased(e: MouseEvent?) { }

    override fun mouseEntered(e: MouseEvent?) { }

    override fun mouseExited(e: MouseEvent?) { }

    override fun mousePressed(e: MouseEvent) {
        val x = e.x
        val y = e.y
        val xModified = (x - frameSize().x / 2 - EllipticSimulator.X_OFFSET) / EllipticSimulator.defaultXScale.toDouble()
        val yModified = (-y + frameSize().y / 2) / EllipticSimulator.defaultYScale.toDouble()
        var condition = curve.isPointOnCurve(Vec2d(xModified, yModified))
        val errorTerm = errorFunction(xModified, yModified)*Math.sin(Math.PI/4) // this can but should not be replaced with 1/sqrt2.
        if (!condition && curve.difference(xModified + errorTerm, yModified + errorTerm).sign
                != curve.difference(xModified - errorTerm, yModified - errorTerm).sign)
            condition = true;


        changeColor(Color.GREEN)
        changePointSize(5)
        if(condition) drawPoint(Vec2i(x, y))
        changeColor(Color.BLACK)
        changePointSize(3)
        repaint()
    }

    override fun mouseClicked(e: MouseEvent) { }
}