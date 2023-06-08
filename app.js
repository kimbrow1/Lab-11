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

let main1 = document.getElementById("main-1");
let main2 = document.getElementById ("main-2");
let main3 = document.getElementById ("main-3");

// CONSTRUSTOR

function OddDuck(name, imgSrc) {
    this.name = name;
    this.imgSrc = imgSrc;
    this.voteCount = 0;
    this.viewCount = 0;
}

let dogDuck = new OddDuck ("dogDuck", "./img/dog-duck.jpg");
let sweep = new OddDuck ("sweep", "./img/sweep.png");
let wine = new oodDuck ("wine", "./img/wine-glass.jpg");
let bag = new oddDuck ("bag", "./img/bag.jpeg");
let banana = new oddDuck ("banana", "./img/banana.jpeg");
let bathroom = new oddDuck ("bathroom", "./img/bathroom.jpeg");
let boots = new oddDuck ("boots", "./img/boots.jpg");
let breakfast = new oddDuck ("breakfast", "./img/breakfast.jpg");
let bubbleGum = new oddDuck ("bubbleGum", "./img/bubblegum.jpg");
let chair = new oddDuck ("chair", "./img/chair.jpg");
let cthulhu = new oddDuck ("cthulu", "./img/cthulhu.jpg");
let dragon = new oddDuck ("dragon", "./img/dragon.jpg");
let pen = new oddDuck ("pen", "./img/pen.jpg");
let scissors = new oddDuck ("scissors", "./img/scissors.jpg");
let shark = new oddDuck ("shark", "./img/wine-glass.jpg");
let tauntaun = new oddDuck ("tauntaun", "./img/tauntaun.jpg");
let unicorn = new oddDuck ("unicorn", "./img/unicorn.jpg");
let water = new oddDuck ("water", "./img/water-can.jpg");

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
 
 


function duckImg (dogDuck, sweep, wine) {
 dogduckImg.src = dogDuck.imgSrc;
 dogDuckImg.alt = dogDuck.name;
 dogDuckImg.title = dogDuck.name;

 sweepImg.src = sweep.imgSrc;
 sweepImg.alt = sweep.name;
 sweepImg.title = sweep.name;

 wineImg.src = wine.imgSrc;
 wineImg.alt = wine.name;
 wine.title = wine.name;
}

OddDuck (duckArr[0], duckArr[1], duckArr[2]);

function onDuckClick (event) {
    console.log("cliked");
    event.preventDefault();
     let target = event.target;
     let onDuckName = target.alt;
     comsole.log(onDuckName);

     let theBestProduct;
     let productViews;

     for (let i = 0; i < duckArr.length; i++){
        let oddDuck = duckArr[i];
        if(productViews.name === target.alt) {
            theBestProduct = oddDuck;
            productViews = oddDuck;

        }
        theBestProduct.voteCount++;
        productViews.viewCount++;
        console.log(theBestProduct.voteCount);
        console.log(productViews.viewCount);

     }

}

mainS.addEventListener("click", onDuckClick);

let days = ["Mon", "Tues", "Wed", "Thur", "Fri"];

let wineSales = [14, 21, 18, 22, 99];


let myChart = document.getElementById("wine-sales");
let chartCtx = myChart.getContext('2d');

let wineDataObj = {
    type:" bar",
    data: {
        labels: days,
        datasets: [
            {
                label: "Wine Sales",
                data: wineSales

            }

        ]
    }

};
let wineChart = new Chart (chartCtx, wineDataObj);



