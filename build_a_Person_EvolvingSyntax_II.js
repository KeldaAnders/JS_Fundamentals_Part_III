// Create a JavaScript object called person Cont.. EVOLVING SYNTAX
/*jshint esversion: 6 */
"use strict"
var NewPerson = class NewPerson {
    constructor(fname, spokenWords) {
        this.firstName = fname;
        this.spokenWords = spokenWords;
        this.distance_traveled = 0;
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
};


let person_A = new NewPerson('Kelda', 'I am cool');
let person_B = new NewPerson('Nancy', 'That was Fundamental');
let person_C = new NewPerson('Henrita', 'That was Soooooooooö Fundamental');

person_A.say_something().crawl().walk().run().statusUpdate();

person_B.say_something().crawl().walk().run().statusUpdate();

person_C.say_something().crawl().walk().run().statusUpdate();