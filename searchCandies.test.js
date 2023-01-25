const searchCandies = require ('./searchCandies');
// const fizzBuzz = require('../src/fizzbuzz');
console.log(searchCandies)
describe('searchCandies', () => {
  it('returns the names of the candies with prefix -ma- ', ()=> {
  expect(searchCandies('ma',10)).toEqual( ['Mars', 'Maltesers']);
  });

  // it('returns buzz if number can be divided by 3', ()=> {
  // expect(fizzBuzz(3)).toBe('fizz');
  // expect(fizzBuzz(18)).toBe('fizz');
  // });
  // it('returns fizz if number can be divided by 5', ()=> {
  //     expect(fizzBuzz(5)).toBe('buzz');
  //     expect(fizzBuzz(20)).toBe('buzz');
  // });
  // it('returns the number', ()=> {
  //     expect(fizzBuzz(2)).toBe(2);
  //     expect(fizzBuzz(8)).toBe(8);
  // });
});