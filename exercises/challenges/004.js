function organizeList(usersList=[]){
    let users = [{current:false, admin:false, name:'Mariana'},
                {current:true, admin:true, name:'Gustavo'},
                {current:false, admin:false, name:'Tia Rato'},
                {current:false, admin:true, name: 'Bia'},
                {current: false,admin:false, name: 'Wynne'}]

    for (let pos=0; pos<users.length; pos++){
        if (users[pos].current == true){
            usersList.push(users[pos].name)
            users.splice(pos, 1)
            pos=0
        }
        if (users[pos].admin == true && users[pos].current == false){
            usersList.push(users[pos].name) 
            users.splice(pos, 1)
            pos=0
        }
        if (users[pos].admin == false && users[pos].current == false
            && usersList[0,1]!=null){
            usersList.push(users[pos].name) 
        }
    }
    return(usersList)
}
console.log(organizeList())