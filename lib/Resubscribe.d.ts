export interface ResubUser {
    id: string;
    email: string;
}
export type ResubEventType = ('cancellation-unsubscribe-trial' | 'cancellation-unsubscribe-paid' | 'cancellation-billing-error');
export interface ResubInitOptions {
    apiKey: string;
}
declare const _default: {
    init: ({ apiKey: key, }: ResubInitOptions) => void;
    registerEvent: (eventType: ResubEventType, user: ResubUser) => Promise<void>;
};
export default _default;
