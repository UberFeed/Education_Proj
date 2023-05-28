import { Component, OnInit, Output } from '@angular/core';
import { TransportData } from '../../../TrasportData.service';

@Component({
  selector: 'app-padding-margins',
  templateUrl: './padding-margins.component.html',
  styleUrls: ['../../../general-style.css']
})
export class PaddingMarginsComponent implements OnInit {

  constructor(
    private transportData: TransportData,
  ) { }

  title: string = "Поля и отступы";

  textPath: Array<object> = [
    { section: 'Раздел CSS', path: '/#part-1' },
    { section: 'Блочная модель', path: 'html/basics' }
  ];

  @Output()
  NameComponent: string = "Пример блочного элемента";

  @Output()
  HTMLinteractiveExample: string = "<div>При помощи полей мы можем контролировать</div>\n<div>расстояние между блоками</div>";

  @Output()
  CSSinteractiveExample: string = "div {\n  background-color: rgba(196, 196, 196, 0.15);\n  margin-bottom: 15px;\n  padding: 10px;\n}";

  @Output()
  CSScodeExample1: string = "div {\n  margin: 15px 15px 15px 15px;\n  margin: 15px 15px 15px;\n  margin: 15px 15px;\n}";

  @Output()
  CSScodeExample2: string = "div {\n  padding: 15px 15px 15px 15px;\n  padding: 15px 15px 15px;\n  padding: 15px 15px;\n}";

  ngOnInit(): void {
    let headers = document.querySelectorAll("h2.head");
    this.transportData.changeTitle(this.title, headers, this.textPath);
  }

}
