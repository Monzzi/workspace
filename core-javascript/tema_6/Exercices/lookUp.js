// Data
const users = [
    {
      login: 'knuth',
      firstName: 'Donald',
      lastName: 'Knuth',
      likes: ['C', 'Unix'],
    },
    {
      login: 'norvig',
      firstName: 'Peter',
      lastName: 'Norvig',
      likes: ['AI', 'Search', 'NASA', 'Mars'],
    },
    {
      login: 'mfowler',
      firstName: 'Martin',
      lastName: 'Fowler',
      likes: ['Design Patterns', 'Refactoring'],
    },
    {
      login: 'kent',
      firstName: 'Kent',
      lastName: 'Beck',
      likes: ['TDD', 'wikis', 'Design Patterns'],
    },
  ];

  // lookup()
    // START -- THIS IS WHERE YOUR CODE GOES
    const lookup = (login, property) => {
      // Buscar el usuario en el array de usuarios
      const user = users.find(user => user.login === login);

      // Si no se encuentra el usuario, lanzar un error
      if (!user) {
        throw new Error('Could not find user');
      }

      // Si la propiedad no existe en el usuario, lanzar un error
      if (!user.hasOwnProperty(property)) {
        throw new Error('Could not find property');
      }

      // Devolver el valor de la propiedad
      return user[property];
  };
  // The End

  module.exports = lookup;