var matrix = [
    ["#ffffff", "#ffffff", "#ffffff", "#ffffff", "#ffffff", "#ffffff", "#ffffff", "#ffffff", "#ffffff", "#ffffff", "#ffffff", "#ffffff", "#ffffff", "#ffffff", "#ffffff", "#ffffff", "#ffffff", "#ffffff", "#ffffff", "#ffffff"],
    ["#ffffff", "#ffffff", "#ffffff", "#2874A6", "#2874A6", "#2874A6", "#ffffff", "#ffffff", "#ffffff", "#ffffff", "#ffffff", "#ffffff", "#ffffff", "#ffffff", "#ffffff", "#ffffff", "#ffffff", "#ffffff", "#ffffff", "#ffffff"],
    ["#ffffff", "#ffffff", "#ffffff", "#2874A6", "#ffffff", "#2874A6", "#8E44AD", "#8E44AD", "#8E44AD", "#ffffff", "#ffffff", "#ffffff", "#ffffff", "#ffffff", "#2874A6", "#2874A6", "#2874A6", "#ffffff", "#ffffff", "#ffffff"],
    ["#ffffff", "#ffffff", "#ffffff", "#2874A6", "#2874A6", "#2874A6", "#ffffff", "#ffffff", "#8E44AD", "#ffffff", "#ffffff", "#8E44AD", "#8E44AD", "#8E44AD", "#2874A6", "#ffffff", "#2874A6", "#ffffff", "#ffffff", "#ffffff"],
    ["#ffffff", "#ffffff", "#ffffff", "#ffffff", "#ffffff", "#ffffff", "#ffffff", "#ffffff", "#8E44AD", "#ffffff", "#ffffff", "#8E44AD", "#ffffff", "#ffffff", "#2874A6", "#2874A6", "#2874A6", "#ffffff", "#ffffff", "#ffffff"],
    ["#ffffff", "#ffffff", "#ffffff", "#ffffff", "#ffffff", "#ffffff", "#ffffff", "#ffffff", "#8E44AD", "#ffffff", "#ffffff", "#8E44AD", "#ffffff", "#ffffff", "#ffffff", "#ffffff", "#ffffff", "#ffffff", "#ffffff", "#ffffff"],
    ["#ffffff", "#ffffff", "#ffffff", "#ffffff", "#ffffff", "#ffffff", "#ffdd00", "#ffdd00", "#ffdd00", "#ffdd00", "#ffdd00", "#ffdd00", "#ffdd00", "#ffdd00", "#ffffff", "#ffffff", "#ffffff", "#ffffff", "#ffffff", "#ffffff"],
    ["#ffffff", "#2874A6", "#ffffff", "#ffffff", "#8E44AD", "#ffffff", "#ffdd00", "#ffffff", "#ffffff", "#ffffff", "#ffffff", "#ffffff", "#ffffff", "#ffdd00", "#ffffff", "#ffffff", "#ffffff", "#ffffff", "#ffffff", "#ffffff"],
    ["#ffffff", "#2874A6", "#8E44AD", "#8E44AD", "#8E44AD", "#ffffff", "#ffdd00", "#ffffff", "#C0392B", "#ffffff", "#ffffff", "#C0392B", "#ffffff", "#ffdd00", "#8E44AD", "#8E44AD", "#ffffff", "#ffffff", "#ffffff", "#ffffff"],
    ["#ffffff", "#2874A6", "#ffffff", "#ffffff", "#8E44AD", "#ffffff", "#ffdd00", "#ffffff", "#ffffff", "#ffffff", "#ffffff", "#ffffff", "#ffffff", "#ffdd00", "#ffffff", "#8E44AD", "#ffffff", "#ffffff", "#ffffff", "#ffffff"],
    ["#ffffff", "#ffffff", "#ffffff", "#ffffff", "#8E44AD", "#ffffff", "#ffdd00", "#ffffff", "#ffffff", "#28B463", "#28B463", "#ffffff", "#ffffff", "#ffdd00", "#ffffff", "#8E44AD", "#ffffff", "#ffffff", "#ffffff", "#ffffff"],
    ["#ffffff", "#ffffff", "#ffffff", "#ffffff", "#8E44AD", "#8E44AD", "#ffdd00", "#ffffff", "#ffffff", "#ffffff", "#ffffff", "#ffffff", "#ffffff", "#ffdd00", "#ffffff", "#8E44AD", "#ffffff", "#2874A6", "#ffffff", "#ffffff"],
    ["#ffffff", "#ffffff", "#ffffff", "#ffffff", "#ffffff", "#ffffff", "#ffdd00", "#ffdd00", "#ffdd00", "#ffdd00", "#ffdd00", "#ffdd00", "#ffdd00", "#ffdd00", "#ffffff", "#8E44AD", "#8E44AD", "#2874A6", "#2874A6", "#ffffff"],
    ["#ffffff", "#ffffff", "#ffffff", "#ffffff", "#ffffff", "#ffffff", "#ffffff", "#ffffff", "#8E44AD", "#ffffff", "#8E44AD", "#ffffff", "#ffffff", "#8E44AD", "#ffffff", "#ffffff", "#ffffff", "#2874A6", "#ffffff", "#ffffff"],
    ["#ffffff", "#ffffff", "#ffffff", "#ffffff", "#ffffff", "#ffffff", "#ffffff", "#ffffff", "#8E44AD", "#ffffff", "#8E44AD", "#ffffff", "#ffffff", "#8E44AD", "#ffffff", "#ffffff", "#ffffff", "#ffffff", "#ffffff", "#ffffff"],
    ["#ffffff", "#ffffff", "#ffffff", "#ffffff", "#ffffff", "#ffffff", "#8E44AD", "#8E44AD", "#8E44AD", "#ffffff", "#8E44AD", "#ffffff", "#ffffff", "#2874A6", "#2874A6", "#2874A6", "#ffffff", "#ffffff", "#ffffff", "#ffffff"],
    ["#ffffff", "#ffffff", "#ffffff", "#ffffff", "#ffffff", "#ffffff", "#8E44AD", "#ffffff", "#ffffff", "#ffffff", "#8E44AD", "#ffffff", "#ffffff", "#ffffff", "#ffffff", "#ffffff", "#ffffff", "#ffffff", "#ffffff", "#ffffff"],
    ["#ffffff", "#ffffff", "#ffffff", "#ffffff", "#ffffff", "#2874A6", "#2874A6", "#2874A6", "#ffffff", "#ffffff", "#8E44AD", "#8E44AD", "#8E44AD", "#2874A6", "#ffffff", "#ffffff", "#ffffff", "#ffffff", "#ffffff", "#ffffff"],
    ["#ffffff", "#ffffff", "#ffffff", "#ffffff", "#ffffff", "#2874A6", "#ffffff", "#2874A6", "#ffffff", "#ffffff", "#ffffff", "#ffffff", "#ffffff", "#2874A6", "#2874A6", "#ffffff", "#ffffff", "#ffffff", "#ffffff", "#ffffff"],
    ["#ffffff", "#ffffff", "#ffffff", "#ffffff", "#ffffff", "#2874A6", "#2874A6", "#2874A6", "#ffffff", "#ffffff", "#ffffff", "#ffffff", "#ffffff", "#ffffff", "#ffffff", "#ffffff", "#ffffff", "#ffffff", "#ffffff", "#ffffff"]
]

let step = 30

function setup() {
    createCanvas(800, 800)
    background("black")
    for (let j = 0; j < matrix.length; j++) {
        for (let i = 0; i < matrix[0].length; i++) {
            let clr = matrix[j][i]
            let x = (i + 1) * step
            let y = (j + 1) * step

            fill(clr)
            rect(x, y, step , step )

        }
    }

}

function draw() {

}