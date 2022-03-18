var hello = require('../hello');//Chamada  da função

describe('Teste Hello',function(){
    it('Espera-se que ocorra o print da palavra do testo "Hello World"', function(){
        var texto = hello(); //Teste da função Hello
        expect(texto).toEqual('Hello World');//Matcher
    })
})//end suit case 1