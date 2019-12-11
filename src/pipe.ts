export function pipe<T1>(first: (...args: any[]) => T1): T1;
export function pipe<T1, T2>(first: (...args: any[]) => T1, second: (a: T1) => T2): T2;
export function pipe<T1, T2, T3>(first: (...args: any[]) => T1, second: (a: T1) => T2, third: (a: T2) => T3): T3;
export function pipe<T1, T2, T3, T4>(
  first: (...args: any[]) => T1,
  second: (a: T1) => T2,
  third: (a: T2) => T3,
  fourth: (a: T3) => T4,
): T4;
export function pipe<T1, T2, T3, T4, T5>(
  first: (...args: any[]) => T1,
  second: (a: T1) => T2,
  third: (a: T2) => T3,
  fourth: (a: T3) => T4,
  fifth: (a: T4) => T5,
): T5;
export function pipe<T1, T2, T3, T4, T5, T6>(
  first: (...args: any[]) => T1,
  second: (a: T1) => T2,
  third: (a: T2) => T3,
  fourth: (a: T3) => T4,
  fifth: (a: T4) => T5,
  sixth: (a: T5) => T6,
): T6;
export function pipe<T1, T2, T3, T4, T5, T6, T7>(
  first: (...args: any[]) => T1,
  second: (a: T1) => T2,
  third: (a: T2) => T3,
  fourth: (a: T3) => T4,
  fifth: (a: T4) => T5,
  sixth: (a: T5) => T6,
  seventh: (a: T6) => T7,
): T7;
export function pipe<T1, T2, T3, T4, T5, T6, T7, T8>(
  first: (...args: any[]) => T1,
  second: (a: T1) => T2,
  third: (a: T2) => T3,
  fourth: (a: T3) => T4,
  fifth: (a: T4) => T5,
  sixth: (a: T5) => T6,
  seventh: (a: T6) => T7,
  eighth: (a: T7) => T8,
): T8;

export function pipe(first: Function, ...args: Function[]): any {
  return args && args.length ? args.reduce((result, next) => next(result), first()) : first();
}
