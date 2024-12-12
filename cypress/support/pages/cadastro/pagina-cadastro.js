import { ELEMENTS } from "./elements";

const el = ELEMENTS ;

class Cadastro {
    /**
     * Acessa a página inicial e navega para a página de cadastro.
     */
    acessarPaginaDeCadastro() {
        cy.visit('https://adopet-frontend-iota.vercel.app/');
        cy.get(el.registerButton).click();
    }
    
    /**
     * Preenche o formulário de cadastro com os dados fornecidos.
     * @param {string} name - Nome do usuário
     * @param {string} email - E-mail do usuário
     * @param {string} password - Senha do usuário
     * @param {string} confirmPassword - Confirmação da senha
     */
    preencherFormulario(name, email, password, confirmPassword){
        cy.get(el.name).clear().type(name || '');  // Se name for vazio, deixa o campo vazio
        cy.get(el.email).clear().type(email || '');  // Se email for vazio, deixa o campo vazio
    
        // Se password for vazio, não preenche o campo de senha
        if (password) {
            cy.get(el.inputPassword).clear().type(password);
        } else {
            cy.get(el.inputPassword).clear(); // Deixa o campo de senha vazio
        }
    
        // Se confirmPassword for vazio, não preenche o campo de confirmação de senha
        if (confirmPassword) {
            cy.get(el.confirmPassword).clear().type(confirmPassword);
        } else {
            cy.get(el.confirmPassword).clear(); // Deixa o campo de confirmação vazio
        }
    }

    /**
     * Clica no botão para submeter o cadastro.
     */
    submeterCadastro(){
        cy.get(el.submitButton).click();
    }

    verificarMensagemDeErro(mensagem) {
        cy.contains(mensagem).should('be.visible'); 
    }
}

export default new Cadastro();