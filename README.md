# Resubscribe.ai SDK

TypeScript usage:

```javascript
import Resubscribe from 'resubscribe-ai';

// init API key
Resubscribe.init(process.env.RESUBSCRIBE_API_KEY);

// register an event
Resubscribe.registerEvent(
  {
    id: '123',
    email: '',
  },
  'cancellation-unsubscribe-trial',
);
```

If you're using node, change the import like so:

```javascript
const Resubscribe = require('resubscribe-ai');
```