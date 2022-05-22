/* global
 *    createCanvas, background, collideRectRect,
 *    colorMode, HSB, fill,
 *    frameRate, random,
 *    width, height,
 *    rect, line,
 *    stroke, noStroke, noFill,
 *    textSize, text,
 *    keyCode, UP_ARROW, LEFT_ARROW, RIGHT_ARROW, DOWN_ARROW, key
 */

let backgroundColor, playerSnake, currentApple, score, gameIsOver, snek, startScreen;

function setup() {
  // Canvas & color settings
  createCanvas(400, 400);
  rectMode(CENTER);
  colorMode(HSB, 360, 100, 100);
  backgroundColor = 95;
  frameRate(12);
  playerSnake = new Snake(20);
  currentApple = new Apple();
  score = 0;
  gameIsOver = false;
  startScreen = true;
}

function draw() {
  background(backgroundColor, 100, 100);
  if(startScreen) {
    playGame();
  } else if (!gameIsOver) {
    playerSnake.moveSelf();
    playerSnake.showSelf();
    playerSnake.checkCollisions();
    playerSnake.checkApples();
    
    currentApple.showSelf();
    
    displayScore();
  } else {
    showEnd();
  }
}

function displayScore() {
  fill(0);
  textSize(20);
  text(`${score}`, 30, 30)
}

class Snake {
  constructor(s) {
    this.size = s;
    this.x = width/2;
    this.y = height - 10;
    this.direction = 'N';
    this.speed = 12;
    this.color = 240;
    this.tail = [];
  }

  moveSelf() {
    this.tail.pop();
    this.tail.unshift(new TailSegment(this.x, this.y));
    
    if (this.direction === "N") {
      this.y -= this.speed;
    } else if (this.direction === "S") {
      this.y += this.speed;
    } else if (this.direction === "E") {
      this.x += this.speed;
    } else if (this.direction === "W") {
      this.x -= this.speed;
    } else {
      console.log("Error: invalid direction");
    }
  }

  showSelf() {
    fill(this.color, 100, 100);
    rect(this.x, this.y, this.size, this.size);
    for (var i = 0; i < this.tail.length-1; i++) {
      this.tail[i].showSelf();
    }
    noStroke();
    
  }

  checkApples() {
    if(collideRectRect(this.x-(this.size/2), this.y, this.size, this.size, currentApple.x, currentApple.y, currentApple.size, currentApple.size)) {
      currentApple.x = random(width);
      currentApple.y = random(height);
      playerSnake.extendTail();
      score++;
    }
  }

  checkCollisions() {
    if(this.x > width-(this.size/2)) {
       gameOver();
    }
    if(this.x < this.size/2) {
      gameOver();
    }
    if(this.y > height-this.size) {
      gameOver();
    }
    if(this.y < 0) {
      gameOver();
    }
    
    for(var i = 2; i < this.tail.length; i++) {
        if(collideRectRect(this.x, this.y, this.size, this.size, this.tail[i].x, this.tail[i].y, this.tail[i].sizeX, this.tail[i].sizeY)) {
          gameOver();
        }
    }
    
  }

  extendTail() {
    if(this.tail.length != 0) {
      let lastSegment = this.tail[this.tail.length-1];
    
      this.tail.push(new TailSegment(lastSegment.x, lastSegment.y));
    } else {
      this.tail.push(new TailSegment(this.x+(this.size/2), this.y));
    }
  }
}

class Apple {
  constructor() {
    this.size = 10;
    this.x = random(width-10);
    this.y = random(height-10);
  }

  showSelf() {
    fill(0, 100, 100);
    rect(this.x, this.y, this.size, this.size);
  }
}

function keyPressed() {
  if(keyCode == 32 && startScreen) {
    startScreen = false;
  }
  if (keyCode === UP_ARROW && playerSnake.direction != 'S') {
    playerSnake.direction = "N";
    for (var i = playerSnake.tail.length-1; i >= 0; i++) {
      playerSnake.tail[i].x += 100;
      playerSnake.tail[i].sizeY = 100;
     }
  } else if (keyCode === DOWN_ARROW && playerSnake.direction != 'N') {
    playerSnake.direction = "S";
  } else if (keyCode === RIGHT_ARROW && playerSnake.direction != 'W') {
    playerSnake.direction = "E";
  } else if (keyCode === LEFT_ARROW && playerSnake.direction != 'E') {
    playerSnake.direction = "W";
  } else if (key =="r") {
    restartGame();
  } else {
    console.log("wrong key");
  }
}

class TailSegment {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.sizeX = 7.5;
    this.sizeY = 7.5;
  }
  showSelf() {
    fill(playerSnake.color, 100, 100) 
    rect(this.x, this.y, this.sizeX, this.sizeY);
  }
}

function restartGame() {
  gameIsOver = false;
  backgroundColor = 95;
  playerSnake = new Snake(20);
  currentApple = new Apple;
  score = 0;
}

function gameOver() {
  gameIsOver = true;
}

function showEnd() {
  backgroundColor = 0;
  
  fill(0);
  text("GAME OVER", width/2-60, height/3);
  text("Click R to Restart game", width/2-100, 2*height/3)
}

function playGame() {
  fill(0);
  textSize(20);
  text("SNAKE", width/2-40, height/3);
  text("Use the arrow keys to move!", width/2-130, 2*height/3)
  text("Press Space to Start", width/2-100, 3*height/4);
}


