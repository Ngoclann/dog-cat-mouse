var Dog = require('./Dog');
var Cat = require('./Cat');
var Mouse = require('./Mouse');

var dog = new Dog('Tom');
dog.sayHi();

var tom = new Cat();
dog.eat(tom);

var cat = new Cat();
var mouse = new Mouse('Mickey');

try {
	cat.eat(dog);
} catch (error) {
	console.log('Error while cat eating a dog');
}

console.log(cat);