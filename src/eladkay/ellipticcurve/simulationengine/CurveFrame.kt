package eladkay.ellipticcurve.simulationengine

import eladkay.ellipticcurve.mathengine.EllipticCurve
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
}