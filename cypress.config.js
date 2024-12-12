const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "k1tfhm", // ID do projeto no Cypress Dashboard, se utilizado
  e2e: {
    setupNodeEvents(on, config) {
      // Aqui você pode implementar eventos, como manipular logs ou capturar falhas de teste
    },
    viewportWidth: 1920, // Largura do viewport (resolução de tela)
    viewportHeight: 1080, // Altura do viewport (resolução de tela)
    baseUrl: 'https://adopet-api-i8qu.onrender.com', // URL base da API, evitando repetição
  },
  video: true, // Habilita gravação de vídeos durante os testes
  reporter: 'mochawesome', // Configura o relatório com o Mochawesome
  reporterOptions: {
    reportDir: 'cypress/results', // Diretório para salvar os relatórios
    overwrite: false, // Impede sobrescrita de relatórios existentes
    html: true, // Gera relatório HTML
    json: false, // Não gera relatório JSON
    timestamp: "mmddyyyy_HHMMss" // Adiciona timestamp no nome do relatório
  }
});
