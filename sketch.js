var iss,spacecraft,hasDocked;
var hasDocked= false;
var bgimg,issimg,spacecraft1img,spacecraft2img,spacecraft3img,spacecraft4img;



function preload(){
  bgimg= loadImage("spacebg.jpg");
  issimg= loadImage("iss.png");
  spacecraft1img= loadImage("spacecraft1.png");
  spacecraft2img= loadImage("spacecraft2.png");
  spacecraft3img = loadImage("spacecraft3.png");
  spacecraft4img= loadImage("spacecraft4.png");
 
}
function setup() {
    createCanvas(600,350);
    
    iss = createSprite(330,130);
    iss.addImage(issimg);
    iss.scale = 0.70;
    
    spacecraft = createSprite(285,240);
    spacecraft.addImage(spacecraft1img);
    spacecraft.scale= 0.15;
}

function draw() {
  background(bgimg);  

  
  spacecraft.addImage(spacecraft1img);
  if(!hasDocked){
    spacecraft.x = spacecraft.x + random(-1,1);


     if (keyDown("UP_ARROW")){
       spacecraft.y = spacecraft.y-2;
     }

     if(keyDown("LEFT_ARROW")){
       spacecraft.addImage(spacecraft3img);
       spacecraft.x= spacecraft.x-1;
     }

     if(keyDown("RIGHT_ARROW")){
       spacecraft.addImage(spacecraft4img);
       spacecraft.x= spacecraft.x+1;
     }

     if(keyDown("DOWN_ARROW")){
       spacecraft.addImage(spacecraft2img);
     }

  }

  if(spacecraft.y <= (iss.y+55) && spacecraft.x <= (iss.x-10)){
    hasDocked-= true;
    textSize(25);
    fill("red");
    text("Docking Successfully",210,300);
  }



  drawSprites();
}