'use strict'

function Game (mainElement){

  self = this;



  self.mainElement = mainElement;

  self.finished = false;
  self.score = 0;
  // retrieves the width of the viewport
  self.width = window.innerWidth; 
  // retrieves the height of the viewport
  self.height = window.innerHeight;

  // create and add dom DOM elements
  self.superContainer = document.createElement('div');
  self.superContainer.setAttribute('id', 'super-container');
  mainElement.appendChild(self.superContainer);

  self.wall = document.createElement('div');
  self.wall.setAttribute('id', 'wall');
  self.superContainer.appendChild(self.wall);

  self.wallimg = document.createElement('img');
  self.wallimg.src =  "./images/wall1.png";
  self.wall.appendChild(self.wallimg);

  self.scoreMsgContainer = document.createElement('div');
  self.scoreMsgContainer.setAttribute('id', 'score-msg');
  self.superContainer.appendChild(self.scoreMsgContainer);

  self.score = document.createElement('p');
  self.score.innerText = "SCORE : ";
  self.scoreMsgContainer.appendChild(self.score);

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
  self.wallimg2.src = "./images/wall2.png";
  self.wall2.appendChild(self.wallimg2);

  self.wall3 = document.createElement('div');
  self.wall3.setAttribute('id', 'wall3');
  self.superContainer.appendChild(self.wall3);

  self.wallimg3 = document.createElement('img');
  self.wallimg3.src = "./images/wall3.png";
  self.wall3.appendChild(self.wallimg3);





}
