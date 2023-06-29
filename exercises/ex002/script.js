let currentHour = new Date().getHours()
let background = document.body.style
let title = document.querySelector('h1')
let timeTitle = document.querySelector('p')
let timeImage = document.querySelector('img')

timeTitle.innerText = `Now it's: ${currentHour} Hours`


//day
if (currentHour >= 6 && currentHour < 12){
    background.backgroundColor='#ffbb00'
    title.innerText='🌞Morning'
    timeImage.src='./media/morning.png'
}
//afternoon
if (currentHour >= 12 && currentHour < 18){
    background.backgroundColor='#ff9a48'
    title.innerText='⛅Afternoon'
    timeImage.src='./media/afternoon.png'
}
//night{
if (currentHour >= 18 && currentHour <= 23){
    background.backgroundColor='#334550'
    title.innerText='🌑Night'
    timeImage.src='./media/night.png'
}
//midnight
if (currentHour >= 0 && currentHour < 6){
    background.backgroundColor='#0d2637'
    title.innerText='💤Midnight'
    timeImage.src='./media/midnight.png'
}