class Personagem {
    constructor(nome, vida, ataque, defesa){
        this.name = nome,
        this.vida = vida,
        this.ataque = ataque,
        this.defesa = defesa
    }

    causaDano(personagem){
        personagem.recebeDano(this.ataque)
}

recebeDano(quantidade){
    let dano = quantidade - this.defesa

    if(quantidade < this.defesa){
        dano = 0
    }

    this.vida = this.vida - dano

    if(this.vida <=0){
    this.vida = "eliminado"
    }
}

estaVivo(){
    return this.vida > 0
}

mostrarStatus(){
    console.log(this.nome + " | Vida: " + this.vida)
}

}

const druida = new Personagem("kode",80, 25 ,8)
const guerreiro = new Personagem("thorin",60, 20 ,15)
const mago = new Personagem("Gandalfe",60, 35 ,5)
const arqueiro = new Personagem("legolas",80, 25 ,12)

druida.causadano(mago)
druida.causadano(mago)

mago.mostrarStatus()


console.log(mago.estaVivo())


