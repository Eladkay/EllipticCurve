package eladkay.ellipticcurve.simulationengine

import eladkay.ellipticcurve.mathengine.EllipticCurve
import eladkay.ellipticcurve.mathengine.Field
import eladkay.ellipticcurve.mathengine.Vec2i
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
    var curve: EllipticCurve
    operator fun <T> invoke(action: CurveFrame.() -> T) = action()

    fun serializeCurveFrame(): String {
        val curve = curve
        val scale = EllipticSimulator.scale
        val field = if(curve.field == Field.REALS) "R" else (curve.field as Field.ZpField).modulo.toString()
        return "${curve.aValue};${curve.bValue};$field;$scale"
    }

    companion object {

        fun deserializeCurveFrame(string: String): EllipticCurve {
            val split = string.split(";")
            val field = if(split[2] == "R") Field.REALS else Field.createModuloField(split[2].toInt())
            val curve = EllipticCurve(split[0].toDouble(), split[1].toDouble(), field)
            EllipticSimulator.scale = split[3].toInt()
            return curve
        }
    }


}
