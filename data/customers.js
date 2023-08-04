const customers = [
  {
    name: 'Lilah Goulding',
    id: 'BGzHhjnE8',
    cars: [
      {
        name: 'Corolla',
        year: 2013,
        price: 40570,
        carNumber: '16da1',
        ownerId: 'BGzHhjnE8',
      },
    ],
    cash: 35000,
  },
  {
    name: 'Ravi Murillo',
    id: '2RprZ1dbL',
    cars: [
      {
        name: 'M5',
        year: 2019,
        price: 578054,
        carNumber: 'WIh0U',
        ownerId: '2RprZ1dbL',
      },
      {
        name: 'Spider',
        year: 2012,
        price: 81520,
        carNumber: 'RLS4q',
        ownerId: '2RprZ1dbL',
      },
    ],
    cash: 278542,
  },
  {
    name: 'Aleksander Carr',
    id: 'pAuFtn_WA',
    cars: [
      {
        name: 'Highlander',
        year: 2018,
        price: 214503,
        carNumber: '2WU_y',
        ownerId: 'pAuFtn_WA',
      },
    ],
    cash: 125402,
  },
  {
    name: 'Lana Edge',
    id: 'cnTobUDy6',
    cars: [
      {
        name: 'F250',
        year: 2020,
        price: 198500,
        carNumber: 'Xxcy_',
        ownerId: 'cnTobUDy6',
      },
      {
        name: 'Hilux',
        year: 2005,
        price: 35005,
        carNumber: 'VSCUj',
        ownerId: 'cnTobUDy6',
      },
    ],
    cash: 7000,
  },
  {
    name: 'Nikita Philip',
    id: '5x2tMcX4R',
    cars: [
      {
        name: 'Impala',
        year: 2016,
        price: 65042,
        carNumber: 'LKInp',
        ownerId: '5x2tMcX4R',
      },
    ],
    cash: 40541,
  },
  {
    name: 'Bob Steel',
    id: 'Wm6BkA1F0',
    cars: [],
    cash: 15732,
  },
  {
    name: 'Will Reyes',
    id: 'FQvNsEwLZ',
    cars: [
      { name: 'X6', year: 2020, price: 966500, ownerId: 'FQvNsEwLZ' },
      {
        name: 'Land Cruiser',
        year: 2020,
        price: 336300,
        carNumber: 'vaJvd',
        ownerId: 'FQvNsEwLZ',
      },
      {
        name: 'Romeo Julia',
        year: 2020,
        price: 275406,
        carNumber: 'qLoYR',
        ownerId: 'FQvNsEwLZ',
      },
      {
        name: 'Explorer',
        year: 2020,
        price: 265200,
        carNumber: 'tlGRq',
        ownerId: 'FQvNsEwLZ',
      },
    ],
    cash: 1547242,
  },
];

const CustomerManager = {
  ...customers,

  // Search for a customer by their name or ID.
  // @param {string} idOrName - ID or name of the customer
  // @return {object} - customer object if found, otherwise null
  searchCustomer(idOrName) {
    const customerWasFound = customers.find((customer) => {
      return customer.name === idOrName || customer.id === idOrName;
    });
    if (customerWasFound) {
      return customerWasFound;
    } else {
      console.log(`The customer with the id or name of ${idOrName} wasn't found try a different agency name or id`);
      return null;
    }
  },
  // Retrieve all customers' names.
  // @return {string[]} - Array of customer names
  getAllCustomers() {
    let customersNames = customers.map((customer) => customer.name);
    return customersNames;
  },
  // Change the cash of a customer.
  // @param {string} customerId - The ID of the customer
  // @param {number} cash - The new cash value
  // @return {boolean} - true if updated successfully, false otherwise
  changeCustomerCash(customerId, cash) {
    const filteredCustomer = this.searchCustomer(customerId);
    if (filteredCustomer) {
      filteredCustomer.cash = cash;
      // for test only to see that the cash did changed
      console.log(filteredCustomer);
      return true;
    }
    return `The customer with the id or name of ${customerId} wasn't found try a different agency name or id`;
  },
  // Calculate the total value of all cars owned by a specific customer.
  // @param {string} customerId - The ID of the customer
  // @return {number} - The total value of cars owned by the customer
  getCustomerTotalCarValue(customerId) {
    const filteredCustomer = this.searchCustomer(customerId);
    if (filteredCustomer) {
      const totalCarValue = filteredCustomer.cars.reduce((total, car) => total + car.price, 0);
      return totalCarValue;
    }
    return `The customer with the id or name of ${customerId} wasn't found try a different agency name or id`;
  },
};

//tests

console.log(CustomerManager.searchCustomer('Lilah Goulding'));

console.log(CustomerManager.getAllCustomers());

console.log(CustomerManager.changeCustomerCash('BGzHhjnE8', 8000));

console.log(CustomerManager.getCustomerTotalCarValue('Lana Edge'));
