import { Component, OnInit, Output } from '@angular/core';
import { TransportData } from '../../../TrasportData.service';

@Component({
  selector: 'app-table-row',
  templateUrl: './table-row.component.html',
  styleUrls: ['../../../general-style.css']
})
export class TableRowComponent implements OnInit {

  constructor(
    private transportData: TransportData,
  ) { }

  title: string = "Группирование строк и столбцов таблицы";

  textPath: Array<object> = [
    { section: 'Раздел HTML', path: '/#part-1' },
    { section: 'Таблицы', path: 'html/basics' }
  ];

  @Output()
  NameComponent: string = "Группирование строк и столбцов";

  @Output()
  interactiveExample: string = "<link href='./assets/example/Table-create.css' rel='stylesheet'>\n\n<table>\n  <colgroup>\n\t<col span='2'  style='background: #c4c4'>\n\t<col style='background-color: darkCyan'>\n  </colgroup>\n  <tr>\n\t<th>№ п/п</th>\n\t<td>Наименование</td>\n\t<td>Цена, грн.</td>\n  </tr>\n  <tr>\n\t<th>1</th>\n\t<td>Карандаш цветной</td>\n\t<td>20</td>\n  </tr>\n  <tr>\n\t<th>2</th>\n\t<td>Линейка 20см</td>\n\t<td>15</td>\n  </tr>\n</table>";

  ngOnInit(): void {
    let headers = document.querySelectorAll("h2.head");
    this.transportData.changeTitle(this.title, headers, this.textPath);
  }

}
