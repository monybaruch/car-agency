import { agencies, carAgencyManager } from './carAgencyManager.js';
import { CustomerManager } from './CustomerManager.js';

const CarPurchaseManager = {
  ...CustomerManager,
  ...carAgencyManager,
  taxesAuthority: {
    totalTaxesPaid: 0,
    sumOfAllTransactions: 0,
    numberOfTransactions: 0,
  },
  // Implement a sellCar function that sells a car to a specific customer.
  // @param {string} carId - The ID of the car
  // @param {string} customerId - The ID of the customer
  // @return {boolean} - true if the car was sold successfully, false otherwise
  sellCar(agencyId, customerId, carModel) {
    const agency = this.searchAgency(agencyId);
    const customer = this.searchCustomer(customerId);
    if (!agency && !customer) {
      return null;
    }
    //Check the availability of the car at the agency.
    const allCars = [];
    for (const agency of agencies) {
      for (const car of agency.cars) {
        allCars.push(...car.models);
      }
    }
    const carToBuy = allCars.find((car) => car.name === carModel);
    return carToBuy;
  },
};

console.log(CarPurchaseManager.sellCar('Best Deal', 'Lilah Goulding', 'Land Cruiser'));

// Implement a sellCar function that sells a car to a specific customer. This function should:
// Check the availability of the car at the agency.
// Verify if the customer has enough cash to purchase the car.
// Update the cash and credit for both the agency and the customer accordingly.
// Update the tax authority's records.
// Calculate and return the total revenue of the entire market (Method: getTotalMarketRevenue).
// Instructions for handling taxes:
// a. Subtract the vehicle amount + 17% (tax) from the customer's cash.
// b. Add the vehicle value to the car agency cash.
// c. Change the car owner's id to the customer's id.
// d. Remove the car from the array of the agency's car models.
// e. Add the car to the client cars array.
// Taxes Authority:

// f. Pay 17 percent of the vehicle value to the tax authority. (add the amount to totalTaxesPaid)
// g. Increase the number of transactions made in one (numberOfTransactions)
// h. Add the vehicle amount + tax to sumOfAllTransactions
// Check that there is the requested vehicle at the agency in not return 'The vehicle does not
// exist at the agency'
// Check that the customer has enough money to purchase the vehicle, if not return 'The customer
// does not have enough money'
