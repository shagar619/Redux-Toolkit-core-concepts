import { Immer } from "immer";

// Pure function

const add = (a, b) => a + b;

console.log(add(1, 2)); // 3
console.log(add(1, 2)); // 3
console.log(add(1, 2)); // 3

// Impure function

let total = 0;

const addTotal = (amount) => (total += amount);

console.log(addTotal(1)); // 1
console.log(addTotal(2)); // 3
console.log(addTotal(3)); // 6

const updateDate = () => {
     new Date();
};

const randomNumber = () => {
     Math.random();
};



// Mutation

let person1 = {
     name: 'John',
     address: {
          street: '123 Main St',
          city: 'town',
          state: 'CA',
     },
};


let person2 = {
     ...person1,
     name: 'Jane',
     address: {
          ...person1.address,
          city: 'City',
     },
};


console.log(person1, person2);





// using immer

let employee = {
     name: 'John',
     address: {
          street: '123 Main St',
          city: 'town',
          state: 'CA',
     },
};

let employee2 = produce(employee, draft => {
     draft.name = 'Jane';
     draft.address.city = 'City';
});

console.log(employee, employee2);









// function currying

const curriedSum = (a) => {
     return (b) => {
          return (c) => {
               return a + b + c;
          };
     };
};

console.log(curriedSum(1)(2)(3));


const totalPrice = (discount) => (amount) => amount - amount * discount;

const withDiscount = totalPrice(0.1);

console.log(withDiscount(100));
console.log(withDiscount(200));
console.log(withDiscount(250));



