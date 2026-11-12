//push and pop is used many times as things break without them. easily the most important part of the artwork

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);


      stroke(0);
strokeWeight(4);
  
ellipse (200, 200, 200) 
  fill (241, 204, 156)
  
stroke(210, 160, 130, 140); 
  strokeWeight(4);
  noStroke 
    line(152, 145, 175, 222);
  
  push ()
  noStroke();
fill(216, 150, 255, 200); 
ellipse(162, 180, 30); 
ellipse(240, 180, 30);
  pop()
  
push(0)
  stroke ()
  fill (112, 41, 99);
  ellipse (162, 180, 24);
  ellipse (240, 180, 24);
pop(0)



stroke(129,129,129);
  strokeWeight (10);

  line(135, 168, 185, 171);
  
push()
  stroke(140, 100, 50);
  strokeWeight(1);
  
stroke(140, 100, 50);
  strokeWeight();
  
  pop()
  
  line(265, 168, 215, 171);

push()
  
  fill(225, 190, 120); 
  stroke(100, 70, 30); 
  strokeWeight(2);
  triangle(200, 65, 40, 155, 360, 155);


  fill(180, 40, 40);
  stroke(110, 20, 20);


rect(285, 260, 75, 32, 24); //code is all for the detail on the scarf of it trailing behind.
  rect(330, 252, 70, 18, 24); 
  rect(365, 245, 40, 14, 23);
  
  rect(295, 250, 40, 20, 14);
  rect(295, 256, 35, 16, 14); 
  rect(325, 264, 25, 12, 13); 
 
rect (92.5,200,215, 100.5, 385) //largest part of the scarf
  ellipse(300,265,55)

pop()


  stroke(140, 100, 50); //following code is added detail to the conical hat
  strokeWeight(1.5);

  line(160, 90, 240, 90);
  line(120, 115, 280, 115);
  line(80, 140, 320, 140);

  line(200, 65, 200, 157);
}