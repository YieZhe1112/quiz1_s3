let message = "BENR"
console.log(message)
console.log(typeof message + "\n")

message = 123
console.log(message , typeof message  + "\n")

let str = "BENR"
let num = 3523
let course = str + num
console.log(course  + "\n")

str = "1"
num = 1 //the name of the variable can be use agian
let total = parseInt(str) + num //parseInt change string to integer
console.log(total  + "\n")

data = ["a","b",true] //array
console.log(data[0])
console.log(data[1])
console.log(data[2])
console.log(data[3]  + "\n") //if array don't exits it will become undefined

data = {name : "Khoo", age : 21, faculty : "FKEKK"} //object
console.log(data.name)
console.log(data.age)
console.log(data.faculty  + "\n")

let comment = [ //JSON objects inside array
    {Name : "Usr 1", Date : "30/3/2023", Msg : "good video", Like : 1000},
    {Name : "Usr 2", Date : "31/3/2023", Msg : "very good video", Like : 2000}
]
console.log(comment[1].Msg);