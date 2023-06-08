'use strict';

// TODO: Make a voting app for ducks 


//TODO: GLOBAL VARIABLES FOR ELEMENTS 


// TODO: GLOBAL VARIABLE FOR STATE

// . FOR EXAMPLE GOAT OBJECTS

// .             GOAT VOTES

// TODO: VOTING MACHINE DOM

// VOTING MACHING JS









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

function duckImg (img1, img2, img3) {
 img1.src = img1.imgSrc;
 img1.alt = img1.name;
 img1.title = img1.name;
 

 img2.src = img2.imgSrc;
 img2.alt = img2.name;
 img2.title = img2.name;

 img3.src = img3.imgSrc;
 img3.title = img3.name;
 img3.alt = img3.name;
 

}

duckImg(duckArr[0], duckArr[1], duckArr[2]);




