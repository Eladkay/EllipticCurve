package eladkay.ellipticcurve.mathengine

abstract class Field {

    abstract fun belongsTo(number: Double): Boolean

    abstract fun realsToField(number: Double): Double

    abstract fun add(a: Double, b: Double): Double

    abstract fun multiply(a: Double, b: Double): Double

    abstract fun neg(a: Double): Double

    abstract fun inv(a: Double): Double

    fun exp(a: Double, n: Int): Double {
        return if (n == 1) a
        else exp(a, n - 1) * a
    }

    infix fun Number.af(b: Double): Number = this@Field.add(this.toDouble(), b)
    infix fun Number.mf(b: Double): Number = this@Field.multiply(this.toDouble(), b)
    infix fun Double.ef(b: Int): Double = this@Field.exp(this.toDouble(), b)
    fun Double.nf(): Double = this@Field.neg(this)
    fun Double.inf(): Double = this@Field.inv(this)
    operator fun contains(d: Double) = belongsTo(d)
    operator fun <T> invoke(action: Field.()->T) = this.action()

    // need to test

    operator fun Double.plus(b: Double): Double = this.af(b.toDouble()).toDouble()
    operator fun Double.minus(b: Double): Double = this.af(b.toDouble().nf()).toDouble()
    operator fun Double.times(b: Double): Double = this.mf(b.toDouble()).toDouble()
    operator fun Double.div(b: Double): Double = this.mf(b.toDouble().inf()).toDouble()
    operator fun Double.unaryMinus(): Double = this.toDouble().nf().toDouble()

    // end need to test

    private class RealsField : Field() {

        override fun belongsTo(number: Double): Boolean {
            return !number.isNaN() && number.isFinite()
        }

        override fun realsToField(number: Double): Double {
            return number
        }

        override fun add(a: Double, b: Double): Double {
            println("works")
            return a + b
        }

        override fun multiply(a: Double, b: Double): Double {
            return a * b
        }

        override fun neg(a: Double): Double {
            return -a
        }

        override fun inv(a: Double): Double {
            if (a == 0.0) throw IllegalArgumentException("no inverse for additive identity")
            return 1 / a
        }
    }

    private class ZpField(private val modulo: Int) : Field() {

        override fun belongsTo(number: Double): Boolean {
            return number.toInt().toDouble() == number && number > 0 && number < modulo
        }

        override fun realsToField(number: Double): Double {
            return if (number.toInt().toDouble() != number) 0.0 else number % 5
        }

        override fun add(a: Double, b: Double): Double {
            return (a + b) % modulo
        }

        override fun multiply(a: Double, b: Double): Double {
            return a * b % modulo
        }

        override fun neg(a: Double): Double {
            return modulo - a
        }

        override fun inv(a: Double): Double {
            if (a == 0.0) throw IllegalArgumentException("no inverse for additive identity")
            // Euler's theorem
            var aInv = 1.0
            for (i in 0 until modulo - 2) aInv = aInv * a
            return aInv % modulo
        }
    }

    companion object {

        val REALS: Field = RealsField()

        /**
         * Create a new Field object describing the cyclic field Zp
         * @param p prime number, this is not checked
         * @return a new field Zp over the integers up to p
         */
        fun createModuloField(p: Int): Field {
            return ZpField(p)
        }
    }
}
