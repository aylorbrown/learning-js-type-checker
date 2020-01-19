const sentenceTag = document.querySelector(`input[type="text"]`)

const typesizeTag = document.querySelector(`input[name="typesize"]`)
const typesizeOutput = document.querySelector("span.typesize-output")

const lineheightTag = document.querySelector(`input[name="lineheight"]`)
const lineheightOutput = document.querySelector("span.lineheight-output")

const italicTag = document.querySelector(`input[name="italic"]`)

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

lineheightTag.addEventListener("input", function() {
    outputTag.style.lineHeight = this.value
    lineheightOutput.innerHTML = this.value
})

//when user clicks the italic checkbox, update the font style to 
//either normal or italic depending if its checked or not 
italicTag.addEventListener("change", function () {
    if(this.checked) {
        outputTag.style.fontStyle = "italic"
    } else {
        outputTag.style.fontStyle = "normal"
    }
})