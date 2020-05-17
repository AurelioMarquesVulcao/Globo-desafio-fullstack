import React from 'react';
import { render, waitForElement } from '@testing-library/react';
import Body from './index';


// passos a serem textados

// renderizar component - ok
// buscar pinput - ok
// digitar input
// buscar botão
// clicar botão
// buscar a tabela
// buscar se a tarefa foi adicionada na tabela

describe('Test for body component', () => {
    it('test', async () => {
        const { getByTestId } = render(<Body/>)
        // mudar o nome da constante 'fildNode'
        const fieldNode = await waitForElement(
            ()=> getByTestId('form-field')
        )
        console.log(fieldNode)

    })
})
