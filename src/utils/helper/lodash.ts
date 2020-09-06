export const sum = (nums: number[]) => nums.reduce((a, c) => a + c, 0);
export const sumBy = (nums: object[], key: string) =>
  nums.reduce((a, c) => a + (c[key] as number), 0);
