/* BLEND, DARKEST, LIGHTEST, DIFFERENCE, MULTIPLY, EXCLUSION, SCREEN, REPLACE, OVERLAY, HARD_LIGHT, SOFT_LIGHT, DODGE, BURN, ADD, REMOVE or SUBTRACT */
let step = 200


function setup() {
    createCanvas(800, 800)
    background("black")

    blendMode(LIGHTEST)
    makeTriCirlce(400, 400, 100, 300)
}

function draw() {
    
}

function makeTriCirlce(x, y, centerR, criclesR ) {
    let number = 3
    let step = 2 * Math.PI / number
    let colors = ["red", "green", "blue"]

    for (let t = 0; t < 2 * Math.PI; t += step) {
        let _x = x + centerR * cos(t)
        let _y = y + centerR * sin(t)

        fill(colors.shift())
        ellipse(_x, _y, criclesR)
    }
}