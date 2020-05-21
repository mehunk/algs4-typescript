import Comparator from '../utils/comparator';
import { compareFunction } from '../utils/sort';

export default class Sort<T = number> {
  protected comparator: Comparator<T>;

  constructor(compare: CompareFunction = compareFunction) {
    this.comparator = new Comparator<T>(compare);
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  public sort(_a: T[]): void {
    throw new Error('sort method must be implemented');
  }
}
