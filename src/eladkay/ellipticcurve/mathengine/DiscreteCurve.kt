package eladkay.ellipticcurve.mathengine

interface DiscreteCurve : Curve {
    val curvePoints: Collection<Vec2d>
    val modulus: Long // in generalization, this is a number such that all points have x, y less than it, and generally modulus/2<|curvePoints|<3modulus/2
}