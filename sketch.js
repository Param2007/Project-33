//Create variables here
var dog, dogImage, happyDogImage, database, foodS = 0, foodStock;

function preload() {
  //load images here
  
  dogImage = loadImage('images/dogImg.png');
  happyDogImage = loadImage('images/dogImg1.png');
}

function setup() {
	createCanvas(500, 500);
  
  dog = createSprite(250,300);
  dog.addImage(dogImage);

  dog.scale = 0.1;

  database = firebase.database();

  foodStock = database.ref('food');
  foodStock.on("value", readStock);
}


function draw() {  
  
  background(46, 139, 87);


  if(keyWentDown(UP_ARROW)) {
    writeStock(foodS);
    dog.addImage(happyDogImage);
    dog.scale = 0.1;
  }

  drawSprites();
  //add styles here

  textSize(20);
  fill("white");
  text("Note: Press UP_ARROW Key To Feed Drago Milk!", 50, 50);

  text("Food: " + foodS, 200, 100);

}

function readStock(data) {

  //foodStock = database.ref('food');
  //foodStock.on("value")
  foodS = data.val();
}

function writeStock(x) {

  if(x <= 0) {
    x = 0;
  }
  else {
    x = x -1;
  }

  database.ref('/').update({
    food: x
  })
}



