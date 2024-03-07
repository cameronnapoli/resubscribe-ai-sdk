# Resubscribe.ai SDK

Usage:

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