package eladkay.ellipticcurve.mathengine

class FiniteEllipticCurve(aValue: Double, bValue: Double, val modulus: Int) : EllipticCurve(aValue, bValue, MathHelper.zp(modulus)) {

    override fun determinant(): Double {
        return super.determinant() % modulus
    }

    override fun difference(x: Double, y: Double): Double {
        return (y - (x * x * x) - (aValue * x) - bValue) % modulus
    }

    override fun isPointOnCurve(p: Vec2d): Boolean {
        val pNew = p.map { it % modulus }
        return (pNew.y - (pNew.x * pNew.x * pNew.x) - (aValue * pNew.x) - bValue) % modulus == 0.0
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