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
  
  
  // Container that holds the visible game
  self.superContainer = document.createElement('div');
  self.superContainer.setAttribute('id', 'super-container');
  self.grandContainer.appendChild(self.superContainer);


  //--First Wall--
  

  self.wall = document.createElement('div');
  self.wall.setAttribute('id', 'wall');
  self.superContainer.appendChild(self.wall);
  
  self.wallimg = document.createElement('img');
  self.wallimg.src =  "./images/paredshort1.png";
  self.wall.appendChild(self.wallimg);
 // --Score--
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
  
  mole1.appendChild(self.moleText1);

 // --Create Mole2 --
  var mole2 = document.createElement('div');
  mole2.setAttribute("class", "mole");
  mole2.setAttribute("id", "mole2");
  self.moleContainer.appendChild(mole2);

  self.moleText2 = document.createElement('p');

  mole2.appendChild(self.moleText2);

  // --Create Mole3 --
  var mole3 = document.createElement('div');
  mole3.setAttribute("class", "mole");
  mole3.setAttribute("id", "mole3");
  self.moleContainer.appendChild(mole3);

  self.moleText3 = document.createElement('p');

  mole3.appendChild(self.moleText3);

  // --Create Mole4 --
  var mole4 = document.createElement('div');
  mole4.setAttribute("class", "mole");
  mole4.setAttribute("id", "mole4");
  self.moleContainer.appendChild(mole4);
  
  self.moleText4 = document.createElement('p');
  
  mole4.appendChild(self.moleText4);


  // --Create Mole5 --
  var mole5 = document.createElement('div');
  mole5.setAttribute("class", "mole");
  mole5.setAttribute("id", "mole5");
  self.moleContainer.appendChild(mole5);

  self.moleText5 = document.createElement('p');
  
  mole5.appendChild(self.moleText5);

  /* var attributes = ["class", "id"];
var values = ["mole", "mole1"];

for (var i = 0; i < attributes.length; i++) {
  input.setAttribute(attributes[i], values[i])
  Use this instead of repeating the blocks above
  */

  self.wall2 = document.createElement('div');
  self.wall2.setAttribute('id', 'wall2');
  self.superContainer.appendChild(self.wall2);

  self.wallimg2 = document.createElement('img');
  self.wallimg2.src = "./images/paredshort2.png";
  self.wall2.appendChild(self.wallimg2);

  self.wall3 = document.createElement('div');
  self.wall3.setAttribute('id', 'wall3');
  self.superContainer.appendChild(self.wall3);

  self.wallimg3 = document.createElement('img');
  self.wallimg3.src = "./images/pared3.png";
  self.wall3.appendChild(self.wallimg3);

  mole1.addEventListener('click', function(){
     m1 = 6;
     var points = parseInt(self.scoreSpan.innerText);
     points += m1;
     self.scoreSpan.innerText = points;  
     console.log(self.scoreSpan); 
  })

  mole2.addEventListener('click', function () {
     m2 = 8;
     var points = parseInt(self.scoreSpan.innerText);
     points += m2;
     self.scoreSpan.innerText = points;
     console.log(self.scoreSpan); 
  })

  mole3.addEventListener('click', function () {
     m3 = 3;
     var points = parseInt(self.scoreSpan.innerText);
     points += m3;
     self.scoreSpan.innerText = points;
     console.log(self.scoreSpan); 

  })

  mole4.addEventListener('click', function () {
     m4 = 50;
     var points = parseInt(self.scoreSpan.innerText);
     points += m4;
     self.scoreSpan.innerText = points;
     console.log(self.scoreSpan); 
  })

  mole5.addEventListener('click', function () {
     m5 = 3;
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
