package eladkay.ellipticcurve.simulationengine

import eladkay.ellipticcurve.mathengine.EllipticCurve
import eladkay.ellipticcurve.mathengine.Vec2d
import eladkay.ellipticcurve.mathengine.Vec2i
import kotlin.math.sign

object EllipticSimulator {
    var X_OFFSET = -700
    fun drawCurve(ellipticCurve: EllipticCurve, frame: CurveFrame, drawText: Boolean, xScale: Int = 180, yScale: Int = 7) {
        ellipticCurve.field {
            for (x in 0..frame.frameSize().x)
                for (y in 0..frame.frameSize().y) {
                    val xModified = (x - frame.frameSize().x / 2 - X_OFFSET) / xScale.toDouble()
                    val yModified = (-y + frame.frameSize().y / 2) / yScale.toDouble()
                    // hmm, not so sure about this. todo
                    if (ellipticCurve.isPointOnCurve(Vec2d(xModified, yModified)) || ellipticCurve.isPointOnCurve(Vec2d(realsToField(xModified), realsToField(yModified)))) {
                        frame.drawPoint(Vec2i(x, y))
                        if (drawText) frame.drawText(Vec2i(x, y), "($xModified, $yModified)")
                    }
                }
        }
    }

    fun drawCurveApprox(ellipticCurve: EllipticCurve, frame: CurveFrame, error: Double, drawText: Boolean, xScale: Int = 180, yScale: Int = 7) {
        drawCurveApprox(ellipticCurve, frame, { _, _ -> error }, drawText, xScale, yScale)
    }

    // i need to fix this. i can't just keep making the error larger and larger, it results in a thick curve
    // which is not really what i want. complex error functions like OperationCalculator.CurvePanel#errorFunction
    // are a temporary solution that only work for one specific curve and make other curves look disproportionate
    // i have, for posterity, attached a sketch of the function of the error part of drawCurveApprox:
    // https://i.imgur.com/8u49qkS.jpg
    fun drawCurveApprox(ellipticCurve: EllipticCurve, frame: CurveFrame, error: (Double, Double) -> Double, drawText: Boolean, xScale: Int = 180, yScale: Int = 7) {
        ellipticCurve.field {
            for (x in 0..frame.frameSize().x)
                for (y in 0..frame.frameSize().y) {
                    val xModified = (x - frame.frameSize().x / 2 - X_OFFSET) / xScale.toDouble()
                    val yModified = (-y + frame.frameSize().y / 2) / yScale.toDouble()
                    if(yModified < 0) continue

                    // hmm, not so sure about this. todo
                    var condition = ellipticCurve.isPointOnCurve(Vec2d(xModified, yModified))
                            || ellipticCurve.isPointOnCurve(Vec2d(realsToField(xModified), realsToField(yModified)))
                    if (!condition && ellipticCurve.difference(xModified + error(xModified, yModified), yModified + error(xModified, yModified)).sign
                            != ellipticCurve.difference(xModified - error(xModified, yModified), yModified - error(xModified, yModified)).sign)
                        condition = true;
                    if (condition) {
                        frame.drawPoint(Vec2i(x, y))
                        frame.drawPoint(Vec2i(x, demodifyY(-yModified, frame, yScale)))
                        if (drawText) frame.drawText(Vec2i(x, y), "($xModified, $yModified)")
                        if (drawText) frame.drawText(Vec2i(x, demodifyY(-yModified, frame, yScale)), "($xModified, ${-yModified})")
                    }
                }
        }
    }

    private fun demodifyY(y: Double, frame: CurveFrame, yScale: Int) = (-yScale * y + frame.frameSize().y/2).toInt()


    fun drawAxis(frame: CurveFrame) {
        frame.drawLine(Vec2i(0, frame.frameSize().y / 2), Vec2i(frame.frameSize().x, frame.frameSize().y / 2))
        frame.drawLine(Vec2i(frame.frameSize().x / 2 + X_OFFSET, 0), Vec2i(frame.frameSize().x / 2 + X_OFFSET, frame.frameSize().y))
    }


}
