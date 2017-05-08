console.log("hello main.js");

console.log("what is this?", this);

var world = "42"; //becomes window.world

function sky(){
	console.log("sky function");
	ocean();
}

function ocean(){
	console.log("ocean function");
	dirt();
}

function dirt(){
	console.log("dirt function");
	let world = "333";
	console.log("this", this); //what is execution context of this?
	console.log("this.world", this.world); // The original call site.
}

sky();

function makeSound(){
	console.log("this.sound", this.sound);
}

var chickenObject = {
	eggs: 6,
	sound: "cluck",
	makeSound: makeSound
}
var dogObject = {
	pups: 6,
	sound: "bark",
	makeSound: makeSound
}
//calling method (makeSound) on chickenObject, not the function makeSound.

chickenObject.makeSound(); // this.sound = cluck
makeSound(); //this.sound = undefined

dogObject.makeSound(); // this.sound = bark

//- - - - - - - - - -- - - - - - - - - - - - - - - - - -

function foo() {
	console.log("foo", this.a);
}

let object2 = {
	a: 42,
	foo: foo
};
let object1 = {
	a: 2,
	object2: object2
}

object1.object2.foo();
//execution callback is object2, so this.a = 42


function storm(){
	console.log("storm: this.temp", this.temp);
}

let weatherObject = {
	temp: 72,
	storm: storm
}
let bar = weatherObject.storm;
var temp = "global warming";

weatherObject.storm();
//also test
storm();

//--------------------------------------------

function foo5(){
	console.log("foo5", this.a);
}

function doFoo(fn) {
	fn();
}

var obj = {
	a: 2,
	foo5: foo5
}

var a = "oops, global";

doFoo(obj.foo5); // oops, global

obj.foo5(); // 2





