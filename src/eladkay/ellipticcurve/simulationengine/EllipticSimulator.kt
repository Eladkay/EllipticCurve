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
                    // hmm, not so sure about this. todo
                    var condition = ellipticCurve.isPointOnCurve(Vec2d(xModified, yModified))
                            || ellipticCurve.isPointOnCurve(Vec2d(realsToField(xModified), realsToField(yModified)))
                    if (!condition && ellipticCurve.difference(xModified + error(xModified, yModified), yModified + error(xModified, yModified)).sign
                            != ellipticCurve.difference(xModified - error(xModified, yModified), yModified - error(xModified, yModified)).sign)
                        condition = true;
                    if (condition) {
                        frame.drawPoint(Vec2i(x, y))
                        if (drawText) frame.drawText(Vec2i(x, y), "($xModified, $yModified)")
                    }
                }
        }
    }

    // another day, another fruitless attempt to steal the krabby patty formula
    fun drawCurveApprox(ellipticCurve: EllipticCurve, frame: CurveFrame, drawText: Boolean = false, xScale: Int = 180) {
        ellipticCurve.field {
            val points = mutableListOf<Vec2d>()
            for (x in 0..frame.frameSize().x) {
                val xModified = modifyX(x, xScale, frame)
                points.addAll(pointsFromCurve(ellipticCurve, xModified, xModified+1,0.1))

            }

            for(p in points) {
                frame.drawPoint(Vec2i(demodifyX(p.x, xScale, frame), p.y.toInt()))
                if (drawText) frame.drawText(Vec2i(demodifyX(p.x, xScale, frame), p.y.toInt()), "(${p.x}, ${p.y})")
            }

        }
    }

    private fun modifyX(x: Int, xScale: Int, frame: CurveFrame) = (x - frame.frameSize().x / 2 - X_OFFSET) / xScale.toDouble()
    private fun demodifyX(x: Double, xScale: Int, frame: CurveFrame) = (x*xScale.toDouble() + frame.frameSize().x/2 + X_OFFSET).toInt()

    fun drawAxis(frame: CurveFrame) {
        frame.drawLine(Vec2i(0, frame.frameSize().y / 2), Vec2i(frame.frameSize().x, frame.frameSize().y / 2))
        frame.drawLine(Vec2i(frame.frameSize().x / 2 + X_OFFSET, 0), Vec2i(frame.frameSize().x / 2 + X_OFFSET, frame.frameSize().y))
    }

    // todo: this isn't fieldified
    fun pointsFromCurve(curve: EllipticCurve, xStart: Double, xEnd: Double, interval: Double): List<Vec2d> {
        var currentX = xStart
        val list = mutableListOf<Vec2d>()
        while (currentX < xEnd) {
            if (Math.pow(currentX, 3.0) + curve.aValue * currentX + curve.bValue < 0) continue
            list.add(Vec2d(currentX, Math.sqrt(Math.pow(currentX, 3.0) + curve.aValue * currentX + curve.bValue)))
            currentX += interval
        }
        for (point in list) list.add(Vec2d(point.x, -point.y))
        return list
    }

}
