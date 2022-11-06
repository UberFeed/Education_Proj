import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TransportData {
  Title = new Subject<string>();
  Headers = new Subject<any>();
  TextPath = new Subject<Array<object>>();

  changeTitle(title: string, headers: any, textPath: Array<object>) {
    this.Title.next(title);
    this.Headers.next(headers);
    this.TextPath.next(textPath);
  }
}
