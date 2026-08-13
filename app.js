class personagem {
    constructor(nome, vida, ataque){
        this.name = nome,
        this.vida = vida,
        this.ataque = ataque
    }

    causaDano(personagem){
        personagem.recebeDano(this.ataque)
}

recebeDano(quantidade){
    this.vida = this.vida - quantidade

    if(this.vida <=0){
        this.vida = "elemento"
    }
}

const druida = new personagem("kode",80, 25)

const guerreiro = new personagem("thorin",60, 20)

const mago = new personagem("gandalfe",60, 35)

const arqueiro = new personagem("legolas",80, 25)

const jogador = new personagem("neymar",60, 30)

const trabalhador = new personagem("zeze",90, 60)

const zelador = new personagem("bem10",50, 20)

guerreiro.causaDano(jogador)
druida.causaDano(trabalhador)
mago.causaDano(zelador)
arqueiro.causaDano(guerreiro)
jogador.causaDano(druida)
trabalhador.causaDano(mago)
zelador.causaDano(arqueiro)

console.log(guerreiro.vida, druida.vida, mago.vida, arqueiro.vida, jogador.vida, trabalhador.vida, zelador.vida)
