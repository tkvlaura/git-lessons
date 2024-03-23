// const myEvent = new Event("myEvent");
// document.addEventListener("myEvent", () => {
//   console.log("Событие myEvent произошло");
// } );
// document.dispatchEvent(myEvent);




// Click
// 1

// const myButton = document.getElementById("myButton");
// myButton.addEventListener("click", () => {
//   console.log("Кнопка была нажата!");
// })


// DoubleClick
// 1 задание
// const myButton = document.getElementById("myButton");
//  myButton.addEventListener("dblclick", () => {
//   document.getElementById("myButton").style.backgroundColor = "green";
//  });


//  2 задание
//  const myButton = document.getElementById("myButton");
//  myButton.addEventListener("dblclick", () => {
//  console.log("Кнопка была нажата 2 раза!");
//  })

// 3 задание
// const table = document.getElementById("myTable");
// const cells = table.getElementsByTagName("td");

// for (var i = 0; i < cells.length; i++) {
//   cells[i].addEventListener("dblclick", function() {
//       this.innerHTML = "Double clicked!";
//   });
// }

// 4 задание
// const imageList = document.querySelectorAll('#imageList img');
  
//   imageList.forEach(image => {
//     image.addEventListener('dblclick', () => {
//       console.log(image.alt);
//     });
//   });


// 5 задание
// const myText = document.getElementById("myText");
// myText.addEventListener("dblclick", () =>{
//   myText.textContent = "Текст изменился!";
// } );

// keyDown
// 1 задание
// document.addEventListener("keydown", (event)=> {
//   console.log("Вы нажали кнопку:" + event.key);
// });

// 2 задание
// document.addEventListener('keydown', (event) => {
// if (event.keyCode === 13) {
// let userInput = prompt("Введите строку:");
// console.log("Введенная строка:", userInput);
//  }
// });


// 1 задание
// document.addEventListener("keyup", (event)=> {
//    console.log("Вы отпустили кнопку:" + event.key);
//  });
