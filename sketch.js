var database,position;
var playerCount=0,player,gamestate=0,form;


function setup(){
    createCanvas(displayWidth-20, displayHeight-150);
    database=firebase.database();
game=new Game()
game.getstate()
game.start()
   
}
function draw(){
    background("white");
    
    drawSprites();
}

