let img;
let song;
let pixelfont;
let playing = false;

function preload() {
  img = loadImage("assets/gettinwavy.gif");//all of the preloaded files are primarily here as I'm interested in this era of games and modern games that older retro games inspired, so I used retro chiptune music and a  pixel art sprite.
  song = loadSound("assets/groovy.mp3"); //the music adds a twist that reminds me of the internet around the early to mid 2010s, which is a period that i miss somewhat
  pixelfont = loadFont("assets/pixelfont.ttf");
}

function setup() {
  createCanvas(2500, 1350);

  song.amp(0.8); //sorry if this is too loud, i run my speakers quiet
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
  text("Gettin' Wavy", width / 2, height / 2 - h / 2 - 60);

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