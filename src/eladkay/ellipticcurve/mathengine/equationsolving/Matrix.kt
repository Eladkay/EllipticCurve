package eladkay.ellipticcurve.mathengine.equationsolving

import eladkay.ellipticcurve.mathengine.Field

open class Matrix(val size: Int, val field: Field, val rows: MutableList<MutableList<Double>> = MutableList(size) { MutableList(size) { 0.0 } }) {

    operator fun iterator(): Iterator<Triple<Int, Int, Double>> {
        return object : Iterator<Triple<Int, Int, Double>> {
            var i: Int = 0
            var j: Int = 0
            override fun hasNext(): Boolean {
                return j != size
            }

            override fun next(): Triple<Int, Int, Double> {
                val ret = Triple(i, j, this@Matrix[i, j])
                i++
                if (i == size) {
                    i = 0
                    j++
                }
                return ret
            }

        }
    }

    fun copy(): Matrix {
        return Matrix(size, field, rows.map { it.map { it }.toMutableList() }.toMutableList())
    }

    companion object {
        fun of(field: Field = Field.REALS, vararg ints: Int) = of(field, *ints.map { it.toDouble() }.toDoubleArray())
        fun of(field: Field = Field.REALS, vararg doubles: Double): Matrix =
                if (Math.sqrt(doubles.size.toDouble()) != Math.floor(Math.sqrt(doubles.size.toDouble())))
                    throw UnsupportedOperationException()
                else {
                    val size = Math.sqrt(doubles.size.toDouble()).toInt()
                    val newRows = mutableListOf<MutableList<Double>>()
                    val currentRow = mutableListOf<Double>()
                    var flag = false
                    for ((i, double) in doubles.withIndex()) {
                        if (i % size == 0) {
                            if (flag) {
                                newRows.add(currentRow.map { it }.toMutableList())
                                currentRow.clear()
                            } else flag = true
                        }
                        currentRow.add(double)

                    }
                    newRows.add(currentRow)
                    Matrix(size, field, newRows)
                }
    }

    constructor(size: Int, field: Field, generator: (row: Int, column: Int) -> Double) : this(size, field) {
        for (row in 0 until size) for (column in 0 until size)
            this[row, column] = generator(row, column)
    }

    override fun toString(): String {
        return buildString {
            append("\n(\n")
            for (row in rows) {
                for (number in row) {
                    append(number)
                    append(" ")
                }
                append("\n")
            }
            append(")\n")
        }
    }

    @Suppress("NAME_SHADOWING") // Explicit is better than implicit
    operator fun times(double: Double) = Matrix(size, field, rows.map { it.map { it -> !field { !it * !double } }.toMutableList() }.toMutableList())

    @Suppress("NAME_SHADOWING") // Explicit is better than implicit
    operator fun div(double: Double) = Matrix(size, field, rows.map { it.map { it -> !field { !it / !double } }.toMutableList() }.toMutableList())

    operator fun get(y: Int, x: Int) = rows[y][x]

    operator fun set(y: Int, x: Int, value: Double) {
        rows[y][x] = value
    }

    fun transpose(): Matrix {
        val ret = Matrix(size, field)
        for (i in 0 until size)
            for (j in 0 until size)
                ret[i, j] = this[j, i]
        return ret
    }

    fun cofactor() = Matrix(size, field) { row, col -> !field { !this@Matrix[row, col] * !Math.pow(-1.0, !(!row.toDouble() + !col.toDouble())) } }

    fun minors() = Matrix(size, field) { row, column -> minor(row, column).det() }

    operator fun contains(double: Double): Boolean {
        return rows.any { double in it }
    }

    fun any(predicate: (Double) -> Boolean): Boolean {
        return rows.any { it.any { predicate(it) } }
    }

    fun invert(): Matrix = (minors().cofactor().transpose() / field { !!det() }).takeUnless { it.any { it.isNaN() || it.isInfinite() } }
            ?: throw Exception("Indeterminate")

    fun minor(row: Int, column: Int): Matrix {
        val newRows = rows.map { it.map { it }.toMutableList() }.toMutableList()
        newRows.removeAt(row)
        newRows.map { it.removeAt(column) }
        return Matrix(size - 1, field, newRows)
    }

    fun det(): Double {
        if (size == 1) return this[0, 0]
        var sum = 0.0
        val i = 0 // row expanded along
        for (j in 0 until size)
            sum += !field { !Math.pow(-1.0, i + j.toDouble()) * !this@Matrix[i, j] * !minor(i, j).det() }
        return sum
    }

    operator fun invoke(vector: Vector) = if (vector.size == size) {
        val vec = Vector(vector.size)
        for (i in 0 until size) { // row
            var sum = 0.0
            for (j in 0 until size) { // col
                sum += !field { !this@Matrix[i, j] * !vector[j] }
            }
            vec[i] = field { !!sum }
        }
        vec
    } else
        throw IllegalArgumentException("Mismatched matrix sizes: $vector, $this")
}