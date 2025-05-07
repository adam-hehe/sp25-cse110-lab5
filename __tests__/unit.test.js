// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me';

//Phone number tests
test('valid phone number with dashes', () => {
  expect(isPhoneNumber('123-456-7890')).toBe(true);
});

test('valid phone number with parentheses', () => {
  expect(isPhoneNumber('(123) 456-7890')).toBe(true);
});

test('missing dashes', () => {
  expect(isPhoneNumber('1234567890')).toBe(false);
});

test('not enough numbers', () => {
  expect(isPhoneNumber('4567890')).toBe(false);
});

//Email tests

test('simple valid email', () => {
  expect(isEmail('adconnor@ucsd.edu')).toBe(true);
});

test('underscore in email', () => {
  expect(isEmail('user_123@domain.edu')).toBe(true);
});

test('missing @', () => {
  expect(isEmail('notanemail.com')).toBe(false);
});

test('domain too long', () => {
  expect(isEmail('user@domain.toolong')).toBe(false);
});

//Password tests

test('minimum length, starts with letter', () => {
  expect(isStrongPassword('Abcd')).toBe(true);
});

test('uses underscores and numbers', () => {
  expect(isStrongPassword('a_1B2')).toBe(true);
});

test('cannot start with digit', () => {
  expect(isStrongPassword('1abcd')).toBe(false);
});

test('too short', () => {
  expect(isStrongPassword('abc')).toBe(false);
});

//Date tests
test('single-digit month and day', () => {
  expect(isDate('1/1/2020')).toBe(true);
});

test('double-digit month and day', () => {
  expect(isDate('12/31/1999')).toBe(true);
});

test('wrong separator should be false', () => {
  expect(isDate('01-01-2020')).toBe(false);
});

test('year too short should be false', () => {
  expect(isDate('1/1/20')).toBe(false);
});

//Hex color tests
test('3-digit with #', () => {
  expect(isHexColor('#FFF')).toBe(true);
});

test('6-digit without #', () => {
  expect(isHexColor('A1B2C3')).toBe(true);
});

test('too few digits should be false', () => {
  expect(isHexColor('#ff')).toBe(false);
});

test('invalid hex character should be false', () => {
  expect(isHexColor('ggg')).toBe(false);
});