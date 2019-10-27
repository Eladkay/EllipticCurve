package eladkay.ellipticcurve.mathengine

import eladkay.ellipticcurve.simulationengine.CurveFrame
import eladkay.ellipticcurve.simulationengine.EllipticSimulator

fun serializeCurveFrame(curveFrame: CurveFrame): String {
    val curve = curveFrame.curve
    val scale = EllipticSimulator.scale
    val field = if(curve.field == Field.REALS) "R" else (curve.field as Field.ZpField).modulo.toString()
    return "${curve.aValue};${curve.bValue};$field;$scale"
}

fun deserializeCurveFrame(string: String): EllipticCurve {
    val split = string.split(";")
    val field = if(split[2] == "R") Field.REALS else Field.createModuloField(split[2].toInt())
    val curve = EllipticCurve(split[0].toDouble(), split[1].toDouble(), field)
    EllipticSimulator.scale = split[3].toInt()
    return curve
}