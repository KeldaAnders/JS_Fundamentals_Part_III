// ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// // // Create a JavaScript object called person Cont.. JS Fundamentals Part III
var NewPerson = class NewPerson{
  constructor(fname,spokenWords ) {
  this.firstName = fname;
  this.spokenWords = spokenWords;
  this.distance_traveled= 0;
  return this;
}
  statusUpdate() {
      console.log(`${this.firstName} has a distance traveled of ${this.distance_traveled}`);
      return this;
  }
  say_something() {
      console.log(`${this.firstName} says: ${this.spokenWords}`);
      return this;
  }
  walk() {
      console.log(`${this.firstName} is walking!`);
  
      this.distance_traveled += 3;
      console.log(this.distance_traveled);
      return this;
  }
  run() {
      console.log(`${this.firstName} is running!`);
  
      this.distance_traveled += 10;
      console.log(this.distance_traveled);
      return this;
  }
  crawl() {
      console.log(`${this.firstName} is crawling!`);
  
      this.distance_traveled += 1;
      console.log(this.distance_traveled);
      return this;
  }
}


let person_A = new NewPerson('Kelda','I am cool');
let person_B = new NewPerson('Nancy','That was Fundamental');
let person_C = new NewPerson('Henrita','That was Soooooooooö Fundamental');

person_A.say_something().crawl().walk().run().statusUpdate();

person_B.say_something().crawl().walk().run().statusUpdate();

person_C.say_something().crawl().walk().run().statusUpdate();

// var person_A = NewPerson('Kelda','I am cool');
// var person_B = NewPerson('Nancy','That was Fundamental');
// var person_C = NewPerson('Henrita','That was Soooooooooö Fundamental');
// 
// function NewPerson(fname,spokenWords ) {
//     
//   var distance_traveled= 0;
//   var newPerson= {};
//   newPerson.statusUpdate = function() {
//       console.log(`${fname} has a distance traveled of ${distance_traveled}`);
//       return `${fname} has a distance traveled of ${distance_traveled}`;
//   };
//   newPerson.say_something= function() {
//       console.log(`${fname} says: ${spokenWords}`);
//       return `${fname} says: ${spokenWords}`
//   };
//   newPerson.walk= function() {
//       console.log(`${fname} is walking!`);
// 
//       distance_traveled += 3;
//       console.log(distance_traveled);
//       return `${fname} is walking!`
//   };
//   newPerson.run=function() {
//       console.log(`${fname} is running!`);
// 
//       distance_traveled += 10;
//       console.log(distance_traveled);
//       return `${fname} is running!`
//   };
//   newPerson.crawl=function() {
//       console.log(`${fname} is crawling!`);
// 
//       distance_traveled += 1;
//       console.log(distance_traveled);
//       return `${fname} is crawling!`
//   };
// 
//   return newPerson;
//   // say_something();
//   // walk();
//   // run();
//   // crawl();
//   // statusUpdate();
// }
// 
// // person_B.say_something().person_A.crawl().person_A.walk().person_A.run().person_A.statusUpdate();
// 
// 
// person_A.say_something();
// person_A.crawl();
// person_A.walk();
// person_A.run();
// person_A.statusUpdate();
// var ninja = {
//     name: 'Mrs. Anderson',
//     cohort: "MEAN JS",
//     ninjaConstructor: function() {
//         var beltRand = Math.floor(Math.random() * (3 - 1 + 1)) + 1;
//         var beltColor = 'yellow';
//         if (beltRand === 1) {
//             beltColor = "Yellow";
//         } else if (beltRand === 2) {
//             beltColor = "Fire Olpal";
//         } else if (beltRand === 3) {
//             beltColor = "Black Olpal";
//         }
// 
//         console.log(`${ninja.name} ${ninja.cohort} ${beltColor}`);
//     }
// };
// ninja.ninjaConstructor();
// 
// 
// 
// ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// // using "this" and "new" 
// 
// 
// function Person(firstName, lastName, distance_traveled) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.distance_traveled = distance_traveled;
// 
// }
// var personOne = new Person('Nelly', 'Walters', 0);
// var personTwo = new Person('Kelly', 'Larsen', 5);
// var personThree = new Person('Kelda', 'Anderson', 20);
// 
// Person.prototype.statusUpdate = function() {
// 
//     console.log(`${this.firstName} ${this.lastName} has a distance traveled of ${this.distance_traveled}`);
// 
//     return this;
// };
// 
// Person.prototype.say_something = function(spokenWords) {
//     console.log(`${this.firstName} says ${spokenWords}`);
//     return this;
// };
// 
// Person.prototype.walk = function() {
//     console.log(`${this.firstName} is walking`);
// 
//     this.distance_traveled += 3;
//     console.log(this.distance_traveled);
// 
//     return this;
// };
// 
// Person.prototype.run = function() {
//     console.log(`${this.firstName} is running`);
// 
//     this.distance_traveled += 10;
//     console.log(this.distance_traveled);
// 
//     return this;
// };
// Person.prototype.crawl = function() {
//     console.log(`${this.firstName} is crawling`);
// 
//     this.distance_traveled += 1;
//     console.log(this.distance_traveled);
// 
//     return this;
// };
// 
// personOne.say_something('I am cool').walk().run().crawl().statusUpdate();
// 
// personTwo.say_something('I am cooler').walk().run().crawl().statusUpdate();
// 
// personThree.say_something('I am cool').walk().run().crawl().statusUpdate();
// 
// 
// ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// 
// var ninjaConstructor = function (name, cohort) {
//     this.name = name;
//     this.cohort = cohort;
//     ninjaConstructor.prototype.levelUp = function() {
//         var beltRand = Math.floor(Math.random() * (3 - 1 + 1)) + 1;
//         console.log(beltRand);
//         var beltColor = 'yellow';
//         if (beltRand === 1) {
//           beltColor = "Yellow";
//         }else if (beltRand === 2) {
//           beltColor = "Fire Olpal";
//         }else if (beltRand === 3) {
//           beltColor = "Black Olpal";
//         }
// 
//         console.log(`${this.name}'s new level for ${this.cohort} is ${beltColor}`);
//     };
//     this.levelUp();
// };
// 
// var ninja_first = new ninjaConstructor('Mr. Lee', 'Python');
// var ninja_second = new ninjaConstructor('Mrs. Anderson', 'MEAN JS');
// 
