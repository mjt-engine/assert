import type { AssertionMessage } from "./type/AssertionMessage";
export declare function assertType<T>(value: unknown, typeGuard: (maybe: unknown) => maybe is T, message?: AssertionMessage): T;
