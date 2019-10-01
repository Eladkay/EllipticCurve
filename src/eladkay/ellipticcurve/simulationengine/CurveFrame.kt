package eladkay.ellipticcurve.simulationengine

import eladkay.ellipticcurve.mathengine.Vec2i
import java.awt.Color

interface CurveFrame {
    fun drawPoint(vec2i: Vec2i)
    fun drawLine(a: Vec2i, b: Vec2i)
    fun frameSize(): Vec2i
    fun drawText(vec2i: Vec2i, string: String)
    fun changeColor(color: Color)
    operator fun <T> invoke(action: CurveFrame.() -> T) = action()
}