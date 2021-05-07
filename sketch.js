var hour,min,sec
var hrAngle
var minAngle
var secAngle




function setup() {
  createCanvas(800,800);
  angleMode(DEGREES)
}

function draw() {
  background("black");  
  translate(400,400)
  rotate(-90)
  hour=hour()
  min=minute()
  sec=second()

  secAngle=map(sec,0,60,0,360)
  minAngle=map(min,0,60,0,360)
  hrAngle=map(hour %12,0,12,0,360)

  push()
  rotate(secAngle)
  stroke("white")
  strokeWeight(6)
  line(0,0,100,0)
  pop()

  push()
  rotate(minAngle)
  stroke("green")
  strokeWeight(7)
  line(0,0,70,0)
  pop()

  push()
  rotate(hrAngle)
  strokeWeight("white")
  stroke(9)
  line(0,0,90,0)
  pop()

stroke(255,0,255)
point(0,0)
strokeWeight(10)
noFill()

stroke(255,0,0)
arc(0,0,300,300,0,secAngle)

stroke(0,255,0)
arc(0,0,280,280,0,minAngle)

stroke(0,0,255)
arc(0,0,260,260,0,hrAnlge)

    drawSprites();
}