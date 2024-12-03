# Airalo Test 

This project is an automated testing framework built using Playwright with the Page Object Model (POM) design pattern. It supports both UI and API testing, with environment variable management using `dotenv`. The framework is modular, scalable, and easy to extend.

## Tests Included
- Search for a country and verify the eSIM details.
- API test to create an order and verify its details.

## Prerequisites

- Playwright installed globally or locally in your project.
- Node.js installed (LTS version recommended).
- npm or yarn for managing dependencies.

## Installation

1. Clone the repository:
   ```bash
   git clone git@github.com:AttiaMinAllah/airalo-techtask.git
   cd airalo-techtask
2. Install dependencies:
```bash
  npm install

```
3. Add a .env file in the root directory and replace placeholders with actual values:
  ```bash
  API_BASE_URL=<URL>
  CLIENT_ID=<ClientID>
  CLIENT_SECRET=<ClientSecret>
```
4. Run Tests
```bash
 UI: npx playwright test ui-test
API: npx playwright test --config=playwright-api.config.js
```
5. Tests Execution Demo

[![Demo Video](https://via.placeholder.com/800x450.png?text=Click+to+Watch+Demo)](https://github.com/user-attachments/assets/cb41f0f5-006e-443b-8729-926e94288311)



