//standard
for (let i = 0; i < 10; i++) {
    console.log(i)
}

//reversed
for (let i = 10; i >= 0; i--) {
    console.log(i)
}

//with omissions
for (let i = 0; i < 10; i += 2) {
    console.log(i)
}

//with conditionals
for (let i = 0; i < 100; i += 7) {
    console.log(i)
}

for (let i = 0; i < 100; i++) {
    if (i % 7 == 0) {
        console.log(i)
    }

}

console.log("for with arrays")
//for with arrays
let nums = [15, 25, 125,  50,  200, 50]
let sumOfNumbers = 0
for (let i = 0; i < nums.length; i++) {
    sumOfNumbers+=nums[i]
}
console.log(sumOfNumbers)
