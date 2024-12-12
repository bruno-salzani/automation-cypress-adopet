import { ELEMENTS } from "./elements";

const el = ELEMENTS;

class LoginPage {
    /**
     * Acessa a página inicial e navega para a página de login.
     */
    acessarPaginaDeLogin() {
        cy.visit('https://adopet-frontend-iota.vercel.app/');
        cy.get(el.loginButton).click(); // Clica no botão de login
    }

    /**
     * Preenche os campos de email e senha do login.
     * @param {string} email - E-mail do usuário
     * @param {string} password - Senha do usuário
     */
    preencherFormularioDeLogin(email, password) {
        cy.get(el.email).clear().type(email); // Preenche o campo de email
        cy.get(el.password).clear().type(password); // Preenche o campo de senha
    }

    /**
     * Clica no botão de login.
     */
    submeterLogin() {
        cy.get(el.submitButton).click(); // Clica no botão de submit
    }

    /**
     * Verifica se a mensagem de erro está visível.
     * @param {string} mensagem - Mensagem de erro esperada
     */
    verificarMensagemDeErro(mensagem) {
        cy.contains(mensagem).should('be.visible'); 
    }
}

export default new LoginPage();