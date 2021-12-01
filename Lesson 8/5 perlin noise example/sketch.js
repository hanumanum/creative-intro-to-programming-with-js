//Comment lines 28 and 29 and uncoment lines 31 and 32 to see difference

let step = 0.1
let lineLength = 10
let w = 800
let h = 800
let r = 100
let x0 = w / 2
let y0 = h / 2

function setup() {
    createCanvas(w, h)
    background("black")
    stroke("white")
}

function draw() {
    background("black")
    noFill()

    beginShape()
    for (let t = 0; t <= 2 * PI; t += step) {

        let x = x0 + r * cos(t)
        let y = y0 + r * sin(t)

        
        x += map(noise(x, y), 0, 1, 5, 20)
        y += map(noise(x, y), 0, 1, 5, 20)
        
        //x+=random(5,20)
        //y+=random(5,20)
        r = map(sin(frameCount / 100), -1, 1, 50, 200)

        vertex(x, y)
    }
    endShape(CLOSE)


    //noLoop()
}