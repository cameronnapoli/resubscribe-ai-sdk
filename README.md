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
  {
    id: 'event_12346789',
    type: 'cancellation-unsubscribe-paid',
  },
  {
    userId: 'user_987654321',
    email: 'example@acme.org',
  },
);
```

Node.js:

```javascript
const Resubscribe = require('resubscribe-sdk').default;
```