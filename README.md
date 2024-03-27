# Resubscribe SDK

The official TypeScript SDK for [Resubscribe](https://resubscribe.ai/).

## Usage

### Direct Link

Directly link your users to Resubscribe.

```javascript
import Resubscribe from 'resubscribe-sdk';

const url = await Resubscribe.getLink({
  email: 'example@acme.org',
  userId: 'user_987654321',
});

// add url to an email, push notification, etc.
```

### Cancellation Events

Send an email to your users when they cancel their subscription.

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