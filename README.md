
# FitPeo Web App Automation Testing

This project focuses on the automation testing of the FitPeo web app using Cypress with JavaScript for UI automation. It follows the Page Object Model (POM) design pattern to maintain a structured and maintainable codebase.

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Getting Started](#getting-started)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [UI Automation](#ui-automation)
- [Acknowledgments](#acknowledgments)

## Introduction

This project aims to automate the testing of the FitPeo web app to ensure its functionality. It combines UI automation using Cypress with JavaScript for a comprehensive testing approach.
## Features

- UI automation of the FitPeo web app.
- Page Object Model (POM) for organized and maintainable code.
- Comprehensive test coverage for ensuring app quality.

## Getting Started

Follow these instructions to set up and run the automation tests locally.


### Folder Structure

```
├───cypress
│   ├───downloads
│   ├───e2e
│   │   └───modules
│   │       └───revenue_calculator.cy.js     -->This is the module file which have only test cases.
│   ├───fixtures
│   ├───PageObjects                     -->This is the page object which have all actions and element locators
│   │   ├───pageActions                 --> It contains all page actions
│   │   └───pageElements                --> It contains all page elements
│   ├───reportsts                       --> It contains all reports 
│   │   └───html
│   ├───support
│   └───videos                          --> Here we get video recording of execution of the test cases
│       
├───node_modules
├───.gitignore
├───cypress.config.js
├───pakage-lock.json
├───pakage.json
|___README.md
```

### Prerequisites

Before getting started, make sure you have the following prerequisites installed:

- [Node.js](https://nodejs.org/) and npm (Node Package Manager)
- [Cypress](https://www.cypress.io/)
    or
    Install Cypress:
```
npm install -g cypress

```

### Installation

1. Clone this repository to your local machine:

   ```shell
   https://github.com/Amitaryan9906/fitpeo_Assignment.git
   ```

2. Install project dependencies:

   ```shell
   cd Fitpeo
   npm install
   ```

3. Configure your test environment as needed.

for cypress
 ```
 npx cypress open

 ```

 4. Configure your automation reporter by intalling all dependencies:

 for 'UI Automation':

 Install or update all dependencies according to the current versions
 ```
 {
  "devDependencies": {
    "cypress": "^13.13.2",
    "cypress-mochawesome-reporter": "^3.8.2",
    "cypress-xpath": "^2.0.1"
  },
  "dependencies": {
    "jquery": "^3.7.1",
    "xpath": "^0.0.34"
  }
}

 ```


### UI Automation

To run the UI automation tests using Cypress and JavaScript, use the following command:

```shell
npx cypress run --spec <spec>

```
Or to run all tests in a specific folder:

```
npx cypress run --spec <Folder Path>
```
Or to run full project and To generate mochawesome report use custom command,

```
npx cypress run 
```
or
 ```
 npx cypress <config file path>
```

### View HTML Report 
```
index.html
```
index.html  open with live server

## Acknowledgments

We would like to thank the Cypress communities for their valuable resources and support.
