function analiseDatas(fName,Lname,age){
    let res = ''
    if (fName!=null){
        res += `name:${fName} `
    }
    if (Lname!=null){
        res += `surname:${Lname} `
    }
    if(age!=null){
        res += `age:${age}`
    }
    return res
}

console.log(analiseDatas(fName = 'Paulo', Lname=null, age=8))