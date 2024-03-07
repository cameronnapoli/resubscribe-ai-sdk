interface User {
  id: string;
  email: string;
};

class Resubscribe {
  private static apiKey: string;

  static init(apiKey: string) {
    Resubscribe.apiKey = apiKey;
  }

  static registerEvent(eventType: string, user: User) {
    // Implementation to register the event
    console.log(`Event Registered: ${eventType}`, user);
  }
}

export default Resubscribe;
