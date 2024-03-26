# Teste de Automação Cypress

## 📑Arquivos

- [cypress.env.json](#📑cypress-env-json)
- [test-hooks.js](#📑test-hooks-js)
- [e2e.js](#📑e2e-js)

## 💻 Funções

- [generate_date](#💻generate-date)
- [action](#💻action)
- [data_faker](#💻data-faker)



### 📑cypress-env-json
O arquivo ``cypress.env.json`` é uma configuração de ambiente utilizado pelo Cypress, contendo variáveis e configurações cruciais para a execução dos testes. Este arquivo é uma ferramenta poderosa para gerenciar ambientes diferentes, permitindo que você ajuste facilmente URLs e configurações globais sem a necessidade de modificar o código dos testes em si.

`Exemplo`:

```json
{
  "run": "QA",
  "QA": {
    "url": "http://127.0.0.1:5500/html/web_page.html"
  },
  "DEV": {
    "url": "http://127.0.0.1:5500/html/web_page.html"
  }
}
```
`Como usar`:

Nesse exemplo, a variável `"run"` determina o ambiente (no caso, "QA" ou "DEV"), enquanto os objetos "QA" e "DEV" contêm as URLs específicas para cada ambiente. Isso simplifica a mudança de ambientes, tornando o processo de teste mais flexível e eficiente.

<br>

### 📑test-hooks-js
O arquivo `test-hooks.js` desempenha um papel crucial na configuração e execução dos testes do Cypress. Ele utiliza os chamados "hooks" do Cypress, que são funções executadas automaticamente antes ou após os testes. Em resumo, o `test-hooks.js` é responsável por configurar o ambiente de teste a partir do arquivo de configuração **cypress.env.json** e, se necessário, garantir que a sessão esteja limpa para evitar conflitos nos testes subsequentes. Essa organização é fundamental para a execução consistente e confiável dos testes no Cypress.

<br>

### 📑e2e-js
o arquivo e2e.js aproveita as funções personalizadas `cy.section()` e `cy.step()` para aprimorar a apresentação e a organização dos resultados dos testes Cypress. Isso torna a visualização dos testes mais agradável e facilita a identificação dos testes individuais e de seus conjuntos associados. Essa abordagem é especialmente útil em testes extensos ou complexos.

<br>

### 💻generate-date
A função `generate_date(date)` é uma função utilitária que formata uma data no formato "YYYY-MM-DD". É usada para formatar datas para testes.

<br>

### 💻action
A função `action` é uma função de comandos personalizada que realiza ações em elementos da página da web. Ela utiliza o cy.get(element) para selecionar o elemento na página e, em seguida, executa a ação especificada.

`parâmetros `:

**text**: Uma descrição da ação a ser executada, usada para exibir mensagens informativas no log.

**element**: Um seletor CSS que identifica o elemento na página com o qual você deseja interagir.

`Exemplo`:

```javaScript
action("Clicando no botão 'Enviar'", "button:contains('Enviar')").click();
```

<br>

### 💻data-faker
A constante `data_faker` é um objeto que contém várias propriedades getter. Cada propriedade getter gera dados falsos usando a biblioteca Faker.js. Como por exemplo gera um nome completo falso, gera um endereço de e-mail falso, e etc.

`Exemplo`:

```javascript
import { action, data_faker } from "../../support/commands.js";

// Restante do codigo

    //Gerando um email faker
    action("filling in email field", element.email).type(data_faker.email);

    //Gerando um número de telefone faker
    action("filling in phone field", element.phone).type(data_faker.phone);


//Restante do codigo
```
<br>

---


Este README fornece uma visão geral dos arquivos e funções criados para o teste de automação Cypress. Apesar de ser um teste relativamente pequeno, ele é altamente focado em melhorias e está organizado de forma a proporcionar uma experiência de teste eficaz e eficiente. Cada seção contém informações detalhadas sobre os arquivos e suas funcionalidades, permitindo que os desenvolvedores entendam rapidamente como o teste foi estruturado e como podem expandir ou modificar as funcionalidades conforme necessário.
