var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["823faff5-1e16-4ceb-84cd-39e4bda760c7","5ce6a5fd-ee7c-457a-95c8-eeff11cb6dc8","251332b3-7aeb-40af-ac0f-1cceb3d1db5b","a8f36482-803d-4474-94a6-b14b425df10b","54c7b714-082d-432f-b761-58b3991e4165","ffb1d29d-0d1e-4c3a-a03e-fea6a55027e7","16277792-5134-4ceb-ab00-1c7170d98e6f"],"propsByKey":{"823faff5-1e16-4ceb-84cd-39e4bda760c7":{"name":"blred","sourceUrl":null,"frameSize":{"x":29,"y":74},"frameCount":1,"looping":true,"frameDelay":12,"version":"zXNz1bqNX4DHkCBWPI89ICv9u6FXIDaL","loadedFromSource":true,"saved":true,"sourceSize":{"x":29,"y":74},"rootRelativePath":"assets/823faff5-1e16-4ceb-84cd-39e4bda760c7.png"},"5ce6a5fd-ee7c-457a-95c8-eeff11cb6dc8":{"name":"blgreen","sourceUrl":null,"frameSize":{"x":29,"y":74},"frameCount":1,"looping":true,"frameDelay":12,"version":"Zl4Yt4cx5gLes7L..UJmceADNLmH8A7J","loadedFromSource":true,"saved":true,"sourceSize":{"x":29,"y":74},"rootRelativePath":"assets/5ce6a5fd-ee7c-457a-95c8-eeff11cb6dc8.png"},"251332b3-7aeb-40af-ac0f-1cceb3d1db5b":{"name":"blblue","sourceUrl":null,"frameSize":{"x":29,"y":74},"frameCount":1,"looping":true,"frameDelay":12,"version":"HBZznkZqrXKVOxp5WVVL7XJZohJBvQKm","loadedFromSource":true,"saved":true,"sourceSize":{"x":29,"y":74},"rootRelativePath":"assets/251332b3-7aeb-40af-ac0f-1cceb3d1db5b.png"},"a8f36482-803d-4474-94a6-b14b425df10b":{"name":"blyellow","sourceUrl":null,"frameSize":{"x":29,"y":74},"frameCount":1,"looping":true,"frameDelay":12,"version":"mj2UdWBIQyfyTjs1VN2hmMlJJQ9.USd3","loadedFromSource":true,"saved":true,"sourceSize":{"x":29,"y":74},"rootRelativePath":"assets/a8f36482-803d-4474-94a6-b14b425df10b.png"},"54c7b714-082d-432f-b761-58b3991e4165":{"name":"arrow","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":1,"looping":true,"frameDelay":12,"version":"4jcPyAGZuKoSwoEMCd3iPLexqm0dRg0c","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":100},"rootRelativePath":"assets/54c7b714-082d-432f-b761-58b3991e4165.png"},"ffb1d29d-0d1e-4c3a-a03e-fea6a55027e7":{"name":"bow","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":1,"looping":true,"frameDelay":12,"version":"yBNDUnd952wZhbXsCVMVdaxWWUP._qBO","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":100},"rootRelativePath":"assets/ffb1d29d-0d1e-4c3a-a03e-fea6a55027e7.png"},"16277792-5134-4ceb-ab00-1c7170d98e6f":{"name":"sunshine_showers_1","sourceUrl":"assets/api/v1/animation-library/gamelab/aKdIMfQ6ZOpZAiQLYFZjgwSjbxifm1eU/category_backgrounds/sunshine_showers.png","frameSize":{"x":400,"y":400},"frameCount":1,"looping":true,"frameDelay":2,"version":"aKdIMfQ6ZOpZAiQLYFZjgwSjbxifm1eU","loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":400},"rootRelativePath":"assets/api/v1/animation-library/gamelab/aKdIMfQ6ZOpZAiQLYFZjgwSjbxifm1eU/category_backgrounds/sunshine_showers.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

 //initiate Game STATEs
