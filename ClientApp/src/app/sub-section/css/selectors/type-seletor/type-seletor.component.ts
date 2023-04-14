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

  @Output()
  HTMLstaticExample5: string = "<ul>\n  <li>Элемент 1</li>\n  <li>Элемент 2\n\t<ol>\n\t  <li>Подэлемент 2.1</li>\n\t  <li>Подэлемент 2.2</li>\n\t</ol>\n  </li>\n  <li>Элемент 3\n\t<div>\n\t  <ol>\n\t\t<li>Подэлемент 3.1</li>\n\t\t<li>Подэлемент 3.2</li>\n\t  </ol>\n\t</div>\n  </li>\n</ul>";

  @Output()
  CSSstaticExample5: string = "li > ol {\n  background-color: rgba(196, 196, 196, 0.15);\n}";

  @Output()
  HTMLstaticExample6: string = "<ul>\n  <li>Элемент 1</li>\n  <li>Элемент 2\n\t<ol>\n\t  <li>Подэлемент 2.1</li>\n\t  <li>Подэлемент 2.2</li>\n\t</ol>\n  </li>\n  <li>Элемент 3\n\t<div>\n\t  <ol>\n\t\t<li>Подэлемент 3.1</li>\n\t\t<li>Подэлемент 3.2</li>\n\t  </ol>\n\t</div>\n  </li>\n</ul>";

  @Output()
  CSSstaticExample6: string = "li ol {\n  background-color: rgba(196, 196, 196, 0.15);\n}";

  @Output()
  HTMLstaticExample7: string = "<div>\n  <h2>Заголовок 1</h2>\n  <p>Абзац 1.1</p>\n  <p>Абзац 1.2</p>\n  <h2>Заголовок 2</h2>\n  <p>Абзац 2.1</p>\n  <p>Абзац 2.2</p>\n</div>";

  @Output()
  CSSstaticExample7: string = "div h2 + p {\n  background-color: rgba(196, 196, 196, 0.15);\n}";

  @Output()
  HTMLstaticExample8: string = "<div>\n  <h3>Заголовок 1</h3>\n  <p>Абзац 1.1</p>\n  <p>Абзац 1.2</p>\n  <h2>Заголовок 2</h2>\n  <p>Абзац 2.1</p>\n  <p>Абзац 2.2</p>\n</div>";

  @Output()
  CSSstaticExample8: string = "div h2 ~ p {\n  background-color: rgba(196, 196, 196, 0.15);\n}";

  @Output()
  HTMLstaticExample9: string = "<p data-color='red'>Красный текст</p>\n\n<p data-color='grey'>Серый текст</p>\n\n<p>Стандартный текст</p>";

  @Output()
  CSSstaticExample9: string = "[data-color='red'] {\n  color: red;\n}\n\n[data-color='grey'] {\n  color: #c4c4c4;\n}";

  @Output()
  HTMLstaticExample10: string = "<p data-color='red'>Красный текст</p>\n\n<p data-color='grey'>Серый текст</p>\n\n<p>Стандартный текст</p>";

  @Output()
  CSSstaticExample10: string = "[data-color='red'] {\n  color: red;\n}\n\n[data-color]:not([data-color='red']) {\n  color: #c4c4c4;\n}";

  @Output()
  HTMLstaticExample11: string = "<ul>\n  <li>Нечётный элемент</li>\n  <li>Чётный элемент</li>\n  <li>Нечётный элемент</li>\n  <li>Чётный элемент</li>\n  <li>Нечётный элемент</li>\n</ul>";

  @Output()
  CSSstaticExample11: string = "ul li:nth-child(odd) {\n  color: red;\n}\n\nul li:nth-child(even) {\n  color: yellow;\n}";

  @Output()
  HTMLstaticExample12: string = "<ul>\n  <li>Первый элемент</li>\n  <li>Второй элемент</li>\n  <li>Третий элемент</li>\n  <li>Четвертый элемент</li>\n  <li>Последний элемент</li>\n</ul>";

  @Output()
  CSSstaticExample12: string = "ul li:last-of-type {\n  color: red;\n}";

  @Output()
  HTMLstaticExample13: string = "<p>Пример использования селектора псевдоэлемента</p>";

  @Output()
  CSSstaticExample13: string = "p:before {\n  content: 'before ';\n  color: red;\n}";

  ngOnInit(): void {
    let headers = document.querySelectorAll("h2.head");
    this.transportData.changeTitle(this.title, headers, this.textPath);
  }

}
