let w = 800
let h = 400

//https://www.neowsapp.com/


//API - Aplication Programming Interface
//AJAX - Asyncronous Javascript and XML

const xhttp = new XMLHttpRequest() //Creating Request Object

//That to do than recived
xhttp.onload = function () {
    let data = this.responseText
    let parsedData = JSON.parse(data)
    console.log(parsedData)
}

//That to do than error occured
xhttp.onerror = function (e) {
    console.log(e)
}

//open connection
xhttp.open("GET", "https://www.neowsapp.com/rest/v1/feed?detailed=true")
//open send request
xhttp.send()


function setup() {
    createCanvas(w, h)
    background("black")
}

function draw() {

}