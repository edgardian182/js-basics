const menu = {
  _courses: {
    _appetizers: [],
    _mains: [],
    _desserts: [],

    get appetizers() {
      return this._appetizers;
    },
    set appetizers(appetizersIn) {
      this._appetizers = appetizersIn;
    },

    get mains() {
      return this._mains;
    },
    set mains(mainsIn) {
      this._mains = mainsIn;
    },

    get desserts() {
      return this._desserts;
    },
    set desserts(dessertsIn) {
      this._desserts = dessertsIn;
    }
  },

  get courses() {
    return {
      appetizers: this._courses.appetizers,
      mains: this._courses.mains,
      desserts: this._courses.desserts
    }
  },

  addDishToCourse(courseName, dishName, dishPrice) {
    const dish = {
      name: dishName,
      price: dishPrice
    }
    this._courses[courseName].push(dish)
  },

  getRandomDishFromCourse(courseName) {
    const course = this._courses[courseName]
    return course[Math.floor(Math.random() * course.length)]
  },

  generateRandomMeal() {
    const appetizer = this.getRandomDishFromCourse('appetizers');
    const main = this.getRandomDishFromCourse('mains');
    const dessert = this.getRandomDishFromCourse('desserts');
    const totalPrice = appetizer.price + main.price + dessert.price;

    return `Your meal is ${appetizer.name}, ${main.name} and ${dessert.name}. The price is $${totalPrice}`
  }
}
menu.addDishToCourse('appetizers', 'platanitos', 1000)
menu.addDishToCourse('appetizers', 'papitas', 1500)
menu.addDishToCourse('mains', 'carne asada', 4000)
menu.addDishToCourse('mains', 'pollo', 3500)
menu.addDishToCourse('desserts', 'helado', 2000)
menu.addDishToCourse('desserts', 'arequipe', 1500)

console.log(menu.courses)
console.log(menu.generateRandomMeal())