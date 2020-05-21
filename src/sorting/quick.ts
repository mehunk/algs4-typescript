import Sort from './sort';

export default class QuickSort<T = number> extends Sort<T> {
  public sort(a: T[]): void {
    this.quickSort(a, 0, a.length - 1);
  }

  private quickSort(a: T[], lo: number, hi: number): void {
    if (lo >= hi) {
      return;
    }

    const j = this.partition(a, lo, hi);
    this.quickSort(a, lo, j - 1);
    this.quickSort(a, j + 1, hi);
  }

  private partition(a: T[], lo: number, hi: number): number {
    let i = lo;
    let j = hi + 1;
    const v = a[lo];

    while (true) {
      while (this.comparator.less(a[++i], v) && i !== hi);
      while (this.comparator.less(v, a[--j]) && j !== lo);
      if (i >= j) {
        break;
      }
      this.exch(a, i, j);
    }
    this.exch(a, lo, j);
    return j;
  }

  private exch<T>(a: T[], i: number, j: number): void {
    [a[i], a[j]] = [a[j], a[i]];
  }
}
