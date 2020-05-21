import Sort from './sort';

export default class InsertionSort<T = number> extends Sort<T> {
  private exch<T>(a: T[], i: number, j: number): void {
    [a[i], a[j]] = [a[j], a[i]];
  }

  public sort(a: T[]): void {
    for (let i = 1; i < a.length; i++) {
      for (let j = i; j > 0 && this.comparator.less(a[j], a[j - 1]); j--) {
        this.exch(a, j, j - 1);
      }
    }
  }
}
