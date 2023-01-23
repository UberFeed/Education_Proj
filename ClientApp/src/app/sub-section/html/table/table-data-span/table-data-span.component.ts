import { Component, OnInit, Output } from '@angular/core';
import { TransportData } from '../../../TrasportData.service';

@Component({
  selector: 'app-table-data-span',
  templateUrl: './table-data-span.component.html',
  styleUrls: ['../../../general-style.css']
})
export class TableDataSpanComponent implements OnInit {

  constructor(
    private transportData: TransportData,
  ) { }

  title: string = "Объединение ячеек таблицы";

  textPath: Array<object> = [
    { section: 'Раздел HTML', path: '/#part-1' },
    { section: 'Таблицы', path: 'html/basics' }
  ];

  @Output()
  NameComponent: string = "Объединение ячеек";

  @Output()
  interactiveExample: string = "<link href='./assets/example/Table-create.css' rel='stylesheet'>\n\n<table>\n  <colgroup>\n\t<col style='background: #c4c4'>\n\t<col style='background: darkCyan'>\n\t<col style='background: #c4c4'>\n\t<col style='background: darkCyan'>\n  </colgroup>\n  <tr>\n\t<th></th>\n\t<th>TV1000</th>\n\t<th>TVM</th>\n\t<th>TVH</th>\n  </tr>\n  <tr>\n\t<th>20:00</th>\n\t<td rowspan='2'>Фильм</td>\n\t<td colspan='2'>Ток-шоу</td>\n\t<td style='padding: 0'></td>\n  </tr>\n  <tr>\n\t<th>21:00</th>\n\t<td>Мультфильм</td>\n\t<td>Ток-шоу</td>\n  </tr>\n</table>";

  @Output()
  staticExample1: string = "<table>\n  <tr>\n\t<th></th>\n\t<th>Суббота</th>\n\t<th>Воскресенье</th>\n  </tr>\n  <tr>\n\t<th>Продано билетов</th>\n\t<td>120</td>\n\t<td>135</td>\n  </tr>\n  <tr>\n\t<th>Выручка</th>\n\t<td>18 000 грн.</td>\n\t<td>20 000 грн.</td>\n  </tr>\n</table>";

  ngOnInit(): void {
    let headers = document.querySelectorAll("h2.head");
    this.transportData.changeTitle(this.title, headers, this.textPath);
  }

}
