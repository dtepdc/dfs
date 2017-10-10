import { Pipe, PipeTransform } from '@angular/core';
import { Stats } from '../over-under/over-under.interface';

@Pipe({
  name: 'sortStats'
})
export class SortStatsPipe implements PipeTransform {
transform(array: Array<string>, args: string): Array<string> {
  if (array !== undefined) {
    array.sort((a: any, b: any) => {
      if ( a[args] < b[args] ) {
        return 1;
      } else if ( a[args] > b[args] ) {
        return -1;
      } else {
        return 0;
  }
    });
    return array;
    }
  }
}

// export class SortStatsPipe implements PipeTransform {
//   transform(stats: Stats[], columns: string[], order: number): any {

//     if (!stats || !order) { return stats; }

//     return stats.sort((a: Stats, b: Stats): any => {
//       columns.forEach(x => {
//         a = a[x];
//         b = b[x];
//       });

//             return a > b ? order : order * (- 1);
//   });
// }
// }

