package eladkay.ellipticcurve.mathengine.equationsolving

// Adapted from Eladkay/EqSolver, my own creation and made to use the field system
class Vector(val size: Int, val values: MutableList<Double> = MutableList(size) { 0.0 }) {

    companion object {
        fun of(vararg ints: Int) = of(*ints.map { it.toDouble() }.toDoubleArray())

        fun of(vararg double: Double): Vector = Vector(double.size, double.toMutableList())
    }

    constructor(size: Int, generator: (Int) -> Double) : this(size) {
        for (i in 0 until size) values[i] = generator(i)
    }

    operator fun get(int: Int) = values[int]
    operator fun set(int: Int, double: Double) {
        values[int] = double
    }

    override fun toString(): String {
        return buildString {
            append("\n(\n")
            for (value in values) {
                append(value)
                append("\n")
            }
            append(")\n")
        }
    }
}

class VectorOfVariables(val delg: MutableSet<Char> = mutableSetOf()) : MutableSet<Char> by delg {
    // the list of variables, to make sure that every matrix item has everything in the right column:
    fun createCoefficientMatrixItem(): MutableMap<Char, Double> = this.associate { it to 0.0 }.toMutableMap()

    // the list of variables, to make associating a vector of values to a vector of variables easy
    fun createCoefficientMatrixItem(operation: (Int) -> Double): MutableMap<Char, Double> {
        val map = this.associate { it to 0.0 }.toMutableMap()
        map.apply { for ((i, pair) in this.toList().withIndex()) this[pair.first] = operation(i) }
        return map
    }


}