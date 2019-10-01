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

    val points: MutableList<Vec2i> = mutableListOf()
    val lines: MutableList<Pair<Vec2i, Vec2i>> = mutableListOf()
    val strings: MutableList<Pair<Vec2i, String>> = mutableListOf()


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
        if(points.isEmpty()) {
            EllipticSimulator.drawCurveApprox(curve, this, ::errorFunction, false)
            //EllipticSimulator.drawCurveApprox(EllipticCurve(-1.0, 1.0, Field.REALS), this, ::errorFunction, false)
            //drawCurve(EllipticCurve(4.0, 1.0, Field.createModuloField(5)), this, false)
            EllipticSimulator.drawAxis(this)
            EllipticSimulator.drawTicks(this)
        }

        // end handling by EllipticSimulator

        val g2 = g as Graphics2D
        g2.color = Color(0, 0, 0)
        for (line in lines)
            g2.draw(Line2D.Double(line.first.x.toDouble(), line.first.y.toDouble(), line.second.x.toDouble(), line.second.y.toDouble()))
        for (point in points)
            g2.fillOval(point.x, point.y, 3, 3)
        for (string in strings)
            g2.drawString(string.second, string.first.x, string.first.y)
    }

    fun clear() {
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