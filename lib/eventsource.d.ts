// Type definitions for eventsource 1.1
// Project: http://github.com/EventSource/eventsource
// Definitions by: Scott Lee Davis <https://github.com/scottleedavis>
//                 Ali Afroozeh <https://github.com/afroozeh>
//                 Pedro Gámez <https://github.com/snakedrak>
//                 Akuukis <https://github.com/Akuukis>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

// eventsource uses DOM dependencies which are absent in a browserless environment like node.js.
// to avoid compiler errors this monkey patch is used. See more details in:
// - sinon: https://github.com/DefinitelyTyped/DefinitelyTyped/issues/11351
// - rxjs: https://github.com/ReactiveX/rxjs/issues/1986
/// <reference path="./eventsource-dom-patch.d.ts" />

declare class EventSource {
  static readonly CLOSED: number;
  static readonly CONNECTING: number;
  static readonly OPEN: number;
  static readonly RETRYING: number;

  constructor(url: string, eventSourceInitDict?: EventSource.EventSourceInitDict);

  readonly CLOSED: number;
  readonly CONNECTING: number;
  readonly OPEN: number;
  readonly RETRYING: number;
  readonly url: string;
  readonly readyState: number;
  readonly withCredentials: boolean;
  onopen: (evt: MessageEvent) => any;
  onmessage: (evt: MessageEvent) => any;
  onerror: (evt: MessageEvent) => any;
  onretrying: (evt: MessageEvent) => any;
  onclosed: (evt: MessageEvent) => any;
  addEventListener(type: string, listener: EventListener): void;
  dispatchEvent(evt: Event): boolean;
  removeEventListener(type: string, listener?: EventListener): void;
  close(): void;
}

declare namespace EventSource {
  enum ReadyState { CONNECTING = 0, OPEN = 1, CLOSED = 2, RETRYING }

  interface EventSourceInitDict {
    withCredentials?: boolean | undefined;
    headers?: object | undefined;
    proxy?: string | undefined;
    https?: object | undefined;
    rejectUnauthorized?: boolean | undefined;
  }
}

export = EventSource;
