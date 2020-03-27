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
        for ((x, y) in ellipticCurve.curvePoints) {
            frame.drawPoint(Vec2i(demodifyX(x, frame), demodifyY(y, frame)))
            if (drawText) frame.drawText(Vec2i(demodifyX(x, frame), demodifyY(y, frame)), "($x, $y)")
        }
        frame.redraw()
        frame.changePointSize(3)
    }

    fun getMaxBoundsOfFrame(frame: CurveFrame, xScale: Int = defaultXScale, yScale: Int = defaultYScale): Vec2d {
        val (x, y) = frame.frameSize()
        return Vec2d(modifyX(x, frame, xScale), modifyY(y, frame, yScale))
    }

    fun getMinBoundsOfFrame(frame: CurveFrame, xScale: Int = defaultXScale, yScale: Int = defaultYScale): Vec2d {
        val (x, y) = 0 to 0
        return Vec2d(modifyX(x, frame, xScale), modifyY(y, frame, yScale))
    }

    /**
     * This function draws a continuous, smooth and thin elliptic curve graph over the reals. The graph is 5 pts thick, and is
     * defined by the parameters of this function and by the frame size, and by no other variable.
     * @param [ellipticCurve] The elliptic curve to draw. which has to be an infinite elliptic curve. See [drawFiniteCurve] for finite curves.
     * @throws [IllegalArgumentException] If the curve is not infinite.
     * @param [frame] The frame on which to draw the elliptic curve according to the parameters.
     * @param [error] The allowed error in the curve. The exact mechanism of this parameter is explained below.
     *                This may not depend on x, y being drawn.
     * @param [drawText] Whether or not to label each point with its coordinates on the curve.
     * @param [xScale] The scale at which to draw the curve, relative to the x axis.
     * @param [yScale] The scale at which to draw the curve, relative to the y axis.
     * The exact mechanism of this function is as follows: First, it calculates the error term allowed using the parameter [error].
     * This value is denoted by errorTerm in code, but for brevity I will call it e in this comment. Then, for every pair (x, y) in
     * the visible area of the frame, as reported by the frame, we consider (x', y') modified as described in [modifyX]. [modifyY].
     * If y' is negative, we continue, as the curve is symmetric. Now, consider a square with side length 2e, whose center is
     * (x', y'). If any of its vertices are in different relative condition to the curve, or (x', y') is itself on the curve,
     * we draw (x, y) and its respective inverse, drawing text if necessary according to [drawText].
     */
    fun drawCurveApprox(ellipticCurve: EllipticCurve, frame: CurveFrame, error: () -> Double, drawText: Boolean, xScale: Int = defaultXScale, yScale: Int = defaultYScale) {
        if (ellipticCurve is FiniteEllipticCurve) throw IllegalArgumentException("discrete curve")
        frame.changePointSize(5)
        val errorTerm = error()
        for (x in 0..frame.frameSize().x)
            for (y in 0..frame.frameSize().y) {
                val xModified = modifyX(x, frame, xScale)
                val yModified = modifyY(y, frame, yScale)
                if (yModified < 0) continue // elliptic curves are always symmetric

                var condition = ellipticCurve.isPointOnCurve(Vec2d(xModified, yModified))
                val s1 = ellipticCurve.difference(xModified + errorTerm, yModified + errorTerm).sign
                val s2 = ellipticCurve.difference(xModified + errorTerm, yModified - errorTerm).sign
                val s3 = ellipticCurve.difference(xModified - errorTerm, yModified + errorTerm).sign
                val s4 = ellipticCurve.difference(xModified + errorTerm, yModified - errorTerm).sign
                if (!condition && Math.abs(s1 + s2 + s3 + s4) != 4.0) // if they're not all the same sign
                    condition = true
                if (condition) {
                    frame.drawPoint(Vec2i(x, y))
                    frame.drawPoint(Vec2i(x, demodifyY(-yModified, frame, yScale)))
                    if (drawText) frame.drawText(Vec2i(x, y), "($xModified, $yModified)")
                    if (drawText) frame.drawText(Vec2i(x, demodifyY(-yModified, frame, yScale)), "($xModified, ${-yModified})")
                }
            }
        frame.changePointSize(3)
    }

    fun demodifyY(y: Double, frame: CurveFrame, yScale: Int = defaultYScale): Int {
        if (frame.curve !is FiniteEllipticCurve) return (-yScale * y + frame.frameSize().y / 2).toInt()
        val modulus = (frame.curve as FiniteEllipticCurve).modulus
        return (y * (100 - frame.frameSize().y) / modulus - 100 + frame.frameSize().y).toInt()
    }

    fun demodifyX(x: Double, frame: CurveFrame, xScale: Int = defaultXScale): Int {
        if (frame.curve !is FiniteEllipticCurve) return (x * xScale + X_OFFSET + frame.frameSize().x / 2).toInt()
        val modulus = (frame.curve as FiniteEllipticCurve).modulus
        return (x * (frame.frameSize().x - 10).toDouble() / modulus + 10).toInt()
    }

    fun modifyY(y: Int, frame: CurveFrame, yScale: Int = defaultYScale): Double {
        var yModified = (-y + frame.frameSize().y / 2) / yScale.toDouble()
        if (frame.curve is FiniteEllipticCurve) {
            yModified = (y + 100 - frame.frameSize().y) * (frame.curve as FiniteEllipticCurve).modulus / (100 - frame.frameSize().y).toDouble()
        }
        return yModified
    }
    fun modifyX(x: Int, frame: CurveFrame, xScale: Int = defaultXScale): Double {
        var xModified = (x - frame.frameSize().x / 2 - X_OFFSET) / xScale.toDouble()
        if (frame.curve is FiniteEllipticCurve) {
            xModified = (x - 10) * (frame.curve as FiniteEllipticCurve).modulus / (frame.frameSize().x - 10).toDouble()
        }
        return xModified
    }

    fun drawAxis(frame: CurveFrame) {
        if (frame.curve is FiniteEllipticCurve) {
            frame.drawLine(Vec2i(10, 0), Vec2i(10, frame.frameSize().y))
            frame.drawLine(Vec2i(0, frame.frameSize().y - 100), Vec2i(frame.frameSize().x, frame.frameSize().y - 100))
        } else {
            frame.drawLine(Vec2i(0, frame.frameSize().y / 2), Vec2i(frame.frameSize().x, frame.frameSize().y / 2))
            frame.drawLine(Vec2i(frame.frameSize().x / 2 + X_OFFSET, 0), Vec2i(frame.frameSize().x / 2 + X_OFFSET, frame.frameSize().y))
        }
    }

    // this is a bit weird with the values, but i actually don't mind that much, except for finite curves, for them I will fix it
    fun drawTicks(frame: CurveFrame, xScale: Int = defaultXScale, yScale: Int = defaultYScale) {
        frame.changeColor(Color.DARK_GRAY)
        val yUnit = 5 * yScale
        val xUnit = 1 * xScale
        var currentY = yUnit
        while (currentY < frame.frameSize().y) {
            val yModified = Math.round(modifyY(currentY, frame, yScale) * 100) / 100.0
            if (frame.curve is FiniteEllipticCurve) {
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
            val xModified = Math.round(modifyX(currentX, frame, xScale) * 100) / 100.0
            if (frame.curve is FiniteEllipticCurve) {
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
        if (frame.curve is FiniteEllipticCurve) {
            // i did the work, the line of symmetry is y = p/2
            val modulus = (frame.curve as FiniteEllipticCurve).modulus
            val yNeeded = demodifyY(modulus / 2.0, frame)
            frame.drawLineOfSymmetry(Vec2i(0, yNeeded), Vec2i(frame.frameSize().x, yNeeded))
        } else {
            val yValue = demodifyY(0.0, frame)
            frame.drawLineOfSymmetry(Vec2i(0, yValue), Vec2i(frame.frameSize().x, yValue))
        }
        frame.redraw()
        frame.changeColor(Color.BLACK)
    }


}
