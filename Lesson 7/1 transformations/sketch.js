let x = 200
let y = 200
let x1 = 400
let y1 = 400
let h = 60
let w = 100
let angle = 0

function setup() {
    createCanvas(800, 800)
    frameRate(5)
    rectMode(CENTER)

}

function draw() {
    
    background("black")
    stroke("white")

    for(let y = 0; y < 800; y+=50){
        for(let x = 0; x < 800; x+=50){
            push()
            translate(x, y)
            rotate(angle)
            rect(0, 0, 20)
            pop()
        }
    }

    /*
    push()
    translate(x, y)
    rotate(angle)
    rect(0, 0, w, h)
    pop()


    push()
    translate(x1, y1)
    rotate(angle)
    rect(0, 0, w, h)
    pop()
    */
    angle+=0.1
    //console.log(angle)
}