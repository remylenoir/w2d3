/* eslint-disable */

describe("add() method", function() {
  it("should be a function", function() {
    expect(typeof add).toEqual("function");
  });
  it("should add up two numbers", function() {
    expect(add(3, 6)).toEqual(9);
  });
  it("should ignore additional arguments (more than two)", function() {
    expect(add(2, 6, 3)).toBe(add(2, 6));
    // expect(add(6, 6, 6)).toEqual(12);
    // expect(add(6, 6, 6)).toEqual(add(6, 6));
  });
  it("should return a number", function() {
    // We expect the result of add() to be a number
    expect(typeof add(5, 1)).toEqual("number");
  });
});

describe("toSnowflakeCase() method", function() {
  it("should be a function", function() {
    expect(typeof toSnowflakeCase).toEqual("function");
  });
  it("should return a string", function() {
    expect(typeof toSnowflakeCase("hello")).toEqual("string");
  });
  it("should have the length as the input string", function() {
    const input = "ironhack";
    const output = toSnowflakeCase(input);
    expect(input.length).toEqual(output.length);
  });
  it("should capitalize every character with an odd index", function() {
    const output = toSnowflakeCase("ironhack");
    const oddLowerCase = output.split("").find((char, i) => i % 2 === 1 && char === char.toLowerCase());
    expect(oddLowerCase).toBeFalsy();
  });
  it("should lowercase every character with an even index", function() {
    const output = toSnowflakeCase("ironhack");
    const evenUpperCase = output.split("").find((char, i) => i % 2 === 0 && char === char.toUpperCase());
    expect(evenUpperCase).toBeFalsy();
  });
  it("should leave special characters untouched and continue snowflake casing", function() {
    const output = toSnowflakeCase("iron hack");
    expect(output).toEqual("iRoN HaCk");
  });
});
