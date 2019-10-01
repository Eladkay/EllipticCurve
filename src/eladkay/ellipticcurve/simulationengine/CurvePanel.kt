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
import java.awt.geom.Line2D
import javax.swing.JPanel

class CurvePanel(val size: Vec2i, curve: EllipticCurve) : CurveFrame, JPanel() {


    var curve: EllipticCurve = curve
        set(newCurve) {
            clear()
            field = newCurve
        }

    init {
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

    override fun paint(g: Graphics?) {
        super.paint(g)

        // start handling by EllipticSimulator
        if(operations.isEmpty()) {
            EllipticSimulator.drawCurveApprox(curve, this, ::errorFunction, false)
            //EllipticSimulator.drawCurveApprox(EllipticCurve(-1.0, 1.0, Field.REALS), this, ::errorFunction, false)
            //drawCurve(EllipticCurve(4.0, 1.0, Field.createModuloField(5)), this, false)
            EllipticSimulator.drawAxis(this)
            EllipticSimulator.drawTicks(this)
        }

        // end handling by EllipticSimulator

        val g2 = g as Graphics2D
        g2.color = Color(0, 0, 0)
        for(operation in operations) {
            val (first, second) = operation
            if(first is Vec2i) {
                when (second) {
                    first -> g2.fillOval(first.x, first.y, 3, 3)
                    is Vec2i -> g2.draw(Line2D.Double(first.x.toDouble(), first.y.toDouble(), second.x.toDouble(), second.y.toDouble()))
                    is String -> g2.drawString(second, first.x, first.y)
                }
            }
        }
    }

    fun clear() {
        operations.clear()
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
}