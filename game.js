'use strict'

function Game (mainElement){

  self = this;


  var m1;
  var m2;
  var m3;
  var m4;
  var m5;


  self.mainElement = mainElement;

  self.finished = false;
  self.score = 0;
  // retrieves the width of the viewport
  self.width = window.innerWidth; 
  // retrieves the height of the viewport
  self.height = window.innerHeight;

 
  // Container that holds all the DOM elements
  self.grandContainer = document.createElement('div');
  self.grandContainer.setAttribute('id', 'grand-container');
  self.mainElement.appendChild(self.grandContainer); 
  
  // CLICKABLE MOLES
  self.ghostMoles = document.createElement('div');
  self.ghostMoles.setAttribute('id', 'ghostMoles');
  self.grandContainer.appendChild(self.ghostMoles); 

  self.molesContainerGhost = document.createElement('div');
  self.molesContainerGhost.setAttribute('id', 'moles-containerGhost');
  self.ghostMoles.appendChild(self.molesContainerGhost);

  var mole1Ghost = document.createElement('div');
  mole1Ghost.setAttribute("class", "moleGhost");
  mole1Ghost.setAttribute("id", "mole1Ghost");
  self.molesContainerGhost.appendChild(mole1Ghost);

  var mole2Ghost = document.createElement('div');
  mole2Ghost.setAttribute("class", "moleGhost");
  mole2Ghost.setAttribute("id", "mole2Ghost");
  self.molesContainerGhost.appendChild(mole2Ghost);

  var mole3Ghost = document.createElement('div');
  mole3Ghost.setAttribute("class", "moleGhost");
  mole3Ghost.setAttribute("id", "mole3Ghost");
  self.molesContainerGhost.appendChild(mole3Ghost);

  var mole4Ghost = document.createElement('div');
  mole4Ghost.setAttribute("class", "moleGhost");
  mole4Ghost.setAttribute("id", "mole4Ghost");
  self.molesContainerGhost.appendChild(mole4Ghost);

  var mole5Ghost = document.createElement('div');
  mole5Ghost.setAttribute("class", "moleGhost");
  mole5Ghost.setAttribute("id", "mole5Ghost");
  self.molesContainerGhost.appendChild(mole5Ghost);
  
  // Container that holds the visual game
  self.superContainer = document.createElement('div');
  self.superContainer.setAttribute('id', 'super-container');
  self.grandContainer.appendChild(self.superContainer);


  //First Wall
  self.wall = document.createElement('div');
  self.wall.setAttribute('id', 'wall');
  self.superContainer.appendChild(self.wall);
  
  self.wallimg = document.createElement('img');
  self.wallimg.src =  "/images/wall1.png";
  self.wall.appendChild(self.wallimg);

  self.scoreMsgContainer = document.createElement('div');
  self.scoreMsgContainer.setAttribute('id', 'score-msg');
  self.superContainer.appendChild(self.scoreMsgContainer);

  self.scoreUl = document.createElement('ul');
  self.scoreUl.setAttribute('id','score-ul');
  self.scoreMsgContainer.appendChild(self.scoreUl);

  self.scoreLi = document.createElement('li');
  self.scoreLi.innerText = 'Score : '
  self.scoreLi.setAttribute('id','score-li');
  self.scoreUl.appendChild(self.scoreLi);

  self.scoreSpan = document.createElement('span');
  parseInt(self.scoreSpan.innerText = '0');
  self.scoreLi.appendChild(self.scoreSpan);

  self.moleContainer = document.createElement('div');
  self.moleContainer.setAttribute('id', 'moles-container');
  self.superContainer.appendChild(self.moleContainer);

  // --Create Mole1 --
  var mole1 = document.createElement('div');
  mole1.setAttribute("class", "mole");
  mole1.setAttribute("id", "mole1");
  self.moleContainer.appendChild(mole1);

  self.moleText1 = document.createElement('p');
  self.moleText1.innerText = "mole 1";
  mole1.appendChild(self.moleText1);

 // --Create Mole2 --
  var mole2 = document.createElement('div');
  mole2.setAttribute("class", "mole");
  mole2.setAttribute("id", "mole2");
  self.moleContainer.appendChild(mole2);

  self.moleText2 = document.createElement('p');
  self.moleText2.innerText = "Mole 2";
  mole2.appendChild(self.moleText2);

  // --Create Mole3 --
  var mole3 = document.createElement('div');
  mole3.setAttribute("class", "mole");
  mole3.setAttribute("id", "mole3");
  self.moleContainer.appendChild(mole3);

  self.moleText3 = document.createElement('p');
  self.moleText3.innerText = "Mole 3";
  mole3.appendChild(self.moleText3);

  // --Create Mole4 --
  var mole4 = document.createElement('div');
  mole4.setAttribute("class", "mole");
  mole4.setAttribute("id", "mole4");
  self.moleContainer.appendChild(mole4);
  
  self.moleText4 = document.createElement('p');
  self.moleText4.innerText = "Mole 4";
  mole4.appendChild(self.moleText4);


  // --Create Mole5 --
  var mole5 = document.createElement('div');
  mole5.setAttribute("class", "mole");
  mole5.setAttribute("id", "mole5");
  self.moleContainer.appendChild(mole5);

  self.moleText5 = document.createElement('p');
  self.moleText5.innerText = "Mole 5";
  mole5.appendChild(self.moleText5);

  /* var attributes = ["class", "type", "checked"];
var values = ["my-class", "checkbox", "checked"];

for (var i = 0; i < attributes.length; i++) {
  input.setAttribute(attributes[i], values[i])
  Use this instead of repeating the blocks above
  */

  self.wall2 = document.createElement('div');
  self.wall2.setAttribute('id', 'wall2');
  self.superContainer.appendChild(self.wall2);

  self.wallimg2 = document.createElement('img');
  self.wallimg2.src = "/images/wall2.png";
  self.wall2.appendChild(self.wallimg2);

  self.wall3 = document.createElement('div');
  self.wall3.setAttribute('id', 'wall3');
  self.superContainer.appendChild(self.wall3);

  self.wallimg3 = document.createElement('img');
  self.wallimg3.src = "./images/wall3.png";
  self.wall3.appendChild(self.wallimg3);

  mole1Ghost.addEventListener('click', function(){
     m1 = 6;
     var points = parseInt(self.scoreSpan.innerText);
     points += m1;
     self.scoreSpan.innerText = points;  
     console.log(self.scoreSpan); 
  })

  mole2Ghost.addEventListener('click', function () {
     m2 = 8;
     var points = parseInt(self.scoreSpan.innerText);
     points += m2;
     self.scoreSpan.innerText = points;
     console.log(self.scoreSpan); 
  })

  mole3Ghost.addEventListener('click', function () {
     m3 = 3;
     var points = parseInt(self.scoreSpan.innerText);
     points += m3;
     self.scoreSpan.innerText = points;
     console.log(self.scoreSpan); 

  })

  mole4Ghost.addEventListener('click', function () {
     m4 = 5;
     var points = parseInt(self.scoreSpan.innerText);
     points += m4;
     self.scoreSpan.innerText = points;
     console.log(self.scoreSpan); 
  })

  mole5Ghost.addEventListener('click', function () {
     m5 = 10;
     var points = parseInt(self.scoreSpan.innerText);
     points += m5;
     self.scoreSpan.innerText = points;
     console.log(self.scoreSpan); 
  })


  // for(var i = 0; i< 10000; i++){
  //   if (i % 1000 === 0) {
  //     console.log(window.getComputedStyle(mole5).transform);
  //   }
  // }



}
