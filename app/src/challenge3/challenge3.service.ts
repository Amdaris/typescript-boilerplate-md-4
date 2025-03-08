import { Injectable } from '@nestjs/common';

@Injectable()
export class Challenge3Service {
  getResult(array: number[]): boolean {
    // Write the code for Challenge 3 here
    if (array.length === 0) {
      return false;
    }

    let min = array[0], max = array[0];

    for (let i = 1; i < array.length; i++) {
      if (array[i] < min) {
        min = array[i];
      }
      if (array[i] > max) {
        max = array[i];
      }
    }

    if (max - min + 1 !== array.length) {
      return false;
    }

    for (let i = 0; i < array.length; i++) {
      for (let j = i + 1; j < array.length; j++) {
        if (array[i] === array[j]) {
          return false;
        }
      }
    }

    return true;
  }
}
