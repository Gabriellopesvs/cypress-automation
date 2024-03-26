import { action, data_faker } from "../../support/commands.js";
import "../../support/hooks/test-hooks.js";

describe("📚 accessing registration - Vaga para QA - Tester", () => {
  it("✏️ Filling in fields", () => {

    action("Filling in the full name field", element.name)
      .type(data_faker.name);

    action("filling in email field", element.email)
      .type(data_faker.email);

    action("filling in phone field", element.phone)
      .type(data_faker.phone);

    action("filling in date of birth field", element.date)
      .type(data_faker.date);

    action("clicking on Gender", element.gender)
      .eq(0)
      .click();

    action("filling in the language field you know", element.language)
      .select("JavaScript");

    action("filling in password field", element.password)
      .type(data_faker.number);

    action("completing registration", element.button)
      .click();

    action("Checking whether the registration was completed successfully...",element.button)
      .should("have.text", "Cadastro finalizado!");
  });
});

let element = {
  name: 'input[id="nomeCompleto"]',
  email: 'input[type="email"]',
  phone: 'input[name="telefone"]',
  date: 'input[type="date"]',
  gender: 'input[type="radio"]',
  language: 'select[id="linguagem"]',
  password: 'input[name="senha"]',
  button: 'button[type="submit"]',
  message: 'button[id="cadastrarButton"]',
};
