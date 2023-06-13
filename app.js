'use strict';
let voteLimit = 25;
let votingSpace = document.getElementById("voting-space");
let finalResult = document.getElementById ("final-Results");

// TIDO: PUT VOTING AND RESULT AREA IN HTML

let img1 = document.getElementById("img-1"); 
let img2 = document.getElementById ("img-2");
let img3 = document.getElementById ("img-3");

// CONSTRUSTOR

function OddDuck(name, imgSrc) {
    this.name = name;
    this.imgSrc = imgSrc;
    this.voteCount = 0;
    this.viewCount = 0;
}

let dogDuck = new OddDuck ("dogDuck", "./img/dog-duck.jpg");
let sweep = new OddDuck ("sweep", "./img/sweep.png");
let wine = new OddDuck ("wine", "./img/wine-glass.jpg");
let bag = new OddDuck ("bag", "./img/bag.jpeg");
let banana = new OddDuck ("banana", "./img/banana.jpeg");
let bathroom = new OddDuck ("bathroom", "./img/bathroom.jpeg");
let boots = new OddDuck ("boots", "./img/boots.jpg");
let breakfast = new OddDuck ("breakfast", "./img/breakfast.jpg");
let bubbleGum = new OddDuck ("bubbleGum", "./img/bubblegum.jpg");
let chair = new OddDuck ("chair", "./img/chair.jpg");
let cthulhu = new OddDuck ("cthulu", "./img/cthulhu.jpg");
let dragon = new OddDuck ("dragon", "./img/dragon.jpg");
let pen = new OddDuck ("pen", "./img/pen.jpg");
let scissors = new OddDuck ("scissors", "./img/scissors.jpg");
let shark = new OddDuck ("shark", "./img/wine-glass.jpg");
let tauntaun = new OddDuck ("tauntaun", "./img/tauntaun.jpg");
let unicorn = new OddDuck ("unicorn", "./img/unicorn.jpg");
let water = new OddDuck ("water", "./img/water-can.jpg");

let duckArr = [];

duckArr.push (dogDuck);
duckArr.push(sweep);
duckArr.push(wine);
duckArr.push(bag);
duckArr.push(banana);
duckArr.push(bathroom);
duckArr.push(boots);
duckArr.push(breakfast);
duckArr.push(bubbleGum);
duckArr.push(chair);
duckArr.push(cthulhu);
duckArr.push(dragon);
duckArr.push(pen);
duckArr.push(scissors);
duckArr.push(shark);
duckArr.push(tauntaun);
duckArr.push(unicorn);
duckArr.push(water);

console.log(duckArr);

function setDuckImg (prod1, prod2, prod3) {
 img1.src = prod1.imgSrc;
 img1.alt = prod1.name;
 img1.title = prod1.name;
 

 img2.src = prod2.imgSrc;
 img2.alt = prod2.name;
 img2.title = prod2.name;

 img3.src = prod3.imgSrc;
 img3.title = prod3.name;
 img3.alt = prod3.name;
 

}
function getRandomInt (max) {
  return Math.floor(Math.random() * max);
}

function setRandomDuckImg() {
  let duckIndex1 = getRandomInt(duckArr.length);
  let duckIndex2 = getRandomInt(duckArr.length);
  let duckIndex3 = getRandomInt(duckArr.length);
  while (duckIndex1 === duckIndex2 && duckIndex2 === duckIndex3 && duckIndex2 === duckIndex3) {
    duckIndex1 = getRandomInt(duckArr.length);
    duckIndex2 = getRandomInt(duckArr.length);
    duckIndex3 = getRandomInt(duckArr.length);

  }

  let duck1 = duckArr[duckIndex1];
  let duck2 = duckArr[duckIndex2];
  let duck3 = duckArr[duckIndex3];

  setDuckImg(duck1, duck2, duck3);
}

setDuckImg(duckArr[0], duckArr[2], duckArr[1]);

setRandomDuckImg();

function handleDuckClick(event) {
  event.preventDefault();
  let target = event.target;
  let duckName = target.alt;

  let theBestDuck;
  for (let i = 0; i < duckArr.length; i++) {
    let duck = duckArr[i];
    if(duck.name === duckName)
      theBestDuck = duck;
  }
  console.log(duckName);
  theBestDuck.voteCount++;


  console.log(duckName, theBestDuck.voteCount);
  console.log(theBestDuck);
  setRandomDuckImg();

}

votingSpace.addEventListener("click", handleDuckClick);

// todo render results

function renderResults() {
  finalResult.innerHTML = '';
  let duckUL = document.createElement('ul');
  for (let i = 0; i < duckArr.length; i++) {
    let duck = duckArr[i];
    let duckName = duck.name;
    let duckVoteCount = duck.voteCount;
    let report = `The duck named ${duckName} got ${duckVoteCount} votes `;
    let duckLi = document.createElement('li');
    duckLi.textContent = report;
    duckUL.appendChild(duckLi);
  }

  finalResult.appendChild(duckUL);

}

let resultButton = document.getElementById('final-results');
resultButton.addEventListener('click', renderResults);
