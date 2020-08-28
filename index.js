/*
TASK 1 🚀
// in your own words explain what a closure is below in comments and then write an example of a closure. Try to make this explaination simple enough to explain to a younger sibling. */

//* closure is when a function has to reach outside it own scope into a parent's to get a value for a variable...my youngest sister is 28 and i think she'd get it


//   function calculator(num1, num2, callback){
//     return callback(num1, num2)
//   }
//  //* Callbacks
//   const add = (num1, num2) => num1 + num2;
//   const subtract = (num1, num2) => num1 - num2;
//   const multiply = (num1, num2) => num1 * num2;
//   const divide = (num1, num2) => num1 / num2;


/*
TASK 2 🚀
// look at the code below and explain in your own words where the variable 'count' is available.
// Explain why 'count' is initialized with a let and not a var or const.
// Explain how initalizing the variable 'count' with a var would change it's scope

//* count is only available inside the counterMaker function, this why it's initialized with a let, a var initilizer would make it's scope global which is not what we want to do.

*/
function counterMaker() {
    let count = 0;
    return function counter() {
     return count++;
    }
  }






/*
TASK 3 🚀
* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1.  in the global scope, 'this' refers to the window, or in other words the whole enviornment
* 2.  in a typical method call, 'this' refers to the object using the method, located to the left of the dot like this -> object.method(arg))
* 3.  in a constructor function it's the new object
* 4.  in a .call or .apply method call it's always the first argument passed
*
* write out a code example of each explanation above
*/

// Principle 1

const myFunction = function() {
  console.log("Window Bound")
  console.log(this)
};

// myFunction()

// Principle 2

const myObject = {
  prop1: "value",
  prop2: true,
  prop3: 42,
  prop4: function(){
    console.log("Object Bound")
    console.log(this)
  }
}

// myObject.prop4()

// Principle 3

function myConstructor(arg1, arg2, arg3) {
  this.arg1 = arg1;
  this.arg2 = arg2;
  this.arg3 = arg3;
  this.action = function() {
    console.log("New Bound")
    console.log(this)
  }
}

// const myThing = new myConstructor(1, 2, 3);

// myThing.action()

// Principle 4

const dog = {
  says: "woof",
  speak: function() {
    console.log(this.says)
    console.log("Explicitly Bound")
    console.log(this)
  }
}
const cat = {
  says: "meow"
}
// dog.speak();
// dog.speak.call(cat);





/*
TASK 4 🚀
/*
  Object oriented design is commonly used in video games.  For this part of the assignment you will be implementing several constructor functions with their correct inheritance hierarchy.
  In this file you will be creating three constructor functions: GameObject, CharacterStats, Humanoid.
  At the bottom of this file are 3 objects that all end up inheriting from Humanoid.  Use the objects at the bottom of the page to test your constructor functions.

  Each constructor function has unique properties and methods that are defined in their block comments below:
*/

/*
  === GameObject ===
  * createdAt
  * name
  * dimensions (These represent the character's size in the video game)
  * destroy() // prototype method that returns: `${this.name} was removed from the game.`
*/

function GameObject(createdAt, name, dimensions) {
  this.createdAt = createdAt;
  this.name = name;
  this.dimensions = dimensions;
}
GameObject.prototype.destroy = function() {
  return `${this.name} was removed from the game.`
}


/*
  === CharacterStats ===
  * healthPoints
  * takeDamage() // prototype method -> returns the string '<object name> took damage.'
  * should inherit destroy() from GameObject's prototype
*/

function CharacterStats(healthPoints) {
  GameObject.call (this, createdAt, name, dimensions);
  this.healthPoints = healthPoints
};
CharacterStats.prototype = Object.create(GameObject.prototype);
CharacterStats.prototype.takeDamage = function() {
  return (`${name} took damage.`)
};


/*
  === Humanoid (Having an appearance or character resembling that of a human.) ===
  * team
  * weapons
  * language
  * greet() // prototype method -> returns the string '<object name> offers a greeting in <object language>.'
  * should inherit destroy() from GameObject through CharacterStats
  * should inherit takeDamage() from CharacterStats
*/

function Humanoid (team, weapons, language) {
  GameObject.call (this, createdAt, name, dimensions);
  CharacterStats.call(healthPoints);

  this.team = team;
  this.weapons = weapons;
  this.language = language;
};
Humanoid.prototype = Object.create(CharacterStats.prototype);
Humanoid.prototype.greet = function() {
  return (`${name} offers a greeting in ${language}`)
};

/*
  * Inheritance chain: GameObject -> CharacterStats -> Humanoid
  * Instances of Humanoid should have all of the same properties as CharacterStats and GameObject.
  * Instances of CharacterStats should have all of the same properties as GameObject.
*/

// Test you work by un-commenting these 3 objects and the list of console logs below:


  const mage = new Humanoid({
    createdAt: new Date(),
    dimensions: {
      length: 2,
      width: 1,
      height: 1,
    },
    healthPoints: 5,
    name: 'Bruce',
    team: 'Mage Guild',
    weapons: [
      'Staff of Shamalama',
    ],
    language: 'Common Tongue',
  });
  const swordsman = new Humanoid({
    createdAt: new Date(),
    dimensions: {
      length: 2,
      width: 2,
      height: 2,
    },
    healthPoints: 15,
    name: 'Sir Mustachio',
    team: 'The Round Table',
    weapons: [
      'Giant Sword',
      'Shield',
    ],
    language: 'Common Tongue',
  });
  const archer = new Humanoid({
    createdAt: new Date(),
    dimensions: {
      length: 1,
      width: 2,
      height: 4,
    },
    healthPoints: 10,
    name: 'Lilith',
    team: 'Forest Kingdom',
    weapons: [
      'Bow',
      'Dagger',
    ],
    language: 'Elvish',
  });
  console.log(mage.createdAt); // Today's date
  console.log(archer.dimensions); // { length: 1, width: 2, height: 4 }
  console.log(swordsman.healthPoints); // 15
  console.log(mage.name); // Bruce
  console.log(swordsman.team); // The Round Table
  console.log(mage.weapons); // Staff of Shamalama
  console.log(archer.language); // Elvish
  console.log(archer.greet()); // Lilith offers a greeting in Elvish.
  console.log(mage.takeDamage()); // Bruce took damage.
  console.log(swordsman.destroy()); // Sir Mustachio was removed from the game.







/*
TASK 5 🚀
// convert the constructor functions above to class syntax copy and paste the objects and console logs below the class syntax to test if your code is working
 */
