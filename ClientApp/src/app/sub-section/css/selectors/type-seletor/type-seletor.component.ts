import { Component, OnInit, Output } from '@angular/core';
import { TransportData } from '../../../TrasportData.service';

@Component({
  selector: 'app-type-seletor',
  templateUrl: './type-seletor.component.html',
  styleUrls: ['../../../general-style.css']
})
export class TypeSeletorComponent implements OnInit {

  constructor(
    private transportData: TransportData,
  ) { }

  title: string = "Виды селекторов";

  textPath: Array<object> = [
    { section: 'Раздел CSS', path: '/#part-1' },
    { section: 'Селекторы', path: 'html/basics' }
  ];

  @Output()
  NameComponent: string = "Использование различных видов селекторов";

  @Output()
  HTMLinteractiveExample: string = "<p>Астронавты Аполона:</p>\n<ul>\n  <li>Neil Armstrong</li>\n  <li>Alan Bean</li>\n  <li>Peter Conrad</li>\n  <li>Edgar Mitchell</li>\n  <li>Alan Shepard</li>\n</ul>";

  @Output()
  CSSinteractiveExample: string = "ul > li {\n  font-size: 18px;\n}\n\nli:nth-child(odd) {\n  color: red\n}";

  @Output()
  HTMLstaticExample1: string = "<h1>Универсальный селектор в CSS используется для выбора всех элементов на странице.</h1>\n\n<p>Он представлен символом звездочки (*)</p>\n\n<span>В этом примере все элементы на странице будут иметь одинаковый размер шрифта и цвет.</span>";

  @Output()
  CSSstaticExample1: string = "* {\n  font-size: 16px;\n  color: #c4c4c4;\n}";

  @Output()
  HTMLstaticExample2: string = "<h1>Селектор типа(элемента)</h1>\n\n<p>Селектор типа в CSS позволяет применять стили к определенным типам элементов HTML.</p>\n\n<p>Использование селектора типа может быть особенно полезно при создании стилей для элементов, которые повторяются на странице.</p>";

  @Output()
  CSSstaticExample2: string = "h1 {\n  font-size: 16px;\n  color: white;\n  font-weight: bold;\n}\n\np  {\n font-size: 14px;\n color: #c4c4c4;\n}";

  @Output()
  HTMLstaticExample3: string = "<h1>Селектор класса</h1>\n\n<p>Этот абзац не содержит класса.</p>\n\n<p class='my-class'>Этот абзац имеет класс 'my-class' и будет стилизован с помощью CSS.</p>\n\n<p class='my-class'>Этот абзац также имеет класс 'my-class' и будет стилизован так же, как и предыдущий абзац.</p>";

  @Output()
  CSSstaticExample3: string = "h1 {\n  font-size: 16px;\n  color: white;\n  font-weight: bold;\n}\n\n.my-class  {\n font-size: 14px;\n color: #c4c4c4;\n}";

  @Output()
  HTMLstaticExample4: string = "<div id='myDiv'>\n  <p>Пример использования селектора идентификатора в CSS</p>\n</div>\n\n<div>\n  <p>Это другой блок без идентификатора</p>\n</div>";

  @Output()
  CSSstaticExample4: string = "#myDiv {\n  background-color: #F5F5DC;\n  border: 1px solid black;\n  padding: 10px;\n  margin-bottom: 10px;\n  text-align: center;\n  font-size: 20px;\n  font-weight: bold;\n}\n\n #myDiv p {\n  color: black;\n}";

  ngOnInit(): void {
    let headers = document.querySelectorAll("h2.head");
    this.transportData.changeTitle(this.title, headers, this.textPath);
  }

}
