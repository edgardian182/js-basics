/* 
  1. Create class Media (title, isCheckedOut, ratings)
  2. Create it's getters
  3. toggleCheckOutStatus method
  4. addRating method
  5. getAverageRating method
  6. Book class that extends Media (author, pages)
  7. Create it's getters
  8. Movie class that extends Media (director, runTime)
  9. Create it's getters
  10. Test it creating a Book and a Movie, checking them out, add some ratings and find its average
  11. Print all to the console 
*/

class Media {
  constructor(title) {
    this._title = title;
    this._isCheckOut = false;
    this._ratings = []
  }

  get title() {
    return this._title;
  }

  get isCheckOut() {
    return this._isCheckOut
  }

  get ratings() {
    return this._ratings;
  }

  toggleCheckOutStatus() {
    this._isCheckOut = !this._isCheckOut
  }

  addRating(newRating) {
    this._ratings.push(newRating);
  }

  getAverageRating() {
    return (this._ratings.reduce((currentSum, rating) => currentSum + rating, 0) / this._ratings.length)
  }
}

// ----------------------------
class Book extends Media {
  constructor(title, author, pages) {
    super(title);
    this._author = author;
    this._pages = pages
  }

  get author() {
    return this._author;
  }

  get pages() {
    return this._pages;
  }
}

// ----------------------------
class Movie extends Media {
  constructor(title, director, runTime) {
    super(title);
    this._director = director;
    this._runTime = runTime;
  }

  get director() {
    return this._director;
  }

  get runTime() {
    return this._runTime;
  }
}
 

const gods_punch = new Book("God's Punch", "Frederick Forsyth", 638);

const matrix = new Movie('Matrix', 'Lana Wachowski & Lilly Wachowski', 150);

gods_punch.toggleCheckOutStatus();
matrix.toggleCheckOutStatus();

gods_punch.addRating(7);
gods_punch.addRating(5);
gods_punch.addRating(8);
gods_punch.addRating(3);

matrix.addRating(9);
matrix.addRating(10);
matrix.addRating(7);
matrix.addRating(8.5);

console.log(`${gods_punch.title} (${gods_punch.constructor.name}) average rating is: ${gods_punch.getAverageRating().toFixed(2)}`);
console.log(`${matrix.title} (${matrix.constructor.name}) average rating is: ${matrix.getAverageRating().toFixed(2)}`);