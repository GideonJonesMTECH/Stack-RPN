const expect = require('expect');
const rpn = require('../src/rpn').rpn;

describe('rpn', () => {
  it('should return 45 when passed in "3 5 10 + *"', () => {
    let result = rpn('3 5 10 + *');
    expect(result).toEqual(45);
  });
  it('should return 10 when passed in "5 5 +"', () => {
    let result = rpn('5 5 +');
    expect(result).toEqual(45);
  });
  it('should return 5 when passed in "5 4 3 7 * + /"', () => {
    let result = rpn('5 4 3 7 * + /');
    expect(result).toEqual(45);
  });
});


