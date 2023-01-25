 const candies = [
  { name: 'Aero', price: 1.99 },
  { name: 'Skitties', price: 2.99 },
  { name: 'Mars', price: 1.49 },
  { name: 'Maltesers', price: 3.49 },
  { name: 'Skittles', price: 1.49 },
  { name: 'Starburst', price: 5.99 },
  { name: 'Ricola', price: 1.99 },
  { name: 'Polkagris', price: 5.99 },
  { name: 'Pastila', price: 4.99 },
  { name: 'Mentos', price: 8.99 },
  { name: 'Raffaello', price: 7.99 },
  { name: 'Gummi bears', price: 10.99 },
  { name: 'Fraise Tagada', price: 5.99 }
]

 const filteredCandiesByPrice = (listOfCandies, maximumPrice) => {
    return listOfCandies.filter( candy => (candy.price <= maximumPrice) );
 };
 
 const findsString = (listOfCandies, searchString) => {
    return listOfCandies.filter( candy => (candy.name.toLowerCase().startsWith(searchString.toLowerCase())));
 };
  
 const searchCandies = (searchString, maximumPrice) => {
    const priceFilteredList = filteredCandiesByPrice(candies, maximumPrice);
    return findsString(priceFilteredList, searchString).map(candy => candy.name);
 };

// const searchCandies = (searchString, maximumPrice) => {
//   return candies.filter( candy => (candy.price <= maximumPrice) )
//                 .filter( candy => (candy.name.toLowerCase().startsWith(searchString.toLowerCase())))
//                 .map(candy => candy.name);
// }     

module.exports = searchCandies;