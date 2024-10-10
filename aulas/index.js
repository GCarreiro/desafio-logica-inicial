let nomeHeroi = "Batman", nivelHeroi = "", nivelXp = 4510

if (nivelXp <= 1000){ 
     nivelHeroi = "Ferro"

} else if (nivelXp <= 2000){

    nivelHeroi = "Bronze"
} else if (nivelXp <= 5000){

    nivelHeroi = "Prata"
} else if (nivelXp <= 7000){

    nivelHeroi = "Ouro"
} else if (nivelXp <= 8000){

    nivelHeroi = "Platina"
} else if (nivelXp <= 9000){

    nivelHeroi = "Ascendente"
} else if (nivelXp <= 10000){

    nivelHeroi = "Imortal"
} else {

    nivelHeroi = "Radiante"
} 

console.log ("O Herói de nome " + nomeHeroi + " está no nível de " + nivelHeroi)