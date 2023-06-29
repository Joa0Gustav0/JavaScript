let currentYear = new Date().getFullYear()
let identityImage = document.querySelector('.visual-container>img')
let verifyButton = document.querySelector('.vi>input')

function getInformations(){
    let birthYear = Number(document.querySelector('#birthyear').value)

    if ((birthYear >= currentYear) || (birthYear <= 0)){
        window.alert("Select a valid birth year!!!")
    }

    let currentAge = currentYear - birthYear

    let sex;
    let maleRadio = document.querySelector('.malesex')
    let femaleRadio = document.querySelector('.femalesex')

    if (maleRadio.checked){
        sex = String('maleSex')
    }
    if (femaleRadio.checked){
        sex = String('femaleSex')
    } 

    function changeIdentity(){
        if (sex == 'maleSex'){
            if (currentAge >= 1 && currentAge <= 10){
                identityImage.src='media/child-male.jpg'
            }
            if (currentAge > 10 && currentAge < 18){
                identityImage.src='media/teen-male.jpg'
            }
            if (currentAge >= 18 && currentAge < 60){
                identityImage.src='media/adult-male.jpg'
            }
            if (currentAge >= 60){
                identityImage.src='media/elder-male.jpg'
            }
        }

        if (sex == 'femaleSex'){
            if (currentAge >= 1 && currentAge <= 10){
                identityImage.src='media/child-female.jpg'
            }
            if (currentAge > 10 && currentAge < 18){
                identityImage.src='media/teen-female.jpg'
            }
            if (currentAge >= 18 && currentAge < 60){
                identityImage.src='media/adult-female.jpg'
            }
            if (currentAge >= 60){
                identityImage.src='media/elder-female.jpg'
            }
        }
        verifyButton.value = "Verified!"
    }

    changeIdentity()
}

function returnButton(){
    verifyButton.value = "Verify it!"
}
