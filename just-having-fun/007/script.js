/*//map()
//Pass through all elements from an array(maping).
//Ex. 1:
const MyArray = [0, 33, 54, 98, 37]

const TimeElements = MyArray.map((currentElem) => {
    return currentElem * 3
})
console.log(TimeElements)

//Ex.2:
const inputName = "Jessica Abigail Parker"
const infoProcessing = Array.from(inputName).map((currentIndex) => {
    if (currentIndex == " "){
        return "-"
    }else{
        return currentIndex
    }
})
console.log(infoProcessing)

//Ex.3:
const temps = 
[
    {temp: 25, scale: "F"},
    {temp: 84, scale: "K"},
    {temp: 59, scale: "K"},
    {temp: 37, scale: "C"},
    {temp: 13, scale: "F"},
]

const convertTo = (requiredScale) => {
    const mapTemps = temps.map((currentTemp) => {
        var resultTemp
        if (requiredScale == "C"){
            if (currentTemp.scale == "F"){
                resultTemp = (currentTemp.temp - 32) / 1.8
            }else if (currentTemp.scale == "K"){
                resultTemp = currentTemp.temp - 273
            }else if (currentTemp.scale == requiredScale){
                resultTemp = currentTemp.temp
            }
        }else if(requiredScale == "F"){
            if (currentTemp.scale == "C"){
                resultTemp = currentTemp.temp * 1.8 + 32
            }else if (currentTemp.scale == "K"){
                resultTemp = (currentTemp.temp - 273) * 1.8 + 32
            }else if (currentTemp.scale == requiredScale){
                resultTemp = currentTemp.temp
            }
        }else if(requiredScale == "K"){
            if (currentTemp.scale == "C"){
                resultTemp = currentTemp.temp + 273
            }else if (currentTemp.scale == "F"){
                resultTemp = (currentTemp.temp - 32) / 1.8 + 273
            }else if (currentTemp.scale == requiredScale){
                resultTemp = currentTemp.temp
            }
        }

        if (requiredScale == "K"){
            return String(resultTemp.toFixed(2) + requiredScale)
        }else{
            return String(resultTemp.toFixed(2) + "°" + requiredScale)
        }
    })
    console.log(mapTemps)
}
convertTo("F")

//filter()
//Removes elements that are not into a condition(filtering)
//Ex.1:
const numberArray = [57, 12, 16, 29, 18, 33, 15]

var result = numberArray.filter((elem, i, array) => elem >= 16 && elem <= 32)

console.log(result)

//reduce()
//reduces array's values into a unic one. Concatenate values.
//Ex.1:
const passengersPerStop = [8, 16, 5, 3, 19]

var totalPassengers = passengersPerStop.reduce((prevQuantity, currentValue) => prevQuantity + currentValue)
console.log(totalPassengers)

//Ex.2:
const costumers =
[
    {name: "Rose", age: 27, shopNum: 24},
    {name: "Sara", age: 16, shopNum: 5},
    {name: "Karol", age: 64, shopNum: 16},
    {name: "Jorge", age: 37, shopNum: 12},
    {name: "Gangplank", age: 70, shopNum: 8},
    {name: "Edgar", age: 26, shopNum: 4},
    {name: "Jenice", age: 17, shopNum: 9},
    {name: "Abigail", age: 42, shopNum: 24},
    {name: "Darcylaine", age: 48, shopNum: 20}
]

var over18Costumers = costumers.filter((costumer, i, array) => costumer.age >= 18)
var secondAgeCostumers = over18Costumers.filter((costumer, i, array) => costumer.age < 30 && costumer.age >= 18)
var middleAgeCostumers = over18Costumers.filter((costumer, i, array) => costumer.age >= 30 && costumer.age < 60)
var thirdAgeCostumers = over18Costumers.filter((costumer, i, array) => costumer.age >= 60)
var totalShopNum = costumers.reduce((prevValue, currentValue) => prevValue + currentValue.shopNum, 0)

console.log("This costumers are over 18:")
console.log(over18Costumers)
console.log("This costumers are at second age:")
console.log(secondAgeCostumers)
console.log("This costumers are at middle age:")
console.log(middleAgeCostumers)
console.log("This costumers are at third age:")
console.log(thirdAgeCostumers)
console.log("The total number of buying by the current costumers is: " + totalShopNum)

//every()
//returns a boolean value if all the array's elements pass a logic test
//Ex.1:
const MyArray = [57, 87, 23, 94]
console.log(MyArray.every((elem) => elem < 60))

//Ex.2:
const people =
[
    {name: "Rose", age: 27},
    //{name: "Sara", age: 16},
    {name: "Karol", age: 64},
    {name: "Jorge", age: 37},
    {name: "Gangplank", age: 70},
    //{name: "Jenice", age: 17}
]

if (people.every((elem) => elem.age > 18)){
    console.log("All the people are over 18.")
}else{
    console.log("Some people are not over 18")
}

//some()
//Ex.1:
const students =
[
    {name: "Rose", age: 27},
    {name: "Sara", age: 16},
    {name: "Karol", age: 64},
    {name: "Jorge", age: 37},
    {name: "Gangplank", age: 70},
    {name: "Jenice", age: 17}
]

if (students.some((elem) => elem.age > 18)){
    console.log("Some people are over 18.")
}else{
    console.log("Nobody is over 18")
}
*/