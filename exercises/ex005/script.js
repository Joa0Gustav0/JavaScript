function countIt(){
    let startNumber = Number(document.querySelector('.start-number').value)
    let endNumber = Number(document.querySelector('.end-number').value)
    let stepsNumber = Number(document.querySelector('.steps-number').value)

    if ((startNumber == NaN || startNumber >= endNumber) || (endNumber == NaN) || (stepsNumber == NaN)){
        alert('Please, review the informations and try again!')
    }
    else{
        let countageText = document.querySelector('.results-container>p')

        countageText.innerText=''

        for(startNumber; startNumber < endNumber; startNumber += stepsNumber){
            countageText.innerText = countageText.innerText + `${startNumber} ➡ `
        }

        countageText.innerText += '🏁'
    }

    

    /*for(startNumber; endNumber; startNumber += stepsNumber){

    }*/
}