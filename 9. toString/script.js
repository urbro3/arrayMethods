const fruits = ['Banana', 'Orange', 'Apple', 'Mango'];

/**
 * -THE TOSTRING METHOD-
 * converts an array to a string of comma separated array values
 */
document.getElementById('demo').innerHTML = fruits.toString();

const items = [
  { name: 'Bike', price: '100' },
  { name: 'TV', price: '200' },
  { name: 'Album', price: '10' },
  { name: 'Book', price: '5' },
  { name: 'Phone', price: '500' },
  { name: 'Computer', price: '1000' },
  { name: 'Keyboard', price: '25' },
];

items.forEach((item) => {
  document.querySelector('#things').innerHTML = item.name;
});
