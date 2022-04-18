const btn1 = document.querySelector(".btn1");
const btn2 = document.querySelector(".btn2");
const btn3 = document.querySelector(".btn3");
const btn45 = document.querySelectorAll(".btn45");
const btn6 = document.querySelector(".btn6");
const btn7 = document.querySelector(".btn7");
const btn8 = document.querySelector(".btn8");
const btn9 = document.querySelector(".btn9");
const btn10 = document.querySelector(".btn10");

const testFourFive = () => {
	console.log("ForEach na przycisk 4 i 5");
};
const test = () => {
	console.log("double click");
};
const six = () => {
	console.log(`Pączek: 🍩 i czekolada: 🍫`);
};
const seven = () => {
	console.log(`Wcisnąłeś klawisz na klawiaturze😂🤣😂`);
};
const eight = (e) => {
	console.log(e.target);
};
const nine = (e) => {
	console.log(e.target.classList);
};
const ten = (e) => {
	console.log(e.target.offsetTop);
};
btn1.addEventListener("click", function () {
	console.log(`Kliknięto mnie`);
});

btn2.addEventListener("mouseover", () => console.log(`Najechano na mnie`));

btn3.addEventListener("dblclick", test);

btn45.forEach((x) => x.addEventListener("click", testFourFive));

btn6.addEventListener("mouseleave", six);

btn7.addEventListener("keydown", seven);

btn8.addEventListener("click", eight);

btn9.addEventListener("click", nine);

btn10.addEventListener("click", ten);
