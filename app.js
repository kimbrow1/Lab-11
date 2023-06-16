"use strict";

let voteLimit = 25;
let votingSpace = document.getElementById("voting-space");
let finalResult = document.getElementById("final-results");

// TIDO: PUT VOTING AND RESULT AREA IN HTML

let img1 = document.getElementById("img-1");
let img2 = document.getElementById("img-2");
let img3 = document.getElementById("img-3");

// CONSTRUSTOR

function OddDuck(name, imgSrc) {
  this.name = name;
  this.imgSrc = imgSrc;
  this.voteCount = 0;
  this.viewCount = 0;
}

let duckArr = [
  new OddDuck("water", "./img/water-can.jpg"),
  new OddDuck("dogDuck", "./img/dog-duck.jpg"),
  new OddDuck("sweep", "./img/sweep.png"),
  new OddDuck("wine", "./img/wine-glass.jpg"),
  new OddDuck("bag", "./img/bag.jpeg"),
  new OddDuck("banana", "./img/banana.jpeg"),
  new OddDuck("bathroom", "./img/bathroom.jpeg"),
  new OddDuck("boots", "./img/boots.jpg"),
  new OddDuck("breakfast", "./img/breakfast.jpg"),
  new OddDuck("bubbleGum", "./img/bubblegum.jpg"),
  new OddDuck("chair", "./img/chair.jpg"),
  new OddDuck("cthulu", "./img/cthulhu.jpg"),
  new OddDuck("dragon", "./img/dragon.jpg"),
  new OddDuck("pen", "./img/pen.jpg"),
  new OddDuck("scissors", "./img/scissors.jpg"),
  new OddDuck("shark", "./img/wine-glass.jpg"),
  new OddDuck("tauntaun", "./img/tauntaun.jpg"),
  new OddDuck("unicorn", "./img/unicorn.jpg"),
];

console.log(duckArr);

function setDuckImg(prod1, prod2, prod3) {
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
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function setRandomDuckImg() {
  let duckIndex1 = getRandomInt(duckArr.length);
  let duckIndex2 = getRandomInt(duckArr.length);
  let duckIndex3 = getRandomInt(duckArr.length);
  while (
    duckIndex1 === duckIndex2 &&
    duckIndex2 === duckIndex3 &&
    duckIndex2 === duckIndex3
  ) {
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
    if (duck.name === duckName) theBestDuck = duck;
  }

  theBestDuck.voteCount++;
  voteLimit--;
  if(voteLimit === 0) {
    votingSpace.removeEventListener("click", handleDuckClick);


  }

  console.log(duckName, theBestDuck.voteCount);
  console.log(theBestDuck);
  setRandomDuckImg();
}

votingSpace.addEventListener("click", handleDuckClick);

// todo render results

function renderResults(event) {
  event.preventDefault();
  finalResult.innerHTML = "";
  let duckUL = document.createElement("ul");
  for (let i = 0; i < duckArr.length; i++) {
    let duck = duckArr[i];
    let duckName = duck.name;
    let duckVoteCount = duck.voteCount;
    let report = `The duck named ${duckName} got ${duckVoteCount} votes `;
    let duckLi = document.createElement("li");
    duckLi.textContent = report;
    duckUL.appendChild(duckLi);

  }
 console.log("button click");
  finalResult.appendChild(duckUL);
  displayChart(duckArr);
}

let resultButton = document.getElementById("results1");
resultButton.addEventListener("click", renderResults);

// TODO: create a function that displays a chart with our data

let chart;
function displayChart(data) {
  if (chart !== undefined) {
    chart.destroy();
  }
  let labels = getLabelData(data);
  let votes = getVoteData(data);
  //let views = getViewData(data);
  let ctx = document.getElementById("chart-canvas");
  let dataObj = {
    type: "bar",
    data: {
      labels: labels,
      datasets: [
        {
          label: "Votes For Duck",
          data: votes,
        },
        // {
        //  label: "Views for duck",
        //   data: views,
        // },
      ],
    },
  };
  chart = new Chart(ctx, dataObj);
}

displayChart(duckArr);
console.log(displayChart);

function getVoteData(duckArr) {
  let votes = [];
  for (let duck of duckArr) {
    votes.push(duck.voteCount);
  }
  return votes;
}

function getLabelData(duckArr) {
  let labels = [];
  for (let duck of duckArr) {
    labels.push(duck.name);
  }
  return labels;
}

// make another function for get view data and call in chart function