// src/index.js
import { add, subtract, multiply, divide } from './calculator.js';

try {
  if (window) alert('Open your development console and check the messages!');
} catch (error) {
  console.log('No browser instance detected, alert message is not necessary');
}

console.log('Adding 5 and 3:', add(5, 3));
console.log('Subtracting 8 from 10:', subtract(10, 8));
console.log('Multiplying 2 and 4:', multiply(2, 4));
console.log('Dividing 10 by 2:', divide(10, 2));
