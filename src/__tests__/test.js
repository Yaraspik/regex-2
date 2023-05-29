import ValidateNumber from '../validateNumber';

test('validate number phone with staples', () => {
  expect(ValidateNumber.validate('8 (927) 000-00-00')).toBe('+79270000000');
});

test('validate number phone 2', () => {
  expect(ValidateNumber.validate('+7 960 000 00 00')).toBe('+79600000000');
});

test('validate number phone China', () => {
  expect(ValidateNumber.validate('+86 000 000 0000')).toBe('+860000000000');
});
