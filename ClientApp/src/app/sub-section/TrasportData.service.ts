import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TransportData {
  Title = new Subject<string>();

  changeTitle(title: string) {
    this.Title.next(title);
  }
}
