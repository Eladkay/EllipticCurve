package eladkay.ellipticcurve.simulationengine

import eladkay.ellipticcurve.mathengine.EllipticCurve
import eladkay.ellipticcurve.mathengine.FiniteEllipticCurve
import eladkay.ellipticcurve.mathengine.Vec2d
import eladkay.ellipticcurve.mathengine.Vec2i
import java.awt.Color
import kotlin.math.roundToInt
import kotlin.math.sign

object EllipticSimulator {
    private var X_OFFSET = -500
    var scale = 1.0
    private val defaultYScale
        get() = 15 / scale
    private val defaultXScale
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

    fun getMaxBoundsOfFrame(frame: CurveFrame, xScale: Double = defaultXScale, yScale: Double = defaultYScale): Vec2d {
        val (x, y) = frame.frameSize()
        return Vec2d(modifyX(x, frame, xScale), if (frame.curve is FiniteEllipticCurve) -(frame.curve as FiniteEllipticCurve).modulus * 1.0 else modifyY(y, frame, yScale))
    }

    fun getMinBoundsOfFrame(frame: CurveFrame, xScale: Double = defaultXScale, yScale: Double = defaultYScale): Vec2d {
        val (x, y) = 0 to 0
        return Vec2d(modifyX(x, frame, xScale), modifyY(y, frame, yScale))
    }

    /**
     * This function draws a continuous, smooth and thin elliptic curve graph over the reals. The graph is 5 pts thick, and is
     * defined by the parameters of this function and by the frame size, and by no other variable.
     * @param [ellipticCurve] The elliptic curve to draw. which has to be an infinite elliptic curve. See [drawFiniteCurve] for finite curves.
     * @throws [IllegalArgumentException] If the curve is not infinite.
     * @param [frame] The frame on which to draw the elliptic curve according to the parameters.
     * @param [errorTerm] The allowed error in the curve. The exact mechanism of this parameter is explained below.
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
    fun drawCurveApprox(ellipticCurve: EllipticCurve, frame: CurveFrame, errorTerm: Double, drawText: Boolean, xScale: Double = defaultXScale, yScale: Double = defaultYScale) {
        if (ellipticCurve is FiniteEllipticCurve) throw IllegalArgumentException("discrete curve")
        frame.changePointSize(5)
        for (x in 0..frame.frameSize().x)
            for (y in 0..frame.frameSize().y) {
                val xModified = modifyX(x, frame, xScale)
                val yModified = modifyY(y, frame, yScale)
                if (yModified < 0) continue // elliptic curves are always symmetric

                var condition = ellipticCurve.isPointOnCurve(Vec2d(xModified, yModified))
                val s1 = ellipticCurve.difference(xModified + errorTerm, yModified + errorTerm).sign
                val s2 = ellipticCurve.difference(xModified + errorTerm, yModified - errorTerm).sign
                val s3 = ellipticCurve.difference(xModified - errorTerm, yModified + errorTerm).sign
                val s4 = ellipticCurve.difference(xModified - errorTerm, yModified - errorTerm).sign
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

    fun demodifyY(y: Double, frame: CurveFrame, yScale: Double = defaultYScale): Int {
        if (frame.curve !is FiniteEllipticCurve) return (-yScale * y + frame.frameSize().y / 2).toInt()
        val modulus = (frame.curve as FiniteEllipticCurve).modulus
        return (y * (100 - frame.frameSize().y) / modulus - 100 + frame.frameSize().y).toInt()
    }

    fun demodifyX(x: Double, frame: CurveFrame, xScale: Double = defaultXScale): Int {
        if (frame.curve !is FiniteEllipticCurve) return (x * xScale + X_OFFSET + frame.frameSize().x / 2).toInt()
        val modulus = (frame.curve as FiniteEllipticCurve).modulus
        return (x * (frame.frameSize().x - 10).toDouble() / modulus + 10).toInt()
    }

    fun modifyY(y: Int, frame: CurveFrame, yScale: Double = defaultYScale): Double {
        var yModified = (-y + frame.frameSize().y / 2) / yScale
        if (frame.curve is FiniteEllipticCurve) {
            yModified = (y + 100 - frame.frameSize().y) * (frame.curve as FiniteEllipticCurve).modulus / (100 - frame.frameSize().y).toDouble()
        }
        return yModified
    }

    fun modifyX(x: Int, frame: CurveFrame, xScale: Double = defaultXScale): Double {
        var xModified = (x - frame.frameSize().x / 2 - X_OFFSET) / xScale
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

    fun drawTicks(frame: CurveFrame, xScale: Double = defaultXScale, yScale: Double = defaultYScale) {
        frame.changeColor(Color.DARK_GRAY)
        val yUnit = 5 * yScale
        val xUnit = 1 * xScale
        var currentYModified = -getMinBoundsOfFrame(frame, xScale, yScale).y.roundToInt().toDouble()
        if (frame.curve !is FiniteEllipticCurve)
            currentYModified -= currentYModified % 5 // makes sure it will hit y = 0
        val bounds = getMaxBoundsOfFrame(frame, xScale, yScale)
        while (currentYModified < -bounds.y) {
            currentYModified += if (frame.curve is FiniteEllipticCurve) {
                frame.drawText(Vec2i((10 + yUnit / 5).toInt(), demodifyY(currentYModified, frame, yScale)), "(0, $currentYModified)")
                1.0
            } else {
                frame.drawText(Vec2i((frame.frameSize().x / 2 + X_OFFSET + yUnit / 5).toInt(), demodifyY(currentYModified, frame, yScale)), "(0, $currentYModified)")
                5.0
            }
        }

        var currentXModified = getMinBoundsOfFrame(frame, xScale, yScale).x.roundToInt().toDouble()
        while (currentXModified < bounds.x) {
            if (currentXModified == 0.0) {
                currentXModified += 1
                continue // I already drew 0,0 in the y part
            }
            if (frame.curve is FiniteEllipticCurve) {
                frame.drawText(Vec2i(demodifyX(currentXModified, frame, xScale), (frame.frameSize().y - 100 - xUnit / 20).toInt()), "($currentXModified, 0)")
            } else {
                frame.drawText(Vec2i(demodifyX(currentXModified, frame, xScale), (frame.frameSize().y / 2 - xUnit / 20).toInt()), "($currentXModified, 0)")
            }
            currentXModified += 1.0
        }
        frame.changeColor(Color.BLACK)
    }

    fun drawGridlines(frame: CurveFrame, xScale: Double = defaultXScale, yScale: Double = defaultYScale) {
        frame.changeColor(Color.DARK_GRAY)
        val bounds = getMaxBoundsOfFrame(frame, xScale, yScale)

        var currentYModified = -getMinBoundsOfFrame(frame, xScale, yScale).y.roundToInt().toDouble()
        currentYModified -= currentYModified % 5 // makes sure it will hit y = 0
        while (currentYModified < -bounds.y) {
            frame.drawLine(Vec2i(0, demodifyY(currentYModified, frame, yScale)), Vec2i(frame.frameSize().x, demodifyY(currentYModified, frame, yScale)))
            currentYModified += if (frame.curve is FiniteEllipticCurve) 1.0 else 5.0
        }

        var currentXModified = getMinBoundsOfFrame(frame, xScale, yScale).x.roundToInt().toDouble()
        while (currentXModified < bounds.x) {
            frame.drawLine(Vec2i(demodifyX(currentXModified, frame, xScale), 0), Vec2i(demodifyX(currentXModified, frame, xScale), frame.frameSize().y))
            currentXModified += 1.0
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
