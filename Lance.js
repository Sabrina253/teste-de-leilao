module.exports = class Lance{
    constructor(nome, valor){
        this.nome = nome;
        this.valor = valor;
    }

    getNome(){
        return this.nome;
    }

    getValor(){
        return this.valor;
    }
}