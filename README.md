# Resubscribe.ai SDK

TypeScript usage:

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

If you're using node, change the import like so:

```javascript
const Resubscribe = require('resubscribe-sdk').default;
```