package eladkay.ellipticcurve.simulationengine

import eladkay.ellipticcurve.mathengine.Vec2i
import kotlin.math.roundToInt

// https://www.particleincell.com/2012/bezier-splines/
// let's see what good this does for me
object BezierSplines {
    var vertices = mutableListOf<Vec2i>()
    fun updateSplines() {
        val x = mutableListOf<Int>()
        val y = mutableListOf<Int>()
        for (vertex in vertices) {
            x.add(vertex.x)
            y.add(vertex.y)
        }
        val px = computeControlPoints(x)
        val py = computeControlPoints(y)

        // redraw path
        for (i in 0 until x.size - 1)
            println(path(x[i], y[i], px.first[i], py.first[i], px.second[i], py.second[i], x[i + 1], y[i + 1]))
        println(path(x[x.size - 1], y[x.size - 1], px.first[x.size - 1], py.first[x.size - 1], px.second[x.size - 1], py.second[x.size - 1], x[x.size - 1], y[x.size - 1]))

    }

    fun path(x1: Int, y1: Int, px1: Int, py1: Int, px2: Int, py2: Int, x2: Int, y2: Int): String {
        return "M $x1 $y1 C $px1 $py1 $px2 $py2 $x2 $y2"
    }

    // ?????????????????????????????????????????
    // https://www.particleincell.com/wp-content/uploads/2012/06/bezier-spline.js
    private fun computeControlPoints(x: MutableList<Int>): Pair<List<Int>, List<Int>> {
        val n = x.size - 1
        val temp = mutableListOf<Int>()
        for (i in 0..n) temp.add(0)
        val tempArray = temp.toTypedArray()
        val p1 = mutableListOf<Int>(*tempArray)
        val p2 = mutableListOf<Int>(*tempArray)
        val a = mutableListOf<Int>(*tempArray)
        val b = mutableListOf<Int>(*tempArray)
        val c = mutableListOf<Int>(*tempArray)
        val r = mutableListOf<Int>(*tempArray)
        a[0] = 0; b[0] = 2; c[0] = 1; r[0] = x[0] + 2 * x[1]
        for (i in 1 until n) {
            a[i] = 1; b[i] = 4; c[i] = 1; r[i] = 4 * x[i] + 2 * x[i + 1]
        }
        a[n - 1] = 2; b[n - 1] = 7; c[n - 1] = 0; r[n - 1] = 8 * x[n - 1] + x[n]
        for (i in 1..n) {
            val m = a[i] / b[i - 1]
            b[i] = b[i] - m * c[i - 1]
            r[i] = r[i] - m * r[i - 1]
        }
        p1[n - 1] = r[n - 1] / b[n - 1]
        for (i in n - 2 downTo 0)
            p1[i] = (r[i] - c[i] * p1[i + 1]) / b[i]
        for (i in 0 until n)
            p2[i] = 2 * x[i + 1] - p1[i + 1]

        p2[n - 1] = (0.5 * (x[n] + p1[n - 1])).roundToInt()
        return p1 to p2
    }
}
