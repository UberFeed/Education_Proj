import { Component, OnInit, Output } from '@angular/core';
import { TransportData } from '../../../TrasportData.service';

@Component({
  selector: 'app-table-create',
  templateUrl: './table-create.component.html',
  styleUrls: ['../../../general-style.css']
})
export class TableCreateComponent implements OnInit {

  constructor(
    private transportData: TransportData,
  ) { }

  title: string = "Создание таблицы";

  textPath: Array<object> = [
    { section: 'Раздел HTML', path: '/#part-1' },
    { section: 'Таблицы', path: 'html/basics' }
  ];

  @Output()
  NameComponent: string = "Создание таблицы";

  @Output()
  interactiveExample: string = "<link href='./assets/example/Table-create.css' rel='stylesheet'>\n\n<table>\n  <tr>\n\t<th>Заголовок таблицы</th>\n  </tr>\n  <tr>\n\t<td>Тело таблицы</td>\n  </tr>\n</table>";

  @Output()
  staticExample1: string = "<table>\n  <tr>\n\t<th></th>\n\t<th>Суббота</th>\n\t<th>Воскресенье</th>\n  </tr>\n  <tr>\n\t<th>Продано билетов</th>\n\t<td>120</td>\n\t<td>135</td>\n  </tr>\n  <tr>\n\t<th>Выручка</th>\n\t<td>18 000 грн.</td>\n\t<td>20 000 грн.</td>\n  </tr>\n</table>";

  @Output()
  staticExample2: string = "<table>\n  <caption>Таблица с подписью</caption>\n  <tr>\n\t<th>Имя</th>\n\t<th>Фамилия</th>\n  </tr>\n  <tr>\n\t<td>John</td>\n\t<td>Doe</td>\n  </tr>\n  <tr>\n\t<td>Jane</td>\n\t<td>Doe</td>\n  </tr>\n</table>";

  ngOnInit(): void {
    let headers = document.querySelectorAll("h2.head");
    this.transportData.changeTitle(this.title, headers, this.textPath);
  }

}
