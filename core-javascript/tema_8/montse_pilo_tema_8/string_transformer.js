class Transform_string {
  constructor(string) {
    this.string = string
  }

  modify_array_1to1() {
    return this.string.split('');
  }

  order_chart_ramdom() {
    const arr = this.string.split('');
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr.join('');
  }

  invert_chart_order() {
    return this.string.split('').reverse().join('');
  }

  remove_vowels() {
    return this.string.replace(/[aeiou]/gi, '');
  }

  remove_consonants() {
    return this.string.replace(/[bcdfghjklmnñpqrstvwxyz]/gi, '');
  }

  convert_into_words() {
    return this.string.split(' ');
  }

  invert_words_order() {
    return this.string.split(' ').reverse().join(' ');
  }
}

console.log(new Transform_string('What is essential is invisible to the eye').modify_array_1to1());
console.log(new Transform_string('What is essential is invisible to the eye').order_chart_ramdom());
console.log(new Transform_string('What is essential is invisible to the eye').invert_chart_order());
console.log(new Transform_string('What is essential is invisible to the eye').remove_vowels());
console.log(new Transform_string('What is essential is invisible to the eye').remove_consonants());
console.log(new Transform_string('What is essential is invisible to the eye').convert_into_words());
console.log(new Transform_string('What is essential is invisible to the eye').invert_words_order());

module.exports = {Transform_string};