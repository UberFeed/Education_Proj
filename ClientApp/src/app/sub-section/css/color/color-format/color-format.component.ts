import { Component, OnInit, Output } from '@angular/core';
import { TransportData } from '../../../TrasportData.service';

@Component({
  selector: 'app-color-format',
  templateUrl: './color-format.component.html',
  styleUrls: ['../../../general-style.css']
})
export class ColorFormatComponent implements OnInit {

  constructor(
    private transportData: TransportData,
  ) { }

  title: string = "Использование различных форматов цветов";

  textPath: Array<object> = [
    { section: 'Раздел CSS', path: '/#part-1' },
    { section: 'Цвет и фон', path: 'html/basics' }
  ];

  @Output()
  NameComponent: string = "Цветовое офомление";

  @Output()
  HTMLinteractiveExample: string = "<p>Изменить цвет можно разными способами. Например данный текст будет иметь цвет: 'red'</p>\n<p>Теперь мы сделаем цвет: '#c4c4c4'</p>\n<p>Используем еще один вариант: 'rgb(150, 30, 240)'</p>";

  @Output()
  CSSinteractiveExample: string = "p:first-child {\n  color: red;\n}\n\np:nth-child(2) {\n  color: #c4c4c4;\n}\n\np:last-child {\n  color: rgb(150, 30, 240);\n}";

  @Output()
  CSScodeExample1: string = "p {\n  color: #fb0;\n  color: #ffbb00;\n  color: rgb(255,0,0);\n  color: rgb(100%, 0%, 0%);\n}";

  @Output()
  CSScodeExample2: string = "p {\n  color: hsl(0, 100%, 50%);\n  color: hsl(120, 100%, 50%);\n}";

  @Output()
  HTMLstaticExample1: string = "<table>\n  <tr>\n\t<td>Ячейка 1</td>\n\t<td>Ячейка 2</td>\n  </tr>\n  <tr>\n\t<td>Ячейка 3</td>\n\t<td>Ячейка 4</td>\n  </tr>\n</table>";

  @Output()
  CSSstaticExample1: string = "table {\n  border: 4mm ridge rgba(211, 220, 50, 0.6);\n}\n\ntd {\n  border: 1px solid #c4c4c4;\n  padding: 5px;\n}";

  ngOnInit(): void {
    let headers = document.querySelectorAll("h2.head");
    this.transportData.changeTitle(this.title, headers, this.textPath);

  }

}
