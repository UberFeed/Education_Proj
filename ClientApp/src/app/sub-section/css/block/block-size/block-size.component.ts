import { Component, OnInit, Output } from '@angular/core';
import { TransportData } from '../../../TrasportData.service';

@Component({
  selector: 'app-block-size',
  templateUrl: './block-size.component.html',
  styleUrls: ['../../../general-style.css']
})
export class BlockSizeComponent implements OnInit {

  constructor(
    private transportData: TransportData,
  ) { }

  title: string = "Управление размером блоков";

  textPath: Array<object> = [
    { section: 'Раздел CSS', path: '/#part-1' },
    { section: 'Блочная модель', path: 'html/basics' }
  ];

  @Output()
  NameComponent: string = "Пример блочного элемента";

  @Output()
  HTMLinteractiveExample: string = "<div class='block'>Блочный элемент</div>\n<span>Строчный элемент</span>";

  @Output()
  CSSinteractiveExample: string = ".block {\n  background: red;\n}\n\nspan {\n  background: grey;\n}";

  @Output()
  HTMLstaticExample1: string = "<div>\n  <p>Компания Moog первой наладила коммерческое производство модульных управляемых напряжением аналоговых синтезаторов в начале 1950-х годов.</p>\n</div>";

  @Output()
  CSSstaticExample1: string = "div {\n  width: 300px;\n  height: 300px;\n  background-color: #bbbaaa;\n}\n\np {\n  width: 75%;\n  height: 75%;\n  background-color: #0088dd;\n}";

  @Output()
  CSScodeExample1: string = "div {\n  max-width: 300px;\n  min-width: 200px;\n  max-height: 450px;\n  min-height: 350px;\n}";

  ngOnInit(): void {
    let headers = document.querySelectorAll("h2.head");
    this.transportData.changeTitle(this.title, headers, this.textPath);
  }

}
