import { Component, OnInit, Output } from '@angular/core';
import { TransportData } from '../../../TrasportData.service';

@Component({
  selector: 'app-unordered-list',
  templateUrl: './unordered-list.component.html',
  styleUrls: ['../../../general-style.css']
})
export class UnorderedListComponent implements OnInit {

  constructor(
    private transportData: TransportData,
  ) { }

  title: string = "Маркерованный список";
  textPath: Array<object> = [
    { section: 'Раздел HTML', path: '/#part-1' },
    { section: 'HTML-списки', path: 'html/basics' }
  ];

  @Output()
  NameComponent: string = "Маркерованный список <ul>"

  @Output()
  interactiveExample: string = "<ul>\n  <li>Microsoft</li>\n  <li>Google</li>\n  <li>Apple</li>\n  <li>IBM</li>\n</ul>";

  @Output()
  staticExample1: string = "<ul>\n  <li>Первый элемент</li>\n  <li>Второй элемет\n\t<ul>\n\t  <li>Первый элемент вложенного списка</li>\n\t  <li>Второй элемент вложенного списка</li>\n\t  <ul>\n\t\t<li>Первый элемент вложенного подсписка</li>\n\t\t<li>Второй элемент вложенного подсписка</li>\n\t  </ul>\n\t</ul>\n  </li>\n  <li>Третий элемент</li>\n<li>Третий элемент</li>\n<li>Третий элемент</li>\n<li>Третий элемент</li>\n<li>Третий элемент</li>\n</ul>";

  @Output()
  staticExample2: string = "<ul>\n  <li>Первый элемент</li>\n  <li>Второй элемет\n\t<ol>\n\t  <li>Первый элемент вложенного списка</li>\n\t  <li>Второй элемент вложенного списка</li>\n\t</ol>\n  </li>\n  <li>Третий элемент</li>\n</ul>";

  ngOnInit(): void {
    let headers = document.querySelectorAll("h2.head");
    this.transportData.changeTitle(this.title, headers, this.textPath);
  }

}
