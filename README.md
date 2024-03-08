# Resubscribe.ai SDK

The official TypeScript SDK for [Resubscribe](https://resubscribe.ai/).

## Usage

TypeScript:

```javascript
import Resubscribe from 'resubscribe-sdk';

// init API key
Resubscribe.init({
  apiKey: process.env.RESUBSCRIBE_API_KEY, // your API key
};

// register an event
Resubscribe.registerEvent(
  'cancellation-unsubscribe-paid',
  {
    id: '123',
    email: '',
  },
);
```

Node.js:

```javascript
const Resubscribe = require('resubscribe-sdk').default;
```