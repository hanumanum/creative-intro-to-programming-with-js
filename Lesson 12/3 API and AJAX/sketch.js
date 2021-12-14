let w = 800
let h = 400

//https://www.neowsapp.com/

function preload() {
    const xhttp = new XMLHttpRequest()
    
    xhttp.onload = function () {
        let jsssosnnn = JSON.parse(this.responseText)
        console.log(jsssosnnn)
    }

    xhttp.onerror = function (e) {
        console.log(e)
    }

    xhttp.open("GET", "https://www.neowsapp.com/rest/v1/feed?detailed=true", true)
    xhttp.send()
}

function setup() {
    createCanvas(w, h)
    background("black")
}

function draw() {

}

