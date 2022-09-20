/**
 * Throttle function with a trailing edge.
 *
 * @param func function to execute
 * @param wait time in milliseconds to wait before calling again
 * @returns
 */
export default function throttle(func: () => void, wait: number = 100) {
  let context: any, args: any;
  let waiting = false;
  let doTrailing = false;
  return function () {
    context = this;
    args = arguments;
    if (!waiting) {
      func.apply(context, args);
      waiting = true;
      window.setTimeout(function () {
        if (doTrailing) {
          func.apply(context, args);
        }
        waiting = false;
        doTrailing = false;
        context = args = null;
      }, wait);
    } else {
      doTrailing = true;
    }
  };
}
