// const name = ["John", "Jane", "Mary", "Mark", "Bob"];
// const score = [90, 85, 67, 45, 80];
// const number = [6, 3, 21, 52, 1, 31];

// console.log(name[3]);
// name.push("Tom");
// name.pop();
// name.unshift("John");
// name.shift();
// name[2] = "Tom";
// name.splice(2, 2);/

// console.log(name.reverse());
// console.log(name.sort());
// console.log(score.sort());
// console.log(number.sort());

// const newArray = name.concat(score);
// const newArray = name.concat(score, number);
// const newArray = [...name, ...score, ...number];
// console.log(newArray);
// const names = [
//     ["John", "Jane"],
//     ["Tom", "Bob", "Mark"],
// ];
// const newNames = [...names[0], ...names[1]];
// const sortedName = newNames.sort();
// const str = `hello ${sortedName[3]}`;
// console.log(str);

// const userData = {
//     name: "John",
//     lastName: "dove",
//     age: 30,
//     siblings: ["Jane", "Mary", "Mark"],
//     marks: {
//         maths: 90,
//         english: 85,
//     },
// };

// const userName = {
//     first: "John",
//     second: "Moe",
// };
// console.log(userData.name);
// console.log(userData["marks"]["maths"]);
// userData.career = "developer";
// delete userData.career;
// console.log(userData);

// const newObject = { ...userData, ...userName };
// console.log(newObject);

// const data = {
//     id: 1,
//     name: "John",
//     userName: "johndoe",
//     email: "sincer@.biz.com",
//     address: {
//         street: "Main",
//         suite: "23",
//         city: "New York",
//         zipcode: "10001",
//         geo: {
//             lat: "40.7128",
//             lng: "-74.0060",
//         },
//     },
// };

// const keys = Object.keys(data);
// console.log(keys);
// const values = Object.values(data);
// console.log(values);

// const str = `${data.name} lives on ${data.address.street} street in ${data.address.city} city`;
// console.log(str);

// const {
//     name,
//     email,
//     address: {
//         street,
//         city,
//         geo: { lat },
//     },
// } = data;
// console.log(
//     `hi my name is ${name}, I live on ${street} street in ${city} city, lat: ${lat}`
// );

// const names = ["Mary", "Mark", "Bob"];
// const [name1, , name3] = names;
// console.log(name3);

// const number = {
//     a: 1,
//     b: 2,
// };
// const str = String(number);
// console.log(str);

// const value = "56.98";
// const newValue = parseFloat(value); // reshte ra tabdil be adad mikonad va ghesmat ashari ra negah midard
// const newValiue = parseInt(value) //reshte ra tabdil be adad sahih mikonad
// console.log(newValue);

// const value = 56.76;
// const newValue = value.toFixed(1); // add ra migirad tabdil be reshte mikonad va vorudi an tedad ragham ashari ast
//

// const data = [
//     {
//         postId: 1,
//         id: 1,
//         name: "id labore ex et quam laborum",
//         email: "Eliseo@gardner.biz",
//         body: "laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium",
//     },
//     {
//         postId: 1,
//         id: 2,
//         name: "quo vero reiciendis velit similique earum",
//         email: "Jayne_Kuhic@sydney.com",
//         body: "est natus enim nihil est dolore omnis voluptatem numquam\net omnis occaecati quod ullam at\nvoluptatem error expedita pariatur\nnihil sint nostrum voluptatem reiciendis et",
//     },
//     {
//         postId: 1,
//         id: 3,
//         name: "odio adipisci rerum aut animi",
//         email: "Nikita@garfield.biz",
//         body: "quia molestiae reprehenderit quasi aspernatur\naut expedita occaecati aliquam eveniet laudantium\nomnis quibusdam delectus saepe quia accusamus maiores nam est\ncum et ducimus et vero voluptates excepturi deleniti ratione",
//     },
// ];

// const [, , user3] = data;
// const { name, email, id } = user3;
// const splited = name.split(" ");
// const string = `Hi ${splited[0]} your emai is ${email}`;
// console.log(string);

// const result = confirm("Are you sure?");
// result ? console.log("yes") : console.log("no");

// const choices = ["rock", "paper", "scissors"];
// const userChoice = prompt("choose paper, rock or sissors");
// if (userChoice) {
//     console.log(`you choosed ${userChoice}`);
// } else {
//     console.log("you didn't choose anything");
// }

