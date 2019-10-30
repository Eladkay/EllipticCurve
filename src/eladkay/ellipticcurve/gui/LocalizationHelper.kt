package eladkay.ellipticcurve.gui

import java.io.BufferedReader
import java.io.File
import java.io.InputStreamReader
import java.net.URLDecoder
import java.util.zip.ZipFile




val VALID_LOCS = listOf("en", "he")
val languages get() = VALID_LOCS.map { getTranslatedString("this", it) }

var currentLoc = "en"

fun getTranslatedString(key: String) =
        getFileContents("trans_$currentLoc.lang")
                .map { it.split("=") }
                .filterNot { it[0].startsWith("#") }
                .firstOrNull { it[0] == key }?.get(1) ?: key

fun getTranslatedString(key: String, language: String) =
        getFileContents("trans_$language.lang")
                .map { it.split("=") }
                .filterNot { it[0].startsWith("#") }
                .firstOrNull { it[0] == key }?.get(1) ?: key

private fun getFileContents(name: String): List<String> {
    if(!isRunningJarred()) return File("${System.getProperty("user.dir")}/src/$name").readLines()
    return BufferedReader(InputStreamReader(MainScreen::class.java.getResourceAsStream("/$name"))).readLines()
}

// thanks to https://stackoverflow.com/questions/482560/can-you-tell-on-runtime-if-youre-running-java-from-within-a-jar
private fun isRunningJarred(): Boolean {
    try {
        var jarFilePath = File(MainScreen::class.java.protectionDomain.codeSource.location.path).toString()
        jarFilePath = URLDecoder.decode(jarFilePath, "UTF-8")

        ZipFile(jarFilePath).use({ zipFile ->
            val zipEntry = zipFile.getEntry("META-INF/MANIFEST.MF")
            return zipEntry != null
        })
    } catch (exception: Exception) {
        return false
    }

}
operator fun String.unaryPlus() = getTranslatedString(this)
