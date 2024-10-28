/* 
function sum(num1, num2) {
    return num1 + num2
}
*/
const sum = (num1, num2) => num1 + num2;

/*function stringLength(str){
 console.log(`the length of "${str}" is:`, str.length)
}
*/
const stringLength = (str) => { return "El tamaño de tu cadena es: " + str.length }

/*function stringLength(str){
 let length = str.length
 console.log(`the length of "${str}" is:`, length)
 return str.length
}*/
const stringLength2 = (str) => {
    let length = str.length
    return "El tamaño de tu cadena es: " + length
}

/*
function showAlert(name){
 alert(alerts[(Math.floor(Math.random()*alerts.length))] + `, ${name}!`)
}
*/
let alerts = ["Hey, you are awesome", "You are so wonderful", "What a marvelyou are", "You're so lovely", "You're so sweet that I'd think you're a sweetpotato -- and I LOOOOVE POTATOES"]
const showAlert = (name) => {
    alert(alerts[Math.floor(Math.random() * alerts.length)] + ", " + name + "!")
}

/* 2.Write an arrow function that returns the string, Hello, I am ${name}, and I am ${age} years old. */
const name_age = (name, age) => {
    return "Hello, I am " + name + ", and I am " + age + " years old."
}

/*3. Write an arrow function that takes an array of integers, and returns the sum of
the elements in the array. Google and use the built-in reduce array method for this. */

const sumArray = (arr) => {
    return arr.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
};

/*4. The syntax of this function is wonky. Can you fix it to use the shortest arrow
function possible?
let eye = "eye";
const fire =
(
) =
>
{
return `bulls-`;
}
*/
let eye = "eye";
const fire = () => "bulls-";

/*9. Refactor the following ES5 function to use an arrow function:
const fibonacci = function(n) {
if (n < 3) return 1;
return fibonacci(n
-
1)
+ fibonacci(n
-
2
)
;
}*/
const fibonacci = (n) => { if (n < 3) return 1; return fibonacci(n - 1) + fibonacci(n - 2); };



