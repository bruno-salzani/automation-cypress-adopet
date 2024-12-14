# Automação de Testes com Cypress (Adopet)

Este projeto foi desenvolvido com o intuito de automatizar os testes da aplicação Adopet utilizando o framework Cypress. O objetivo é validar funcionalidades críticas, como login, cadastro e integração com a API, garantindo o bom funcionamento da aplicação.

## Objetivo do Projeto
1. Automatizar os testes das funcionalidades da aplicação Adopet, como login, cadastro e integração com a API, garantindo que as operações principais funcionem corretamente.
2. Estudar e praticar a automação de testes utilizando o Cypress. Durante o curso **"[Cypress: Automatizando Testes E2E](https://cursos.alura.com.br/certificate/5c3f390b-eb84-46db-abf6-300bfd1adb33?lang)"** da Alura, foram exploradas as melhores práticas e funcionalidades do Cypress, criando um conjunto de testes que garantem a qualidade das operações da aplicação Adopet.

## Funcionalidades

- **Testes de Login**: Realiza testes de login automatizados, verificando campos obrigatórios e validações de senha.
- **Testes de Cadastro**: Automatiza o preenchimento do formulário de cadastro, com dados válidos e inválidos, e valida as mensagens de erro.
- **Testes de API**: Faz a integração com a API da Adopet, validando se as mensagens estão sendo retornadas corretamente.
- **Comandos Customizados**: Criação de comandos personalizados para otimizar a automação e evitar repetições de código.

## Como Funciona

1. **Testes de Login**:
   - Testa a funcionalidade de login, incluindo a verificação de mensagens de erro quando os campos obrigatórios não são preenchidos corretamente.
   
2. **Testes de Cadastro**:
   - Realiza a automação do preenchimento dos campos de cadastro e valida os fluxos positivos e negativos:
     - Dados válidos para criar um novo usuário.
     - Dados inválidos para testar as mensagens de erro, como campos obrigatórios e senhas incompatíveis.

3. **Testes de API**:
   - Realiza uma requisição GET para a API de mensagens, validando o retorno da API, como o status da resposta e a estrutura dos dados.

4. **Execução dos Testes**:
   - Os testes são organizados em arquivos separados para cada funcionalidade (login, cadastro, API), permitindo uma execução modular e focada.

## Tecnologias Utilizadas

- [Cypress](https://www.cypress.io/): Framework para automação de testes end-to-end.
- [Mochawesome](https://github.com/adamgruber/mochawesome): Utilizado para gerar relatórios detalhados e visualizáveis dos testes.
- [Node.js](https://nodejs.org/): Ambiente para executar o Cypress.

## Como Executar

1. Clone o repositório:
   ```bash
   git clone https://github.com/seu-usuario/adopet-automation.git
   
2. Instale as dependências:
    ```bash
    npm install
    
3. Crie ou ajuste as variáveis de ambiente no arquivo cypress.config.js se necessário (exemplo: token da API).

3. Execute os testes:
   ```bash
    npx cypress open

5. Caso queira rodar os testes em modo headless (sem interface gráfica):
   ```bash
    npx cypress run
