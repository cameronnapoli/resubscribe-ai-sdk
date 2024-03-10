export interface ResubEvent {
    /**
     * The event id from your system.
     */
    id: string;
    type: ResubEventType;
    revenueCat?: Record<string, any>;
}
export interface ResubUser {
    /**
     * The user id in your system.
     */
    userId: string;
    email?: string;
}
export type ResubEventType = ('cancellation-unsubscribe-trial' | 'cancellation-unsubscribe-paid' | 'cancellation-billing-error' | 'cancellation-price-increase' | 'cancellation-customer-support' | 'cancellation-unknown' | 'test');
export interface ResubInitOptions {
    apiKey: string;
}
declare const _default: {
    init: ({ apiKey: key, }: ResubInitOptions) => void;
    registerEvent: (event: ResubEvent, user: ResubUser) => Promise<void>;
};
export default _default;
