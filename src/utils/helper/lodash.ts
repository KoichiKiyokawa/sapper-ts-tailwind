export const sum = (nums: number[]) => nums.reduce((a, c) => a + c, 0);
export const sumBy = (nums: object[], key: string) =>
  nums.reduce((a, c) => a + (c[key] as number), 0);
/**
 * @example
 * compose(add1, double)(1)
 * // => double(add1(1))
 * // => double(2)
 * // => 4
 */
export const compose = (...functions: Function[]) => (arg: any) => functions.reduce((a, fn) => fn(a), arg)
