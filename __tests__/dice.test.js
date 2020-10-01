"use stict";

const Dice = require("../dice");

describe("Test if methods are defined", () => {
  let dice;
  beforeEach(() => {
    dice = new Dice();
  });
  test("getter maximumValue defined", () => {
    expect(dice.maximumValue).toBeDefined();
  });
  test("roll is defined", () => {
    expect(dice.roll).toBeDefined();
  });
});

describe("1. Create a dice with no upper bound", () => {
  let dice;

  beforeEach(() => {
    dice = new Dice();
  });
  test("upper boundis 6", () => {
    expect(dice.maximumValue).toBe(6);
  });
  test("lower boundis 1", () => {
    expect(dice.minimumValue).toBe(1);
  });
});
describe("2. and 5. Create a dice with all upper bounds 1 to 20", () => {
  const upperBounds = new Array(20).fill(1).map((value, ind) => [value + ind]);
  test.each(upperBounds)("test upper bound %s", (upperBound) => {
    let dice = new Dice(upperBound);
    expect(dice.maximumValue).toBe(upperBound);
  });

  beforeEach(() => {
    dice = new Dice();
  });
  test("upper boundis 6", () => {
    expect(dice.maximumValue).toBe(6);
  });
  test("lower boundis 1", () => {
    expect(dice.minimumValue).toBe(1);
  });
});

describe("3. Test exceptions with wrong upper bounds", () => {
  const testCases = [
    [21, "Upper bound too big"],
    [-1, "Upper bound too small"],
    [0, "Upper bound too small"],
    ["a", "Upper bound must be an integer"],
    [2.5, "Upper bound must be an integer"],
    test.each(testCases)(
      "upper bound %s throws an exception %s",
      (upperBound, expected) => {
        excpect(() => {
          new Dice(upperBound);
        }).toThrow(expected);
      }
    ),
  ];
});

describe("6.test roll", () => {
  let dice;
  beforeEach(() => {
    dice = new Dice();
  });

  test("test when the dice hasn't been rolled", () => {
    excpect(dice.dots).toBe(0);
  });
  test("test when rolled", () => {
    dice.roll();
    excpect(dice.dots).toBeCreaterThanOrEqual(1);
    expect(dice.dots).toBeLessThanOrEqual(6);
  });
});
