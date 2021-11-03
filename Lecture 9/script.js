// 1

function A(name)
{
    this.name = name;
}

function B(name)
{
    this.name = name;
}

let a = new A("Вася");
let b = new B("Вася");

console.log( a == b ); //false

let obj = {
    name: "Вася"
}

function C()
{
    return obj;
}

function D()
{
    return obj;
}

let c = new C;
let d = new D;

console.log( c == d ); //true

console.log("=====");

// 2

function Calc()
{
    let a;
    let b;

    this.read = function() {
        this.a = Number(prompt("a", 0));
        this.b = Number(prompt("b", 0));
    }

    this.sum = function() {
        return this.a + this.b;
    };

    this.mul = function() {
        return this.a * this.b;
    };
}

let calc = new Calc();

calc.read();

console.log("SUM of " + calc.a + " and " + calc.b + " = " + calc.sum());
console.log("MUL of " + calc.a + " and " + calc.b + " = " + calc.mul());

console.log("=====");

//3

function MyNumber(startingValue){
    this.value = startingValue;

    this.read = function() {
        this.value += Number(prompt("Add Value", 0));
    }
}

let number = new MyNumber(18);

console.log("Starting Value = " + number.value);

number.read();

console.log("New Vaue = " + number.value);