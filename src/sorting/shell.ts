import Sort from './sort';

export default class ShellSort<T = number> extends Sort<T> {
  private exch<T>(a: T[], i: number, j: number): void {
    [a[i], a[j]] = [a[j], a[i]];
  }

  public sort(a: T[]): void {
    const n = a.length;

    let h = 1;
    while (h < n / 3) {
      h = 3 * h + 1;
    }

    while (h >= 1) {
      // h-sort the aay
      for (let i = 1; i < n; i++) {
        for (let j = i; j >= h && this.comparator.less(a[j], a[j - h]); j -= h) {
          this.exch(a, j, j - h);
        }
      }
      h = (h - 1) / 3;
    }
  }
}
