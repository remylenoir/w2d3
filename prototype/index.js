const myString = "ironhack";

String.prototype.toSnowflakeCase = function() {
  // let newString = "";
  // for (let i = 0; i < this.length; i++) {
  //   if (i % 2 !== 0) {
  //     newString += this[i].toUpperCase();
  //   } else {
  //     newString += this[i].toLowerCase();
  //   }
  // }
  // return newString;

  // Arrow function with .split() .map() and .join()
  return this.split("")
    .map((c, i) => (i % 2 === 0 ? c.toLowerCase() : c.toUpperCase()))
    .join("");
};

console.log(myString.toSnowflakeCase());
