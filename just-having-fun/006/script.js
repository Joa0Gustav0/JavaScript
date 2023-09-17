const authAPIKey = "7453c886c1d4cedc457664da1b118841"

const inputCity = "nova york"

const url = "https://api.openweathermap.org/data/2.5/weather?units=metric"

async function getData(){
    console.log("getData_status: initialized")
    var response = await fetch(url + `&q=${inputCity}` + `&appid=${authAPIKey}`)
    if (response.ok == true){
        var data = await response.json()
        console.log(`getData_name: ${data.name}`)
        console.log(`getData_temp: ${data.main.temp}`)
    }else{
        console.log(`getData_status: interrupted`)
        console.log(`Error: ${response.status} ${response.statusText}`)
        console.log(`getData_status: finalized`)
    }
}
getData()