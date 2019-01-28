const helpers = require('./project-1');

// start testing!
describe('project-1', () => {
  describe('multiplyByTen', () => {
    it('should multiply a number by 10', () => {
      expect(helpers.multiplyByTen(2)).toBe(20);
      expect(helpers.multiplyByTen(0)).toBe(0);
      expect(helpers.multiplyByTen(1)).toBe(10);
      expect(helpers.multiplyByTen(7)).toBe(70);
    })
  })
  describe('subtractFive', () => {
    it('should subtract by five', () => {
      expect(helpers.subtractFive(10)).toBe(5);
      expect(helpers.subtractFive(0)).toBe(-5);
      expect(helpers.subtractFive(20)).toBe(15);
      expect(helpers.subtractFive(100)).toBe(95);
      expect(helpers.subtractFive(11)).toBe(6);
      expect(helpers.subtractFive(1)).toBe(-4);
    })
  })
  describe('areSameLength', () => {
    it('should return true if string length is equal', () => {
      expect(helpers.areSameLength('hi', 'ho')).toBe(true);
      expect(helpers.areSameLength('hey', 'hoo')).toBe(true);
      expect(helpers.areSameLength('thisisalongstring', 'alongstringthisis')).toBe(true);
      expect(helpers.areSameLength('', '')).toBe(true);
    })
    it('should return false if strings are not equal length', () => {
      expect(helpers.areSameLength('hello', 'hey')).toBe(false);
      expect(helpers.areSameLength('a long string', 'a shorter one!')).toBe(false);
      expect(helpers.areSameLength('hello', 'hi there')).toBe(false);
    })
  })
})
