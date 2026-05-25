const steps = ['one', 'two', 'three'];

// steps.forEach((step) => {
//   console.log(step);
// });

steps.forEach(showSteps);

function showSteps(step) {
  console.log(step);
}

let myList = document.getElementById('myList');

const stepsHTML = steps.map(listTemplate)

function listTemplate(step) {
  return `<li>${step}</li>`;
}

myList.innerHTML = stepsHTML.join('');


// .map

let grades = ['A', 'B', 'C'];
let points;

let gpaPoints = grades.map(convert);

function convert(grade) {
  switch (grade) {
    case 'A':
      points = 4;
      break;
    case 'B':
      points = 3;
      break;
    case 'C':
      points = 2;
      break;
    case 'D':
      points = 1;
      break;
    case 'F':
      points = 0;
      break;
    default:
      alert('not a valid grade');
  }
  return points;
}

console.log(gpaPoints);

// .reduce

let totalPoints = gpaPoints.reduce(groupTotal);

function groupTotal(total, points) {
  return total + points;
}
console.log(totalPoints);

let gpaAverage = totalPoints / gpaPoints.length;
console.log(gpaAverage);

// .filter

const words = ['watermelon', 'peach', 'apple', 'tomato', 'grape'];
const shortWords = words.filter(function (word) {
  return word.length < 6;
});
console.log(shortWords);

// .indexOf

const myArray = [12, 34, 21, 54];
const luckyNumber = 21;
let lucky = myArray.indexOf(luckyNumber);
console.log(lucky);

// dynamic content
let container = document.getElementById('studentContainer');
const students = [
  { last: 'Andrus', first: 'Aaron' },
  { last: 'Masa', first: 'Manny' },
  { last: 'Tanda', first: 'Tamanda' }
];
students.forEach(function (item) {
  let name = document.createElement('div');
  name.className = 'format';

  let html = `
    <span>${item.first}</span>
    <span>${item.last}</span>
    <hr />
  `

  name.innerHTML = html;
  container.appendChild(name);
});
