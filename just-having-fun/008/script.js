/* //Restructuring

const user = 
{
    name: "Pedro",
    age: 27,
    address: {
        street: "C3",
        number: 31
    }
}

const {name: nome, age: idade, address: Endereço, hoobies: Peculiaridades = "Não informado"} = user
console.log("O nome do usuário é: " + nome)
console.log("Sua idade é: " + idade)
console.log("O seu endereço é: Rua " + Endereço.street + ", " + "Número " + Endereço.number)
console.log("E o seus hobbies são: " + Peculiaridades) */

//Optional Chaining
/* const array = ["Julia", "Paula", "Victor"]

console.log(array[7] ? array[7] : "Não há mais que " + array.length + " pessoas adicionadas") */
/* const user = 
{
    name: "Pedro",
    age: 27,
    address: {
        street: "C3",
        number: 31,
        code: 9089788796
    }
}

console.log("O endereço do usuário é: " + (user.address?.code ?? "Não informado.")) */

