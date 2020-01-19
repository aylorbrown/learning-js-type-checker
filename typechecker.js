const sentenceTag = document.querySelector(`input[type="text"]`)
const outputTag = document.querySelector("textarea.output")
const originalText = outputTag.value

// when user types in sentenceTag, update the outputTag accordingly
// if there;s no value, put in originalText
sentenceTag.addEventListener("keyup", function () {
    if (this.value) {
        outputTag.value = this.value
    // fallback value 
    } else {
        outputTag.value = originalText
    }
})

// when user types in outputTag, update the sentenceTag accordingly
outputTag.addEventListener("keyup", function () {
    sentenceTag.value = this.value
})