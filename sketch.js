var garima, shree, thing1, thing2;

function setup() {
  createCanvas(800,400);

  garima=createSprite(400, 200, 80,60);
  shree=createSprite(400,400,70,100);
  thing1=createSprite(100,100,50,60);
  thing2=createSprite(700, 100,50,60);
  thing3=createSprite(700,300,50,60);
  thing4=createSprite(100,300,50,60);

  garima.shapeColor="violet";
  shree.shapeColor="teal";
  thing1.shapeColor="black";
  thing2.shapeColor="orange";
  thing3.shapeColor="skyblue";
  thing4.shapeColor="darkblue";

  shree.debug=true;
  garima.debug=true;
  thing1.debug=true;
  thing2.debug=true;
  thing3.debug=true;
  thing4.debug=true;
}

function draw() {
  background("cyan");

  shree.x=mouseX;
  shree.y=mouseY;

  if(Touch(shree,thing1)){
    shree.shapeColor="red";
    thing1.shapeColor="red";
  }
  else if(Touch(shree,garima)){
    shree.shapeColor="red";
    garima.shapeColor="red";

  }
  else{
    garima.shapeColor="violet";
    shree.shapeColor="teal";
     thing1.shapeColor="green"
  }
  
  drawSprites();
}
