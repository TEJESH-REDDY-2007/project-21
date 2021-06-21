var wall, thickness;

var speed, weight, bullet, bullet_image;


function preload() {
  bullet_image = loadImage("bullet.png");
}

function setup() {
  createCanvas(1300,400);

  thickness=random(22,83);
  speed = random(55,90);
  weight = random(400,1500);

  bullet = createSprite(50, 200, 50, 50);
  bullet.addImage(bullet_image);
  bullet.scale=0.2;
  bullet.debug=false;
  wall = createSprite(1050, 200, thickness, height/2);
  wall.debug=false;
}

function draw() {
  background(0);

  bullet.velocityX=speed;

  if (isTouching(bullet,wall)){
    var damage =  0.5*weight*speed*speed/(thickness*thickness*thickness);
    bullet.velocityX=0;

    if (damage > 10) {
      wall.shapeColor="red";
    }

    if (damage < 10) {
      wall.shapeColor="green";
    }
  }


  drawSprites();
}

