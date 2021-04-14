// objects
var bullet, wall;

// thickness, speed and weight for the bullet
var speed, weight, thickness;

function setup() {
  // creating the canvas
  createCanvas(1600, 400);

  // creating random thickness, speed and weight
  speed = random(90, 55);
  weight = random(1500, 400);
  thickness = random(22, 83);

  // creating bullet
  bullet = createSprite(50, 200, 50, 50);
  bullet.velocityX = speed;

  // creating wall
  wall = createSprite(1200, 200, thickness, height / 2);
  wall.shapeColor = (80, 80, 80);
}

function draw() {
  // to clear the background color
  background(255, 255, 255);

  // detecting the collision
  if (isTouching(wall, bullet)) {
    // to stop the bullet
    bullet.velocityX = 0;

    //damage
    var damage = (0.5 * weight * speed * speed) / (thickness * thickness * thickness);
    
    console.log(damage);
    
    if(damage < 10){
      wall.shapeColor = "green";
    }
    else if(damage > 10){
      wall.shapeColor = "red";
    }
  }

  // to draw sprites
  drawSprites();
}

// function to detect the collision
function isTouching(object1, object2) {
  if (
    object1.x - object2.x < object2.width / 2 + object1.width / 2 &&
    object2.x - object1.x < object2.width / 2 + object1.width / 2 &&
    object1.y - object2.y < object2.height / 2 + object1.height / 2 &&
    object2.y - object2.y < object2.height / 2 + object1.height / 2
  ) {
    return true;
  } else {
    return false;
  }
}
