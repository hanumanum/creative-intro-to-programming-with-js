let step = 50

function setup() {
    createCanvas(800, 800)
    background("black")
}

function draw() {


    for (let y = 0; y < 800; y += step) {

        for (let x = 0; x < 800; x += step) {
            //rect(x, y, 50, 50)
            ellipse(x + sin((frameCount + x) / 10), y + cos(frameCount / 10), 10, 10)
            //stroke(getRandomColor())
            //line(x,y,x+2*step, y+step)
        }

    }
}