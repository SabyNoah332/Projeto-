var database;
var fundo_img;
var gameState =0;
var playerCount = 0;
var allPlayers;
var score =0;
var player, form,game;
var player1,player2;
var players;
var fruits;
var fruitGroup;
var maca , banana, biscoito, cereja,chocolate,hamburger,melancia,pizza; 
var player_img;
var player1score =0;
var player2score =0;

var obstacleGroup,obstacle,obstacleImage;

function preload(){
  fundo_img = loadImage("fundo.jpeg");
  cesta = loadImage("cesta.webp");
  maca = loadImage("maca.png");
  banana = loadImage("banana.webp");
 cereja = loadImage("cereja.png");
  chocolate = loadImage("chocolate.webp");
  pizza= loadImage("pizza.png");
  melancia = loadImage("melancia.png");
  hamburguer = loadImage("hamburguer.webp");
  biscoito = loadImage("biscoito.png");
  faca = loadImage("faca.png");
  uva = loadImage("uva.jpeg");
  faca=loadImage("faca.png");

  fruitGroup = new Group();

  obstacleImage = loadImage("faca.png")
}
function setup() {
  createCanvas(1000, 600);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
  
}

function draw() {
  background(fundo_img);
  
   if (playerCount === 2) {
     game.update(1);
   }
   if (gameState === 1) {
     clear(); 
     game.play();
   }
   if (gameState === 2) {
    
     game.end();
   }
}