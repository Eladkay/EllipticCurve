package eladkay.ellipticcurve.simulationengine

import eladkay.ellipticcurve.mathengine.EllipticCurve
import eladkay.ellipticcurve.mathengine.Vec2i
import kotlinx.css.Color
import kotlinx.css.canvas
import kotlinx.dom.clear
import kotlinx.html.CANVAS
import kotlinx.html.TagConsumer
import org.w3c.dom.CanvasRenderingContext2D
import org.w3c.dom.HTMLCanvasElement

//CANVAS(mapOf("width" to frameSize.x.toString(), "height" to frameSize.y.toString()), consumer)
class CurvePanelJs(override var curve: EllipticCurve, private val frameSize: Vec2i) : CurveFrame {

    private var size: Int = 3
    private var color: Color = Color.black
    private var lineOfSymmetry: Boolean = false
    private val ctx = js("document.getElementById(\"curveframejs\").getContext(\"2d\");") as CanvasRenderingContext2D

    init {
        draw()
    }

    fun draw() {
        EllipticSimulator.drawAxis(this)
        EllipticSimulator.drawCurveApprox(curve, this, 0.035 + (EllipticSimulator.scale - 1) / 32.0, false)
    }


    override fun drawPoint(vec2i: Vec2i) {
        drawPoint(vec2i, size)
    }

    override fun drawPoint(vec2i: Vec2i, size: Int) {
        val oldStyle = ctx.fillStyle
        ctx.fillStyle = "#${color.value}"
        ctx.fillRect(vec2i.x - size/2.0, vec2i.y - size/2.0, size.toDouble(), size.toDouble())
        ctx.fillStyle = oldStyle
        ctx.stroke()
    }

    override fun drawLine(a: Vec2i, b: Vec2i) {
        drawLine(a, b, size.toFloat())
    }

    override fun drawLine(a: Vec2i, b: Vec2i, size: Float) {
        ctx.moveTo(a.x.toDouble(), a.y.toDouble())
        ctx.lineTo(b.x.toDouble(), b.y.toDouble())
        ctx.stroke()
    }

    override fun frameSize(): Vec2i {
        return frameSize
    }

    override fun drawText(vec2i: Vec2i, string: String) {
        val oldFont = ctx.font
        ctx.font = "${size}px Arial"
        ctx.fillText(string, vec2i.x.toDouble(), vec2i.y.toDouble())
        ctx.font = oldFont
    }

    override fun changeColor(color: Color) {
        this.color = color
    }

    override fun changePointSize(int: Int) {
        size = int
    }

    override fun redraw() {
        clear()
        draw()
    }

    override fun clear() {
        color = Color.black
        size = 3
        ctx.clearRect(0.0, 0.0, frameSize.x.toDouble(), frameSize.y.toDouble())
    }

    override fun addPointLines(vec2i: Vec2i) {
        TODO("Not yet implemented")
    }

    override fun drawPointLineText(vec2i: Vec2i, string: String) {
        TODO("Not yet implemented")
    }

    override fun clearPointLines() {
        TODO("Not yet implemented")
    }

    override fun shouldShowLineOfSymmetry(boolean: Boolean) {
        lineOfSymmetry = boolean
    }

    override fun drawLineOfSymmetry(a: Vec2i, b: Vec2i) {
        TODO("Not yet implemented")
    }
}