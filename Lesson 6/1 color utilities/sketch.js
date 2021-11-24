function setup() {
    createCanvas(800, 800)

    //getGradientOf("r", 10, 10, 300, 20)
    //getGradientOf("b", 10, 150, 400, 10)
    //getGradientOf("g", 10, 250, 800, 10)
    let p = getPalette("party")
    console.log(p)
    let clr = getRandomFromPalette(p)
    console.log(clr)
    fill(clr)
    ellipse(150,150,20,25)
}


