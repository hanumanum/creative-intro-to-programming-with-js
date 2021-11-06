//1. function as black box
//2. function as whtie box
//3. function declaration
//4. function call
//5. function parameters
//6. local and global variables

let x = 10

function setup() {
    createCanvas(1000, 1000)
    background("black")
    let x = 50
    console.log(x)
    drawCiclop()

    line(100, 200, 150, 20)

    drawCiclop(100, 200, 150) //ֆունկցիայի կանչ, function invocation or call
    drawCiclop(200, 250, 70)
    drawCiclop(300, 250, 80)

    drawFlower(250,100,80) //ֆունկցիայի կանչ, function invocation or call
    drawFlower(500,450,20)
}

//Ֆունկցիայի հայտարարում 
function drawCiclop(x, y, r) {
    let cX = x
    let cY = y
    let d = r

    fill("blue")
    ellipse(cX, cY, d)
    fill("red")
    ellipse(cX, cY - d / 4, d / 3)
    fill("green")
    ellipse(cX, cY + d / 4, d / 2, d / 4)
}

//Ֆունկցիայի հայտարարում 
function drawFlower(x,y,d){
    noFill()
    stroke("white")
    ellipse(x, y, d)
    ellipse(x, y - d / 2, d)
    ellipse(x, y + d / 2, d)
    ellipse(x - d / 2, y, d)
    ellipse(x + d / 2, y, d)
}
