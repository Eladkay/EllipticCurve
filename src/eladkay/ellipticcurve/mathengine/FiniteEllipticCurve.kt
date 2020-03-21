package eladkay.ellipticcurve.mathengine

// this is partially inspired by https://andrea.corbellini.name/2015/05/17/elliptic-curve-cryptography-a-gentle-introduction/
open class FiniteEllipticCurve(aValue: Long, bValue: Long, val modulus: Long) : EllipticCurve(aValue % modulus, bValue % modulus, MathHelper.zp(modulus)) {

    val curvePoints = mutableListOf<Vec2d>()

    fun order() = curvePoints.size

    init {
        curvePoints.add(Vec2d.PT_AT_INF)
        for(x in 0 until modulus) for (y in 0..modulus/2)
            if(y*y % modulus == helper.mod(x * x *x - aValue*x - bValue.toDouble(), modulus)) {
                curvePoints.add(Vec2d(x, y))
                if(y % modulus != (x-y) % modulus) curvePoints.add(Vec2d(x, modulus-y))
            }
    }

    override fun determinant(): Double {
        return super.determinant() % modulus
    }

    override fun difference(x: Double, y: Double): Double {
        return (y - (x * x * x) - (aValue * x) - bValue) % modulus
    }

    override fun isPointOnCurve(p: Vec2d): Boolean {
        // specific definition of the curve: pairs of elements in Fp^2 satisfying the curve equation phrased using Fp operations
        if(p in curvePoints) return true
        // generalized definition of the curve: pairs of elements in Z^2 satisfying the curve equation phrased using Fp operations
        // let q be in Z^2, then there exists k natural and p in Fp^2 and on the curve such that q = k(modulus, modulus) + p (vector addition/multiplication, not group law)
        // if and only if q is on the generalized definition of the curve. specifically, if q is in Fp^2 we let p=q, k=0.
        // another equivalent: let (x, y) be in Z^2, then let (x mod modulus, y mod modulus) be in Fp^2, the latter is on the curve
        // iff the former is on the curve.
        if (Vec2d(p.x % modulus, p.y % modulus) in curvePoints) return true
        return false
    }

    override fun equals(other: Any?): Boolean {
        return super.equals(other) && other is FiniteEllipticCurve && other.modulus == this.modulus
    }


    operator fun <T> invoke(function: () -> T): T = function()
    override fun hashCode(): Int {
        return modulus.toInt() + 31 * aValue.toInt() + 31 * bValue.toInt()
    }

}
