# Cypress Automation Project

[![Build Status](https://travis-ci.org/your-username/cypress-automation.svg?branch=master)](https://travis-ci.org/your-username/cypress-automation "Travis CI")
[![codecov](https://codecov.io/gh/your-username/cypress-automation/branch/master/graph/badge.svg)](https://codecov.io/gh/your-username/cypress-automation)
[![NPM Version](https://img.shields.io/npm/v/cypress.svg?label=NPM)](https://www.npmjs.com/package/cypress)
[![License](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

## Overview:

This project is an automated testing framework using **Cypress**, designed to streamline the testing of web applications. It provides a robust solution for end-to-end testing, component interaction, and automated form submission.

## 📑 Files

- [cypress.env.json](#📑cypress-env-json)
- [test-hooks.js](#📑test-hooks-js)
- [e2e.js](#📑e2e-js)

## 💻 Functions

- [generate_date](#💻generate-date)
- [action](#💻action)
- [data_faker](#💻data-faker)

### 📑 cypress.env.json

The `cypress.env.json` file is a configuration used by Cypress, containing crucial environment variables and settings necessary for running tests. This file is a powerful tool for managing different environments, allowing you to easily adjust URLs and global settings without modifying the test code itself.

`Example`:

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

# Usage

In this example, the "run" variable determines the environment (e.g., "QA" or "DEV"), while the "QA" and "DEV" objects contain the specific URLs for each environment. This simplifies switching between environments, making the testing process more flexible and efficient.
<br>

#  📑 test-hooks.js

The test-hooks.js file plays a crucial role in setting up and executing Cypress tests. It utilizes Cypress "hooks," which are functions that run automatically before or after the tests. Essentially, test-hooks.js sets up the test environment based on the cypress.env.json file and ensures a clean session, preventing conflicts in subsequent tests.

<br>

# 📑 e2e.js

The e2e.js file takes advantage of custom functions cy.section() and cy.step() to enhance the presentation and organization of Cypress test results. This makes the test visualization cleaner and helps identify individual tests and their associated sections. This approach is especially useful for large or complex test suites.
<br>

💻 generate_date

The generate_date(date) function is a utility that formats a date in the "YYYY-MM-DD" format. It is used for date formatting in tests.

<br>

# 💻 action

The action function is a custom command that performs actions on web page elements. It uses cy.get(element) to select the element on the page and then performs the specified action.

### Parameters:

- text: A description of the action to be performed, used to display informative messages in the log.
- element: A CSS selector identifying the element you want to interact with.

`Example:`

```javaScript
action("Clicking on the 'Submit' button", "button:contains('Submit')").click();
```

<br>

# 💻 data_faker

The data_faker constant is an object that contains various getter properties. Each getter generates fake data using the Faker.js library, such as generating a fake full name, fake email address, etc.

`Example:`

```javaScript
import { action, data_faker } from "../../support/commands.js";

// Generating a fake email
action("filling in email field", element.email).type(data_faker.email);

// Generating a fake phone number
action("filling in phone field", element.phone).type(data_faker.phone);
```

<br>

# What's New?

This project now supports the following technologies:
- Cypress 13.x
- javaScript/ES6+ for test scripting.

## How to Use This Project:

To use this project, simply install Cypress using npm or clone the GitHub repository.

### Install Cypress via NPM:

```bash
npm install cypress --save-dev
```

### Running the Tests:

```bash
npx cypress open
```

### You can also run the tests in headless mode:

```bash
npx cypress run
``
