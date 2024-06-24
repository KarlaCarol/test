import divisao from "./divisao"

describe('testes de divisão',() =>{
    test('deve verificar o resultado da divisão',() =>{
        expect(divisao(4,2)).toBeCloseTo(2)
        expect(divisao(9,3)).toBeCloseTo(3)
        expect(divisao(10,5)).toBeCloseTo(2)
    })

    test('deve verificar o resultado da divisão',() =>{
        expect(divisao(4,2)).not.toBeCloseTo(3)
        expect(divisao(9,3)).not.toBeCloseTo(4)
        expect(divisao(10,5)).not.toBeCloseTo(1)
    })
})