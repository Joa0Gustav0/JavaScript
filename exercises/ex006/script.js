function generateIt(){
    let selectedNumber = Number(document.querySelector('.main-number').value)

    let multiplierNumber = 1

    if (selectedNumber == '' || selectedNumber > 1000)
    {
        alert('Please, review the inserted number and try again! (maximum number: 1000)')
    }
    else{
        let tableBox = document.querySelector('.results-box')
        tableBox.innerHTML=''

        for (multiplierNumber; multiplierNumber <= 10; multiplierNumber += 1){
            let tableRes = selectedNumber * multiplierNumber

            let newTableLine = document.createElement('p')
            newTableLine.innerText = `${selectedNumber} x ${multiplierNumber} = ${tableRes}` 
            
            tableBox.appendChild(newTableLine)
        }
    }
}