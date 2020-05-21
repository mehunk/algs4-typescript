export default class Comparator<T = number> {
  constructor(public compare: CompareFunction) {}

  public less(a: T, b: T): boolean {
    return this.compare(a, b) < 0;
  }
}
