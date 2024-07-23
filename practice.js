class Book {
  constructor(title, author, pages, isRead) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.isRead = isRead;
  }
  info() {
    return `The book ${this.title} by ${this.author} has ${
      this.pages
    } pages, and this ${this.isRead ? "has been read" : "not read yet"}`;
  }
}

const TheBook = new Book("The Book", "Jalil", 2000, true);

console.log(TheBook.info());

// class myInfo {
//   constructor(name, age, country) {
//     this.name = name;
//     this.age = age;
//     this.country = country;
//   }
// }

// function myInfo(name, age, country) {
//   this.name = name;
//   this.age = age;
//   this.country = country;
// }

// myInfo.prototype.showMyInfo = function () {
//   return `My name is ${this.name}, i am ${this.age} years old, and i live in ${this.country}`;
// };

// const ali = new myInfo("Ali", 24, "Pakistan");

// console.log(ali.showMyInfo());

// console.log(Object.getPrototypeOf(ali) === myInfo.prototype);

// Define the constructor function
function myInfo(name, age, country) {
  this.name = name;
  this.age = age;
  this.country = country;
}

// Add a method to the prototype of myInfo
myInfo.prototype.showMyInfo = function () {
  return `My name is ${this.name}, I am ${this.age} years old, and I live in ${this.country}`;
};

// Create an instance of myInfo
const ali = new myInfo("Ali", 24, "Pakistan");

// Check the prototype of the instance
console.log(Object.getPrototypeOf(ali) === myInfo.prototype); // true

// Call the showMyInfo method
console.log(ali.showMyInfo()); // Output: My name is Ali, I am 24 years old, and I live in Pakistan
