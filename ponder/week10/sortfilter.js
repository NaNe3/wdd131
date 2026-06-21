nums = [12, 10, 8, 3];

console.log(nums.sort(compareFn));

function compareFn(a,b) {
  if (a < b) {
    return -1;
  } else if (a > b) {
    return 1;
  }
 return 0;
}

const simpleList = ["oranges", "grapes", "lemons", "apples", "Bananas", "watermelons", "coconuts", "broccoli", "mango"];

let simpleListSorted = simpleList.sort();

console.log(simpleListSorted);

let lowerList = simpleList.map(function(fruit) {
  return fruit.toLowerCase();
})

let lowerSort = lowerList.sort();
console.log(lowerSort);

let searchTerm = "co";

let filteredFruit = lowerSort.filter(searchFruit);

function searchFruit(fruit) {
  return fruit.includes(searchTerm);
}

console.log(filteredFruit);


function compareFn(a,b) {
  if (a.price < b.price) {
    return -1;
  } else if (a.price > b.price) {
    return 1;
  }
 return 0;
}

const products = [
  {
    productName: "Wireless Mouse",
    price: 29.99
  },
  {
    productName: "Bluetooth Keyboard",
    price: 49.99
  },
  {
    productName: "Laptop Stand",
    price: 39.99
  }
];

let productSort = products.sort(compareFn);

console.log(productSort);



const animals = [
  {
    name: "Lion",
    traits: ["brave", "strong", "fierce", "wild"]
  },
  {
    name: "Elephant",
    traits: ["large", "gentle", "smart", "wild"]
  },
  {
    name: "Fox",
    traits: ["sly", "quick", "clever", "wild"]
  },
  {
    name: "Dog",
    traits: ["loyal", "friendly", "playful", "cuddly"]
  },
  {
    name: "Cat",
    traits: ["quiet", "independent", "curious", "cuddly"]
  }
];

let query = "wild";
let filteredList = animals.filter(searchList);

function searchList(item) {
  return item.traits.find((trait) => trait.toLowerCase().includes(query.toLowerCase()));
}

console.log(filteredList);