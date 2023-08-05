import { agencies } from './carAgencyManager.js';
import { customers } from './CustomerManager.js';

const CarPurchaseManager = {
  agencies: [...agencies],
  customers: [...customers],
  taxesAuthority: {
    totalTaxesPaid: 0,
    sumOfAllTransactions: 0,
    numberOfTransactions: 0,
  },
};

console.log(CarPurchaseManager);
