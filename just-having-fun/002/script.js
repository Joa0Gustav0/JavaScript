//Variables
var StylesTxt = document.querySelector('.result-text>p')

var cButtonValue = document.getElementById('copybutton')

function ApplyChanges(){
    var ModelBox = document.querySelector('div.model-box')

    var HShadow = document.getElementById('hshadow').value
    var VShadow = document.getElementById('vshadow').value
    var Blur = document.getElementById('blur').value
    var Spread = document.getElementById('spread').value
    var ShadowColor = document.getElementById('shadowcolor').value

    ModelBox.style.boxShadow = `${HShadow}px ${VShadow}px ${Blur}px ${Spread}px ${ShadowColor}`

    
    StylesTxt.innerText = `box-shadow: ${HShadow}px ${VShadow}px ${Blur}px ${Spread}px ${ShadowColor}`
}

function Copy(){
    if (StylesTxt.innerText != "..."){
        navigator.clipboard.writeText(StylesTxt.innerText)

        cButtonValue.value = "Copied!"
    }
    else{
        navigator.clipboard.writeText('')
    }

}
function returnCopyText(){
    cButtonValue.value = "Copy it!"
}

var Inset = document.getElementById('insetshadow').checked

