package eladkay.ellipticcurve.simulationengine

import eladkay.ellipticcurve.mathengine.EllipticCurve
import eladkay.ellipticcurve.mathengine.FiniteEllipticCurve
import eladkay.ellipticcurve.mathengine.Vec2d
import eladkay.ellipticcurve.mathengine.Vec2i
import java.awt.Color
import kotlin.math.sign

object EllipticSimulator {
    var X_OFFSET = -500
    var scale = 1
    val defaultYScale
        get() = 15 / scale
    val defaultXScale
        get() = 200 / scale

    fun drawFiniteCurve(ellipticCurve: FiniteEllipticCurve, frame: CurveFrame, drawText: Boolean) {
        frame.changePointSize(10)
        for((x, y) in ellipticCurve.curvePoints) {
            frame.drawPoint(Vec2i(demodifyX(x, frame), demodifyY(y, frame)))
            if (drawText) frame.drawText(Vec2i(demodifyX(x, frame), demodifyY(y, frame)), "($x, $y)")
        }
        frame.redraw()
        frame.changePointSize(3)

    }

    fun getMaxBoundsOfFrame(frame: CurveFrame, xScale: Int = defaultXScale, yScale: Int = defaultYScale): Vec2d {
        val (x, y) = frame.frameSize()
        var xModified = (x - frame.frameSize().x / 2 - X_OFFSET) / xScale.toDouble()
        var yModified = (-y + frame.frameSize().y / 2) / yScale.toDouble()
        if(frame.curve is FiniteEllipticCurve) {
            val ellipticCurve = frame.curve as FiniteEllipticCurve
            val modulus = ellipticCurve.modulus
            xModified = (x - 10) * modulus / (frame.frameSize().x - 10).toDouble()
            yModified = (y + 100 - frame.frameSize().y) * modulus / (100 - frame.frameSize().y).toDouble()
        }
        return Vec2d(xModified, yModified)
    }

    fun getMinBoundsOfFrame(frame: CurveFrame, xScale: Int = defaultXScale, yScale: Int = defaultYScale): Vec2d {
        val (x, y) = 0 to 0
        var xModified = (x - frame.frameSize().x / 2 - X_OFFSET) / xScale.toDouble()
        var yModified = (-y + frame.frameSize().y / 2) / yScale.toDouble()
        if(frame.curve is FiniteEllipticCurve) {
            val ellipticCurve = frame.curve as FiniteEllipticCurve
            val modulus = ellipticCurve.modulus
            xModified = (x - 10) * modulus / (frame.frameSize().x - 10).toDouble()
            yModified = (y + 100 - frame.frameSize().y) * modulus / (100 - frame.frameSize().y).toDouble()
        }
        return Vec2d(xModified, yModified)
    }

    // i need to fix this. i can't just keep making the error larger and larger, it results in a thick curve
    // which is not really what i want. complex error functions like OperationCalculator.CurvePanel#errorFunction
    // are a temporary solution that only work for one specific curve and make other curves look disproportionate
    // i have, for posterity, attached a sketch of the function of the error part of drawCurveApprox:
    // https://i.imgur.com/8u49qkS.jpg
    fun drawCurveApprox(ellipticCurve: EllipticCurve, frame: CurveFrame, error: (Double, Double) -> Double, drawText: Boolean, xScale: Int = defaultXScale, yScale: Int = defaultYScale) {
        if(ellipticCurve is FiniteEllipticCurve) throw IllegalArgumentException("discrete curve")
            for (x in 0..frame.frameSize().x)
                for (y in 0..frame.frameSize().y) {
                    val xModified = (x - frame.frameSize().x / 2 - X_OFFSET) / xScale.toDouble()
                    val yModified = (-y + frame.frameSize().y / 2) / yScale.toDouble()
                    if (yModified < 0) continue // elliptic curves are always symmetric

                    var condition = ellipticCurve.isPointOnCurve(Vec2d(xModified, yModified))
                    val errorTerm = error(xModified, yModified)
                    if (!condition && ellipticCurve.difference(xModified + errorTerm, yModified + errorTerm).sign
                            != ellipticCurve.difference(xModified - errorTerm, yModified - errorTerm).sign)
                        condition = true
                    if (condition) {
                        frame.drawPoint(Vec2i(x, y))
                        frame.drawPoint(Vec2i(x, demodifyY(-yModified, frame, yScale)))
                        if (drawText) frame.drawText(Vec2i(x, y), "($xModified, $yModified)")
                        if (drawText) frame.drawText(Vec2i(x, demodifyY(-yModified, frame, yScale)), "($xModified, ${-yModified})")
                    }
                }

    }

    fun demodifyY(y: Double, frame: CurveFrame, yScale: Int = defaultYScale): Int {
        if(frame.curve !is FiniteEllipticCurve) return (-yScale * y + frame.frameSize().y / 2).toInt()
        val modulus = (frame.curve as FiniteEllipticCurve).modulus
        return (y*(100-frame.frameSize().y)/modulus - 100 + frame.frameSize().y).toInt()
    }
    fun demodifyX(x: Double, frame: CurveFrame, xScale: Int = defaultXScale): Int {
        if(frame.curve !is FiniteEllipticCurve) return (x * xScale + X_OFFSET + frame.frameSize().x / 2).toInt()
        val modulus = (frame.curve as FiniteEllipticCurve).modulus
        return (x * (frame.frameSize().x - 10).toDouble()/modulus + 10).toInt()
    }

