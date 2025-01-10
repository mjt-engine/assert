import type { AssertionMessage } from "./type/AssertionMessage";
export declare function assertValue<T>(maybe: T, message?: AssertionMessage): NonNullable<T>;
