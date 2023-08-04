// getAgencyByName
// @param {string} - name
// @return {Object} - agency object
getAgencyByName = (name) => {};

// getAgencyIdByName
// @param {String} - name
// @return {String} - agencyId
getAgencyIdByName = function (name) {};

// getAllAgenciesName
// @return {string[]} - agenciesNameArr - Array of all agencies name
getAllAgenciesName = function () {};
const CarAgencyManager = {
  agencies: [],

  // Add a new car to an agency's inventory.
  // @param {string} agencyId - The ID of the agency
  // @param {object} car - The car object to be added
  // @return {boolean} - true if added successfully, false otherwise
  addCarToAgency: function (agencyId, car) {},

  // Remove a car from an agency's inventory.
  // @param {string} agencyId - The ID of the agency
  // @param {string} carId - The ID of the car to be removed
  // @return {boolean} - true if removed successfully, false otherwise
  removeCarFromAgency: function (agencyId, carId) {},

  // 6 Change the cash or credit of an agency.
  // @param {string} agencyId - The ID of the agency
  // @param {string} cashOrCredit - type of cash or credit to be updated
  // @param {number} cashOrCredit - The amount of cash or credit to be updated
  // @return {boolean} - true if updated successfully, false otherwise
  changeAgencyCashOrCredit: function (agencyId, cashOrCreditStr, cashOrCreditAmount) {},
  // Update the price of a specific car in an agency.
  // @param {string} agencyId - The ID of the agency
  // @param {string} carId - The ID of the car
  // @param {number} newPrice - The new price of the car
  // @return {boolean} - true if updated successfully, false otherwise
  updateCarPrice: function (agencyId, carId, newPrice) {},

  // Calculate and return the total revenue for a specific agency.
  // @param {string} agencyId - The ID of the agency
  // @return {number} - The total revenue of the agency
  getTotalAgencyRevenue: function (agencyId) {},

  // Transfer a car from one agency to another.
  // @param {string} fromAgencyId - The ID of the agency from where the car will be transferred
  // @param {string} toAgencyId - The ID of the agency to where the car will be transferred
  // @param {string} carId - The ID of the car to be transferred
  // @return {boolean} - true if transferred successfully, false otherwise
  transferCarBetweenAgencies: function (fromAgencyId, toAgencyId, carId) {},
};

const CustomerManager = {
  customers: [],

  // Search for a customer by their name or ID.
  // @param {string} idOrName - ID or name of the customer
  // @return {object} - customer object if found, otherwise null
  searchCustomer: function (idOrName) {},

  // Retrieve all customers' names.
  // @return {string[]} - Array of customer names
  getAllCustomers: function () {},

  // Change the cash of a customer.
  // @param {string} customerId - The ID of the customer
  // @param {number} cash - The new cash value
  // @return {boolean} - true if updated successfully, false otherwise
  changeCustomerCash: function (customerId, cash) {},

  // Calculate the total value of all cars owned by a specific customer.
  // @param {string} customerId - The ID of the customer
  // @return {number} - The total value of cars owned by the customer
  getCustomerTotalCarValue: function (customerId) {},
};

const CarManager = {
  agencies: [],

  // Retrieve all cars available for purchase.
  // @return {object[]} - Array of cars
  getAllCars: function () {},

  // Search for cars based on certain criteria.
  // @param {number} year - The production year of the car
  // @param {number} price - The price of the car
  // @param {string} brand - The brand of the car
  // @return {object[]} - Array of cars that meet the criteria
  searchCars: function (year, price, brand) {},

  // Return the most expensive car available for sale.
  // @return {object} - The most expensive car
  getMostExpensiveCar: function () {},

  // Return the cheapest car available for sale.
  // @return {object} - The cheapest car
  getCheapestCar: function () {},
};

const CarPurchaseManager = {
  agencies: [],
  customers: [],
  taxesAuthority: {
    totalTaxesPaid: 0,
    sumOfAllTransactions: 0,
    numberOfTransactions: 0,
  },

  // Implement a sellCar function that sells a car to a specific customer.
  // @param {string} carId - The ID of the car
  // @param {string} customerId - The ID of the customer
  // @return {boolean} - true if the car was sold successfully, false otherwise
  sellCar: function (carId, customerId) {},

  // Calculate and return the total revenue of the entire market.
  // @return {number} - The total revenue of the market
  getTotalMarketRevenue: function () {},
};
