let px,py,pw,ph,bx,by,bs,ba,bas,g=0
let playing = false,score=0
let bg,player,ball

function preload()
{
  bg = loadImage('bg.png')
  player = loadImage('player.png')
  ball = loadImage('ball.png')
}

function setup() {
  createCanvas(400,700);
  noStroke()
  textAlign(CENTER)
  textSize(30)
  angleMode(DEGREES)
  fill(255)
  
  pw=100
  ph=200
  basla()
  playing=false

}


function draw() {
  hesapla()
  noCursor()
  image(bg,0,0,width,height)  
  image(player,px,py,pw,ph)
  push()
  translate(bx,by)
  rotate(ba)
  image(ball,-30,-30,60,60)
  pop()
  fill('orangered');textSize(45);text(score,width/2,40)
  if(!playing)
  {
    filter('gray')
    cursor(ARROW)
    fill(' orangered');rect(50,290,300,100,15)
    fill(0);textSize(30);text("Başlamak İçin Tıkla",width/2,height/2)
  }
}

function basla(){
  bx=px=width*0.5
  by=height*0.20
  py=height*0.71
  bs=0
  ba=0
  bas=0
  score=0
  g=0
}

function mousePressed()
{
 if(!playing){
   basla();
   playing=true
 } 
}


function hesapla(){
  if(playing){
  px=mouseX
  if(px>width-pw) px=width-pw
    
  if(bx > px && bx < px + pw && by + 30 >= py)
  {
    g= -random(13,20)
    bs= map(abs(px - bx),0,pw,-9,9)
    bas= map(abs(px - bx),0,pw,-5,5)
    score++
  }
    
  if(by> py + 60)playing=false
    
  
   g +=0.5
   bx +=bs
   by +=g
   ba += bas
    if(bx<30 || bx> width-30) bs*=-1
  }
}