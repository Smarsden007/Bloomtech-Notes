class Media {
    constructor(title) {
      this._title = title;
      this._isCheckedOut = false;
      this._ratings = [];
    }
  
    get title() {
      return this._title;
    }
    get isCheckedOut() {
      return this._isCheckedOut;
    }
    get ratings() {
      return this._ratings;
    }
  
    set isCheckedOut(value) {
      this._isCheckedOut = value;
    }
  
    toggleCheckOutStatus() {
      this.isCheckedOut = !this.isCheckedOut;
    }
  
    getAverageRating() {
      const averageRating = this.ratings.reduce((acc, curr) => acc + curr, 0);
      return averageRating / this.ratings.length;
    }
  
    addRating(rating) {
      this.ratings.push(rating);
      return this;
    }
  }
  
  class Book extends Media {
    constructor(title, author, pages) {
      super(title);
      this._author = author;
      this._pages = pages;
    }
  
    get author() {
      return this._author;
    }
    get pages() {
      return this._pages;
    }
  }
  
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
  
  const historyOfEverything = new Book(
    "A Short History of Nearly Everything",
    "Bill Bryson",
    544
  );
  console.log(historyOfEverything);
  console.log(runTime)
  
  historyOfEverything.toggleCheckOutStatus();
  console.log(historyOfEverything.isCheckedOut);
  
  [4, 5, 6, 7].forEach((num) => historyOfEverything.addRating(num));
  
  console.log(historyOfEverything.getAverageRating());
  
  const speed = new Movie("Speed", "Jan de Bont", 116);
  
  speed.toggleCheckOutStatus();
  console.log(speed.isCheckedOut);
  
  speed.addRating(1);
  speed.addRating(1);
  speed.addRating(5);
  
  console.log(speed.getAverageRating());

  console.log(speed);
Reviewing 

  