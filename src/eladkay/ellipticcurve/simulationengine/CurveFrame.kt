package eladkay.ellipticcurve.simulationengine

import eladkay.ellipticcurve.mathengine.*
import eladkay.ellipticcurve.mathengine.elliptic.EllipticCurve
import eladkay.ellipticcurve.mathengine.elliptic.FiniteEllipticCurve
import java.awt.Color

interface CurveFrame {
    fun drawPoint(vec2i: Vec2i)
    fun drawPoint(vec2i: Vec2i, size: Int)
    fun drawLine(a: Vec2i, b: Vec2i)
    fun drawLine(a: Vec2i, b: Vec2i, size: Float)
    fun frameSize(): Vec2i
    fun drawText(vec2i: Vec2i, string: String)
    fun changeColor(color: Color)
    fun changePointSize(int: Int)
    fun redraw()
    fun clear()
    fun addPointLines(vec2i: Vec2i)
    fun drawPointLineText(vec2i: Vec2i, string: String)
    fun clearPointLines()
    fun shouldShowLineOfSymmetry(boolean: Boolean) {

    }
    fun drawLineOfSymmetry(a: Vec2i, b: Vec2i) {

    }

    var curveRepresented: Curve

    fun serializeCurveFrame(): String {
        if(curveRepresented !is EllipticCurve) throw Exception("not elliptic")
        val eCurve = curveRepresented as EllipticCurve
        val scale = FunctionSimulator.scale
        val generator = eCurve.helper.generator
        val agreedUponPt = eCurve.helper.agreedUponPt
        val field = if (eCurve.field == EllipticCurve.REALS) "R" else eCurve.field.substring(1)
        return "${eCurve.aValue};${eCurve.bValue};$field;$scale;$generator;$agreedUponPt"
    }

    companion object {

        fun deserializeCurveFrame(string: String): EllipticCurve {
            val split = string.split(";")
            val field = split[2]
            FunctionSimulator.scale = split[3].toDouble()
            val generator = Vec2d.of(split[4])
            val agreedUpon = Vec2d.of(split[5])
            val curve = if (field == "R")
                EllipticCurve(split[0].toLong(), split[1].toLong(), EllipticCurve.REALS)
            else FiniteEllipticCurve(split[0].toLong(), split[1].toLong(), split[2].toLong())
            curve.helper.generator = generator!!
            curve.helper.agreedUponPt = agreedUpon!!
            return curve
        }
    }


}
