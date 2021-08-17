import { sum, mult } from '../calculator';

it('should return sum of elements', () => {
  const result = sum(5, 5);
  expect(result).toEqual(10);
});

it('should return multiplication of elements', () => {
  const result = mult(5, 5);
  expect(result).toEqual(25);
});
