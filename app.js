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

const druida = new personagem("kode" , 80, 25)


