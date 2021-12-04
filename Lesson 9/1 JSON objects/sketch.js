let w = 800
let h = 800

//Change this to JSON object 
let circle1 = {
    x:400,
    y:400,
    r:150,
    clr:"violet"
}

let circle2 = {
    x:400,
    y:400,
    r:80,
    clr:"red"
}

let circle3 = {
    x:200,
    y:560,
    r:80,
    clr:"white"
}

function setup() {
    createCanvas(w, h)
    background("black")
}

function draw() {
    background("black")

    fill(circle1.clr)
    ellipse(circle1.x,circle1. y, circle1.r)
    
    fill(circle2.clr)
    ellipse(circle2.x,circle2. y, circle2.r)

    fill(circle1.clr)
    ellipse(circle3.x,circle3. y, circle3.r)

    circle1.x++
    circle2.x++
    circle3.x++
}