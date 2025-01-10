import { assert } from "./assert";
import { assertType } from "./assertType";
import { assertUnreachable } from "./assertUnreachable";
import { assertValue } from "./assertValue";
export declare const Asserts: {
    assert: typeof assert;
    assertUnreachable: typeof assertUnreachable;
    assertValue: typeof assertValue;
    assertEqual: <T>(a: T, b: T, message?: import("./type/AssertionMessage").AssertionMessage) => void;
    assertNotEqual: <T>(a: T, b: T, message?: import("./type/AssertionMessage").AssertionMessage) => void;
    assertEqualElements: (a: import("./type/ListLike").ListLike, b: import("./type/ListLike").ListLike, message?: import("./type/AssertionMessage").AssertionMessage) => never;
    assertType: typeof assertType;
};
