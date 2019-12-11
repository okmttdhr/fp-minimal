export { pipe } from "./pipe";

export function curry(func: Function) {
  return function curried(...args: any[]) {
    if (args.length >= func.length) {
      return func.apply(this, args);
    } else {
      return function(...args2: any[]) {
        return curried.apply(this, args.concat(args2));
      };
    }
  };
}
