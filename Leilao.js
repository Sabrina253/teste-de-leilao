const Lance = require('./Lance');

    module.exports = class Leilao {
        constructor(desc){
            this.descricao = desc;
            this.lances = [];
            this.maiorLance = new Lance('Nenhum', 0.0);
            this.menorLance = new Lance('Nenhum', 900.0);
        }

        getDescricao(){
            return this.descricao;
        }

        getLances(){
            return this.lances;
        }

        getMaiorLance(){
            return this.maiorLance;
        }

        getMenorLance(){
            return this.menorLance;
        }

        propoe(lance){
            this.lances.push(lance);
        }

        avalia(){
            this.lances.forEach(
                (lance) => {
                    if(lance.getValor() > this.maiorLance.getValor()){
                        this.maiorLance = lance; 
                    }   
                }
            );
        }

        encontre(){
            this.lances.forEach(
                (lance) => {
                    if(lance.getValor() < this.menorLance.getValor()){
                        this.menorLance = lance;
                    }
                }
            );
        }
    }