const trialDivision = (number) => {
  // your code here
  //let contador = 0;
  //let multiplicadores = [];
  if(number < 2) { return false; }
  for(let i = 2; i < number; i++){
    let naturalMenor = number -1;
    while(naturalMenor >= 2){
       if(i*naturalMenor === number) {
          //contador++;
          //multiplicadores.push([naturalMenor, i]); //saber cuales son los multiplicadores de number
          return false;
        }
      naturalMenor--;
    }//while
  } //for
  return true;
  //return multiplicadores;
}
//console.log(trialDivision(89))
module.exports = trialDivision;