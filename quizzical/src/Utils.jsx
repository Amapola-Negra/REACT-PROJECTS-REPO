import React from "react"
function convert(str) { 
    var text = document.createElement("textarea")
    text.innerHTML = str
    return text.value

}

/**To suffle the answers */
function shuffle(itemAnswers) {
    var currentIndex = itemAnswers.length, temporaryValue, randomIndex
        while (0 !== currentIndex) {
            randomIndex = Math.floor(Math.random() * currentIndex)
            currentIndex -= 1
            temporaryValue = itemAnswers[currentIndex]
            itemAnswers[currentIndex] = itemAnswers[randomIndex]
            itemAnswers[randomIndex] = temporaryValue
        }

    return itemAnswers;
}

export {convert, shuffle}