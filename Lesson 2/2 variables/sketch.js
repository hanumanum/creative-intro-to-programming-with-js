//Փոփոխականների հայտարարում (let x) և վերագրում (x=100)
//հայտարարում անգլ․ declaration
//վերագրում անգլ․ assignment
let x = 100
console.log(x)

//Վերագրում
x = 20
console.log(x)

//Վերագրում
x = x + 10
console.log(x)

let txt = "բարև"
console.log(txt)

let n = 10
let b = n / 20

//Ինքնավերագրման օպերատորներ
let ok = 50
ok+=10 //60
console.log(ok)

ok-=10 //50
ok/=10 //5
ok*=10 //50
ok**=10 //

//Տողերի գումար
let fname = "Պետրոս"
let lname = "Պողոսյան"
let fullName = fname + " " + lname
console.log(fullName)

//Համեմատության օպերատորի օրինակ
let n1 = 20
let n2 = 10
let h = n1 == n2
console.log(h)

let p = 50
//pretincrement 
console.log(++p) //փոխիր նոր օգտագործիր
console.log(p)

let u = 50
//postincrement
console.log(u++) //օգտագործիր նոր փոխիր
console.log(u)


//=====let և const
const pi = 3.14 //const-ով սահմանված փոփոխականների արժեքը այլևս հնարավոր չի լինի փոփոխել


function setup() {
    let r = prompt("Input r")
    let x = prompt("Input x")
    let y = prompt("Input y")
    let col = prompt("Input color")

    createCanvas(800, 200)
    background("black")

    fill(col)
    ellipse(x, y, r)
}


//Տիպերի բերում
//typeof()
//parseInt(), parseFloat()
//NaN, isNaN()
//String(), Number(), Boolean()