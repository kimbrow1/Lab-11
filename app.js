'use strict';

let mainS = document.getElementById("main-s");
let finalResult = document.getElementById ("final-Results");

let main1 = document.getElementById("main-1");
let main2 = document.getElementById ("main-2");
let main3 = document.getElementById ("main-3");

function oddDuck(name, img1) {
    this.name = name;
    this.img1 = img1;
    this.firstCount = 0;
    this.finalCount = 0;
}

let dogDuck = new oddDuck ("dogDuck", img/dog-duck.jpg);
let sweep = new oddDuck ("sweep", img/sweep.png);
let wine = new oddDuck ("wine", img/wine-glass.jpg);

let duckArr = [];

 duckArr.push (dogDuck);
 duckArr.push(sweep);
 duckArr.push(wine);

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

oddDuck (duckArr[0], duckArr[1], duckArr[2]);

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



