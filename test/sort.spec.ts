// eslint-disable-next-line @typescript-eslint/no-var-requires
const assert = require('power-assert');

import * as stdRandom from '../src/fundamentals/std-random';
import { isSorted } from '../src/utils/sort';
import SelectionSort from '../src/sorting/selection';
import InsertionSort from '../src/sorting/insertion';
import ShellSort from '../src/sorting/shell';
import MergeSort from '../src/sorting/merge';
import QuickSort from '../src/sorting/quick';

const size = 5000;
const originalArr: number[] = new Array(size);
const arr: number[] = new Array(size);

describe('sort', () => {
  beforeAll(() => {
    for (let i = 0; i < size; i++) {
      originalArr[i] = i;
    }
    stdRandom.shuffle(originalArr);
  });

  beforeEach(() => {
    for (let i = 0; i < size; i++) {
      arr[i] = originalArr[i];
    }
  });

  describe('selection sort', () => {
    it('selection sort should sort the array', () => {
      const selectionSort = new SelectionSort();
      selectionSort.sort(arr);
      assert(isSorted(arr));
    });
  });

  describe('insertion sort', () => {
    it('insertion sort should sort the array', () => {
      const insertionSort = new InsertionSort();
      insertionSort.sort(arr);
      assert(isSorted(arr));
    });
  });

  describe('shell sort', () => {
    it('shell sort should sort the array', () => {
      const shellSort = new ShellSort();
      shellSort.sort(arr);
      assert(isSorted(arr));
    });
  });

  describe('merge sort', () => {
    it('merge sort should sort the array', () => {
      const mergeSort = new MergeSort();
      mergeSort.sort(arr);
      assert(isSorted(arr));
    });
  });

  describe('quick sort', () => {
    it('quick sort should sort the array', () => {
      const quickSort = new QuickSort();
      quickSort.sort(arr);
      assert(isSorted(arr));
    });
  });
});
