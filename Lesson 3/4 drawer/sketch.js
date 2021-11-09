// choose from ellipse, rectangle, line, default: nothing 
function setup() {
    createCanvas(500, 400)
    background("green")

    let obj = prompt("input shape")
    let c = prompt("input color")

    if (obj == "rectangle" || obj == "ellipse" || obj=="line" ) {
        let x = prompt("input x")
        let y = prompt("input y")
        let text1= ""
        let text2= ""

        if(obj == "rectangle" || obj == "ellipse"){
            text1= "Input width "
            text2= "Input height "
        }
        else{
            text1= "second point x "
            text2= "second point y "
        }

        let a = prompt(text1)
        let b = prompt(text2)

        x = parseInt(x)
        y = parseInt(y)
        a = parseInt(a)
        b = parseInt(b)

        
        if(obj == "rectangle"){
            fill(c)
            rect(x, y, a, b)
        }
        else if(obj == "ellipse"){
            fill(c)
            ellipse(x, y, a, b)
        }
        else if(obj == "line"){
            stroke(c)
            line(x, y, a, b)
         }
    }
    
}