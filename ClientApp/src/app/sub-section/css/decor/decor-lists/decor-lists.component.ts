import { Component, OnInit, Output } from '@angular/core';
import { TransportData } from '../../../TrasportData.service';

@Component({
  selector: 'app-decor-lists',
  templateUrl: './decor-lists.component.html',
  styleUrls: ['../../../general-style.css']
})
export class DecorListsComponent implements OnInit {

  constructor(
    private transportData: TransportData,
  ) { }

  title: string = "Стили для списков";

  textPath: Array<object> = [
    { section: 'Раздел CSS', path: '/#part-1' },
    { section: 'Оформление списков и таблиц', path: 'html/basics' }
  ];

  @Output()
  NameComponent: string = "Пример оформления списка";

  @Output()
  HTMLinteractiveExample: string = "<ul>\n  <li>Первый элемент.</li>\n  <li>Второй элемент.</li>\n  <li>Третий элемент.</li>\n</ul>";

  @Output()
  CSSinteractiveExample: string = "ul li {\n  list-style-type: cjk-ideographic;\n}\n\nul li:first-child {\n  list-style-type: circle;\n}";

  @Output()
  HTMLstaticExample1: string = "<ul>\n  <li>Элемент списка без маркера</li>\n  <li>Элемент списка с римским маркером</li>\n  <li>Элемент списка с японским маркером</li>\n</ul>";

  @Output()
  CSSstaticExample1: string = "ul li {\n  list-style-type: upper-roman;\n}\n\nul li:first-child {\n  list-style-type: none;\n}\n\nul li:last-child {\n  list-style-type: katakana-iroha;\n}";

  @Output()
  HTMLstaticExample2: string = "<ul>\n  <li>Apollo</li>\n  <li>Hubble</li>\n  <li>Chandra</li>\n</ul>\n\n<ul>\n  <li>WordPress</li>\n  <li>Joomla</li>\n  <li>ModX</li>\n</ul>";

  @Output()
  CSSstaticExample2: string = "ul {\n  list-style-image: url('./assets/img/rocket.svg');\n}\n\nul:last-child {\n  list-style-image: linear-gradient(#FF7A2F 0, #FF7A2F 50%, #FFB214 50%);\n}";

  @Output()
  HTMLstaticExample3: string = "<ul>\n  <li>WordPress</li>\n  <li>Joomla</li>\n  <li>ModX</li>\n</ul>\n\n<ul>\n  <li>WordPress</li>\n  <li>Joomla</li>\n  <li>ModX</li>\n</ul>";

  @Output()
  CSSstaticExample3: string = "ul {\n  width: 25%;\n}\n\nul li {\n  border: 1px solid #c4c4c4;\n}\n\nul {\n  list-style-position: inside;\n}\n\nul:last-child {\n  list-style-position: outside;\n}";

  ngOnInit(): void {
    let headers = document.querySelectorAll("h2.head");
    this.transportData.changeTitle(this.title, headers, this.textPath);
  }

}
