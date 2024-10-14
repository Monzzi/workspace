class transformar_string {
  constructor(string) {
    this.string = string
  }
  convertir_array_1a1 () {
    return this.string.split('');
  }

  ordenar_caracteres_ramdom() {
    const arr = this.string.split('');
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr.join('');
  }

  invertir_orden_caracteres () {
    return this.string.split('').reverse().join('');
}

  eliminar_vocales () {
    return this.string.replace(/[aeiou]/gi, '');
}

eliminar_consonantes () {
  return this.string.replace(/[bcdfghjklmnñpqrstvwxyz]/gi, '');
}

convertir_array_palabras () {
  return this.string.split(' ');
}

invertir_orden_palabras () {
  return this.string.split(' ').reverse().join(' ');
}

};

  console.log(new transformar_string('lo esencial es invisible a los ojos').convertir_array_1a1());
  console.log(new transformar_string('lo esencial es invisible a los ojos').ordenar_caracteres_ramdom());
  console.log(new transformar_string('lo esencial es invisible a los ojos').invertir_orden_caracteres());
  console.log(new transformar_string('lo esencial es invisible a los ojos').eliminar_vocales());
  console.log(new transformar_string('lo esencial es invisible a los ojos').eliminar_consonantes());
  console.log(new transformar_string('lo esencial es invisible a los ojos').convertir_array_palabras());
  console.log(new transformar_string('lo esencial es invisible a los ojos').invertir_orden_palabras());

module.exports = {transformar_string};