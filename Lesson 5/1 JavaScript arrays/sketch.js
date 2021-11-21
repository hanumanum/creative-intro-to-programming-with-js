//1. JavaScript Math 
let nums = [15, 25, 25, 100, 50, 60]
let names = ["Lusin", "Ani", "Michael", "Gevorg", "Haik", "Artak"]
let logic = [true, false, true, false, false]
let person = ["Petros", "Poghosyan", 16, true]

console.log(nums)
nums[6] = 1000
console.log(nums)
nums[1] = 500
console.log(nums)

nums.length
console.log(nums.length)

nums[9] = 5000
console.log(nums)


names[15] //undefined

console.log(names)
names.push("Penelope")
console.log(names)
names.unshift("Gedeon")
console.log(names)

names.pop()
console.log(names)
names.shift()
console.log(names)

let ind = names.indexOf("Garegin")
console.log(ind)
ind = names.indexOf("Ani")
console.log(ind)

let numbers = "15,12,56,89,10,50,100,35"
let myNewArray = numbers.split(",")
console.log(myNewArray)

let partners = "Petros Poghos Maritros"
let myPartnersArr = partners.split(" ")
console.log(myPartnersArr)


let myNumsAsString = nums.join("/")
console.log(myNumsAsString)

//splice()
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice
//slice()
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice
//push(), pop(), shift(), unshift(), indexOf(), split(),  splice(), slice(), join()

let Tmatrix = [
    [0, 0, 0, 0, 0, 0],
    [0, 255, 255, 255, 0, 0],
    [0, 0, 255, 0, 0, 0],
    [0, 0, 255, 0, 0, 0],
    [0, 0, 255, 0, 0, 0]
]

//Tmatrix[5] = [0, 0, 255, 0, 0, 0]
Tmatrix.push([0, 0, 255, 0, 0, 0])

console.log(Tmatrix)

Tmatrix[0][3]