const obtenerUsuarios = async () => {
    try {
      const respuesta = await fetch('https://jsonplaceholder.typicode.com/users');
      const usuarios = await respuesta.json();

      const div = document.getElementById('resultado');
      div.innerHTML = `<ul>${usuarios.map(u => `<li>${u.name} <br> ${u.email}</li>`).join('')} </ul>`;

    } catch (error) {
      console.log('Error al obtener los datos: ', error);
    }

};

document.getElementById('obtener').addEventListener('click', obtenerUsuarios);
