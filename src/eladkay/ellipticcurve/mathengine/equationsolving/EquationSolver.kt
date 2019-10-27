package eladkay.ellipticcurve.mathengine.equationsolving

import eladkay.ellipticcurve.mathengine.Field
import eladkay.ellipticcurve.mathengine.Field.Companion.REALS
import java.security.InvalidParameterException

typealias LinearSystemOfEquations = Triple<Matrix, VectorOfVariables, Vector>

// Adapted from Eladkay/EqSolver, my own creation and made to use the field system
object EquationSolver {


    // The Solver
    fun solve(vararg strings: String, verbose: Boolean = false): Map<Char, Double> {

        val (A, v, k) = if (strings.size != 1) parse(strings.toList().map { simplifyEquation(it, verbose) }) // split up the system into its linear algebra form of Ax = v
        else { // when there's only one equation, it weirdly breaks, so i'm making another equation, you know, for fun
            val variable = strings[0].first { it.isLetter() }
            val newEq = strings[0].replace(variable, variable + 1)
            parse(listOf(simplifyEquation(strings[0], verbose), simplifyEquation(newEq, verbose)))
        }
        if (verbose) {
            println("A: $A\n\n")
            println("A inverse: ${A.invert()}\n\n")
            println("V: $v\n\n")
            println("K: $k\n\n")
        }
        val vSol = A.invert()(k) // solve the equation using the inverse matrix

        return if (strings.size != 1) v.createCoefficientMatrixItem { vSol[it] } else mapOf(v.elementAt(0) to vSol[0]) // associate the numbers to the variables they correspond to
    }

    fun simplifyEquation(equation: String, verbose: Boolean = false): String {
        val sides = equation.split("=") // split each equation into left and right
        var coefficients = mutableMapOf<Char?, Double>() // store the net coefficients of the equation
        if (sides.size != 2) throw Exception("Multiple equations!") // we only allow one equation per string at this point
        for ((i, side) in sides.withIndex()) {
            val terms = side.split("+")
                    .flatMap {
                        // handle negatives
                        it.split("-").mapIndexed { index, s -> if (index == 0) s else "-$s" } // every term except the first in a negation sequence is to be negated.
                    }.map { it.trim() }
            val coeffPairs = terms.map {
                val lastChr = it[it.length - 1] // try to find a variable suffix
                if (lastChr.isDigit()) null to it.toDouble() // no variable suffix, this is a constant
                else {
                    val ss = it.substring(0 until it.length - 1) // find the variable
                    lastChr to if (ss == "-") -1.0 else if (ss.isNotEmpty()) ss.toDouble() else 1.0 // return the variable-coefficient pair, parsed
                }
            }.sortedBy { it.first } // sort it so that variables don't have to come in the same order every time
            for ((variable, coefficient) in coeffPairs) {
                if (variable == null) // constant term
                    coefficients[null] = coefficients.getOrDefault(null, 0.0) - (coefficient * if (i == 0) 1 else -1) // constants on the left, make sure they have the right sign
                else // variable term
                    coefficients[variable] = coefficients.getOrDefault(variable, 0.0) + (coefficient * if (i == 0) 1 else -1) // variables on the right, make sure they have the right sign
            }
        }
        coefficients = mutableMapOf(*coefficients.toList().sortedBy { it.first }.toTypedArray()) // sort the final coefficient list too

        if (verbose)
            println(coefficients.filter { it.key != null }.toList().joinToString("+") { (char, value) -> "$value$char" } + "=" + coefficients.getOrDefault(null, 0))

        // return the equation, with all variables having the right coefficients, all neatly sorted and with constants on the left:
        return coefficients.filter { it.key != null }.toList().joinToString("+") { (char, value) -> "$value$char" } +
                "=" +
                coefficients.getOrDefault(null, 0)

    }


    // The form of a linear system of equations is Av=k, where A is a matrix, v and k are vectors
// List of assumptions, given that equations go through simplifyEquation:
// One equation per string (no x=y=z)
    fun parse(equations: List<String>, field: Field = REALS): LinearSystemOfEquations {
        val sides = equations.map { it.split("=").map { it.trim() } }
        if (sides.any { it.size != 2 }) throw InvalidParameterException("Invalid system of equations")
        val numbers = sides.map { it[1].toDouble() }
        val k = Vector(numbers.size)
        numbers.forEachIndexed { i, it -> k.values[i] = it }
        val v = VectorOfVariables()
        var A: Matrix? = null
        for ((i, equation) in equations.map { it.split("=")[0].trim() }.withIndex()) {
            var terms = equation.split("+").map {
                // find all positive coeff terms
                if (it.count { it.isLetter() } > 1 && "E" in it) // let's not let small or big numbers throw us off
                    it.trim().split("E")[0] + it.trim()[it.length - 1] // put back the variable
                else it.trim()
            }

            // start find neg coeff terms
            terms = terms.flatMap {
                val mr = "(\\w+)(?: )?-(?: )?(\\w+)".toRegex().matchEntire(it)
                if (mr == null) return@flatMap listOf(it)
                else return@flatMap listOf(mr.groupValues[1], "-" + mr.groupValues[2])
            }
            // end find neg coeff terms

            // start parse variable-coefficient pairs
            val pairs = terms.map {
                val groups = "(-*\\d*\\.*\\d*)([a-zA-Zא-ת])".toRegex().matchEntire(it)?.groupValues
                        ?: throw Exception("\"$it\""); groups[1] to groups[2]
            }.map {
                val coeff = if (it.first.isEmpty()) 1.0 else if (it.first == "-") -1.0 else it.first.toDouble()
                val variable = it.second[0]
                coeff to variable
            }
            // end parse variable-coefficient pairs

            v.addAll(pairs.map { it.second }) // add new variables

            // begin matrix expander
            if (A == null) A = Matrix(v.size, field)
            else if (A.size < v.size) {
                val oldMat = A.copy()
                A = Matrix(v.size, field)
                for ((row, col, value) in oldMat) A[row, col] = value

            }
            // end matrix expander

            // start add new items
            val matItem = v.createCoefficientMatrixItem()
            pairs.forEach { matItem[it.second] = it.first }
            matItem.toList().forEachIndexed { j, pair -> A[i, j] = pair.second }
            // end add new items
        }
        if (v.size != A!!.size) throw Exception("indeterminate")
        return Triple(A, v, k)

    }

}