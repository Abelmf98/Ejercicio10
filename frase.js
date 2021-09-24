/*Abel Mansilla Felipe*/
'use strict'

/*console.log('SIUU')*/

let frase = prompt('Cantame algo: ')
frase = frase.toLowerCase()

let c = 0

  for(let i=0; i<= frase.length; i++){
    if(frase.charAt(i) =='a' || frase.charAt(i) == 'e' || frase.charAt(i) == 'i' || frase.charAt(i) == 'o' || frase.charAt(i) == 'u' ){
      document.write(frase.charAt(i))
      c++
    }
  }
  document.write('<br>EL total de vocales es ' + c)
