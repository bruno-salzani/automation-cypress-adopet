import LoginPage from '../support/pages/login/pagina-login'; // Importa a página de login

describe('Página de login', () => {
    beforeEach(() => {
        LoginPage.acessarPaginaDeLogin(); // Acessa a página de login antes de cada teste
    });

    it('Deve preencher os campos do login corretamente e autenticar o usuário na página', () => {
        LoginPage.preencherFormularioDeLogin('brunosalzani@hotmail.com', 'Senha123'); // Preenche o formulário de login
        LoginPage.submeterLogin(); // Submete o formulário
    });

    it('Verifica mensagem de falha no login por campos obrigatórios', () => {
        LoginPage.submeterLogin(); // Submete o formulário sem preencher
        LoginPage.verificarMensagemDeErro('É necessário informar um endereço de email');
        LoginPage.verificarMensagemDeErro('Insira sua senha');
    });

    it('Deve falhar ao tentar login com senha inválida (sem maiúscula, número ou comprimento inválido)', () => {
        // Senha sem letra maiúscula
        LoginPage.preencherFormularioDeLogin('brunosalzani@hotmail.com', 'senha123'); // Senha sem letra maiúscula
        LoginPage.submeterLogin();
        LoginPage.verificarMensagemDeErro('A senha deve conter pelo menos uma letra maiúscula, um número e ter entre 6 e 15 caracteres');
    
        // Senha sem número
        LoginPage.preencherFormularioDeLogin('brunosalzani@hotmail.com', 'Senha'); // Senha sem número
        LoginPage.submeterLogin();
        LoginPage.verificarMensagemDeErro('A senha deve conter pelo menos uma letra maiúscula, um número e ter entre 6 e 15 caracteres');
    
        // Senha com menos de 6 caracteres
        LoginPage.preencherFormularioDeLogin('brunosalzani@hotmail.com', 'S3n4'); // Senha com menos de 6 caracteres
        LoginPage.submeterLogin();
        LoginPage.verificarMensagemDeErro('A senha deve conter pelo menos uma letra maiúscula, um número e ter entre 6 e 15 caracteres');
    
        // Senha com mais de 15 caracteres
        LoginPage.preencherFormularioDeLogin('brunosalzani@hotmail.com', 'Senha1234567890123'); // Senha com mais de 15 caracteres
        LoginPage.submeterLogin();
        LoginPage.verificarMensagemDeErro('A senha deve conter pelo menos uma letra maiúscula, um número e ter entre 6 e 15 caracteres');
    });
});