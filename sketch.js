var cat,mouse,catImage,mouseImage,backgroundI, mouseI2, catI2, mouseI3, catI3;

function preload() {
    //load the images here

    backgroundI = loadImage("images/garden.png");
    catImage = loadAnimation("images/cat1.png");
    mouseImage = loadAnimation("images/mouse1.png")

    mouseI2 = loadAnimation("images/mouse2.png" , "images/mouse3.png");
    catI2 = loadAnimation("images/cat2.png" , "images/cat3.png");

    mouseI3 = loadAnimation("images/mouse4.png");
    catI3 = loadAnimation("images/cat4.png");
}

function setup(){
    createCanvas(1000,550);
    //create tom and jerry sprites here
    cat = createSprite(700,450,60,60);
    cat.addAnimation("stop", catImage);
    cat.addAnimation("move", catI2);
    cat.addAnimation("final", catI3);
    cat.scale = 0.1;

    mouse = createSprite(200,450,30,30);
    mouse.addAnimation("stop", mouseImage);
    mouse.addAnimation("move", mouseI2);
    mouse.addAnimation("final", mouseI3);
    mouse.scale = 0.1;

    cat.setCollider("rectangle",0,0,30,30);

}

function draw() {

    background(backgroundI);
    //Write condition here to evalute if tom and jerry collide

    if(keyDown(LEFT_ARROW)){
        mouse.changeAnimation("move", mouseI2);
        cat.changeAnimation("move", catI2);
        cat.velocityX = -2;
    }

    if(cat.isTouching(mouse)){
      cat.changeAnimation("final", catI3);
      mouse.changeAnimation("final", mouseI3);
      cat.velocityX = 0;
    }
       

    drawSprites();
}



