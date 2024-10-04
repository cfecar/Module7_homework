//Задание 7.7.1
const person = {
    name: "Nikita",
    age: "24"
}
function printInfo() {
    console.log(`Name: ${this.name}, Age: ${this.age}`)
}

printInfo.call(person)

//Задание 7.7.2
function calculate() {
    switch (this.operator) {
        case "+":
            return this.a + this.b
            break
        case "-":
            return this.a - this.b
            break
        case "*":
            return this.a * this.b
            break
        case "/":
            return this.a / this.b
            break
        default:
            return 0
    }
}
let operations = {
    a: 2,
    b: 3,
    operator: "+"
}
console.log(calculate.apply(operations))

//Задание 7.7.3
const users = [
    {
        name: "Nikita",
        age: 21
    },
    {
        name: "Kola",
        age: 16
    },
    {
        name: "Ivan",
        age: 32
    },
    {
        name: "Eva",
        age: 21
    }
]

const filteredUsersAge = users.filter((user) => user.age >= 18)
const usersName = (arr) => {
    let newArr = []
    for (let elem of arr) {
        for (let key in elem) {
            if (key === "name") {
                newArr.push(elem[key])
            }
        }
    }
    return newArr
}
console.log(usersName(users))
console.log(filteredUsersAge, usersName)

//Задание 7.7.4
let newPerson = {
    firstName: "John",
    lastName: "Doe",
    fullName: ""
}

function setFullName(name) {
    this.fullName = name
}

const setPersonFullName = setFullName.bind(newPerson)

setPersonFullName("John Smith")

console.log(newPerson.fullName)

//Задание 7.7.5

function arrayFilter(arr) {
    return arr.filter((value, index, self) => self.indexOf(value) === index)
}
console.log(arrayFilter([1, 2, 3, 2, 4, 5, 3, 6, 1]))