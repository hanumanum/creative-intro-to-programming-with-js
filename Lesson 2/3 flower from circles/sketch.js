function setup() {
    let x = prompt("input x")
    let y = prompt("input y")
    let d = prompt("input d")


    x = parseInt(x)
    y = parseInt(y)
    d = parseInt(d)

    createCanvas(800, 800)
    noFill()
    ellipse(x, y, d)
    ellipse(x, y - d / 2, d)
    ellipse(x, y + d / 2, d)
    ellipse(x - d / 2, y, d)
    ellipse(x + d / 2, y, d)
}
