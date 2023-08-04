import { agencies } from './agencies';

//importing agencies to a new file so that i can use it in CarManager

const CarManager = {
  ...agencies,
  // Retrieve all cars available for purchase.
  // @return {object[]} - Array of cars
  getAllCars: function () {
    const allCars = [];
    for (const agency of agencies) {
      for (const car of agency.cars) {
        allCars.push(...car.models);
      }
    }
    return allCars;
  },
  // Search for cars based on certain criteria.
  // @param {number} year - The production year of the car
  // @param {number} price - The price of the car
  // @param {string} brand - The brand of the car
  // @return {object[]} - Array of cars that meet the criteria
  searchCars: function (year, price, brand) {
    return this.getAllCars().filter((car) => car.year === year && car.price === price && car.name === brand);
  },
};

console.log(CarManager.getAllCars());

console.log(CarManager.searchCars(2020, 111900, 'Corolla'));
