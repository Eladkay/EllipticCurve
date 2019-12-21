package eladkay.ellipticcurve.test

import eladkay.ellipticcurve.mathengine.MathHelper

fun main(args: Array<String>) {
    exactnessPrimeTest()
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
    for(i in 1..1000000) MathHelper.isPrimeFast(i)
    val t2 = System.currentTimeMillis()
    for(i in 1..1000000) MathHelper.isPrimeFastBigInt(i)
    val t3 = System.currentTimeMillis()
    println("MathHelper.isPrime took ${t1 - t0} ms, MathHelper.isPrimeFast took ${t2 - t1} ms, MathHelper.isPrimeFastBigInt took ${t3 - t2} ms to test 10^6 numbers")
}

fun exactnessPrimeTest() {
    val array = listOf(mutableListOf(), mutableListOf(), mutableListOf<Boolean>())
    for(i in 1..100000) {
        array[0].add(MathHelper.isPrime(i))
        array[1].add(MathHelper.isPrimeFast(i))
        array[2].add(MathHelper.isPrimeFastBigInt(i))
    }

    for(i in 1..100000) {
        val isPrime = array[0][i-1]
        val isPrimeFast = array[1][i-1]
        val isPrimeFastBigInt = array[2][i-1]
        if(isPrime != isPrimeFast || isPrime != isPrimeFastBigInt || isPrimeFast != isPrimeFastBigInt) {
            println("$i: isPrime $isPrime isPrimeFast $isPrimeFast isPrimeFastBigInt $isPrimeFastBigInt")
            continue
        }
    }
}