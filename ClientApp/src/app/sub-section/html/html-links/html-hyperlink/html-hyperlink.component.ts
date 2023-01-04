import { Component, OnInit, Output } from '@angular/core';
import { TransportData } from '../../../TrasportData.service';

@Component({
  selector: 'app-html-hyperlink',
  templateUrl: './html-hyperlink.component.html',
  styleUrls: ['../../../general-style.css']
})
export class HtmlHyperlinkComponent implements OnInit {

  constructor(
    private transportData: TransportData,
  ) { }

  title: string = "Гиперссылки";

  textPath: Array<object> = [
    { section: 'Раздел HTML', path: '/#part-1' },
    { section: 'Ссылки', path: 'html/basics' }
  ];

  @Output()
  NameComponent: string = "Создание гиперссылки"

  @Output()
  interactiveExample: string = "<a href='https://developer.mozilla.org'>MDN</a>";

  @Output()
  staticExample1: string = "<a href='./assets/img/mdn_logo.png' download>MDN</a>";

  @Output()
  staticExample2: string = "<a href='mailto:nowhere@mozilla.org'>Отправить сообщение в никуда.</a>";

  @Output()
  staticExample3: string = "<ul>\n  <li>Первый элемент</li>\n  <li>Второй элемет\n\t<ul>\n\t  <li>Первый элемент вложенного списка</li>\n\t  <li>Второй элемент вложенного списка</li>\n\t  <ul>\n\t\t<li>Первый элемент вложенного подсписка</li>\n\t\t<li>Второй элемент вложенного подсписка</li>\n\t  </ul>\n\t</ul>\n  </li>\n  <li>Третий элемент</li>\n</ul>";

  @Output()
  staticExample4: string = "<a href='https://developer.mozilla.org'><img src='./assets/img/mdn_logo.png'></img></a>";

  @Output()
  staticExample5: string = "<a href='tel:+491570156'>+49 157 0156</a>";

  @Output()
  staticExample6: string = "http://site.ru/pages/tips/tips1.html\n\/\/site.ru/pages/tips/tips1.html";

  @Output()
  staticExample7: string = "http://site.ru/index.html";

  @Output()
  staticExample8: string = "http://site.ru/";

  @Output()
  staticExample9: string = "<img src='./assets/img/mdn_logo.png'></img>";

  ngOnInit(): void {
    let headers = document.querySelectorAll("h2.head");
    this.transportData.changeTitle(this.title, headers, this.textPath);
  }

}
