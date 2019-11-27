package eladkay.ellipticcurve.mathengine

// this is partially inspired by https://andrea.corbellini.name/2015/05/17/elliptic-curve-cryptography-a-gentle-introduction/
class FiniteEllipticCurve(aValue: Double, bValue: Double, val modulus: Int) : EllipticCurve(aValue, bValue, MathHelper.zp(modulus)) {

    private val curvePoints = mutableListOf<Vec2d>()

    private fun order() = curvePoints.size

    init {
        for(x in 0..modulus) for (y in 0..modulus)
            if((y*y - x * x *x - aValue*x - bValue) % modulus == 0.0) curvePoints.add(Vec2d(x, y))
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
        return modulus + 31 * aValue.toInt() + 31 * bValue.toInt()
    }


    class NumberWrapper(private val numberInternal: Number, private val modulus: Int) {
        private val number get() = numberInternal.toDouble()
        operator fun component1() = numberInternal
        override fun toString(): String {
            return numberInternal.toString()
        }

        override fun equals(other: Any?): Boolean {
            return other is NumberWrapper && other.numberInternal == this.numberInternal
        }

        // let's um, just not use that, k?
        override fun hashCode(): Int {
            return numberInternal.toInt() * modulus
        }

        operator fun not() = number
        // :/
        private operator fun Double.not() = NumberWrapper(this, modulus)

        operator fun plus(b: NumberWrapper): NumberWrapper {
            return !((!this + !b) % modulus)
        }
        operator fun minus(b: NumberWrapper): NumberWrapper = plus(b.unaryMinus())
        operator fun times(b: NumberWrapper): NumberWrapper {
            return !((!this * !b) % modulus)
        }
        operator fun div(b: NumberWrapper): NumberWrapper = this * !inv(!b)
        operator fun unaryMinus(): NumberWrapper = if (!this == 0.0) !0.0 else !(modulus.toDouble() - !this)
        infix fun exp(b: Int): NumberWrapper = if (b==1) this else this*exp(b-1)

        fun inv(a: Double): Double {
            if (a == 0.0) throw IllegalArgumentException("no inverse for additive identity")
            // Euler's theorem
            // hey, if this causes any problems, i can look at section 5.6 in my linear algebra book
            var aInv = 1.0
            for (i in 0 until modulus - 2) aInv *= a
            return aInv % modulus
        }

    }
}
