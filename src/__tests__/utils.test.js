// src/__tests__/utils.test.js

import { currentAgeForBirthYear } from '../utils'; // Adjust the path as necessary

describe('currentAgeForBirthYear', () => {
  it('returns the age of a person based on the year of birth', () => {
    const birthYear = 1984;
    const ageOfPerson = currentAgeForBirthYear(birthYear);
    expect(ageOfPerson).toBe(40); // Adjust this based on the current year
  });
});
