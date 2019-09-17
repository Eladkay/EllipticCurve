package eladkay.ellipticcurve.simulationengine

import eladkay.ellipticcurve.mathengine.EllipticCurve
import eladkay.ellipticcurve.mathengine.Vec2d
import eladkay.ellipticcurve.mathengine.Vec2i

object EllipticSimulator {
    val X_OFFSET = -200
    fun drawCurve(ellipticCurve: EllipticCurve, frame: CurveFrame, xScale: Int = 180, yScale: Int = 40) {
        ellipticCurve.field {
            var last: Vec2i? = null
            for(x in 0..frame.frameSize().x)
                for(y in 0..frame.frameSize().y) {
                    val xModified = (x - frame.frameSize().x/2 - X_OFFSET)/xScale.toDouble()
                    val yModified = (-y + frame.frameSize().y/2)/yScale.toDouble()
                    if(ellipticCurve.isPointOnCurve(Vec2d(xModified, yModified))) {
                        frame.drawPoint(Vec2i(x, y))
                        frame.drawText(Vec2i(x, y), "(${xModified}, $yModified)")
                        /*if(last != null) frame.drawLine(Vec2i(x, y), last)
                        last = Vec2i(x, y)*/
                    }
                }
        }
    }

    fun drawAxis(frame: CurveFrame) {
        frame.drawLine(Vec2i(0, frame.frameSize().y/2), Vec2i(frame.frameSize().x, frame.frameSize().y/2))
        frame.drawLine(Vec2i(frame.frameSize().x/2+X_OFFSET, 0), Vec2i(frame.frameSize().x/2+X_OFFSET, frame.frameSize().y))
    }

}
