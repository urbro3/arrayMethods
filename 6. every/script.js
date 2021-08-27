const items = [
  { name: 'Bike', price: '100' },
  { name: 'TV', price: '200' },
  { name: 'Album', price: '10' },
  { name: 'Book', price: '5' },
  { name: 'Phone', price: '500' },
  { name: 'Computer', price: '1000' },
  { name: 'Keyboard', price: '25' },
];

/**
 * -THE EVERY METHOD-
 * see if all items in the array meet a condition
 * returns true or false
 */
const hasInexpensiveItems = items.every((item) => {
  return item.price <= 100;
});

console.log(hasInexpensiveItems);
