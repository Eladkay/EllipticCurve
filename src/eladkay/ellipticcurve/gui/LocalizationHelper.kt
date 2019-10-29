package eladkay.ellipticcurve.gui

import java.io.File

val VALID_LOCS = listOf("en", "he")
val languages get() = VALID_LOCS.map { getTranslatedString("this", it) }

var currentLoc = "en"

fun getTranslatedString(key: String) =
        File("trans_$currentLoc.lang")
                .readLines()
                .map { it.split("=") }
                .firstOrNull { it[0] == key }?.get(1) ?: key

fun getTranslatedString(key: String, language: String) =
        File("trans_$language.lang")
                .readLines()
                .map { it.split("=") }
                .firstOrNull { it[0] == key }?.get(1) ?: key

operator fun String.unaryPlus() = getTranslatedString(this)
