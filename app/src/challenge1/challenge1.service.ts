import { Injectable } from '@nestjs/common';

@Injectable()
export class Challenge1Service {
  getResult(array: number[]): number {
    // Write the code for Challenge 1 here
    let n = array.length;

    for (let i = 0; i < n; i++) {
      if (array[i] <= 0 || array[i] > n) {
        array[i] = 0;
      }
    }

    for (let i = 0; i < n; i++) {
      let val = Math.abs(array[i]);
      if (val > 0 && val <= n) {
        if (array[val - 1] > 0) {
          array[val - 1] = -array[val - 1];
        } else if (array[val - 1] === 0) {
          array[val - 1] = -(n + 1);
        }
      }
    }

    for (let i = 0; i < n; i++) {
      if (array[i] >= 0) {
        return i + 1;
      }
    }
    return n + 1;
  }
}
