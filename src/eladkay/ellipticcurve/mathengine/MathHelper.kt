package eladkay.ellipticcurve.mathengine

import java.lang.Math.cos
import java.lang.Math.sin
import java.math.BigInteger
import java.util.*

object MathHelper {

    val REALS = "reals"
    fun zp(p: Int) = "z$p"

    fun rotate(point: Vec2d, theta: Double): Vec2d {
        return Vec2d(point.x * cos(theta) - point.y * sin(theta), point.x * sin(theta) + point.y * cos(theta))
    }

    fun slope(p1: Vec2d, p2: Vec2d): Double {
        if (p1 == Vec2d.PT_AT_INF || p2 == Vec2d.PT_AT_INF) return Double.POSITIVE_INFINITY
        return (p1.y - p2.y) / (p1.x - p2.x)
    }

    // no means probably not, yes means probably
    // The Miller-Rabin Primality Test (modified)
    private val rand = Random()
    @Deprecated("the slowest of the three primality tests in this class and also has stupid false negatives for numbers as basic as 13")
    fun isPrimeFast(n: Int, k: Int /* number of rounds to perform */ = 50): Boolean {
        if (n % 2 == 0) return n == 2
        if (n == 3) return true
        if (n < 3) return false

        // n = d2^r + 1
        var r = 0
        var d = n - 1
        while (d % 2 == 0) {
            r++
            d /= 2
        }
        val bigIntN = BigInteger.valueOf(n.toLong())
        loop@for (i in 0..k) {
            val a = rand.nextInt(n-3)+2
            var x = BigInteger.valueOf(a.toLong()).modPow(BigInteger.valueOf(d.toLong()), bigIntN).toInt()
            if (x == 1 || x == n - 1) continue
            for (j in 0 until r) {
                val bigIntX = BigInteger.valueOf(x.toLong())
                x = bigIntX.modPow(bigIntX, bigIntN).toInt()
                if (x == n - 1) continue@loop
            }
            return false

        }
        return true
    }

    fun isPrimeFastBigInt(n: Int, k: Int = 50): Boolean = BigInteger.valueOf(n.toLong()).isProbablePrime(k)

    // If a modulus operation is O(1), this is O(n)
    fun isPrime(n: Int): Boolean {
        if(n < 2) return false
        for(i in 2..Math.sqrt(n.toDouble()).toInt())
            if(n % i == 0) return false
        return true
    }
}
