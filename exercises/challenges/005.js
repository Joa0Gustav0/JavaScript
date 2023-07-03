function createFrame(width,height){
    let border = '+'
    let emptySpace = ""
    for (let pos=0; pos < width-2; pos++){
        border+='-'
        emptySpace +=" "
    }
    border += '+'
    console.log(border)
    if (height > 2){
        for (let pos=0; pos < height-2; pos++){
            console.log('-'+emptySpace+'-')
        }
    }
    if (height > 1){
        console.log(border)
    }
}

createFrame(5,6)