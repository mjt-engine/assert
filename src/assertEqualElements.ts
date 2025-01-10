import { assertEqual } from "./assertEqual";
import type { AssertionMessage } from "./type/AssertionMessage";
import { lengthOf } from "./lengthOf";
import type { ListLike } from "./type/ListLike";

export const assertEqualElements = (
  a: ListLike,
  b: ListLike,
  message: AssertionMessage = () => {
    console.error(a, b);
    return `Assertion failed: ${JSON.stringify(
      a
    )} is not equal to ${JSON.stringify(b)}`;
  }
) => {
  throw new Error("assertEqualElements: Bitrotted");
  // if (a === b) {
  //   return true;
  // }
  // if (!a || !b) {
  //   return false;
  // }
  // const [aLength, bLength] = [lengthOf(a), lengthOf(b)];
  // assertEqual(
  //   aLength,
  //   bLength,
  //   message ||
  //     `Assertion failed: array length ${aLength} not equal to ${bLength}`
  // );
  // for (let i = 0; i < aLength; i++) {
  //   const aElement = a[i];
  //   const bElement = b[i];
  //   if (Array.isArray(aElement) && Array.isArray(bElement)) {
  //     assertEqualElements(aElement, bElement, message);
  //   } else {
  //     assertEqual(
  //       toStableValue(aElement),
  //       toStableValue(bElement),
  //       message ||
  //         `Assertion failed: at index: a[${i}]=>${JSON.stringify(
  //           aElement
  //         )} not equal to b[${i}]=>${JSON.stringify(bElement)}`
  //     );
  //   }
  // }
};
