const pseudoJSON = [
    {
       "name":"London",
       "local_names":{
          "ms":"London",
          "gu":"લંડન",
          "is":"London",
          "wa":"Londe",
          "mg":"Lôndôna",
          "gl":"Londres",
          "om":"Landan",
          "ku":"London",
          "tw":"London",
          "mk":"Лондон",
          "ee":"London",
          "fj":"Lodoni",
          "gd":"Lunnainn",
          "ky":"Лондон",
          "yo":"Lọndọnu",
          "zu":"ILondon",
          "bg":"Лондон",
          "tk":"London",
          "co":"Londra",
          "sh":"London",
          "de":"London",
          "kl":"London",
          "bi":"London",
          "km":"ឡុងដ៍",
          "lt":"Londonas",
          "fi":"Lontoo",
          "fy":"Londen",
          "ba":"Лондон",
          "sc":"Londra",
          "feature_name":"London",
          "ja":"ロンドン",
          "am":"ለንደን",
          "sk":"Londýn",
          "mr":"लंडन",
          "es":"Londres",
          "sq":"Londra",
          "te":"లండన్",
          "br":"Londrez",
          "uz":"London",
          "da":"London",
          "sw":"London",
          "fa":"لندن",
          "sr":"Лондон",
          "cu":"Лондонъ",
          "ln":"Lóndɛlɛ",
          "na":"London",
          "wo":"Londar",
          "ig":"London",
          "to":"Lonitoni",
          "ta":"இலண்டன்",
          "mt":"Londra",
          "ar":"لندن",
          "su":"London",
          "ab":"Лондон",
          "ps":"لندن",
          "bm":"London",
          "mi":"Rānana",
          "kn":"ಲಂಡನ್",
          "kv":"Лондон",
          "os":"Лондон",
          "bn":"লন্ডন",
          "li":"Londe",
          "vi":"Luân Đôn",
          "zh":"伦敦",
          "eo":"Londono",
          "ha":"Landan",
          "tt":"Лондон",
          "lb":"London",
          "ce":"Лондон",
          "hu":"London",
          "it":"Londra",
          "tl":"Londres",
          "pl":"Londyn",
          "sm":"Lonetona",
          "en":"London",
          "vo":"London",
          "el":"Λονδίνο",
          "sn":"London",
          "fr":"Londres",
          "cs":"Londýn",
          "io":"London",
          "hi":"लंदन",
          "et":"London",
          "pa":"ਲੰਡਨ",
          "av":"Лондон",
          "ko":"런던",
          "bh":"लंदन",
          "yi":"לאנדאן",
          "sa":"लन्डन्",
          "sl":"London",
          "hr":"London",
          "si":"ලන්ඩන්",
          "so":"London",
          "gn":"Lóndyre",
          "ay":"London",
          "se":"London",
          "sd":"لنڊن",
          "af":"Londen",
          "ga":"Londain",
          "or":"ଲଣ୍ଡନ",
          "ia":"London",
          "ie":"London",
          "ug":"لوندۇن",
          "nl":"Londen",
          "gv":"Lunnin",
          "qu":"London",
          "be":"Лондан",
          "an":"Londres",
          "fo":"London",
          "hy":"Լոնդոն",
          "nv":"Tooh Dineé Bikin Haalá",
          "bo":"ལོན་ཊོན།",
          "ascii":"London",
          "id":"London",
          "lv":"Londona",
          "ca":"Londres",
          "no":"London",
          "nn":"London",
          "ml":"ലണ്ടൻ",
          "my":"လန်ဒန်မြို့",
          "ne":"लन्डन",
          "he":"לונדון",
          "cy":"Llundain",
          "lo":"ລອນດອນ",
          "jv":"London",
          "sv":"London",
          "mn":"Лондон",
          "tg":"Лондон",
          "kw":"Loundres",
          "cv":"Лондон",
          "az":"London",
          "oc":"Londres",
          "th":"ลอนดอน",
          "ru":"Лондон",
          "ny":"London",
          "bs":"London",
          "st":"London",
          "ro":"Londra",
          "rm":"Londra",
          "ff":"London",
          "kk":"Лондон",
          "uk":"Лондон",
          "pt":"Londres",
          "tr":"Londra",
          "eu":"Londres",
          "ht":"Lonn",
          "ka":"ლონდონი",
          "ur":"علاقہ لندن"
       },
       "lat":51.5073219,
       //"lon": -0.786,
       country:"GB",
       state:"England"
    }
]

const searchName = new Promise((resolve, reject) => {
    setTimeout(()=>{
        if (pseudoJSON[0].name != undefined){
            resolve(`getData_name: ${pseudoJSON[0].name}`)
        }else{
            reject(`getData_name: undefined`)
        }
    }, 1000)
})
const searchLat = new Promise((resolve, reject) => {
    setTimeout(() => {
        if (pseudoJSON[0].lat != undefined){
            resolve(`getData_lat: ${pseudoJSON[0].lat}`)
        }else{
            reject("getData_lat: undefined")
        }
    }, 2000)
})
const searchLon = new Promise((resolve, reject) => {
    setTimeout(() => {
        if (pseudoJSON[0].lon != undefined){
            resolve(`getData_lon: ${pseudoJSON[[0]].lon}`)
        }else{
            reject("getData_lon: undefined")
        }
    }, 3000)
})

async function getData(){
    console.log("getDataProcessStatus: initialize")
    await searchName
    .then((data) => {
        console.log(data)
        async function getData(){
            await searchLat
            .then((data) => {
                console.log(data)
            })
            .catch((dataErr) => {
                console.log(dataErr)
            })

            await searchLon
            .then((data) => {
                console.log(data)
            })
            .catch((dataErr) => {
                console.log(dataErr)
            })
            console.log("getDataProcessStatus: finalized")
        }
        getData()
    })
    .catch((dataErr) => {
        console.log(dataErr)
        console.log("getDataProcessStatus: finalized")
    })
}
getData()

