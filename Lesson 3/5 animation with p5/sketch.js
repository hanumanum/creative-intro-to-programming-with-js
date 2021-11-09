//Շարժվող քառակուսի, պատերից անդրադարձում և գույնի փոփոխություն պատին կպնելուց հետո
let x = 100
let y = 200
let d = 150
let d1 = 80

function setup() {
    createCanvas(500, 500)
    background("black")
    noStroke()
    frameRate(10)
}

function draw() {
    if(frameCount<50){
        d++
    }
    else{
        d--
    }
    console.log(d)
    background("black")
    fill("blue")
    ellipse(x, y, d)
    
}