package eladkay.ellipticcurve.simulationengine

import eladkay.ellipticcurve.mathengine.Vec2i

interface CurveFrame {
    fun drawPoint(vec2i: Vec2i)
    fun drawLine(a: Vec2i, b: Vec2i)
    fun frameSize(): Vec2i
    fun drawText(vec2i: Vec2i, string: String)
    operator fun <T> invoke(action: CurveFrame.()->T) = action()
}