//  1.1 задание
//  let person = {
//  name:"John",
//  age: 25,
//  job: "developer",
//  }
//  person.age = 30;
//  person.city = "Russia";
// delete person.job;

//  1.2 задание
//  let car = {
//  brand: "Toyota",
//  model: "Camry",
//  year: 2020,
//  color: "blue",
//  }
//  car["color"] = "black";
//  car["mileage"] = 10000;
//  delete person.color;

//  2.1 задание
//  function Person (name, age, job) {
//  this.name = name;
//  this.age = age;
//  this.job = job;
//  }
//  let person = new Person("John", 25, "developer");
//  person.name = "Mike";

//  2.3 задание
//  function Car (brand, model, year, color) {
//  this.brand = brand;
//  this.model = model;
//  this.year = year;
//  this.color = color;
//  }
//  let car = new Car("Toyota", "Camry", 2020, "blue");
//  car["year"] = 2022;


//  Методы объектов 1 задание
//  let person = {
//  name: "Jack",
//  age: 25,
//  sayHi: function() {
//  console.log("Hello, my name is " + this.name);
//  }
//  }
//  person.sayHi();

// 2 задание
// let calculator = {
//   add: function(a, b) {
//     return a + b;},
//   subtract: function(a, b) {
//     return a - b;},
//   multiply: function(a, b) {
//     return a * b;},
//   divide: function(a, b) {
//     return a / b;},
// }
// console.log(calculator.add(5, 5));
// console.log(calculator.subtract(5, 5));
// console.log(calculator.multiply(5, 5));
// console.log(calculator.divide(5, 5));

// 3 задание
// let car = {
//   start: function() {
//     alert("Машина запущена");

//   },
//   stop: function() {
//     alert("Машина остановлена");

//   }
// }
// car.start();
// car.stop();


// Прототипы объекта 1 задание
// let person = {
//   name: "",
//   age: 0,
// };
// let person1 = Object.create(person);
// person1name = "Anna";
// person1.age = 25;
// console.log(Anna);

// 2 задание
// let animal = {
//   eat: function() {
//          console.log("Животное кушает");
//       },
// }
// let dog = Object.create(animal);
// dog.eat();

// 3 задание
// let shape = {
//   draw: function() {
//     console.log("Фигура рисуется")
//   }

// }
// let rectangle = Object.create(shape);
// rectangle.draw();




// Массивы

// Литерал массива
//  const numbers = [1,2,3,4];
//  numbers.shift()
//  numbers.pop()
//  numbers.push(7)
//  numbers.unshift(9)
//  console.log(numbers);
 

// new Array = new Array()
// const emptyArray = new Array();
// const arrayNumbers = new Array(3);
// console.log(emptyArray);
// console.log(arrayNumbers);

// Array.from()
// const str = "hello";
// const arr = Array.from(str)
// console.log(arr);

//  const psevdoArray = {
//    length: 3,
//    0: "a",
//    1: "b",
//    2: "c"
//  }
//  const arr = Array.from(psevdoArray)
//  console.log(arr);


// slice()
// Создайте массив из чисел. Используя метод slice, создайте новый массив, содержащий первые три элемента исходного массива.

// 1 задание
// const numbers = [1,2,3,4,5];
// const subArray = numbers.slice(0,3)
// console.log(subArray);

// 2 задание
// const  names = ["Kate", "Anna", "Maria", "Vika"]
// const subArray = names.slice(0,3)
// console.log(subArray);

// 3 задание
//  const  names = ["Kate", "Anna", "Maria", "Vika", "Daria"]
//  const subArray = names.slice(2,5)
//  console.log(subArray);


// 4 задание
// const symboli = "happy happy"
// const subArray = symboli.slice(1,4)
// console.log(subArray);

// 5 задание
// const mass = [
//   { name: "Anna",
//   age: 10},
//   { name: "Maria",
//    age: 20},
//   { name: "Daria",
//   age: 30}
// ];

// const subArray = mass.slice(0,2)
// console.log(subArray);



// splice()
// 1 задание 
// const numbers = [1,2,3,4,5];
// numbers.splice(0,1)
// console.log(numbers);

// 2 задание 
// const  names = ["Kate", "Anna", "Maria", "Vika"]
// names.splice(0,1)
// console.log(names);

// 3 задание 
//  const  names = ["Kate", "Anna", "Maria", "Vika"]
//  names.splice(1,1)
//  console.log(names);

// 4 задание
// let str = "happy happy";
// let charactersArray = str.split("");
// charactersArray.splice(0, 3);
// let newStr = charactersArray.join("");
// console.log(newStr);

// 5 задание
//  const mass = [
//  { name: "Anna",
//  age: 10},
//  { name: "Maria",
//   age: 20},
//  { name: "Daria",
//  age: 30}
//  ];

//  mass.splice(0,1)
//  console.log(mass);

// concat()
// 1 задание
// const numbers = [1,2,3,4,5];
// const numbers2 = [6,7,8,9];
// const combine = numbers.concat(numbers2);
// console.log(combine);

// 2 задание
// const str = "happy";
// const str2 = "happy";
// const combine = str.concat(str2);
// console.log(combine);

// 3 задания
// const mas = ["tomato", "potato"];
// const mas2 = ["papper", "cucumber"];
// const combine = mas.concat(mas2);
// console.log(combine);

// 4 задания
// const symb = "happy";
// const symb2 = "happy";
// const combine = symb.concat(symb2);
// console.log(combine);

// 5 задание
// const something = [ "hy", "bro", 1 , 2 , 3];
// const combine = something.concat([1,2,3]);
// console.log(combine);

// map()
// 1 задание
// const number = [1,2,3];
// const doublesNumber = number.map(function(number) {
//   return number + 1;
// })
// console.log(doublesNumber);

