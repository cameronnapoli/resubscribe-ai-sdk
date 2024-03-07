interface User {
  id: string;
  email: string;
};

type EventType = (
  'cancellation-unsubscribe-trial' |
  'cancellation-unsubscribe-paid' |
  'cancellation-billing-error'
)

let apiKey: string | undefined;

const init = (key: string) => {
  apiKey = key;
};

const registerEvent = (event: Event, eventType: EventType) => {
  if (!apiKey) {
    console.error("API key is not initialized.");
    return;
  }
  // TODO: implement
  console.log(`Event Registered: ${eventType}`, event, `with API key: ${apiKey}`);
};

export default {
  init,
  registerEvent
};
