class Personagem {
    constructor(nome, vida, ataque, defesa){
        this.name = nome,
        this.vida = vida,
        this.vidaMax = vida,
        this.ataque = ataque,
        this.defesa = defesa
    }

    curar(quantidade){
        this.vida = this.vida + quantidade

        if(this.vida > this.vidaMax){
            this.vida = this.vidaMax
        }
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

 class Guerreiro extends Personagem {
    golpePesado(personagem){
        personagem.recebeDano(this.ataque * 2)
    }
 }
    
class Mago extends Personagem {
    bolaDeFogo(personagem){
     personagem.recebeDano(this.ataque + 15)
    }
}

class Arqueiro extends Personagem {
    tiroPreciso(personagem){
     personagem.recebeDano(this.ataque + 10)
    }
    
}

const druida = new Personagem("kode",80, 25, 8)
const guerreiro = new Guerreiro("thorin",60, 20, 15)
const mago = new Mago("Gandalfe",60, 35, 5)
const arqueiro = new Arqueiro("legolas",80, 25, 12)

guerreiro.golpePesado(mago)

mago.mostrarStatus()




