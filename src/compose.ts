export function compose<T0, T1>(first: (a: T0) => T1): (input: T0) => T1;
export function compose<T0, T1, T2>(second: (a: T1) => T2, first: (a: T0) => T1): (input: T0) => T2;
export function compose<T0, T1, T2, T3>(third: (a: T2) => T3, second: (a: T1) => T2, first: (a: T0) => T1): (input: T0) => T3;
export function compose<T0, T1, T2, T3, T4>(
  fourth: (a: T3) => T4,
  third: (a: T2) => T3,
  second: (a: T1) => T2,
  first: (a: T0) => T1,
): (a: T0) => T4;
export function compose<T0, T1, T2, T3, T4, T5>(
  fifth: (a: T4) => T5,
  fourth: (a: T3) => T4,
  third: (a: T2) => T3,
  second: (a: T1) => T2,
  first: (a: T0) => T1,
): (input: T0) => T5;
export function compose<T0, T1, T2, T3, T4, T5, T6>(
  sixth: (a: T5) => T6,
  fifth: (a: T4) => T5,
  fourth: (a: T3) => T4,
  third: (a: T2) => T3,
  second: (a: T1) => T2,
  first: (a: T0) => T1,
): (input: T0) => T6;
export function compose<T0, T1, T2, T3, T4, T5, T6, T7>(
  seventh: (a: T6) => T7,
  sixth: (a: T5) => T6,
  fifth: (a: T4) => T5,
  fourth: (a: T3) => T4,
  third: (a: T2) => T3,
  second: (a: T1) => T2,
  first: (a: T0) => T1,
): (input: T0) => T7;
export function compose<T0, T1, T2, T3, T4, T5, T6, T7, T8>(
  eighth: (a: T7) => T8,
  seventh: (a: T6) => T7,
  sixth: (a: T5) => T6,
  fifth: (a: T4) => T5,
  fourth: (a: T3) => T4,
  third: (a: T2) => T3,
  second: (a: T1) => T2,
  first: (a: T0) => T1,
): (input: T0) => T8;

export function compose(...args: Function[]): any {
  return (input: any) => args.reduceRight((result, next) => next(result), input);
}
