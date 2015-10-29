/* Create a `myName` variable and assign it a String value */

var myName = "Theo Tran";


/* Create a `person` variable and give it 2 properties,
 * `name`, assign it the same name as before,
 * as well as an `age` (number);
 */
 var person = {
 	name: "Theo Tran",
 	age: 24,
 };

/* Create a function called `greet`,
 * it should take a 1 parameter, `name`
 * and it should print "Hello, my name is {name}"
 */
 function greet (name) {
 	console.log( "Hello, my name is " + name);
 }
 greet(person.name);

/* Create a variable called `canDrive`,
 * if it should be true if your person object is at least 16 years old
 */
 

 function canDrive (age) {
 	if (age >= 16) {
 		return true;
 	} else {
 		return false;
 	}
 }
var canDrive = canDrive(person.age);

/* Create an array called `dataTypes` with atleast 1 of every data type;
 * (there are 6 different data types);
 */
 var undef = '';
 var dataTypes = [true, null, undef,  "I am a string", *, dog{}];

/* Create a Dog object
 * it should have a `bark` function that makes your dog bark!
 * It should also have a name attribute with the value of 'Spot'
 */


var dog = {
 	name: 'Spot',
 	type: "German Shepherd",
 	color: "Brown",
 	age: 2,
 	bark: bark,

};


function bark (call) {
	
		console.log("ruff ruff!!!");
	
}

console.log(bark(dog.name));






