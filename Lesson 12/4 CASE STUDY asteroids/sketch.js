let w = 800
let h = 400
let asteroids = {}
let asteroidsCleared = []
let cronicles = {}

function preload() {
    asteroids = loadJSON("https://www.neowsapp.com/rest/v1/feed?detailed=true")
    cronicles = loadJSON("https://chroniclingamerica.loc.gov/suggest/titles/?q=Armenia")
    
}

function setup() {
    console.log(cronicles)
    
    
    createCanvas(w, h)
    background("black")


    //Here we extract necessary information from asteroids object received from API 
    let days = asteroids.near_earth_objects
    console.log(days)

    for (let d in days) {
        let listOfAst = days[d]
        //console.log(listOfAst)
        for (let ast of listOfAst) {
            let dateAsNumber = Number(d.split("-").join(""))
            asteroidsCleared.push(
                {
                    number: dateAsNumber,
                    name: ast.name,
                    diam: ast.estimated_diameter.kilometers.estimated_diameter_max,
                    x: random(10, w - 10),
                    y: 0
                }

            )

            /*
            console.log(dateAsNumber)
            console.log(ast.name)
            console.log(ast.estimated_diameter.kilometers.estimated_diameter_max)
            */
        }

    }

    console.log(asteroidsCleared)
}

function draw() {
    background(0)
    fill("white")

    //Here we draw elements on extracted inforamion
    for (let a of asteroidsCleared) {
        ellipse(a.x, a.y, map(a.diam, 0, 2, 0, 50))
        text(a.name, a.x, a.y + map(a.diam, 0, 2, 0, 50) / 2 - 10)
        a.y += map(a.number, 20211214, 20211221, 1, 3)
    }
}