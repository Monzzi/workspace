function capitalize_last_name(first_name, last_name) {
  return first_name.charAt(0).toUpperCase() + first_name.slice(1).toLowerCase() + " " + last_name.toUpperCase();
}


console.log(capitalize_last_name("pol", "aguilera"));
console.log(capitalize_last_name("rigoberta", "bandini"));


module.exports = capitalize_last_name;