    fun drawAxis(frame: CurveFrame) {
        if(frame.curve is FiniteEllipticCurve) {
            frame.drawLine(Vec2i(10, 0), Vec2i(10, frame.frameSize().y))
            frame.drawLine(Vec2i(0, frame.frameSize().y - 100), Vec2i(frame.frameSize().x, frame.frameSize().y - 100))
        } else {
            frame.drawLine(Vec2i(0, frame.frameSize().y / 2), Vec2i(frame.frameSize().x, frame.frameSize().y / 2))
            frame.drawLine(Vec2i(frame.frameSize().x / 2 + X_OFFSET, 0), Vec2i(frame.frameSize().x / 2 + X_OFFSET, frame.frameSize().y))
        }
    }

    // yeah yeah, this is a bit weird with the values, but i actually don't mind that much
    fun drawTicks(frame: CurveFrame, xScale: Int = defaultXScale, yScale: Int = defaultYScale) {
        frame.changeColor(Color.DARK_GRAY)
        val yUnit = 5 * yScale
        val xUnit = 1 * xScale
        var currentY = yUnit
        while (currentY < frame.frameSize().y) {
            var yModified = Math.round((-currentY + frame.frameSize().y / 2) / yScale.toDouble() * 100) / 100.0
            if(frame.curve is FiniteEllipticCurve) {
                val ellipticCurve = frame.curve as FiniteEllipticCurve
                val modulus = ellipticCurve.modulus
                yModified = Math.round((currentY + 100 - frame.frameSize().y) * modulus / (100 - frame.frameSize().y).toDouble() * 100)/100.0
                frame.drawLine(Vec2i(10 - yUnit / 5, currentY), Vec2i(10 + yUnit / 5, currentY))
                frame.drawText(Vec2i(10 + yUnit / 5, currentY), "(0, $yModified)")
            } else {
                frame.drawLine(Vec2i(frame.frameSize().x / 2 + X_OFFSET - yUnit / 5, currentY), Vec2i(frame.frameSize().x / 2 + X_OFFSET + yUnit / 5, currentY))
                frame.drawText(Vec2i(frame.frameSize().x / 2 + X_OFFSET + yUnit / 5, currentY), "(0, $yModified)")
            }

            currentY += yUnit
        }

        var currentX = xUnit
        while (currentX < frame.frameSize().x) {
            var xModified = Math.round((currentX - frame.frameSize().x / 2 - X_OFFSET) / xScale.toDouble() * 100) / 100.0
            if(frame.curve is FiniteEllipticCurve) {
                val ellipticCurve = frame.curve as FiniteEllipticCurve
                val modulus = ellipticCurve.modulus
                xModified = Math.round((currentX - 10) * modulus / (frame.frameSize().x - 10).toDouble() * 100) / 100.0
                frame.drawLine(Vec2i(currentX, frame.frameSize().y - 100 - xUnit / 20), Vec2i(currentX, frame.frameSize().y - 100 + xUnit / 20))
                frame.drawText(Vec2i(currentX, frame.frameSize().y - 100 - xUnit / 20), "($xModified, 0)")
            } else {
                frame.drawLine(Vec2i(currentX, frame.frameSize().y / 2 - xUnit / 20), Vec2i(currentX, frame.frameSize().y / 2 + xUnit / 20))
                frame.drawText(Vec2i(currentX, frame.frameSize().y / 2 - xUnit / 20), "($xModified, 0)")
            }
            currentX += xUnit
        }
        frame.changeColor(Color.BLACK)
    }

    fun drawGridlines(frame: CurveFrame, xScale: Int = defaultXScale, yScale: Int = defaultYScale) {
        frame.changeColor(Color.DARK_GRAY)
        val yUnit = 5 * yScale
        val xUnit = 1 * xScale
        var currentY = yUnit
        while (currentY < frame.frameSize().y) {
            frame.drawLine(Vec2i(0, currentY), Vec2i(frame.frameSize().x, currentY))
            currentY += yUnit
        }

        var currentX = xUnit
        while (currentX < frame.frameSize().x) {
            frame.drawLine(Vec2i(currentX, 0), Vec2i(currentX, frame.frameSize().y))
            currentX += xUnit
        }
        frame.changeColor(Color.BLACK)
    }

    fun drawLineOfSymmetry(frame: CurveFrame) {
        frame.changeColor(Color.RED)
        if(frame.curve is FiniteEllipticCurve) {
            // i did the work, the line of symmetry is y = p/2
            val modulus = (frame.curve as FiniteEllipticCurve).modulus
            val yNeeded = demodifyY(modulus/2.0, frame)
            frame.drawLineOfSymmetry(Vec2i(0, yNeeded), Vec2i(frame.frameSize().x, yNeeded))
        } else {
            val yValue = demodifyY(0.0, frame)
            frame.drawLineOfSymmetry(Vec2i(0, yValue), Vec2i(frame.frameSize().x, yValue))
        }
        frame.redraw()
        frame.changeColor(Color.BLACK)
    }


}
