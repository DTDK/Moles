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

  var mole1 = document.createElement('div');
  mole1.setAttribute("class", "mole");
  mole1.setAttribute("id", "mole1");
  self.moleContainer.appendChild(mole1);

  self.wall2 = document.createElement('div');
  self.wall2.setAttribute('id', 'wall2');
  self.superContainer.appendChild(self.wall2);

  self.wallimg2 = document.createElement('img');
  self.wallimg2.src = "./images/wall2.png";
  self.wall2.appendChild(self.wallimg2);

  self.wall3 = document.createElement('div');
  self.wall3.setAttribute('id', 'wall3');
  self.superContainer.appendChild(self.wall2);

  self.wallimg3 = document.createElement('img');
  self.wallimg3.src = "./images/wall3.png";
  self.wall3.appendChild(self.wallimg3);





}
