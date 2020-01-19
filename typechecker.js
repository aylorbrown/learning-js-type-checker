const sentenceTag = document.querySelector(`input[type="text"]`)
const typesizeTag = document.querySelector(`input[name="typesize"]`)
const typesizeOutput = document.querySelector("span.typesize-output")
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

//when user changes typesize slider, update the text next to it 
// and change the outputTag's font size 
typesizeTag.addEventListener("input", function () {
    outputTag.style.fontSize = this.value + "px"
    typesizeOutput.innerHTML = this.value + " pixels"
  })