/**
 * 
 *   describe -> agrupador de testes
 *   it       -> implementação do teste
 * 
 *   para executar: npx mocha <nomeArquivoTestes.js>
 * 
 *   TDD:: DESENVOLVIMENTO ORIENTADO A TESTE
 *      -> CRIA O TESTE
 *      -> VEJO O TESTE FALHAR
 *      -> CRIO A IMPLEMENTAÇÃO PARA O TESTE PASSAR
 *      -> EXECUTA O TESTES NOVAMENTE
 *      -> REFATORAR O CÓDIOG NOVAMENTE 
 *      -> EXECUTAR O TESTE NOVAMENTE
 * 
 *     ASSERTION -> verificar se um comportamento está de acordo com o esperado
 **/
 
//Sintaxe padrão para implementação de testes utilizando o mocha

import { exiborNomeDogFormatado } from '../Aula09/Conceitos/testes-unidade.js'
import assert from 'node:assert'

describe('Testes do Projeto', () => {
    it(`deve exibir o nome do dog com letras maiúsculas`, () => {        
        assert.strictEqual(exiborNomeDogFormatado('Mimosa'), 'MIMOSA')
        //Verifique se: <valor atual> é IGUAL A <valor esperado>
    })

    it('Primeiro Teste', () => {


    })

    it('Segundo Teste', () => {


    })




})