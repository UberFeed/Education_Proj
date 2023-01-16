import { Component, OnInit, Output } from '@angular/core';
import { TransportData } from '../../../TrasportData.service';

@Component({
  selector: 'app-figure',
  templateUrl: './figure.component.html',
  styleUrls: ['../../../general-style.css']
})
export class FigureComponent implements OnInit {

  constructor(
    private transportData: TransportData,
  ) { }

  title: string = "Добавление изображений";

  textPath: Array<object> = [
    { section: 'Раздел HTML', path: '/#part-1' },
    { section: 'Изображения', path: 'html/basics' }
  ];

  @Output()
  NameComponent: string = "Добаление изображения на страницу";

  @Output()
  interactiveExample: string = "<img src='/assets/img/index.jpg' alt='Фрукты' width='250'>";

  @Output()
  staticExample1: string = "<img src='/assets/img/index.jp' alt='Данный текст появится в случае\n\t\t  ошибки загрузки изображения' width='250'>";


  ngOnInit(): void {
    let headers = document.querySelectorAll("h2.head");
    this.transportData.changeTitle(this.title, headers, this.textPath);

  }

}
