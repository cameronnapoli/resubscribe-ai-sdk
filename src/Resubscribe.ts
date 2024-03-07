interface ResubUser {
  id: string;
  email: string;
};

type ResubEventType = (
  'cancellation-unsubscribe-trial' |
  'cancellation-unsubscribe-paid' |
  'cancellation-billing-error'
)

interface ResubInitOptions {
  apiKey: string;
}

let apiKey: string | undefined;

const init = ({
  apiKey: key,
}: ResubInitOptions) => {
  apiKey = key;
};

const registerEvent = (eventType: ResubEventType, user: ResubUser) => {
  if (!apiKey) {
    console.error("API key is not initialized.");
    return;
  }
  // TODO: implement
  console.log(`Event Registered: "${eventType}" | User: "${user.id} | API key: "${apiKey.slice(0, 4)}..."`);
};

export default {
  init,
  registerEvent
};
