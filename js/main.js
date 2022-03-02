// let $title = $("h1");
// let welcome = $(".welcome");
// let titleById = $("#title");
// let inp = $("[inp-name]");
// ! добавляем стили
// $title.css('color', 'red')
// welcome.css('background-color', 'blue')

// ! добавляем тег: изменяет полностью содержимое body
// $("body").html("<h1>Hello Makers</h1>");
// $("body").after('<div class = "container"></div>');

// ! копирование элементов
// let clonedElem = $("body").clone();
// console.log(clonedElem);
// clonedElem[0].children[0].innerText = "Modified";
// $(".container").append(clonedElem);
// console.log(clonedElem);
// welcome.addClass("example1"); //!добавляет класс
// console.log(welcome.hasClass("welcome"));//!проверяет на наличие класса
// welcome.removeClass("example1"); //!удаляет класс

//!добавляет в конец текста
// titleById.append(" world");
//! добавляет в начало текста
// titleById.prepend("Hello ");

// $title.prependTo(titleById);
//! добавляет в начало блока
// $(".center").before('<h3 class="new">New Element</h3>');
//!добавляет в конец блока
// $(".center").after('<h3 class="new">New Element</h3>');

// let result = confirm('Are you 18 y.o.?')
// if(result){
//         $('h1').css('display', 'block')
// }

// $('p').empty() //! просто опустошает
// $('p').remove() //! удаляет полностью вместе с тегом

// ? calculator
// function sum() {
//   let num1 = +prompt("Enter first number");
//   let num2 = +prompt(" Enter second number");
//   let result = num1 + num2;
//   $("body").html(`<h1>${result}</h1>`);
// }

// function sub() {
//   let num1 = +prompt("Enter first number");
//   let num2 = +prompt(" Enter second number");
//   let result = num1 - num2;
//   $("body").html(`<h1>${result}</h1>`);
// }

// function mul() {
//   let num1 = +prompt("Enter first number");
//   let num2 = +prompt(" Enter second number");
//   let result = num1 * num2;
//   $("body").html(`<h1>${result}</h1>`);
// }

// function div() {
//   let num1 = +prompt("Enter first number");
//   let num2 = +prompt(" Enter second number");
//   let result = num1 / num2;
//   $("body").html(`<h1>${result}</h1>`);
// }

// ? class work
// Задание №1
// 	Всем <h3> поставьте текст '!!!'.
// let titles = $("h3");
// for (let i of titles) {
//   i.innerText = "!!!";
// }

// Задание №2
// 	Всем <h3> сделайте текст зеленого цвета.
// let titles = $("h3");
// for (let i of titles) {
//   i.innerText = "!!!";
//   titles.css("color", "green");
// }

// Задание №3
// 	Создайте маркированный список,
// При помощи цикла добавьте в маркированный
// список 30 li - элементов с текстом:
// “1 - овечка”, “2 - овечка”,
// “3 - овечка”,
// и так до “30-овечка”;
// let list = $("ul");
// for (i = 1; i <= 30; i++) {
//   list.append(`<li>${i} - овечка </li>`);
// }
// console.log(body);

// Задание №4
// 	В css создайте класс .active в
// котором пропишите цвет текста blue.
// Добавьте всем span элементам класс active.
// let spans = $("span");
// spans.addClass("active");
// Задание №5
// Сделайте калькулятор на jQuery

// function sum() {
//   let num1 = +prompt("Enter a first number");
//   let num2 = +prompt("Enter a second number");
//   let result = num1 + num2;
//   $("body").html(`<h1>${result}</h1>`);
// }

// function sub() {
//   let num1 = +prompt("Enter a first number");
//   let num2 = +prompt("Enter a second number");
//   let result = num1 - num2;
//   $("body").html(`<h1>${result}</h1>`);
// }

// function mul() {
//   let num1 = +prompt("Enter a first number");
//   let num2 = +prompt("Enter a second number");
//   let result = num1 * num2;
//   $("body").html(`<h1>${result}</h1>`);
// }

// function div() {
//   let num1 = +prompt("Enter a first number");
//   let num2 = +prompt("Enter a second number");
//   let result = num1 / num2;
//   $("body").html(`<h1>${result}</h1>`);
// }
// ---------------------------------------------------------
// ? practice
// ? селекторы Jquary
let title = $("#elemById");
console.log(title);
// ? селектор по классу
let elemsByClassName = $(".list");
console.log(elemsByClassName);
// ? селектор по тегу
let elemsByTagName = $("li");
console.log(elemsByTagName);
// ? селектор по атрибуту
// let elem = $('[name="value"]')

// console.log(typeof title);

title.css("color", "violet");

// elemsByTagName.text('1')
// for(let i=0; i<elemsByTagName.length; i++){
//   elemsByTagName[i].innerText = `item ${i + 1}`
// }

elemsByTagName.each((index, item) => {
  console.log(item);
  item.innerText = `item ${index + 1}`;
});
title.addClass("addedClass");
console.log(title.hasClass("addedClass"));
title.toggleClass("addedClass");

console.log(getComputedStyle(title[0]).color);
console.log(title.width());
console.log(title.height());

let inp = $("input");
// inp.val('hello')
inp.attr("value", "changed value!");
inp.attr("disabled", "true");

let img = $("img");
img.hide();
img.show();
img.toggle();
img.toggle();

// img.fadeOut("slow");
// img.fadeIn("slow");
// img.slideUp(1000);
// img.slideDown(1000);

// setTimeout(() => {
//   console.log("Hello setTimeOut");
// }, 2000);
// setInterval(()=>{
//   console.log("Hello setInterval");

// }, 1000)

// setTimeout(() => {
//   img.css("transition", "all 3s ease");
//   img.css("opacity", "0%");
// }, 1000);

// setInterval(() => {
//   img.css("transition", "all 3s ease");
//   img.css("opacity", "100%");
// }, 3000);
// ? clone
// let cloned = title.clone()
// $('body').append(cloned)

// title.text("text");
// for (let i = 1; i < 5; i++) {
//   let cloned = title.clone();
//   $("body").append(cloned);
// }

// задание: отобразить карточки студентов, в которых будут выведены имена и kpi, у студентов с kpi больше 50 задний фон карточек зеленого цвета, у студентов с kpi меньше 50 задний фон карточек красного цвета
// решение
let students = [
  {
    name: "Kate",
    kpi: "100",
  },
  {
    name: "Marina",
    kpi: "100",
  },
  {
    name: "Alina",
    kpi: "10",
  },
  {
    name: "Dan",
    kpi: "100",
  },
  {
    name: "Jonh",
    kpi: "100",
  },
  {
    name: "Mark",
    kpi: "10",
  },
  {
    name: "Boris",
    kpi: "10",
  },
];

let div = $(".container");
for (let elem of students) {
  if (elem.kpi > 50) {
    container.append(
      `<div class="green"><span>${elem.name}</span><span>${elem.kpi}</span></div>`
    );
  } else if (elem.kpi < 50) {
    container.append(
      `<div class="red"><span>${elem.name}</span><span>${elem.kpi}</span></div>`
    );
  }
}

$(".green").css("background-color", "green");
$(".green").css("background-color", "red");
