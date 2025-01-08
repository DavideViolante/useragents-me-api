# Useragents.me Node.js APIs wrapper
[![](https://github.com/davideviolante/useragents-me-api/workflows/Node.js%20CI/badge.svg)](https://github.com/DavideViolante/useragents-me-api/actions?query=workflow%3A"Node.js+CI") [![Coverage Status](https://coveralls.io/repos/github/DavideViolante/useragents-me-api/badge.svg?branch=master)](https://coveralls.io/github/DavideViolante/useragents-me-api?branch=master) [![Maintainability](https://api.codeclimate.com/v1/badges/ded2c349739e4d87130b/maintainability)](https://codeclimate.com/github/DavideViolante/useragents-me-api/maintainability) ![npm](https://img.shields.io/npm/dm/useragents-me-api) [![Donate](https://img.shields.io/badge/paypal-donate-179BD7.svg)](https://www.paypal.me/dviolante)

[![NPM](https://nodei.co/npm/useragents-me-api.png)](https://nodei.co/npm/useragents-me-api/)

Simple Node.js wrapper for [useragents.me](https://useragents.me).

### Install
`npm i useragents-me-api`

### Example
```js
const { useragentsme } = require('useragents-me-api');

async function main() {
  try {
    const res = await useragentsme();
    console.log(res); // [{"ua": "Mozilla/5.0...", "pct": 36.123...}, ...]
  } catch (error) {
    console.log(error);
  }
}
```

### Run tests
```npm test```

### Run lint
```npm run lint```

### Author
- [Nicholas Beaton](https://github.com/stayml/)
- [Davide Violante](https://github.com/DavideViolante/)
