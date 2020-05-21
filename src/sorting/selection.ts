import Sort from './sort';

export default class SelectionSort<T = number> extends Sort<T> {
  private exch<T>(a: T[], i: number, j: number): void {
    [a[i], a[j]] = [a[j], a[i]];
  }

  public sort(a: T[]): void {
    for (let i = 0; i < a.length; i++) {
      let min = i;
      for (let j = i + 1; j < a.length; j++) {
        if (this.comparator.less(a[j], a[min])) {
          min = j;
        }
      }
      this.exch<T>(a, i, min);
    }
  }
}
