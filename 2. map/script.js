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
 * ---THE MAP METHOD---
 * map allows you to take one array and convert it into a new
 * array, so all the items in the array are going to look slightly
 * different
 */
const itemNames = items.map((item) => {
  return item.name;
});

console.log(items);
console.log(itemNames);
