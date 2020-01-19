# Full Stack Personal Finance Web App

This is a personal finance application that allows users to link their bank account via the Plaid API. Current functionality includes basic authentication via JSON Web Token, and the addition, deletion, and refreshing of a bank account. The application will display the user's account balances and transactions. Note that this project is a work in progress - more features are planned to be implemented in the future.

## Setup

1. `git clone https://github.com/jagodin/personal-finance-app`
2. `cd personal-finance-app`
3. `npm install`
4. `npm run dev` to run the development environment.

Obtain your Plaid API keys from [here](https://dashboard.plaid.com/signup) and set up a [MongoDB database](https://www.mongodb.com/download-center)

Configure `./config/default.json`

```
{
    "mongoURI": "YOUR_MONGO_URI",
    "jwtSecret": "YOUR_SECRET_TOKEN"
}
```

## Technologies

1. Node.js
2. React
3. Redux
4. MongoDB
5. Express.js
6. Material UI

## Packages

1. Axios
2. Express Validator
3. JSON Web Token
4. Redux Thunk
5. Bcrypt.js
6. Mongoose

## Screenshots

https://github.com/jagodin/personal-finance-app/blob/master/images/dashboard.JPG

Dashboard and Profile Menu
![Dashboard and Profile Menu](/blob/master/images/dashboard.jpg?raw=true)

Linked Accounts and Balances
![Linked Accounts and Balances](/blob/master/images/linked-accounts.jpg?raw=true)

Transactions
![Transactions](/blob/master/images/transactions.jpg?raw=true)

Plaid Link
![Plaid Link](/blob/master/images/plaid-link.jpg?raw=true)

Responsive Dashboard
![Responsive Dashboard](/blob/master/images/responsive.jpg?raw=true)

## Future Enhancements

1. Implement budgets and categorize transactions into appropriate budget.
2. Add user settings (i.e. UI preferances).
3. Give users the ability to report application issues via the Support page.
4. Implement FAQ.
5. Responsive UI enhancements.
6. Implement cache to prevent user's from overloading the backend and Plaid API.
7. Implement Google Firebase Authentication.

## Disclaimer

Note that the application exposes the user's `access_tokens` and `item_ids` to the client. For production releases, these must be securely persisted to your database and never exposed to the client.

From the Plaid API documentation:

> access_tokens and item_ids are the core identifiers that map your end-users to their financial institutions. You should persist these securely and associate them with users of your application. Make sure, however, that these identifiers are never exposed client-side. Keep in mind that one user can create multiple Items if they have accounts with multiple financial institutions.
