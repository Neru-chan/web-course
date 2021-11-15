console.log("1.");
function readNumber()
{
    let n;
    do {
        n = prompt("Enter Number");
        if (n === null) return null;
    } while (isNaN(n));
    return +n;
}
let n = readNumber();
console.log("You entered: " + n);
console.log("Type: " + typeof(n));





console.log("\n2.");
function random(min, max)
{
    return (Math.random() * (max - min) + min);
}
let min = +prompt("Enter min");
let max = +prompt("Enter max");
console.log(`Random number = ${random(min, max)}`);





console.log("\n3.");
let a = readNumber();
let b = readNumber();
console.log(`SUM of ${a} and ${b} = ${a + b}`);





console.log("\n4.");
let array=[ 
" Спочатку JavaScript був створений, щоб зробити веб-сторінки живими ", 
" Різні двигуни мають різні «кодові імена».",
" Коли JavaScript створювався, він мав інше ім'я – «LiveScript» ",
" Повна інтеграція з HTML/CSS "
]

for (i in array){
    if (array[i].indexOf("JavaScript") != -1) console.log(array[i]);
}






console.log("\n5.");
function toTitleCase(str)
{
    return str[0].toUpperCase() + str.slice(1).toLowerCase();
}

let str = "rOmA";

console.log(toTitleCase("jAvAsCrIpT"));