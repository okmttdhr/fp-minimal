export function pipe<T0, T1>(first: (a: T0) => T1): (input: T0) => T1;
export function pipe<T0, T1, T2>(first: (a: T0) => T1, second: (a: T1) => T2): (input: T0) => T2;
export function pipe<T0, T1, T2, T3>(first: (a: T0) => T1, second: (a: T1) => T2, third: (a: T2) => T3): (input: T0) => T3;
export function pipe<T0, T1, T2, T3, T4>(
  first: (a: T0) => T1,
  second: (a: T1) => T2,
  third: (a: T2) => T3,
  fourth: (a: T3) => T4,
): (a: T0) => T4;
export function pipe<T0, T1, T2, T3, T4, T5>(
  first: (a: T0) => T1,
  second: (a: T1) => T2,
  third: (a: T2) => T3,
  fourth: (a: T3) => T4,
  fifth: (a: T4) => T5,
): (input: T0) => T5;
export function pipe<T0, T1, T2, T3, T4, T5, T6>(
  first: (a: T0) => T1,
  second: (a: T1) => T2,
  third: (a: T2) => T3,
  fourth: (a: T3) => T4,
  fifth: (a: T4) => T5,
  sixth: (a: T5) => T6,
): (input: T0) => T6;
export function pipe<T0, T1, T2, T3, T4, T5, T6, T7>(
  first: (a: T0) => T1,
  second: (a: T1) => T2,
  third: (a: T2) => T3,
  fourth: (a: T3) => T4,
  fifth: (a: T4) => T5,
  sixth: (a: T5) => T6,
  seventh: (a: T6) => T7,
): (input: T0) => T7;
export function pipe<T0, T1, T2, T3, T4, T5, T6, T7, T8>(
  first: (a: T0) => T1,
  second: (a: T1) => T2,
  third: (a: T2) => T3,
  fourth: (a: T3) => T4,
  fifth: (a: T4) => T5,
  sixth: (a: T5) => T6,
  seventh: (a: T6) => T7,
  eighth: (a: T7) => T8,
): (input: T0) => T8;

export function pipe(...args: Function[]): any {
  return (input: any) => args.reduce((result, next) => next(result), input);
}
