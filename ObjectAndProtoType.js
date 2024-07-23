class Book {
  constructor(title, pages, author, isRead) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.isRead = isRead;
  }
  showBookInfo() {
    return `The book ${this.title} by ${this.author} has ${
      this.pages
    } pages, and i ${this.isRead ? "read it fully" : "did not read it yet"}`;
  }
}

const theBible = new Book("Bible", "ABCD", 256, false);

console.log(theBible.showBookInfo());

function mySelf(name, age, hobbies) {
  this.name = name;
  this.age = age;
  this.hobbies = hobbies;
}

mySelf.prototype.showMyInfo = function () {
  return `My Name is ${this.name}, i am ${this.age} years old, my hobbies are ${this.hobbies}`;
};

const NajeebBio = new mySelf("Najeeb", 34, ["Swimming", "HIcking", "Jogging"]);

console.log(NajeebBio.showMyInfo());
