type EventType = ('cancellation-unsubscribe-trial' | 'cancellation-unsubscribe-paid' | 'cancellation-billing-error');
declare const _default: {
    init: (key: string) => void;
    registerEvent: (event: Event, eventType: EventType) => void;
};
export default _default;
