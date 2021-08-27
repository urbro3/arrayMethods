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
 * -THE FIND METHOD-
 * allows you to find a single object in an array
 */
const foundItem = items.find((item) => {
  return item.name === 'Book';
});

console.log(items);
console.log(foundItem);
