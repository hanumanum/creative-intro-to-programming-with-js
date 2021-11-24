let matrix = [
  [false, true, false, true, false, true, true, true, true, false, false, true, true, true, true, true, false, true, false, true, true, true, true, false, true, true, false, false, false, true, true, true, true, false, true, true, true, true, true, true],
  [true, true, false, true, true, true, false, false, false, true, false, true, false, false, false, false, true, true, false, true, false, true, false, false, false, true, false, true, true, false, true, false, false, false, false, true, false, true, true, true],
  [true, false, false, false, true, true, false, false, false, true, true, false, false, false, false, true, false, false, false, true, true, false, true, false, true, true, false, true, false, false, true, true, false, true, true, true, true, false, false, false],
  [false, false, false, true, true, false, false, false, false, true, false, true, true, true, false, false, false, false, true, false, true, false, true, true, false, false, true, false, true, true, false, false, true, true, false, true, false, true, false, true],
  [false, true, true, false, false, false, false, true, false, false, false, true, false, false, true, true, true, false, true, true, true, true, true, true, true, false, false, true, true, false, false, false, true, false, false, true, true, false, true, true],
  [false, false, true, true, false, false, true, false, true, false, false, false, false, true, false, false, false, false, false, false, true, false, true, false, false, true, false, false, false, false, false, true, false, false, false, true, false, true, true, true],
  [false, true, false, false, false, false, true, false, false, true, true, false, true, true, false, false, false, false, false, true, true, false, true, false, false, true, true, true, true, true, false, true, true, true, true, true, false, false, true, false],
  [true, true, false, true, true, false, true, false, true, true, false, false, false, false, true, false, false, false, true, true, true, false, true, true, true, false, true, false, true, false, false, true, true, true, false, true, false, false, true, true],
  [true, false, false, false, true, false, true, false, false, false, true, true, true, false, true, false, true, true, true, true, false, true, true, true, false, true, true, false, true, false, true, false, false, false, true, true, true, false, false, false],
  [true, true, true, true, true, false, true, true, false, false, false, true, false, false, true, false, false, false, true, true, false, true, false, false, false, false, false, true, true, true, false, false, true, false, true, false, false, true, true, false],
  [true, true, true, true, true, true, true, false, false, true, false, true, true, false, true, false, false, true, false, true, false, true, false, false, true, false, true, false, false, true, true, false, true, true, true, false, false, false, false, true],
  [true, false, true, true, true, false, false, true, false, false, true, true, false, false, true, true, false, false, true, false, true, true, false, true, false, false, true, true, false, true, true, true, true, true, false, false, true, true, true, true],
  [true, true, true, true, true, true, true, true, true, true, true, true, false, true, false, false, true, true, false, false, false, false, true, true, false, true, false, false, true, true, false, true, true, false, false, true, false, false, true, true],
  [false, true, true, true, true, true, false, false, true, true, false, true, false, false, true, true, true, true, false, false, true, true, false, false, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true],
  [true, true, true, false, true, true, true, false, true, false, false, false, true, false, true, true, false, true, true, true, true, true, false, true, true, false, true, true, true, false, false, false, true, true, false, false, false, false, false, true],
  [false, false, false, false, false, false, false, true, true, false, true, false, false, false, false, true, false, false, true, false, false, true, false, true, true, true, true, false, true, false, true, true, true, true, true, false, true, true, false, false],
  [true, false, true, true, true, true, false, false, true, false, true, false, false, true, true, true, false, true, false, true, true, false, true, false, false, false, true, false, true, true, false, true, true, true, true, true, true, true, true, false],
  [false, true, false, false, true, false, true, true, false, false, true, true, false, false, false, false, true, false, false, true, false, false, false, false, true, false, false, false, true, false, true, true, false, false, false, false, true, false, false, true],
  [true, false, false, true, true, false, false, false, true, false, true, false, false, true, true, true, true, true, true, true, true, false, true, false, true, true, false, false, false, true, true, true, false, true, false, true, false, false, false, true],
  [false, false, false, true, false, true, true, false, false, true, false, false, false, false, true, false, true, false, true, true, true, false, false, true, false, false, false, false, true, false, false, true, true, false, true, false, false, false, true, false],
  [true, true, true, true, true, false, true, true, false, true, false, true, false, true, true, false, true, false, false, true, true, false, true, true, true, false, true, false, false, false, false, true, false, false, true, false, false, false, true, false],
  [true, true, true, false, false, false, true, true, false, false, false, false, true, true, false, true, true, false, true, false, false, false, true, true, false, true, true, false, true, true, false, true, true, false, true, true, false, true, true, false],
  [true, false, true, true, true, false, true, false, true, false, false, false, false, true, false, true, true, true, false, true, true, true, false, false, false, true, true, false, true, true, false, false, false, false, false, true, true, false, false, false],
  [false, false, false, false, true, true, true, true, false, false, true, false, true, false, false, true, true, true, true, true, true, true, true, true, true, false, true, false, false, true, true, false, false, false, false, true, true, false, false, true],
  [false, false, false, true, true, true, false, false, false, false, false, true, false, false, true, true, true, true, false, true, false, false, false, false, false, false, false, true, false, false, true, true, true, false, true, false, false, true, true, false],
  [true, false, true, false, false, false, true, false, true, false, true, true, true, false, false, true, true, true, true, false, false, false, true, false, true, true, false, true, true, false, true, false, false, true, false, true, true, false, false, true],
  [true, false, true, true, false, false, false, true, false, false, true, false, true, true, false, true, false, true, true, true, false, false, true, true, false, true, true, false, true, true, true, true, true, false, true, true, true, true, false, false],
  [false, false, true, false, false, true, true, false, true, true, false, false, true, true, false, false, false, true, true, true, true, true, false, true, true, true, true, false, true, true, false, false, true, true, true, true, true, true, true, false],
  [true, true, true, true, true, true, false, true, true, true, false, false, true, true, false, true, true, true, false, true, true, false, true, false, true, true, true, false, true, false, false, false, false, false, false, false, false, false, true, false],
  [false, true, false, true, true, false, false, true, false, false, false, false, true, false, false, false, false, true, false, true, true, false, true, false, false, false, true, true, true, true, true, true, true, false, true, true, true, true, true, false]
]

let step = 30

function setup() {
  createCanvas(matrix[0].length*step, matrix.length*step)
  background("black")
}

function draw() {
  for (let j = 0; j < matrix.length; j++) {
    for (let i = 0; i < matrix[0].length; i++) {
      let b = matrix[j][i]
      let y = (j + 1) * step
      let x = (i + 1) * step
      
      if(b==true){
        rect(x, y, step/2, step/2)
      }

    }
  }
}





/*
function getRandomFilledBooleanMatrix(rows, cols){
    let matrix = []
    for(let i=0; i<rows; i++){
        let row = []
        for(let i=0; i<cols; i++){
            row.push(random([true, false]))
        }

        matrix.push(row)
    }

    return matrix;

}


function printMatrixText(matrix) {
    var text = "var matrix = [ \n";
    for (var y = 0; y < matrix.length; y++) {
      text += "[";
      for (var x = 0; x < matrix[0].length; x++) {
        text +=   matrix[y][x]
        if (x < matrix[0].length - 1) {
          text += ',';
        }
      }
      text += "]";
      if (y < matrix.length - 1) {
        text += ",\n";
      }
    }

    text += "\n]";
    return text;

  }
  */