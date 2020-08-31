//Create variables here
var dog, dogImage, happyDog, happyDogImage, database, foodS, foodStock;

function preload() {
  //load images here
  
  dogImage = loadImage('images/dogImg.png');
  happyDogImage = loadImage('images/dogImg1.png');
}

function setup() {
	createCanvas(500, 500);
  
  dog = createSprite();
  dog.addImage(dogImage);

  happyDog = createSprite();
  happyDog.addImage(happyDogImage);

  database = firebase.database();

  foodStock = database.ref('food');
  foodStock.on("value", readStock);

}


function draw() {  
  
  background(46, 139, 87);


  if(keyWentDown(UP_ARROW)) {
    writeStock(foodS);
    dog.addImage(happyDog);
  }

  drawSprites();
  //add styles here

  textSize(20);
  fill("white");
  text("Note: Press UP_ARROW Key To Feed Drago Milk!", 250, 50);

}

function readStock(data) {
  foosS = data.val();
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



