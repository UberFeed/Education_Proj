import { Component, OnInit, Output } from '@angular/core';
import { TransportData } from '../../../TrasportData.service';

@Component({
  selector: 'app-ordered-list',
  templateUrl: './ordered-list.component.html',
  styleUrls: ['../../../general-style.css'],
})
export class OrderedListComponent implements OnInit {

  constructor(
    private transportData: TransportData,
  ) { }

  @Output()
  Head1code: string = "<ol>\n  <li>Смешайте муку, пищевую соду, сахар и соль.</li>\n  <li>В другой миске смешайте яйца, молоко и масло.</li>\n  <li>Перемешайте обе смеси вместе.</li>\n  <li>Заполните форму для маффинов на 3/4.</li>\n  <li>Выпекать 20 минут.</li>\n</ol>";

  @Output()
  staticExample: string = "<h1>Мразь</h1>";

  //@Output()
  //staticExample1: string = "<h1>Мразь1</h1>";

  title: string = "Нумерованный список";
  textPath: Array<object> = [
    { section: 'Раздел HTML', path: '/#part-1' },
    { section: 'HTML-списки', path: 'html/basics' }
  ];

  ngOnInit(): void {
    let headers = document.querySelectorAll("h2.head");
    this.transportData.changeTitle(this.title, headers, this.textPath);
  }

}
