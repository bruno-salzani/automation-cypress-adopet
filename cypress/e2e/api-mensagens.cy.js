describe('API Adopet', () => {
    const mensagemId = '11643cd6-7112-415b-95d2-07904b0d1a1c';
    const mensagemEndpoint = `/mensagem/${mensagemId}`; // Caminho relativo
  
    beforeEach(() => {
        // Valida se o token está configurado
        const token = Cypress.env('token');
        expect(token, 'Token não configurado').to.exist;
    });

    it('Deve validar as mensagens da API', () => {
        cy.request({
            method: 'GET',
            url: mensagemEndpoint, // Caminho relativo
            headers: {
                Authorization: `Bearer ${Cypress.env('token')}`
            }
        }).then((response) => {
            // Assertions com mensagens descritivas
            expect(response.status, 'Status HTTP deve ser 200').to.eq(200);
            expect(response.body, 'Corpo da resposta não deve estar vazio').to.not.be.empty;
            expect(response.body, 'Corpo deve conter a propriedade "msg"').to.have.property('msg');
        });
    });
});