// let components = require('./components')
// let {
//   counter,
//   added,
//   pi
// } = require('./components')
// let greetings = require('./greetings')

// console.log(pi)

// console.log(components.counter(['tsuna', 'lambo', 'takeshi']))
// console.log(components.pi)
// console.log(components.adder(5, 20))

// console.log(counter(['tsuna', 'lambo', 'takeshi']))
// console.log(greetings('Mafioso Slime'))

// EVENT EMITTER

let events = require("events");

class Person extends events.EventEmitter {
  constructor(name) {
    super();
    this.name = name;
  }
}

let james = new Person("James");
let mary = new Person("Mary");
let ryu = new Person("Ryu");

let people = [james, mary, ryu];

people.forEach(person => {
  person.on("speak", function(mssg) {
    console.log(`${person.name} said ${mssg}`);
  });
});

james.emit("speak", "I quit my job today!");
mary.emit("speak", "Fancy you a mario game");
