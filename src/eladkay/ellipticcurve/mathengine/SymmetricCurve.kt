package eladkay.ellipticcurve.mathengine

interface SymmetricCurve : Curve {
    val lineOfSymmetry: Double // we assume parallel to x axis
}