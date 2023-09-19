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
convertTo("F")*/
//filter()
//Removes elements that are not into a condition(filtering)
const numberArray = [57, 12, 16, 29, 18, 33, 15]

var result = numberArray.filter((elem, i, array) => elem >= 16 && elem <= 32)

console.log(result)