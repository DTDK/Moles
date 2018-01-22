'use strict'


function main(){

    var score;
    var speed;

    var mainElement = document.querySelector('#site-main');

    var stage;
    var game;

    // Splash Screen
    var splashContainer;
    var pContainer;
    var splashTitle;
    var splashInstruct;
    var splashButton;

    function buildSplash(){

      stage = 'splash';

      // create dom elements
      splashContainer = document.createElement('div');
      splashContainer.setAttribute('id', 'splash-container');

      

      splashTitle = document.createElement('h1');
      splashTitle.innerText = 'MOLES';
      splashContainer.appendChild(splashTitle);

      pContainer = document.createElement('div');
      pContainer.setAttribute('id', 'p-container');
      splashContainer.appendChild(pContainer);

      splashInstruct = document.createElement('p');
      splashInstruct.innerText = 'This is truly an almighty mountain. I get carried away with this brush cleaning.'
      pContainer.appendChild(splashInstruct);

      splashButton = document.createElement('button');
      splashButton.innerText = 'START';
      splashContainer.appendChild(splashButton);

    //append to mainElement
        mainElement.appendChild(splashContainer);
    
      

   

    }

    buildSplash();
}
window.onload = main;