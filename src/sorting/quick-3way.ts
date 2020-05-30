import { shuffle } from '../fundamentals/std-random';
import Sort from './sort';

export default class QuickSort<T = number> extends Sort<T> {
  public sort(a: T[]): void {
    shuffle(a);
    this.quickSort(a, 0, a.length - 1);
  }

  quickSort(a: T[], lo: number, hi: number): void {
    if (hi <= lo) {
      return;
    }

    let lt = lo;
    let gt = hi;
    const v = a[lo];
    let i = lt + 1;

    while (i <= gt) {
      const cmp = this.comparator.compare(a[i], v);
      if (cmp < 0) {
        this.exch(a, i++, lt++);
      } else if (cmp > 0) {
        this.exch(a, i, gt--);
      } else if (v === a[i]) {
        i++;
      }
    }

    this.quickSort(a, lo, lt - 1);
    this.quickSort(a, gt + 1, hi);
  }

  private exch<T>(a: T[], i: number, j: number): void {
    [a[i], a[j]] = [a[j], a[i]];
  }
}
