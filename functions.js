function getRandomColor() {
    let r = int(random(0, 255))
    let g = int(random(0, 255))
    let b = int(random(0, 255))

    let colo = "rgb(" + r + ", " + g + "," + b + ")"
    return colo;
}


function getPalette(nameOfPallete) {
    if("party"){
        return ["#EB3B00", "#F50262", "#950DDE", "#020AF5", "#02A2EB"]
    }
    else if("kongo"){
        return ["#EBB000","#F52D02","#950DDE","#0288F5", "#49EB6C"]
    }
}


function getGradientOf(color, startX, startY, w, h) {
    let step = int(w / 255)
    let endX = startX + w
    noStroke()
    for (let x = startX; x <= endX; x += step) {
        let clr = int(map(x, startX, endX, 0, 255))
        if (color == "r") {
            fill(clr, 0, 0)
        }
        else if (color == "g") {
            fill(0, clr, 0)
        }
        else {
            fill(0, 0, clr)
        }

        rect(x, startY, step, h)
    }
}



function getRandomFromPalette(palette) {
    return random(palette)
}

function getRandomsArray(len, min, max) {
    let randoms = []
    for (let i = 0; i < len; i++) {
        randoms.push(int(random(min, max)))
    }

    return randoms;
}
