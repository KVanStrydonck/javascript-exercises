const people = [
  {
    name: "Carly",
    yearOfBirth: 2018,
  },
  {
    name: "Ray",
    yearOfBirth: 1962,
    yearOfDeath: 2011,
  },
  {
    name: "Jane",
    yearOfBirth: 1912,
    yearOfDeath: 1941,
  },
];

const findTheOldest = function (people) {
  const currentYear = new Date().getFullYear();

  const sorted = people.sort(function (a, b) {
    const aDeath = a.yearOfDeath ?? currentYear;
    const bDeath = b.yearOfDeath ?? currentYear;

    const aAge = aDeath - a.yearOfBirth;
    const bAge = bDeath - b.yearOfBirth;
    return bAge - aAge;
  });

  return sorted[0];
};

findTheOldest(people);

// Do not edit below this line
module.exports = findTheOldest;
