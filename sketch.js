let img;
let song;
let pixelfont;
let playing = false;

function preload() {
  img = loadImage("assets/gettinwavy.gif");//all of the preloaded files are similar in type as I'm interested in this era of games. pixel art sprite of a character that looks like a hero.
  song = loadSound("assets/groovy.mp3"); //the music adds a twist that reminds me of the internet around the early to mid 2010s, and is also what sounds to be a chiptune battle theme.
  pixelfont = loadFont("assets/pixelfont.ttf");//yet again, retro looking font, perfect for mini project.
}

function setup() {
  createCanvas(2500, 1350);

  song.amp(0.8); //sorry if this is too loud, I run my speakers quiet
}

function draw() {
  background(255);

  imageMode(CENTER);
  let w = 400;
  let h = img.height * (w / img.width);

  if (playing) {
    image(img, width / 2, height / 2, w, h);
  }

  fill(0);
  textAlign(CENTER, CENTER);
  textSize(40);

  textFont(pixelfont);
  text("Gettin' Wavy", width / 2, height / 2 - h / 2 - 60); //older slang/internet lingo

  textSize(20);
  textFont(pixelfont);
  text(playing ? "Click to spoil the fun" : "Click to help 'them' get groovy", width / 2, height / 2 + h / 2 + 40); 
}

function mousePressed() {
  if (playing) {
    song.pause();
  } else {
    song.loop();
  }
  playing = !playing;
}