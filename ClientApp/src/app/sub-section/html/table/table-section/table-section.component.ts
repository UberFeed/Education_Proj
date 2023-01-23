import { Component, OnInit, Output } from '@angular/core';
import { TransportData } from '../../../TrasportData.service';

@Component({
  selector: 'app-table-section',
  templateUrl: './table-section.component.html',
  styleUrls: ['../../../general-style.css']
})
export class TableSectionComponent implements OnInit {

  constructor(
    private transportData: TransportData,
  ) { }

  title: string = "Группировка разделов таблицы";

  textPath: Array<object> = [
    { section: 'Раздел HTML', path: '/#part-1' },
    { section: 'Таблицы', path: 'html/basics' }
  ];

  @Output()
  NameComponent: string = "Группировка разделов таблицы";

  @Output()
  interactiveExample: string = "<link href='./assets/example/Table-create.css' rel='stylesheet'>\n\n<table>\n  <thead>\n\t<tr>\n\t  <th>Дата</th>\n\t  <th>Прибыль</th>\n\t  <th>Расход</th>\n\t</tr>\n  </thead>\n  <tbody>\n\t<tr>\n\t  <th>1-e января</th>\n\t  <td>250</td>\n\t  <td>36</td>\n\t</tr>\n\t<tr>\n\t  <th>2-e января</th>\n\t  <td>285</td>\n\t  <td>48</td>\n\t</tr>\n\t</tr>\n\t<tr>\n\t  <th>3-e января</th>\n\t  <td>129</td>\n\t  <td>64</td>\n\t</tr>\n  </tbody>\n  <tfoot>\n\t<tr>\n\t  <th>Всего</th>\n\t  <td>664</td>\n\t  <td>148</td>\n\t</tr>\n  </tfoot>\n</table>";

  @Output()
  staticExample1: string = "<table>\n  <tr>\n\t<th></th>\n\t<th>Суббота</th>\n\t<th>Воскресенье</th>\n  </tr>\n  <tr>\n\t<th>Продано билетов</th>\n\t<td>120</td>\n\t<td>135</td>\n  </tr>\n  <tr>\n\t<th>Выручка</th>\n\t<td>18 000 грн.</td>\n\t<td>20 000 грн.</td>\n  </tr>\n</table>";


  ngOnInit(): void {
    let headers = document.querySelectorAll("h2.head");
    this.transportData.changeTitle(this.title, headers, this.textPath);
  }

}
