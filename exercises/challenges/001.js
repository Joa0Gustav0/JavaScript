function countCharacters(characters, searchedText){
    let repetitionsQuantitie = 0
    for (let pos=0; pos < searchedText.length; pos++){
        if (characters === searchedText[pos]){
            repetitionsQuantitie++
        }
    }

    return repetitionsQuantitie
}

console.log(countCharacters('l','lalalalala'))