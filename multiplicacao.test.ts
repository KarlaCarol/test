import multiplicacao from "./multiplicacao"

describe('testes de multiplicação',() =>{
    test('deve verificar o resultado da multiplicação',() =>{
        expect(multiplicacao(2,2)).toBeCloseTo(4)
        expect(multiplicacao(2,3)).toBeCloseTo(6)
        expect(multiplicacao(2,5)).toBeCloseTo(10)
    })

    test('deve verificar o resultado da multiplicação',() =>{
        expect(multiplicacao(2,2)).not.toBeCloseTo(3)
        expect(multiplicacao(2,3)).not.toBeCloseTo(7)
        expect(multiplicacao(2,5)).not.toBeCloseTo(9)
    })
})