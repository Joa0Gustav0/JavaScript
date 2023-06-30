let visualBox = document.querySelector('.visual-box')
let allNumbers = []

function addNumber(){
    let addedNumber = Number(document.querySelector('.insert-number').value)
    if(addedNumber =='' || addedNumber > 100 || addedNumber < 0 || allNumbers.indexOf(addedNumber) != -1){
        alert("Please, insert a number between 0 and 100!")
    }
    else{
        allNumbers.push(addedNumber)
        let newNumberLine = document.createElement('p')
        newNumberLine.innerText = `The number ${addedNumber} was added!`
        visualBox.appendChild(newNumberLine)
    }
}

function verifyNumbers(){
    if (visualBox.innerHTML == ''){
        alert('Please, add some numbers before verifying!')
    }
    else{
        let numbersQuantity = Number(allNumbers.length)
        allNumbers.sort()
        let highestNumber = allNumbers[numbersQuantity -1]
        let lowerNumber = allNumbers[0]

        let firstInformation = document.querySelector('.na')
        let secondInformation = document.querySelector('.hn')
        let thirdInformation = document.querySelector('.ln')
        let forthInformation = document.querySelector('.soan')
        let fifthInformation = document.querySelector('.navr')
        
        let sum=0
        let pos=0
        for (pos; pos < allNumbers.length; pos++){
            sum += allNumbers[pos]
            console.log(sum)
        }

        let average = sum / allNumbers.length
        
        firstInformation.innerText = `Numbers added: ${numbersQuantity}`
        secondInformation.innerText = `The highest number: ${highestNumber}`
        thirdInformation.innerText = `The lowest number: ${lowerNumber}`
        forthInformation.innerText = `The sum of all numbers: ${sum}`
        fifthInformation.innerText = `The numbers's average: ${average.toFixed(1)}`
    }
}