package eladkay.ellipticcurve.simulationengine

import eladkay.ellipticcurve.mathengine.EllipticCurve
import eladkay.ellipticcurve.mathengine.FiniteEllipticCurve
import eladkay.ellipticcurve.mathengine.Vec2d
import eladkay.ellipticcurve.mathengine.Vec2i
import kotlinx.css.Color

interface CurveFrame {
    fun drawPoint(vec2i: Vec2i)
    fun drawPoint(vec2i: Vec2i, size: Int)
    fun drawLine(a: Vec2i, b: Vec2i)
    fun drawLine(a: Vec2i, b: Vec2i, size: Float)
    @JsName("getFrameSize")
    fun frameSize(): Vec2i
    fun drawText(vec2i: Vec2i, string: String)
    fun changeColor(color: Color)
    fun changePointSize(int: Int)
    fun redraw()
    fun clear()
    fun addPointLines(vec2i: Vec2i)
    fun drawPointLineText(vec2i: Vec2i, string: String)
    fun clearPointLines()
    fun shouldShowLineOfSymmetry(boolean: Boolean)
    fun drawLineOfSymmetry(a: Vec2i, b: Vec2i)

    var curve: EllipticCurve

    fun serializeCurveFrame(): String {
        val scale = EllipticSimulator.scale
        val generator = curve.helper.generator
        val agreedUponPt = curve.helper.agreedUponPt
        val field = if (curve.field == EllipticCurve.REALS) "R" else curve.field.substring(1)
        return "${curve.aValue};${curve.bValue};$field;$scale;$generator;$agreedUponPt"
    }

    companion object {

        fun deserializeCurveFrame(string: String): EllipticCurve {
            val split = string.split(";")
            val field = split[2]
            EllipticSimulator.scale = split[3].toDouble()
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
