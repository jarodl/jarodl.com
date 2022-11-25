export declare let current_component: any;
export declare function set_current_component(component: any): void;
export declare function get_current_component(): any;
export declare function beforeUpdate(fn: () => any): void;
export declare function onMount(fn: () => any): void;
export declare function afterUpdate(fn: () => any): void;
export declare function onDestroy(fn: () => any): void;
export interface DispatchOptions {
    cancelable?: boolean;
}
export declare function createEventDispatcher<EventMap extends {} = any>(): <EventKey extends Extract<keyof EventMap, string>>(type: EventKey, detail?: EventMap[EventKey], options?: DispatchOptions) => boolean;
export declare function setContext<T>(key: any, context: T): T;
export declare function getContext<T>(key: any): T;
export declare function getAllContexts<T extends Map<any, any> = Map<any, any>>(): T;
export declare function hasContext(key: any): boolean;
export declare function bubble(component: any, event: any): void;
