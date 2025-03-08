import { Injectable } from '@nestjs/common';

@Injectable()
export class Challenge2Service {
  getResult(array: number[]): number[] {
    // Write the code for Challenge 2 here
    if (array.length === 0) {
      return [];
    }

    let count = 1;
    for (let i = 1; i < array.length; i++) {
      if (array[i] !== array[i - 1]) {
        count++;
      }
    }

    let result = new Array(count);
    let index = 0;
    let sum = array[0];

    for (let i = 1; i < array.length; i++) {
      if (array[i] === array[i - 1]) {
        sum += array[i];
      } else {
        result[index++] = sum;
        sum = array[i];
      }
    }
    result[index] = sum;

    return result;
  }
}
