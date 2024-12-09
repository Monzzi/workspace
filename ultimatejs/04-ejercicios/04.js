function calculoImpares(number) {
  for (let i = 1; i <= number; i++) {
    if (i % 2 !== 0) {
      console.log('número impar: ' + i);
    }
  }
}

calculoImpares(100);