// 2 задание
// const  names = ["Kate", "Anna", "Maria", "Vika"]
// const doublesNumber = names.map(function(name) {
// return name.toUpperCase()
// })
// console.log(doublesNumber);

// 3 задание 
// const objects = [
// {
// name: "Anna",
// age: 20
// },
// {
// name: "Maria",
// age: 25
// }
// ];
// const subObjects = objects.map(function(person) {
// return {
// name: person.name,
// age: person.age,
// fullName: person.name + " " + person.age
// }
// })
// console.log(subObjects);

// 4 задание
// const numbers = [1, 2, 3];
// const doublesNumber = numbers.map(function(number){
//   return number ** 2
// })
// console.log(doublesNumber);

// 5 задание
// const  names = ["KATE", "ANNA", "MARIA", "VIKA"]
//  const doublesNumber = names.map(function(name) {
//  return name.toLowerCase()
//  })
//  console.log(doublesNumber);



// filter()
// 1 задание
// const numbers = [1,2,3,4,5];
// const evenNumbers = numbers.filter(function(number){
//   return number % 2 === 0;
// })
// console.log(evenNumbers);

// 2 задание
// const words = ["pen", "pencil", "book", "banana", "apple"];
// const filteredWords = filterStringsByLength(words);
// function filterStringsByLength(strings) {
//   return strings.filter(str => str.length >= 5);
// }
// console.log(filteredWords);

// 3 задание
// function filterObjectsByPrice(objects) {
//   return objects.filter(obj => obj.price > 1000);
// }
// const products = [
//   { name: "car",
//    price: 12000 },
//   { name: 'phone',
//    price: 800 },
// ];
// const expensiveProducts = filterObjectsByPrice(products);
// console.log(expensiveProducts);


// reduce()
// 1 задание
// const numbers = [1,2,3,4,5];
// const sum = numbers.reduce(function(accumulator, currentValue){
// return accumulator + currentValue;
// }, 0)
// console.log(sum);

// 2 задание
// const strings = ["pen","pencil","notebook"];
// const newString = strings.reduce(function(accumulator, currentValue){
//   return accumulator + currentValue;
// }, "" );
// console.log(newString);

// 3 задание
// const numbers = [1,2,3,4];
//  const sum = numbers.reduce(function(accumulator, currentValue){
//  return accumulator * currentValue;
//  }, 1)
//  console.log(sum);

// 4 задание
// const people = [
//  {
//  name: "Anna",
//  age: 20
//  },
//  {
//  name: "Maria",
//  age: 25
//  },
//  {
//   name: "Sasha",
//   age: 30
//   }
//  ];
//  const totalAge = people.reduce((accumulator, currentValue) => {
//   return accumulator + currentValue.age;
// }, 0);
// const averageAge = totalAge / people.length;
// console.log(averageAge); 

// 5 задание
// const numbers = [1,2,3,4,5];
// const sum = numbers.reduce((accumulator, currentValue) => {
// if (currentValue % 2 === 0) {
// return accumulator + currentValue;
// } else {return accumulator;
// }
// }, 0);
// console.log(sum);


// sort()
// 1 задание
// const numbers = [4,3,5,2,1];
// numbers.sort(function(a,b){
//   return a - b;
// })
// console.log(numbers);

// 2 задание 
// const fruits = ["pear", "apple","banana"]
// fruits.sort()
// console.log(fruits);

// 3 задание
// const people =[
// {name: "Sasha",
// age:20},
// {name: "Masha",
// age:15
// }
// ];
// people.sort(function (a, b) {
//   return a.age - b.age
// })
// console.log(people);


// 4 задание
// const numbers = [4,3,5,2,1];
// numbers.sort(function(a,b){
//   return b - a;
// })
// console.log(numbers);

// 5 задание
// const fruits = ["pear", "apple","banana"]
// fruits.sort((a, b) => b.localeCompare(a));
// console.log(fruits);


// forEach()
// 1 задание
// const numbers = [1,2,3,4,5,6,7,8];
// numbers.forEach(function(number){
//   console.log(number)
// })

// 2 задание
// const names = ["Anna", "Maria","Sasha"];
// names.forEach(function(name){
//   console.log(name)
// })

// 3 задание
// const people = [
//   {name:"Sasha",
// age:15},
// {name: "Masha",
// age:20}
// ]
// people.forEach(function(name){
//     console.log(name)
//    })

// 4 задание
// const numbers = [1,2,3,4,5,];
// let sum = 0;
// numbers.forEach(function(number){
// sum += number;
// });
// console.log(sum);

// 5 задание
// const fruits = ["pear", "apple","banana"];
// fruits.forEach(function(str){
//   console.log(str.length);
// })


// find()
// 1 задание
// const numbers = [5,10,30,];
// const evenNumbers = numbers.find(function(number){
//   return number > 10;
// });
// console.log(evenNumbers);

// 2 задание
// const fruits = ['apple',"cherry","banana"];
// const evenFruits = fruits.find(function(fruit){
//   return fruit.includes("a");
// })
// console.log(evenFruits);

// 3 задание
// const people = [
//   {name:"Masha",
// age:20},
// {name:"Sasha",
// age:40}
// ];
// const evenPeople = people.find(function(number){
//   return number.age > 30;
// });
// console.log(evenPeople);

// 4 задание 
// const numbers = [1,2,3,4,5,6,7,8];
// const evenNumbers = numbers.find(function(number){
//   return number % 2 === 0;
// })
// console.log(evenNumbers);

// 5 задание
// const fruits = ["cherry", "apple", "banana"];
// const evenFruits = fruits.find(function(number){
//   return number.startsWith('a');
// });
// console.log(evenFruits);