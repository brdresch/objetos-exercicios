

const pokemon1 = {
	nome: "Bulbasaur",
	tipo: "Grama",
	nivel: 5,
    
}



const pokemon2 = { 
    
    ...pokemon1,
    nome: "Squirtle",
    tipo: "Agua"
}

pokemon1.ataques = []

const ataque = {

    nome: "Investida",
    dano: 40,
    tipo: "Normal",
    precisao: 100


}

pokemon1.ataques.push(ataque)  

pokemon2.ataques = [...pokemon1.ataques]  

const ataque2 = {

    nome: "Folha navalha",
    dano: 45,
    tipo: "Grama",
    precisao: 100


}

const ataque3 = {

    nome: "Jato de agua",
    dano: 40,
    tipo: "Agua",
    precisao: 100


}

pokemon1.ataques.push(ataque2)
pokemon2.ataques.push(ataque3)

console.log(pokemon1,pokemon2);

console.table(pokemon1,pokemon2)