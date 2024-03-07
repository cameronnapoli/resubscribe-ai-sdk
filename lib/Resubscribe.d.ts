interface User {
    id: string;
    email: string;
}
declare class Resubscribe {
    private static apiKey;
    static init(apiKey: string): void;
    static registerEvent(eventType: string, user: User): void;
}
export default Resubscribe;
