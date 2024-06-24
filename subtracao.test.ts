import subtracao from "./subtracao"

describe('testes de Subtração',() =>{
    test('deve verificar o resultado da subtrção',() =>{
        expect(subtracao(4,2)).toBeCloseTo(2)
        expect(subtracao(9,3)).toBeCloseTo(6)
        expect(subtracao(10,5)).toBeCloseTo(5)
    })

    test('deve verificar o resultado da subtrção',() =>{
        expect(subtracao(4,2)).not.toBeCloseTo(3)
        expect(subtracao(9,3)).not.toBeCloseTo(7)
        expect(subtracao(10,5)).not.toBeCloseTo(9)
    })
})