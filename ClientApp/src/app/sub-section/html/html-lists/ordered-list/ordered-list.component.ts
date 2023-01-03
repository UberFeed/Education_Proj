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
  NameComponent: string = "Нумерованный список <ol>";

  @Output()
  interactiveExample: string = "<ol>\n  <li>Смешайте муку, пищевую соду, сахар и соль.</li>\n  <li>В другой миске смешайте яйца, молоко и масло.</li>\n  <li>Перемешайте обе смеси вместе.</li>\n  <li>Заполните форму для маффинов на 3/4.</li>\n  <li>Выпекать 20 минут.</li>\n</ol>";

  @Output()
  staticExample1: string = "<ol reversed>\n  <li>Порежьте картофель кубиками.</li>\n  <li>Варите картофель в соленой воде на медленном огне в течение 15-20 минут до размягчения.</li>\n  <li>Подогрейте и смешайте молоко, сливочное масло и мускатный opex.</li>\n  <li>Слейте воду из кастрюли и потолките картофель. </li>\n  <li>Перемешайте картофель со смесью из молока, масла и мускатного opexa.</li>\n</ol>";

  @Output()
  staticExample2: string = "<ol start='4'>\n  <li>Порежьте картофель кубиками.</li>\n  <li>Варите картофель в соленой воде на медленном огне в течение 15-20 минут до размягчения.</li>\n  <li>Подогрейте и смешайте молоко, сливочное масло и мускатный opex.</li>\n  <li>Слейте воду из кастрюли и потолките картофель. </li>\n  <li>Перемешайте картофель со смесью из молока, масла и мускатного opexa.</li>\n</ol>";

  @Output()
  staticExample3: string = "<ol type='I'>\n  <li>Порежьте картофель кубиками.</li>\n  <li>Варите картофель в соленой воде на медленном огне в течение 15-20 минут до размягчения.</li>\n  <li>Подогрейте и смешайте молоко, сливочное масло и мускатный opex.</li>\n  <li>Слейте воду из кастрюли и потолките картофель. </li>\n  <li>Перемешайте картофель со смесью из молока, масла и мускатного opexa.</li>\n</ol>";

  @Output()
  staticExample4: string = "<ol>\n  <li>Превый элемент списка</li>\n  <li>Второй элемент списка \n\t<ol>\n\t  <li>Первый элемент вложенного списка</li>\n\t  <li>Второй элемент вложенного списка</li>\n\t</ol>\n  </li>\n  <li>Третий элемент</li>\n</ol>";

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
