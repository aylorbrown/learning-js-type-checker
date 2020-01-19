const sentenceTag = document.querySelector(`input[type="text"]`)
const outputTag = document.querySelector("section.output")

// when user types in sentenceTag, update the outputTag accordingly
sentenceTag.addEventListener("keyup", function () {
    outputTag.innerHTML = sentenceTag.value
})