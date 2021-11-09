//Արտածել արժեքները և արդյունքը կտավի վրա

function setup() {
    let a = prompt("input a")
    let c = prompt("input operator") // +, -, *, /
    let b = prompt("input b")
    let result = 0

    createCanvas(500, 400)
    background("green")
    textSize(50)

    a = parseFloat(a)
    b = parseFloat(b)

    if (c == "+") {
        result = a + b
    }
    else if (c == "-") {
        result = a - b
    }
    else if (c == "*") {
        result = a * b
    }
    else if (c == "/") {
        result = a / b
    }
    else if (c == "/" && b == 0) {
        text("division by 0 isn't allowed", 20, 50)
    }

    if (!(c == "/" && b == 0)) {
        text(a, 20, 50)
        text(c, 20, 100)
        text(b, 20, 150)
        text("=", 20, 200)
        text(result, 20, 250)
    }
}
