export function random(): number {
  return Math.random();
}

export function uniform(a: number, b: number): number;
export function uniform(n: number): number;
export function uniform(): number;
export function uniform(a = 0, b?: number): number {
  if (typeof a !== 'undefined' && typeof b !== 'undefined') {
    return a + Math.floor(random() * (b - a));
  } else if (typeof a !== 'undefined') {
    return Math.floor(random() * a);
  } else {
    return random();
  }
}

export function shuffle<T = number>(a: T[], lo: number, hi: number): void;
export function shuffle(a: number[], lo: number, hi: number): void;
export function shuffle<T = number>(a: T[]): void;
export function shuffle<T = number>(a: T[], lo = 0, hi = a.length): void {
  lo = lo || 0;
  hi = hi || a.length;
  for (let i = lo; i < hi; i++) {
    const r = i + uniform(hi - i);
    [a[i], a[r]] = [a[r], a[i]];
  }
}
