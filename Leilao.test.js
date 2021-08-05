const Leilao = require('./Leilao');
const Lance = require('./Lance');

    test('Pegar maior lance aleatório', () => {
        var leilao = new Leilao('PlayStation');
        leilao.propoe(new Lance('José',  100.0));
        leilao.propoe(new Lance('Maria', 200.0));
        leilao.propoe(new Lance('João', 150.0));

        leilao.avalia();
        expect(leilao.getMaiorLance().getValor()).toBe(200.0);
        expect(leilao.getMaiorLance().getNome()).toBe('Maria');
    }
);   
    test('Pegar maior lance em ordem crescente', () => {
        var leilao = new Leilao('Coleção de livros');
        leilao.propoe(new Lance('José', 100.0));
        leilao.propoe(new Lance('João', 150.0));
        leilao.propoe(new Lance('Maria', 200.0));

        leilao.avalia();
        expect(leilao.getMaiorLance().getValor()).toBe(200.0);
        expect(leilao.getMaiorLance().getNome()).toBe('Maria');
    }
);

    test('Pegar maior lance em ordem descrescente', () => {
        var leilao = new Leilao('Notebook');
        leilao.propoe(new Lance('Maria', 200.0));
        leilao.propoe(new Lance('João', 150.0));
        leilao.propoe(new Lance('José', 100.0));

        leilao.avalia();
        expect(leilao.getMaiorLance().getValor()).toBe(200.0);
        expect(leilao.getMaiorLance().getNome()).toBe('Maria');
    }
);

    test('Coloca lance negativo', () => {
        var leilao = new Leilao('Tv');
        leilao.propoe(new Lance('Maria', -100.0));
        leilao.propoe(new Lance('João', -10.0));
        leilao.propoe(new Lance('José', -1.0));

        leilao.avalia();
        expect(leilao.getMaiorLance().getValor()).toBe(0);
        expect(leilao.getMaiorLance().getNome()).toBe('Nenhum');
    }
);