import { faker } from "@faker-js/faker/locale/de";

export class Support {
  static generate_date(date) {
    const d = new Date(date);
    const day = String(d.getDate()).padStart(2, "0");
    const month = String(d.getMonth() + 1).padStart(2, "0");
    const year = d.getFullYear();
    return `${year}-${month}-${day}`;
  }
}

export function action(text, element) {
  cy.log(`%c🔍 ${text} 🔎`);
  return cy.get(element).should("exist").should("be.visible");
}

export const data_faker = {
  get name() {
    return faker.person.fullName();
  },
  get email() {
    return faker.internet.email();
  },
  get phone() {
    return faker.phone.number('+55 ## #########')
  },
  get date() {
    const date_format = faker.date.past(30, "2005/01/01");
    return Support.generate_date(date_format);
  },
  get number() {
    return faker.random.numeric(10)
  }
};
