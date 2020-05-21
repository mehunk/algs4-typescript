import Sort from './sort';

export default class MergeSort<T = number> extends Sort<T> {
  private merge(a: T[], aux: T[], lo: number, mid: number, hi: number): void {
    for (let k = lo; k <= hi; k++) {
      aux[k] = a[k];
    }

    let i = lo;
    let j = mid + 1;

    for (let k = lo; k <= hi; k++) {
      if (i > mid) {
        a[k] = aux[j++];
      } else if (j > hi) {
        a[k] = aux[i++];
      } else if (this.comparator.less(aux[j], aux[i])) {
        // key of stability
        a[k] = aux[j++];
      } else {
        a[k] = aux[i++];
      }
    }
  }

  private mergeSort(a: T[], aux: T[], lo: number, hi: number): void {
    if (lo >= hi) {
      return;
    }

    const mid = lo + Math.floor((hi - lo) / 2);
    // console.log(lo, hi, mid);
    this.mergeSort(a, aux, lo, mid);
    this.mergeSort(a, aux, mid + 1, hi);
    this.merge(a, aux, lo, mid, hi);
    // console.log(lo, mid, hi);
  }

  public sort(a: T[]): void {
    const n = a.length;

    // create auxilary array
    const aux = new Array(n);

    this.mergeSort(a, aux, 0, n - 1);
  }
}
