let w = 1024
let h = 800
let sound
let ftt
let crt

function preload() {
    sound = loadSound('time.m4a');
}

function setup() {
    createCanvas(w, h);
    fft = new p5.FFT();
    sound.play();
    noFill()
}

function draw() {
    background(0);

    let spectrum = fft.analyze();
    let bass = fft.getEnergy("bass"); //"bass", "lowMid", "mid", "highMid", "treble"
    let lowmid = fft.getEnergy("lowMid");
    let mid = fft.getEnergy("mid");
    let highMid = fft.getEnergy("highMid");
    let treble = fft.getEnergy("treble");
    let waveform = fft.waveform();
    //console.log(waveform.length, max(waveform))

    for (let i = 0; i < spectrum.length; i++) {
        let x = map(i, 0, spectrum.length, 0, w);
        let y = map(spectrum[i], 0, 255, h, 0);
        let d = 5 //map(spectrum[i], 0, 255, 0, 40);

        fill(map(x, 0, w, 0, 255), map(waveform[i], 0, 1, 0, 255), map(y, 0, h, 0, 255))
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

        ellipse(x, y, d, d);
    }


    crt = sound.currentTime();
    let time = map(crt, 0, sound.duration(), 0, w);

    
    fill("magenta")
    rect(0, 0, time, 20)
}

function mouseClicked() {
    if (sound.isPlaying()) {
        sound.pause();
    } else {
        sound.loop();
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