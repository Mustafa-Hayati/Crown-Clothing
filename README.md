# 👑 E-commerce Crown Clothing

I created this app using [Andrei Neagoie](https://github.com/aneagoie) and [Yihua Zhang's](https://github.com/ZhangMYihua)  [Complete React Developer in 2020](https://www.udemy.com/course/complete-react-developer-zero-to-mastery/) course. I used **[TypeScript](https://www.typescriptlang.org/)** instead of JavaScript and all components, except the _ErrorBoundary_ component, are written using functional components.

I skipped the **GraphQL** and **hooks** sections, because I know them well. I also didn't use much of **styled components**, because I don't like _CSS in JS_. The **styling is unfinished**. I also didn't write any tests. Contact Page is also empty.

## Technology used

### Frontend

- [TypeScript](https://www.typescriptlang.org/)
- [React](https://reactjs.org/)
- [React Router](https://reacttraining.com/react-router/)
- [Redux](https://redux.js.org/)
- [redux-thunk](https://www.npmjs.com/package/redux-thunk)
- [redux-saga](https://redux-saga.js.org/)
- [reselect](https://github.com/reduxjs/reselect#motivation-for-memoized-selectors)
- [redux persist](https://github.com/rt2zz/redux-persist)
- [styled-components](https://www.styled-components.com/)

### Backend

- [NodeJS](https://nodejs.org/en/)
- [express](https://expressjs.com/)
- [firebase](https://firebase.google.com/)
- [Stripe](https://stripe.com/)

## Quick Start

Download the zip file or Clone this repo, using:

```bash
git clone https://github.com/eXvimmer/Crown-Clothing.git
```

Install the dependencies:

```bash
npm install
```

> ⚠ If you get errors in the client side (react app), then go to the client directory and run `npm install`.
---
> ⚠ You also need to add your stripe secret key to the `.env` file. This file won't be added here:
> `STRIPE_SECRET_KEY=the key provided to you by stripe`

## Run App

```bash
# to run server in dev mode
npm run server

# to run server in prod mode
npm start

# to run client only
npm run client

# to build the client
npm run build

# to run both frontend and backend in dev mode
npm run dev
```
