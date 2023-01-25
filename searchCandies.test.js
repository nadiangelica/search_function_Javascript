const searchCandies = require ('./searchCandies');

describe('searchCandies', () => {
  it('returns the names of the candies with prefix -Ma- ', ()=> {
    expect(searchCandies('Ma', 10)).toEqual( ['Mars', 'Maltesers']);
  });

  it('returns the names of the candies with prefix -Ma- ', ()=> {
    expect(searchCandies('Ma', 2)).toEqual( ['Mars']);
  });

  it('returns the names of the candies with prefix -S- ', ()=> {
    expect(searchCandies('S', 10)).toEqual( ['Skitties', 'Skittles', 'Starburst']);
  });

  it('returns the names of the candies with prefix -S- ', ()=> {
    expect(searchCandies('S', 4)).toEqual( ['Skitties', 'Skittles']);
  });

  it('returns the names of the candies with prefix -ma- ', ()=> {
    expect(searchCandies('ma', 10)).toEqual( ['Mars', 'Maltesers']);
  });
});