import eladkay.ellipticcurve.mathengine.EllipticCurve
import eladkay.ellipticcurve.mathengine.EllipticCurve.Companion.REALS
import eladkay.ellipticcurve.mathengine.Vec2i
import eladkay.ellipticcurve.simulationengine.CurvePanelJs
import kotlinx.browser.document
import kotlinx.browser.window
import org.w3c.dom.*
import kotlin.js.Date

lateinit var panel: CurvePanelJs
lateinit var aSlider: HTMLInputElement
lateinit var bSlider: HTMLInputElement

fun main() {
    println(Date())
    val body = document.getElementsByTagName("BODY")[0] as HTMLBodyElement
    body.onload = {
        val canvas = document.createElement("CANVAS") as HTMLCanvasElement
        canvas.setAttribute("id", "curveframejs")
        canvas.height = (window.screen.height * 5)/6
        canvas.width = window.screen.width
        body.appendChild(canvas)
        val curve = EllipticCurve(1, -1, REALS)
        panel = CurvePanelJs(curve, Vec2i(body.clientHeight, body.clientWidth))

        aSlider = document.createElement("INPUT") as HTMLInputElement
        aSlider.setAttribute("id", "aslider")
        aSlider.setAttribute("type", "range")
        aSlider.height = 40
        aSlider.width = 200
        aSlider.style.top = "${window.screen.height/6}px"
        aSlider.oninput = {
            redrawCurve(aSlider.valueAsNumber.toLong(), bSlider.valueAsNumber.toLong())
        }
        body.appendChild(aSlider)

        bSlider = document.createElement("INPUT") as HTMLInputElement
        bSlider.setAttribute("id", "bslider")
        bSlider.setAttribute("type", "range")
        bSlider.height = 40
        bSlider.width = 200
        bSlider.style.top = "${window.screen.height/6}px"
        bSlider.style.left = "${(window.screen.width*5)/6}px"
        bSlider.oninput = {
            redrawCurve(aSlider.valueAsNumber.toLong(), bSlider.valueAsNumber.toLong())
        }
        body.appendChild(bSlider)

        println(document.getElementsByTagName("INPUT").length)
    }
}

fun redrawCurve(a: Long, b: Long) {
    val newCurve = EllipticCurve(a, b, REALS)
    panel.curve = newCurve
    panel.redraw()
}
