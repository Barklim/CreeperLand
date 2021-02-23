// eslint-disable-next-line @typescript-eslint/no-explicit-any
export interface AnyObject<T = any> {
  [key: string]: T;
}

export type ValueOf<T> = T[keyof T];