var PLAY = 1;
var END = 0;
var gameState = PLAY; 
 
 
 //immovible stuff
  var bc = createSprite(0,0,400,600);
  bc.setAnimation("sunshine_showers_1");
  bc.scale=2;
  bc.velocityX=-9;
  bc.x=bc.width/2;
  var ArrowG = createGroup();
  var BlGreen = createGroup();
  var BlRed = createGroup();
  var BlYel = createGroup();
  var BlBle = createGroup();
  
  var bow = createSprite(380,World.mouseY);
  bow.setAnimation("bow");
      playSound("assets/category_background/wavering_wind.mp3", true);


  

var score=0;
function draw() {
//Make the background
  background(180);
//the game Really?
  if (gameState===PLAY) 
{
//The Arrow spawing 
  if (mouseDown("leftButton")) 
{
  arrow();
}
//the Destroying machanics
  if (ArrowG.isTouching(BlRed))
{
    BlRed.destroyEach();
    ArrowG.destroyEach();
    score=score+1;
}
  if (ArrowG.isTouching(BlGreen))
{
    BlGreen.destroyEach();
    ArrowG.destroyEach();
    score=score+3;
}
  if (ArrowG.isTouching(BlYel))
{
    BlYel.destroyEach();
    ArrowG.destroyEach();
    score=score+2;
}
  if (ArrowG.isTouching(BlBle))
{
    BlBle.destroyEach();
    ArrowG.destroyEach();
    score=score+5;
}
//make the End?
  if (score===50)
{
    gameState=END;
    
}
  

} else if (gameState===END){
//DIE EVERYTHING DIE
    BlBle.destroyEach();
    BlRed.destroyEach();
    BlYel.destroyEach();
    BlGreen.destroyEach();
    stopSound("assets/category_background/wavering_wind.mp3");
}
  Ballon();

//Reset da Screen
  if (bc.x<0) 
{
    bc.x=bc.width/2;
    
}
  
//ooooooo
  bow.y=World.mouseY;
//Just the common stuff
  createEdgeSprites();
  
  drawSprites();
//Score
  fill("black");
  textFont("Arial black");
  text("Score = "+score,160,10);
//The complete score
  if (score===50)
{
  fill("black");
  stroke("yellow");
  strokeWeight(5);
  text("You win these",150,200);
  
}


  
}


function arrow(){
//Arrow enough said
    var arrow = createSprite(390,bow.y);
    arrow.velocityX=-5;
    arrow.setAnimation("arrow");
    arrow.lifetime=200;
    playSound("assets/category_explosion/fun_bonus_explode_9.mp3", false);
    ArrowG.add(arrow);
}


function Ballon() {
//ballons enough said    
   if (World.frameCount%160==0)
{
    var blyel = createSprite(0,200);
    blyel.velocityX=5;
    blyel.scale=0.8;
    blyel.setAnimation("blyellow");
    blyel.y = randomNumber(0, 400);
    blyel.x = 0;
    blyel.lifetime = 134;
    BlYel.add(blyel);
    blyel.setCollider("circle",0,0,40);

}
  
    if (World.frameCount%240==0)
{
    var blble = createSprite(0,200);
    blble.scale=0.8;
    blble.velocityX=5;
    blble.setAnimation("blblue");
    blble.y = randomNumber(0,400);
    blble.x=0;
    blble.lifetime = 134;
    BlBle.add(blble);
    blble.setCollider("circle",0,0,40);

}
    
    if (World.frameCount%320==0) 
{
    var blgr = createSprite(0,200);
    blgr.velocityX=5;
    blgr.setAnimation("blgreen");
    blgr.scale=0.8;
    blgr.y = randomNumber(0,400);
    blgr.x=0;
    blgr.lifetime=134;
    BlGreen.add(blgr);
    blgr.setCollider("circle",0,0,40);
}

  if (World.frameCount%80==0)
{
    var blred = createSprite(0,200);
    blred.velocityX=5;
    blred.scale=0.8;
    blred.setAnimation("blred");
    blred.y = randomNumber(0, 400);
    blred.x = 0;
    blred.lifetime = 134;
    BlRed.add(blred);
    blred.setCollider("circle",0,0,40);
}
  
  
  
    
}













// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
