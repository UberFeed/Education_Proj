import { Component, OnInit, Output } from '@angular/core';
import { TransportData } from '../../../TrasportData.service';

@Component({
  selector: 'app-decor-table',
  templateUrl: './decor-table.component.html',
  styleUrls: ['../../../general-style.css']
})
export class DecorTableComponent implements OnInit {

  constructor(
    private transportData: TransportData,
  ) { }

  title: string = "Стили для таблиц";

  textPath: Array<object> = [
    { section: 'Раздел CSS', path: '/#part-1' },
    { section: 'Оформление списков и таблиц', path: 'html/basics' }
  ];
  
  @Output()
  NameComponent: string = "Пример оформления списка";

  @Output()
  HTMLinteractiveExample: string = "<table>\n  <tr>\n\t<th>Employee</th>\n\t<th>Salary</th>\n\t<th>Bonus</th>\n\t<th>Supervisor</th>\n  </tr>\n  <tr>\n\t<td>Stephen Cox</td>\n\t<td>$300</td>\n\t<td>$50</td>\n\t<td>Bob</td>\n  </tr>\n  <tr>\n\t<td>Josephin Tan</td>\n\t<td>$150</td>\n\t<td>-</td>\n\t<td>Annie</td>\n  </tr>\n  <tr>\n\t<td>Joyce Ming</td>\n\t<td>$200</td>\n\t<td>$35</td>\n\t<td>Andy</td>\n  </tr>\n  <tr>\n\t<td>James Pentel</td>\n\t<td>$175</td>\n\t<td>$25</td>\n\t<td>Annie</td>\n  </tr>\n</table>";

  @Output()
  CSSinteractiveExample: string = "table {\n  text-align: left;\n  font-family: Arial, 'Lucida Grande', Sans-Serif;\n}\n\nth {\n  border-bottom: 2px solid #6678b1;\n  color: #6678b1;\n  font-weight: 600;\n}\n\ntd {\n  border-bottom: 1px solid #6678b1;\n}\n\ntd,th {\n  padding: 5px;\n}";

  @Output()
  HTMLstaticExample1: string = "<table>\n  <tr>\n\t<td>Ячейка 1</td>\n\t<td>Ячейка 2</td>\n  </tr>\n  <tr>\n\t<td>Ячейка 3</td>\n\t<td>Ячейка 4</td>\n  </tr>\n</table>";

  @Output()
  CSSstaticExample1: string = "table {\n  border: 4mm ridge rgba(211, 220, 50, 0.6);\n}\n\ntd {\n  border: 1px solid #c4c4c4;\n  padding: 5px;\n}";

  @Output()
  HTMLstaticExample2: string = "<table>\n  <caption>Заголовок таблицы</caption>\n  <tr>\n\t<td>Ячейка 1</td>\n\t<td>Ячейка 2</td>\n  </tr>\n  <tr>\n\t<td>Ячейка 3</td>\n\t<td>Ячейка 4</td>\n  </tr>\n</table>";

  @Output()
  CSSstaticExample2: string = "table {\n  border: 4mm ridge rgba(211, 220, 50, 0.6);\n}\n\ncaption { \n  caption-side: bottom;\n  text-align: left;\n}\n\ntd {\n  border: 1px solid #c4c4c4;\n  padding: 5px;\n}";

  @Output()
  HTMLstaticExample3: string = "<table>\n  <tr>\n\t<td>Ячейка 1</td>\n\t<td>Ячейка 2</td>\n  </tr>\n  <tr>\n\t<td>Ячейка 3</td>\n\t<td>Ячейка 4</td>\n  </tr>\n</table>";

  @Output()
  CSSstaticExample3: string = "table {\n  border: 4mm ridge rgba(211, 220, 50, 0.6);\n  border-collapse: collapse;\n}\n\ntd {\n  border: 1px solid #c4c4c4;\n  padding: 5px;\n}";

  @Output()
  HTMLstaticExample4: string = "<table>\n  <tr>\n\t<td>Ячейка 1</td>\n\t<td>Ячейка 2</td>\n  </tr>\n  <tr>\n\t<td>Ячейка 3</td>\n\t<td>Ячейка 4</td>\n  </tr>\n</table>";

  @Output()
  CSSstaticExample4: string = "table {\n  border: 4mm ridge rgba(211, 220, 50, 0.6);\n  border-spacing: 5px 20px;\n}\n\ntd {\n  border: 1px solid #c4c4c4;\n  padding: 5px;\n}";

  @Output()
  HTMLstaticExample5: string = "<table>\n  <tr>\n\t<td>Ячейка 1</td>\n\t<td>Ячейка 2</td>\n  </tr>\n  <tr>\n\t<td>Ячейка 3</td>\n\t<td></td>\n  </tr>\n</table>";

  @Output()
  CSSstaticExample5: string = "table {\n  border: 4mm ridge rgba(211, 220, 50, 0.6);\n  empty-cells: hide;\n}\n\ntd {\n  border: 1px solid #c4c4c4;\n  padding: 5px;\n}";

  ngOnInit(): void {
    let headers = document.querySelectorAll("h2.head");
    this.transportData.changeTitle(this.title, headers, this.textPath);
  }

}
