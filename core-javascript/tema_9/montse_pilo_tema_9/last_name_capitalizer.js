function capitalize_last_name(name, last_name) {
  if (typeof capitalize_last_name !== 'string') {
    throw new TypeError('El argumento debe ser un string');
  }

  // Separar el nombre completo usando split
  let parts = full_name.trim().split('');

  if (parts.length !== 2) {
    throw new ValueError('El string debe contener exactamente un nombre y un apellido');
  }

  let first_name = parts[0];
  let to_capitalize = parts[1];

  return first_name.charAt(0).toUpperCase() + first_name.slice(1).toLowerCase() + " " + to_capitalize.toUpperCase();
}

// Pruebas
console.log(capitalize_last_name("marisa tomei"));
console.log(capitalize_last_name("pol aguilera"));
console.log(capitalize_last_name("rigoberta bandini"));

module.exports = { capitalize_last_name };
