const w = 1000
const h = 800
let images = []

function preload() {
    for (let i = 1; i <= 6; i++) {
        let path = "snowflake " + i + ".png ";
        let img = loadImage(path)
        img.x = random(0, w)
        img.y = random(0, h)
        images.push(img)    
    }

}

function setup() {
    createCanvas(w, h)
    imageMode(CENTER)
    
}

function draw() {
    background('black')
    /* Rotate snowflakes over center */
}