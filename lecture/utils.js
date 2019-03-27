function add(a, b) {
  return a + b;
}

function toSnowflakeCase(str) {
  return str
    .split("")
    .map((c, i) => (i % 2 === 0 ? c.toLowerCase() : c.toUpperCase()))
    .join("");
}
