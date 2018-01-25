'use strict'


function main(){ // Main function loads all the content?..

    

    var mainElement = document.querySelector('#site-main');

    
    var game;

    // Splash Screen (Initial screen)
    var splashContainer;
    var gameTitle;
    var instructionsContainer;
    var gameInstructions;
    var startButton;
    var handleStartButton = function(){
        eraseSplash();
        buildGame();
    };


    function buildSplash(){  

      

      // create dom elements
      splashContainer = document.createElement('div');
      splashContainer.setAttribute('id', 'splash-container');

      

      gameTitle = document.createElement('h1');
      gameTitle.innerText = 'MOLES';
      splashContainer.appendChild(gameTitle);

      instructionsContainer = document.createElement('div');
      instructionsContainer.setAttribute('id', 'p-container');
      splashContainer.appendChild(instructionsContainer);

      gameInstructions = document.createElement('p');
      gameInstructions.innerText = '- Click as many divs as you can in X amount of time -'
      instructionsContainer.appendChild(gameInstructions);

      startButton = document.createElement('button');
      startButton.innerText = 'START';
      splashContainer.appendChild(startButton);

       //append to mainElement
       mainElement.appendChild(splashContainer);
    
      //bind click on star button
      startButton.addEventListener('click', handleStartButton);   

    } // end of buildSplash()

    function eraseSplash(){

      // unbind click on star button
      startButton.removeEventListener('click', handleStartButton);
      // remove splash screen from DOM
      splashContainer.remove();
      
    }

    // -- Game
    function buildGame() {

      game = new Game(mainElement);

      window.setTimeout(function () { // Delay 
        eraseGame();
        buildGameOver();
        }, 80000);
    }

    function eraseGame(){
        mainElement.removeChild(mainElement.firstChild);
    }

    //-- Game Over
     
    var gameOverContainer;
    var scoreContainer;
    var gameOverTitle;
    var score;
    var msgContainer;
    var msg;
    var restartButton;
    var handleRestartButton = function(){
        eraseGameOver();
        buildGame();
    };

    function buildGameOver(){

        gameOverContainer = document.createElement('div');
        gameOverContainer.setAttribute('id', "gameover-container");

        gameOverTitle = document.createElement('h1');
        gameOverTitle.innerText = "GAME OVER";
        gameOverContainer.appendChild(gameOverTitle);


        scoreContainer = document.createElement('div');
        scoreContainer.setAttribute('id', "score-container")
        gameOverContainer.appendChild(scoreContainer);

       

        score = document.createElement('p');
        score.innerText = "score: ";
        scoreContainer.appendChild(score);

        msgContainer = document.createElement('div');
        msgContainer.setAttribute('id', 'msg-container');
        gameOverContainer.appendChild(msgContainer);

        msg = document.createElement('p');
        msg.innerText = "Good Job";
        msgContainer.appendChild(msg);

        restartButton = document.createElement('button');
        restartButton.innerText = "RESTART";
        gameOverContainer.appendChild(restartButton);

        mainElement.appendChild(gameOverContainer);

        // bind click on restart button
        restartButton.addEventListener('click', handleRestartButton);
    }
    
    function eraseGameOver(){
        // unbond click from restart button
        restartButton.removeEventListener('click', handleRestartButton);
        // remove gameOver from dom
        gameOverContainer.remove();
    }
    //buildGameOver();
    buildSplash();
}
window.onload = main;