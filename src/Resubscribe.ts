interface User {
  id: string;
  email: string;
};

type EventType = (
  'cancellation-unsubscribe-trial' |
  'cancellation-unsubscribe-paid' |
  'cancellation-billing-error'
)

class Resubscribe {
  private static apiKey: string;

  static init(apiKey: string) {
    Resubscribe.apiKey = apiKey;
  }

  static registerEvent(eventType: EventType, user: User) {
    // Implementation to register the event
    console.log(`Event Registered: ${eventType}`, user);
  }
}

export default Resubscribe;
