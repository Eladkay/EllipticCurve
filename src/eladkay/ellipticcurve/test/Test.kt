package eladkay.ellipticcurve.test

import eladkay.ellipticcurve.mathengine.MathHelper

fun main(args: Array<String>) {
    exactnessPrimeTest()
    //println(EllipticCurve(1, -1, "reals").helper.asciiGeneratorTable)
    /*val ss = StringSelection("hifdidf")
    Toolkit.getDefaultToolkit().systemClipboard.setContents(ss, ss)*/
    /*for(i in 0..127) {
        val s = if (i<=0xF) "000${i.toString(16)}" else "00${i.toString(16)}"
        print("\'\\u$s\', ")
    }*/
    //exactnessPrimeTest()
//    println(MathHelper.isPrimeFast(66977))
    //EventQueue.invokeLater(MainScreen::createAndShow)
//    EllipticCurve(-1.0, 1.0, Field.REALS) ({
//        println(getPeak2())
//    })
    /*BezierSplines.vertices.add(Vec2i(60, 60))
    BezierSplines.vertices.add(Vec2i(220, 300))
    BezierSplines.vertices.add(Vec2i(420, 300))
    BezierSplines.vertices.add(Vec2i(700, 240))
    BezierSplines.updateSplines()*/
}

// MathHelper.isPrime took 305 ms, MathHelper.isPrimeFast took 8498 ms to test 10^6 numbers
fun primeTests() {
    val t0 = System.currentTimeMillis()
    for(i in 1..1000000) MathHelper.isPrime(i)
    val t1 = System.currentTimeMillis()
    for(i in 1..1000000) MathHelper.isPrimeFastBigInt(i)
    val t2 = System.currentTimeMillis()
    println("MathHelper.isPrime took ${t1 - t0} ms, MathHelper.isPrimeFastBigInt took ${t2 - t1} ms")
}

fun exactnessPrimeTest() {
    val array = listOf(mutableListOf(), mutableListOf<Boolean>())
    for(i in 1..100000) {
        array[0].add(MathHelper.isPrime(i))
        array[1].add(MathHelper.isPrimeFastBigInt(i))
    }

    for(i in 1..100000) {
        val isPrime = array[0][i-1]
        val isPrimeFast = array[1][i-1]
        if(isPrime != isPrimeFast) {
            println("$i: isPrime $isPrime isPrimeFastBigInt $isPrimeFast")
            continue
        }
    }
}
