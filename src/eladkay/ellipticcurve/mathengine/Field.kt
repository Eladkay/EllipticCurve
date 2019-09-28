package eladkay.ellipticcurve.mathengine

abstract class Field {


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


    abstract fun belongsTo(number: Double): Boolean

    abstract fun realsToField(number: Double): Double

    abstract fun add(a: Double, b: Double): Double

    abstract fun multiply(a: Double, b: Double): Double

    abstract fun neg(a: Double): Double

    abstract fun inv(a: Double): Double

    fun exp(a: Double, n: Int): Double {
        return if (n == 1) a
        else !(!exp(a, n - 1) * !a)
    }

    operator fun contains(d: Double) = belongsTo(d)
    operator fun <T> invoke(action: Field.() -> T) = this.action()


    // maybe this will save the day?
    operator fun Double.not() = NumberWrapper(this, this@Field)

    class NumberWrapper(val numberInternal: Number, val field: Field) {
        val number get() = numberInternal.toDouble()
        operator fun component1() = numberInternal
        override fun toString(): String {
            return numberInternal.toString()
        }

        override fun equals(other: Any?): Boolean {
            return other is NumberWrapper && other.numberInternal == this.numberInternal
        }

        // let's um, just not use that, k?
        override fun hashCode(): Int {
            return numberInternal.toInt()
        }

        operator fun not() = number
        // :/
        private operator fun Double.not() = NumberWrapper(this, field)

        operator fun plus(b: NumberWrapper): NumberWrapper = !field.add(!this, !b)
        operator fun minus(b: NumberWrapper): NumberWrapper = !field.add(!this, field.neg(!b))
        operator fun times(b: NumberWrapper): NumberWrapper = !field.multiply(!this, !b)
        operator fun div(b: NumberWrapper): NumberWrapper = !field.multiply(!this, field.inv(!b))
        operator fun unaryMinus(): NumberWrapper = !field.neg(!this)
        infix fun exp(b: Int) = !field.exp(!this, b)
    }


    private class RealsField : Field() {

        override fun belongsTo(number: Double): Boolean = !number.isNaN() && number.isFinite()

        override fun realsToField(number: Double): Double = number

        override fun add(a: Double, b: Double): Double = a + b

        override fun multiply(a: Double, b: Double): Double = a * b

        override fun neg(a: Double): Double = -a

        override fun inv(a: Double): Double =
                if (a == 0.0) throw IllegalArgumentException("no inverse for additive identity")
                else 1 / a
    }

    private class ZpField(private val modulo: Int) : Field() {

        override fun belongsTo(number: Double): Boolean = number.toInt().toDouble() == number && number > 0 && number < modulo

        override fun realsToField(number: Double): Double = (number % modulo).toInt().toDouble()

        override fun add(a: Double, b: Double): Double = (a + b) % modulo

        override fun multiply(a: Double, b: Double): Double = (a * b) % modulo

        override fun neg(a: Double): Double = if (a == 0.0) 0.0 else modulo - a

        override fun inv(a: Double): Double {
            if (a == 0.0) throw IllegalArgumentException("no inverse for additive identity")
            // Euler's theorem
            // hey, if this causes any problems, i can look at section 5.6 in my linear algebra book
            var aInv = 1.0
            for (i in 0 until modulo - 2) aInv *= a
            return aInv % modulo
        }
    }


}
