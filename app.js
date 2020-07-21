const menu = {
  _courses: {
    appetizers: [],
    mains: [],
    desserts: []
  },
  get appetizers(){

    },
    set appetizers(appetizerIn){

    },
    get mains(){

    },
    set mains(mainsIn){

    },
    get desserts(){

    },
    set desserts(dessertsIn){

    },

get courses(){
    return {
      appetizers: this.appetizers,
      mains: this.mains,
      desserts: this.desserts
    }
  },

//This function adds a new dish to the menu.

addDishToCourse (courseName, dishName, dishPrice){
    const dish = {
    name: dishName,
    price: dishPrice
    };
    this._courses[courseName].push(dish);
  },

//This function selects a random dish from the menu.

getRandomDishFromCourse (courseName){
    const dishes = this._courses[courseName];
    const randomIndex = Math.floor(Math.random() * dishes.length);
    return dishes[randomIndex];
  },

//This function generates a random meal.  

generateRandomMeal () {
  const appetizer = this.getRandomDishFromCourse('appetizers');
  const main = this.getRandomDishFromCourse('mains');
  const dessert = this.getRandomDishFromCourse('desserts');
  const totalPrice = appetizer.price + main.price + dessert.price
  return `Dishes: ${appetizer.name}, ${main.name}, ${dessert.name}.` + ` Total price: $${totalPrice}.`;
}
};

menu.addDishToCourse('appetizers', 'onion rings', 10);
menu.addDishToCourse('appetizers', 'cabbage salad', 5);
menu.addDishToCourse('appetizers', 'grilled prawns', 10);
menu.addDishToCourse('mains', 'sushi', 30);
menu.addDishToCourse('mains', 'ramen', 25);
menu.addDishToCourse('mains', 'spring rolls', 20);
menu.addDishToCourse('desserts', 'mochi', 15);
menu.addDishToCourse('desserts', 'ube ice creams', 15);
menu.addDishToCourse('desserts', 'mango & sticky rice', 15);

let meal = menu.generateRandomMeal();
console.log(meal);
