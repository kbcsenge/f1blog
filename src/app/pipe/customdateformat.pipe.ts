import { Pipe, PipeTransform } from '@angular/core';
import {DatePipe} from "@angular/common";

@Pipe({
  name: 'customdateformat'
})
export class CustomDateFormatPipe extends DatePipe implements PipeTransform {

  override transform(value: any, args?: any): any {
    let formattedDate = super.transform(value, 'yyyy.MM.dd. HH:mm');
    let dayOfWeek = super.transform(value, 'EEEE');
    return `${formattedDate} (${dayOfWeek})`;
  }
}
