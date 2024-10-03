function addTogether(a,b) {
    if (typeof a === 'number' && typeof b === 'number') {  
      return a + b 
    } else if (typeof a !== 'number' || typeof b !== 'number')  {
      return undefined
    } else if (a === undefined || b === undefined) {
      return function(c) {
      return a + c || b + c
    } 
    }
  }
  addTogether(2);


  // yo he llegado hasta aquí. de 9 puntos cumplo 6 me faltan 6, 7 y 8.