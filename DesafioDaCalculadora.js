function calculadora (quantiVitorias, derrotas){
    return quantiVitorias - derrotas
         
}
  
function rank  (resultado){
    if (resultado <= 10){ 
        nivelHeroi = "Ferro"
   
   } else if (resultado <= 20){
   
       nivelHeroi = "Bronze"
   } else if (resultado <= 50){
   
       nivelHeroi = "Prata"
   } else if (resultado <= 70){
   
       nivelHeroi = "Ouro"
   } else if (resultado <= 80){
   
       nivelHeroi = "Diamante"
   } else if (resultado <= 90){
   
       nivelHeroi = "Lendário"
   } else {
   
       nivelHeroi = "Imortal"
   }
    return nivelHeroi
}

let calc = calculadora (24,35) 

let nivel = rank (calc)

console.log("O Herói tem de saldo de " + calc + " está no nível de " + nivel )