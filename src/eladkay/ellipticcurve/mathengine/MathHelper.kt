package eladkay.ellipticcurve.mathengine

import java.lang.Math.cos
import java.lang.Math.sin
import java.math.BigInteger

object MathHelper {

    val REALS = "reals"
    fun zp(p: Long) = "z$p"

    fun rotate(point: Vec2d, theta: Double): Vec2d {
        return Vec2d(point.x * cos(theta) - point.y * sin(theta), point.x * sin(theta) + point.y * cos(theta))
    }

    fun slope(p1: Vec2d, p2: Vec2d): Double {
        if (p1 == Vec2d.PT_AT_INF || p2 == Vec2d.PT_AT_INF) return Double.POSITIVE_INFINITY
        return (p1.y - p2.y) / (p1.x - p2.x)
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
