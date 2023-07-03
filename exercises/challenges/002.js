function findPercentage(mainNumber, differentNumber){
    let percentage =  differentNumber/mainNumber * 100
    return percentage.toFixed(2)
}

console.log(findPercentage(357,37))