// const randomNumber = Math.floor(Math.random() * 3);
// const computerChoice = choices[randomNumber];

// console.log(`computer choosed ${computerChoice}`);

// if (userChoice === computerChoice) {
//     console.log("draw");
// } else if (userChoice === "rock" && computerChoice === "scissors") {
//     console.log("you win");
// } else if (userChoice === "paper" && computerChoice === "rock") {
//     console.log("you win");
// } else if (userChoice === "scissors" && computerChoice === "paper") {
//     console.log("you win");
// } else {
//     console.log("you lose");
// }

// const contact = [
//     "david-8053248812",
//     "mina-3154569812",
//     "jack-7348766598",
//     "john-8456789123",
// ];
// const searchName = prompt("enter your name");

// for (let i = 0; i < contact.length; i++) {
//     let splitedContact = contact[i].split("-");
//     if (splitedContact[0] === searchName) {
//         console.log(`number of ${splitedContact[0]} is ${splitedContact[1]}`);
//         break;
//     } else {
//         console.log("user not found");
//     }
// }

// let number = prompt("enter a number");
// for (let i = 0; i < number; i++) {
//     let root = Math.sqrt(i);
//     if (Math.floor(root) === root) {
//         console.log(root);
//     }
// }

// let number = prompt("entre a number");
// for (let i = 1; i < number; i++) {
//     let root = Math.sqrt(i);
//     if (Math.floor(root) !== root) {
//         continue;
//     }
//     console.log(i);
// }

//IIFE imidiatly invoked function expression:
// (function khar(name) {
//     console.log(`hi ${name}`);
// })("mia");

// const marks = [9, 0, 14, 8, 18, 3, 16];

// const average = (numbers) => {
//     let sum = 0;
//     for (let i = 0; i < numbers.length; i++) {
//         sum += numbers[i];
//     }
//     let average = sum / numbers.length;
//     let roundedAve = average.toFixed(2);
//     if (average > 10) {
//         console.log(`you passed and your ave is : ${roundedAve}`);
//     } else {
//         console.log("you failed");
//     }
// };

// average(marks);

// for - of ---> it's used for array

// const data = [1, 2, 3, 4, 5];
// for (let item of data) {
//     console.log(item);
// }

// const userData = {
//     name: "jfgfg",
//     career: "programmer",
//     age: 30,
// };

// const keys = Object.keys(userData);
// console.log(keys);

// for (let i = 0; i < keys.length; i++) {
//     console.log(userData[keys[i]]);
// }

//for - in -----> it's used for object

// for (let key in userData) {
//     console.log(userData[key]);
// }

// map - foreach =======> baray loop zadan rooye araye

// const names = ["tina", "carry", "mike"];

// foreach ====> arraye ra mutate mikonad
// names.forEach((item, index) => {
//     names[index] = item.toUpperCase();
// });
// console.log(names);

// map ===> natijeh ra dar arye jadid mirizad
// const newNames = names.map((item) => item.toUpperCase());
// console.log(newNames);

// filter ====> araye jadid retuen mikone

// const numbers = [2, 7, 54, 12, 6, 9, 19, 61, 10];
// const n = numbers.filter((number) => number >= 10);
// console.log(n);

// find ====> find faghat ye natijeh be mideh avalin chizi ra ke peyda mikone barmigardoone

// const f = numbers.find((number) => number % 2 === 0);
// console.log(f);
//reduce

// const result = numbers.reduce((acc, curr) => acc + curr, 0);
// console.log(result);

// const userData = [
//     { name: "mila", marks: [10, 9, 17, 15, 18] },
//     { name: "david", marks: [6, 13, 2, 16, 8] },
//     { name: "john", marks: [9, 7, 14, 11, 18] },
//     { name: "mary", marks: [11, 4, 12, 6, 10] },
//     { name: "jane", marks: [19, 12, 20, 18, 14] },
//     { name: "joe", marks: [16, 13, 2, 19, 5] },
//     { name: "jill", marks: [19, 4, 13, 15, 0] },
// ];

// const newUserData = userData.map((item) => {
//     const { marks } = item;
//     const sum = marks.reduce((acc, curr) => acc + curr, 0);
//     const ave = sum / marks.length;
//     console.log(`${item.name} gpa is ${ave}`);
//     item.gpa = ave;
//     return item;
// });

