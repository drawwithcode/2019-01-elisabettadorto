function preload(){
  // put preload code here
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(10,10,10);
  angleMode(DEGREES);
  frameRate(50);
}

function draw() {


  //yellow flower
  push();
  translate(width/1.5,height/1.5);
  rotate(frameCount);
  var a = sin(frameCount)*270;
  stroke(lerpColor(color('#F6B319'), color('#FDD017'), frameCount/200));
  strokeWeight(1);
  noFill();
  line(0, 0, 0, a);
  line(0, 0, -a, 0);
  line(0, 0, 0, -a);
  line(0, 0, a, 0);
  pop();

  //ellipse 1
      push();
      noFill()
      translate(width/1.5,height/1.5);
      rotate(frameCount*5);
      strokeWeight(2)
      stroke(lerpColor(color('#0afff5'), color('#FF0000'), frameCount/120));
      ellipse(0,0,100,20);
      if (frameCount == 300);
      pop();

    //bluelight flower
  push();
  translate(width/1.5,height/1.5);
  rotate(frameCount);
  var a = sin(frameCount*3)*270;
  var radius = 1.8
  stroke(lerpColor(color('#3BB9FF'), color('#E0FFFF'), frameCount/200));
  strokeWeight(0.9);
  noFill();
  line(0, 0, 0, radius*a);
  line(0, 0, -a*radius, 0);
  line(0, 0, 0, -a*radius);
  line(0, 0, a*radius, 0);
  var radius = 250
  stroke(lerpColor(color('#FDD017'), color('#FDD017'), frameCount/200));
  line (0, 0, 0, radius*sin(frameCount*9));
  pop();

//ellipse 2

  push();
  noFill()
  translate(width/5,height/2.5);
  rotate(frameCount*5);
  strokeWeight(2)
  stroke(lerpColor(color('cyan'), color('#461B7E'), frameCount/120));
  ellipse(0,0,30,15);
  if (frameCount == 300);
  pop();


  //purple flower
  push();
  translate(width/5,height/2.5);
  rotate(frameCount);
  var a = sin(frameCount*3)*270;
  var radius = 0.6;
  stroke(lerpColor(color('#FFF8C6'), color('#6C2DC7'), frameCount/200));
  strokeWeight(1);
  noFill();
  line(0, 0, 0, radius*a);
  line(0, 0, -a*radius, 0);
  line(0, 0, 0, -a*radius);
  line(0, 0, a*radius, 0);
  var radius = 250;
  line (0, 0, 0, radius*sin(frameCount*5));


  if (frameCount == 180) {
    noLoop();
    frameCount=180;}

}
