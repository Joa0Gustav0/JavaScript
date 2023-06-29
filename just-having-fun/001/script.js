let uncompletedBox = document.querySelector('.uncompleted-todos')
let completedBox = document.querySelector('.completed-todos')

function newTodo(){
    let inputContent = document.querySelector('#send-messages-inputid')
    if (String(inputContent.value).length == 0){
        alert("Please, write something and try again!")
    }
    else{
        let taskText = String(inputContent.value)
        inputContent.value=''
        let newMessage = document.createElement("div")
        newMessage.setAttribute('class', 'message')
        uncompletedBox.appendChild(newMessage)

        let trashIcon = document.createElement('ion-icon')
        trashIcon.setAttribute('name', 'trash')
        trashIcon.setAttribute('onclick', 'trashTodo(this)')
        newMessage.appendChild(trashIcon)
        
        let messageContent = document.createElement("p")
        messageContent.innerText = taskText
        newMessage.appendChild(messageContent)

        let doneIcon = document.createElement('ion-icon')
        doneIcon.setAttribute('name', 'checkmark-outline')
        doneIcon.setAttribute('onclick', 'completedTodo(this)')
        newMessage.appendChild(doneIcon)
    }
}

function trashTodo(thisElement){
    let currentElement = thisElement.parentNode
    currentElement.remove()
}

function completedTodo(thisElement){
    let currentElement = thisElement
    currentElement.name = 'close-outline'
    currentElement.setAttribute('onclick', 'uncompletedTodo(this)')
    completedBox.appendChild(currentElement.parentNode)
}

function uncompletedTodo(thisElement){
    let currentElement = thisElement
    currentElement.name = 'checkmark-outline'
    currentElement.setAttribute('onclick', 'completedTodo(this)')
    uncompletedBox.appendChild(currentElement.parentNode)
}