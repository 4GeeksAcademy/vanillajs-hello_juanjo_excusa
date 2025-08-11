let who = ['The dog', 'My grandma', 'The mailman', 'My bird'];
let action = ['ate', 'peed', 'crushed', 'broke'];
let what = ['my homework', 'my phone', 'the car'];
let when = ['before the class', 'when I was sleeping', 'while I was exercising', 'during my lunch', 'while I was praying'];

    const unElementoRandom = (cadaArray) => {
      let resultado = cadaArray[Math.floor(Math.random() * cadaArray.length)];
      return resultado;
    }

console.log(unElementoRandom(who), unElementoRandom(action), unElementoRandom(what), unElementoRandom(when));


/*const otroElementoRandom = (array1, array2, array3, array4) => {
      let resultado1 = array1[Math.floor(Math.random() * array1.length)];
      let resultado2 = array2[Math.floor(Math.random() * array2.length)];
      let resultado3 = array3[Math.floor(Math.random() * array3.length)];
      let resultado4 = array4[Math.floor(Math.random() * array4.length)];
      
      console.log(`${resultado1} ${resultado2} ${resultado3} ${resultado4}`);
      
    }
otroElementoRandom(who, action, when, what);*/

