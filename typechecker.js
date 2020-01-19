const sentenceTag = document.querySelector(`input[type="text"]`)
const outputTag = document.querySelector("section.output")
const originalText = outputTag.innerHTML

// when user types in sentenceTag, update the outputTag accordingly
// if there;s no value, put in originalText
sentenceTag.addEventListener("keyup", function () {
    if (this.value) {
        outputTag.innerHTML = this.value
    // fallback value 
    } else {
        outputTag.innerHTML = originalText
    }
})