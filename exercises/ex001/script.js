let currentYear = Number(new Date().getFullYear())
let hours = Number(new Date().getHours())
let birthYear = Number(2010) //Insert your birth year
let yourAge = currentYear - birthYear 
console.log(`Your age is: ${yourAge}`)

function ageCheck(){
    if (yourAge >= 18){
        console.log("You are an adult!")
    }
    else if (yourAge < 18){
        console.log("Your are not an adult!")
        console.log(`It's: ${hours}h`)
        if (hours >= 22 || hours < 6){
            console.log("WHAT ARE YOU DOING AWAKE THIS TIME?!")
        }
        if (hours >= 6 && hours < 22){
            console.log("You can be awake!")
        }
    }
}

ageCheck()

