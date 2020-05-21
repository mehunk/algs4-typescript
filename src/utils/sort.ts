export const compareFunction: CompareFunction = <T>(a: T, b: T) => {
  if (a > b) {
    return 1;
  } else if (a < b) {
    return -1;
  } else {
    return 0;
  }
};

export function less<T>(compare: CompareFunction, a: T, b: T): boolean {
  return compare(a, b) < 0;
}

export function isSorted<T = number>(a: T[], compare?: CompareFunction): boolean;
export function isSorted<T = number>(a: T[], lo: number, hi: number, compare?: CompareFunction): boolean;
export function isSorted<T = number>(
  a: T[],
  lo: number | CompareFunction = 0,
  hi = a.length,
  compare: CompareFunction = compareFunction,
): boolean {
  if (typeof lo === 'function') {
    compare = lo;
    lo = 0;
  }

  function less<T>(a: T, b: T): boolean {
    return compare<T>(a, b) === -1;
  }

  for (let i = lo + 1; i <= hi; i++) {
    if (less(a[i], a[i - 1])) {
      return false;
    }
  }
  return true;
}