// console.log(newUserData);
// console.log(userData);
// const passed = userData.filter((item) => item.gpa >= 10);
// console.log(passed);

// console.log(userData)

//--------------------------------------------------------------------------------

// BOM ====> Browser Object Model
// window

// console.log(window.innerHeight);
// console.log(window.outerHeight);
// console.log(window.innerWidth);
// console.log(window.outerWidth);

// window.open("https://google.com");

// console.log(window);
// console.log(screen);
// console.log(window.screen.width); // or:
// console.log(screen.width);
// console.log(window.screen.height);
// console.log(window.location);
// console.log(window.location.href);
// location.href = "https://yahoo.com";

// console.log(window.history.length);
// history.forward();

// console.log(navigator);
// --------------------------------------------------------------

// DOM =====> document object model

//single Selector

// const header = document.getElementById("header");
// const header = document.getElementsByClassName("header");

// const header = document.querySelector("#header");
// console.log(header);

// ...................................
// Multi selector

// const ele = document.getElementsByClassName("text");
// const ele = document.getElementsByTagName("h1");
// const ele = document.querySelectorAll(".text");

// console.log(ele);

// --------------------------------------------------------------------

// const anchore = document.getElementById("anchore");
// anchore.style.display = "none";

// console.log(anchore.innerHTML);
// anchore.href = "https://google.com";

// const paragraph = document.getElementsByClassName("para");
// console.log(paragraph[0].className);
// console.log(paragraph[0].innerText); // innerText faghat matn ra migirad
// console.log(paragraph[0].innerHTML); // vali innerHTML tag ha ham migire

// paragraph[0].innerText = "hfsweaj"; //faghat matn ra taghir midahad
// paragraph[0].innerHTML = "<span>khar</span>"; // tag ham taghir mideh
// const h = document.querySelector("h1");
// const h = document.getElementsByTagName("h1");
// console.log(h);
// h[0].style.color = "red";
// h[0].style.background = "silver";
// h[0].style.fontSize = "50px";
//  ----------------------------------------------------------

// child and parent

// const tag = document.querySelector(".container");
// console.log(tag.children);
// console.log(tag.nextElementSibling);

// const ul = document.querySelector("ul");
// console.log(ul.children);
// console.log(ul.firstElementChild);
// console.log(ul.lastElementChild);
// console.log(ul.previousElementSibling);
// console.log(ul.parentElement);
//  ------------------------------------------------

// add and delete element

// const element = document.createElement("a");
// const container = document.querySelector(".container");

// element.id = "anchore2";
// element.className = "class1 class2";
// // element.href = "https://google.com";
// element.setAttribute("href", "https://google.com");
// element.setAttribute("target", "_blank");
// element.innerText = "go to google";
// element.style.color = "violet";
// const a = document.getElementById("anchore");
// a.remove();

// console.log(element);

// container.appendChild(element);

// ==============================================================

// const userData = [
//     { name: "Tifany", career: "designer" },
//     { name: "dan", career: "teacher" },
//     { name: "alex", career: "developer" },
//     { name: "mike", career: "plumber" },
// ];
// const container = document.querySelector(".container");

// const ul = document.createElement("ul");

// for (let item of userData) {
//     const li = document.createElement("li");
//     li.innerHTML = `${item.name} is a ${item.career}`;
//     ul.appendChild(li);
// }

// userData.forEach((item) => {
//     const li = document.createElement("li");
//     li.innerHTML = `${item.name} is ${item.career}`;
//     ul.appendChild(li);
// });

// container.appendChild(ul);

// console.log(ul);

//----------------------------------------------------

//event

// const button = document.querySelector("button");
// button.addEventListener("click", () => console.log("click"));

// const buttons = document.querySelectorAll("button");
// console.log(buttons);

// const clickHandler = (event) => {
//     console.log(event.target.id);
//     event.target.style.color = "red";
// };
// buttons.forEach((item) => {
//     item.addEventListener("click", clickHandler);
// });

// const a = document.querySelector("a");
// a.addEventListener("click", (event) => {
//     event.preventDefault();
//     console.log(event.target);
// });

// const btn = document.querySelector("#btn");
// console.log(btn);
// btn.addEventListener("mousemove", () => console.log("click"));

const field = document.getElementById("input");
field.addEventListener("keydown", (e) => {
    // console.log("happ");
    console.log(e.key);
    document.querySelector("p").innerText = e.target.value;
});
