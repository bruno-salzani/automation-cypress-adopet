import Cadastro from '../support/pages/cadastro/pagina-cadastro';
import { usuarios } from '../fixtures/usuarios.json'

describe('Página de cadastro', () => {
    beforeEach(() => {
        Cadastro.acessarPaginaDeCadastro();
    })
           
    // it('Deve preencher os campos do formulário corretamente para cadastrar um novo usuário', () => {
    //     Cadastro.preencherFormulario('Bruno','brunosalzani@hotmail.com','Senha@123', 'Senha@123');
    //     Cadastro.submeterCadastro();
    // })

    // usuarios.forEach(usuario => {
    //     it('Deve preencher os campos do formulário corretamente para cadastrar diversos novo usuário', () => {
    //         Cadastro.preencherFormulario(usuario.name, usuario.email, usuario.password, usuario.password)
    //         Cadastro.submeterCadastro();         
    //     })
    // })

    it('Deve falhar ao tentar cadastrar sem preencher o email', () => {
        Cadastro.preencherFormulario(' ', ' ','Senha@123', 'Senha@123'); // Não preenche o email
        Cadastro.submeterCadastro();
        Cadastro.verificarMensagemDeErro('É necessário informar um endereço de email'); // Verifica mensagem de erro para email
    });

    // it('Deve falhar ao tentar cadastrar sem preencher a senha', () => {
    //     Cadastro.preencherFormulario('Bruno', 'brunosalzani@hotmail.com', '', ''); // Não preenche a senha
    //     Cadastro.submeterCadastro();
    //     Cadastro.verificarMensagemDeErro('Crie uma senha'); // Verifica mensagem de erro para senha
    // });
})