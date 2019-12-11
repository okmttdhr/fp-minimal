export function curry<T1, R1>(func: (a: T1) => R1): (a: T1) => R1;
export function curry<T1, T2, R1>(func: (a: T1, b: T2) => R1): (a: T1) => (b: T2) => R1;
export function curry<T1, T2, T3, R1>(func: (a: T1, b: T2, c: T3) => R1): (a: T1) => (b: T2) => (c: T3) => R1;
export function curry<T1, T2, T3, T4, R1>(func: (a: T1, b: T2, c: T3, d: T4) => R1): (a: T1) => (b: T2) => (c: T3) => (d: T4) => R1;
export function curry<T1, T2, T3, T4, T5, R1>(func: (a: T1, b: T2, c: T3, d: T4, e: T5) => R1): (a: T1) => (b: T2) => (c: T3) => (d: T4) => (e: T5) => R1;
export function curry<T1, T2, T3, T4, T5, T6, R1>(func: (a: T1, b: T2, c: T3, d: T4, e: T5, f: T6) => R1): (a: T1) => (b: T2) => (c: T3) => (d: T4) => (e: T5) => (f: T6) => R1;
export function curry<T1, T2, T3, T4, T5, T6, T7, R1>(func: (a: T1, b: T2, c: T3, d: T4, e: T5, f: T6, g: T7) => R1): (a: T1) => (b: T2) => (c: T3) => (d: T4) => (e: T5) => (f: T6) => (g: T7) => R1;
export function curry<T1, T2, T3, T4, T5, T6, T7, T8, R1>(func: (a: T1, b: T2, c: T3, d: T4, e: T5, f: T6, g: T7, h: T8) => R1): (a: T1) => (b: T2) => (c: T3) => (d: T4) => (e: T5) => (f: T6) => (g: T7) => (h: T8) => R1;

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
