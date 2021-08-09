const Leilao = require('./Leilao');
const Lance = require('./Lance');

beforeAll(() => {
    console.log('beforeAll');
});

afterEach(() => {
    console.log('afterEach');
});

    test('Pegar maior e menor lance aleatório', () => {
        var leilao = new Leilao('PlayStation');
        leilao.propoe(new Lance('José',  100.0));
        leilao.propoe(new Lance('Maria', 300.0));
        leilao.propoe(new Lance('João', 200.0));

        leilao.avalia();
        expect(leilao.getMaiorLance().getValor()).toBe(300.0);
        expect(leilao.getMaiorLance().getNome()).toBe('Maria');
        leilao.encontre();
        expect(leilao.getMenorLance().getValor()).toBe(100.0);
        expect(leilao.getMenorLance().getNome()).toBe('José');
    }
);   

    test('Pegar maior e menor lance em ordem crescente', () => {
        var leilao = new Leilao('Coleção de livros');
        leilao.propoe(new Lance('João', 200.0));
        leilao.propoe(new Lance('José', 250.0));
        leilao.propoe(new Lance('Maria', 300.0));

        leilao.avalia();
        expect(leilao.getMaiorLance().getValor()).toBe(300.0);
        expect(leilao.getMaiorLance().getNome()).toBe('Maria');
        leilao.encontre();
        expect(leilao.getMenorLance().getValor()).toBe(200.0);
        expect(leilao.getMenorLance().getNome()).toBe('João');
    }
);

    test('Pegar maior e menor lance em ordem descrescente', () => {
        var leilao = new Leilao('Notebook');
        leilao.propoe(new Lance('Maria', 400.0));
        leilao.propoe(new Lance('João', 350.0));
        leilao.propoe(new Lance('José', 300.0));

        leilao.avalia();
        expect(leilao.getMaiorLance().getValor()).toBe(400.0);
        expect(leilao.getMaiorLance().getNome()).toBe('Maria');
        leilao.encontre();
        expect(leilao.getMenorLance().getValor()).toBe(300.0);
        expect(leilao.getMenorLance().getNome()).toBe('José');
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

afterAll(() => {
    console.log('afterAll');
});