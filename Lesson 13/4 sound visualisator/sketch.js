let w = 1024
let h = 800
let sound
let ftt
let crt
let angleStep = (2 * Math.PI) / 1024
let r = 80

function preload() {
    sound = loadSound('time.m4a');
}

function setup() {
    createCanvas(w, h);
    fft = new p5.FFT();
    sound.play();
    noFill()
    noStroke()
}

function draw() {
    background(0);
    noFill()


    let spectrum = fft.analyze() //.sort((a, b) => b - a);
    let bass = fft.getEnergy("bass"); //"bass", "lowMid", "mid", "highMid", "treble"
    let lowmid = fft.getEnergy("lowMid");
    let mid = fft.getEnergy("mid");
    let highMid = fft.getEnergy("highMid");
    let treble = fft.getEnergy("treble");
    let waveform = fft.waveform();

    //maxSpectroom = Math.max(maxSpectroom, max(spectrum))
    //console.log(spectrum.length, maxSpectroom)
    let spectrumID = 0

    spectrum = spectrum.filter(x => x > bass)

    let angleStep = (2 * Math.PI) / spectrum.length
    for (let a = 0; a <= 2 * Math.PI - angleStep; a += angleStep) {

        let x1 = w / 2 + Math.cos(a) * (r / 2 + spectrum[spectrumID])
        let y1 = h / 2 + Math.sin(a) * (r / 2 + spectrum[spectrumID])
        //stroke("magenta")
        //line(w/2, h/2, x1, y1)

        //stroke("magenta")
        //ellipse(w / 2, h / 2, r);

        //if (dist(x1, y1, w / 2, h / 2) > r) {

        stroke(waveform[spectrumID], map(a, 0, 2 * Math.PI, 0, 255), map(spectrum[spectrumID], 100, 255, 0, 255))
        if(spectrum.length > 5 && spectrum.length < 10){
            rect(x1, y1, 10)
        }
        else{
            ellipse(x1, y1, 10);
        }
        
        //line(x1, y1, w / 2, h / 2)
        //}
        if (spectrum.length < 5) {
            line(w / 2, h / 2, x1, y1)
        }


        spectrumID++
    }

    /*
    for (let i = 0; i < spectrum.length; i++) {
        let x = map(i, 0, spectrum.length, 0, w);
        let y = map(spectrum[i], 0, 255, h, 0);
        let d = 5 //map(spectrum[i], 0, 255, 0, 40);
        */
    //fill(map(x, 0, w, 0, 255), map(waveform[i], 0, 1, 0, 255), map(y, 0, h, 0, 255))
    /*
    if (spectrum[i] > bass) {
        fill('red')
    }
    else if(spectrum[i] < bass && spectrum[i] > lowmid) {
        fill('blue')
    }
    else if(spectrum[i] < lowmid && spectrum[i] > mid) {
        fill('magent')
    }
    else if(spectrum[i] < mid && spectrum[i] > highMid) {
        fill('green')
    }
    else if(spectrum[i] < highMid && spectrum[i] > treble) {
        fill("yellow")
    }
    else {
        fill("white");
    }
    */

    //ellipse(x, y, d, d);
    //}


    crt = sound.currentTime();
    let time = map(crt, 0, sound.duration(), 0, w);


    fill("magenta")
    rect(0, 0, time, 20)
}

function mouseClicked() {
    if (sound.isPlaying()) {
        sound.pause();
        //noLoop()
    } else {
        sound.play();
        //loop()
    }
}


function keyPressed() {
    if (keyCode == RIGHT_ARROW) {
        sound.jump(crt + 1);
    }

    if (keyCode == LEFT_ARROW) {
        sound.jump(crt - 1);
    }

}