class personagem {
    constructor(nome, vida, ataque){
        this.name = nome;
        this.vida = vida;
        this.ataque = ataque;
    }

    causaDano(personagem){
        personagem.recebeDano(this.ataque)
}

recebeDano(quantidade){
    this.vida = this.vida - quantidade

    if(this.vida <=0){
        this.vida = "eliminado"
    }
}

estaVivo(){
    return this.vida > 0
}


}


const druida = new personagem("kode",80, 25)
const guerreiro = new personagem("thorin",60, 20)
const mago = new personagem("gandalfe",60, 35)
const arqueiro = new personagem("legolas",80, 25)

druida.causadano(mago)
druida.causadano(mago)

console.log(mago.estaVivo())


