interface ResubUser {
    id: string;
    email: string;
}
type ResubEventType = ('cancellation-unsubscribe-trial' | 'cancellation-unsubscribe-paid' | 'cancellation-billing-error');
interface ResubInitOptions {
    apiKey: string;
}
declare const _default: {
    init: ({ apiKey: key, }: ResubInitOptions) => void;
    registerEvent: (eventType: ResubEventType, user: ResubUser) => void;
};
export default _default;
