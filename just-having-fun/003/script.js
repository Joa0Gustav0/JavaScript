function controlTab(currentHooker){
    let relativeTab = currentHooker.parentNode
    let isTabOpened = false
    if (relativeTab.style.left == '-80%'){
        isTabOpened = false
    }
    if (relativeTab.style.left == '0%'){
        isTabOpened = true
    }
    console.log(isTabOpened)
    if (isTabOpened == false){
        relativeTab.style.transition='.5s'
        relativeTab.style.left='0%'
    }
    if (isTabOpened == true){
        relativeTab.style.transition='.5s'
        relativeTab.style.left='-80%'
    }
}

//organizer
function finishClass(currentCard){
    let finishedClassesBox = document.querySelector('.finished-classes')
    finishedClassesBox.appendChild(currentCard.parentNode)
    currentCard.setAttribute('name',"close")
    currentCard.setAttribute('onclick', 'pendentClass(this)')
}
function pendentClass(currentCard){
    let pendentClassesBox = document.querySelector('.pendent-classes')
    pendentClassesBox.appendChild(currentCard.parentNode)
    currentCard.setAttribute('name',"checkmark-sharp")
    currentCard.setAttribute('onclick', 'finishClass(this)')
}

function deleteClass(currentCard){
    currentCard.parentNode.remove()
}