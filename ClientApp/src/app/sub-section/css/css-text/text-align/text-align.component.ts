import { Component, OnInit, Output } from '@angular/core';
import { TransportData } from '../../../TrasportData.service';

@Component({
  selector: 'app-text-align',
  templateUrl: './text-align.component.html',
  styleUrls: ['../../../general-style.css']
})
export class TextAlignComponent implements OnInit {

  constructor(
    private transportData: TransportData,
  ) { }

  title: string = "Отступы и выравнивание";

  textPath: Array<object> = [
    { section: 'Раздел CSS', path: '/#part-1' },
    { section: 'Текст', path: 'html/basics' }
  ];

  @Output()
  NameComponent: string = "Пример оформления текста";

  @Output()
  HTMLinteractiveExample: string = "<p class='center'>Данный текст будет иметь выравнивание по центру.</p>\n\n<p class='left'>Данный текст будет иметь выравнивание по левому краю.</p>\n\n<p class='right'>Данный текст будет иметь выравнивание по правому краю.</p>";

  @Output()
  CSSinteractiveExample: string = ".center {\n  text-align: center;\n}\n\n.left {\n  text-align: left;\n}\n\n.right {\n  text-align: right;\n}";

  @Output()
  HTMLstaticExample1: string = "<p class='pre'>В данном      тексте  случайным   образом      будут указаны  пробелы.</p>\n\n<p class='pre-wrap'>Текст с отображение               пробелов      но с сохранением переносов для заполнения строчных боксов.</p>";

  @Output()
  CSSstaticExample1: string = "p {\n  border: 1px solid #c5c5c5;\n  width: 50%;\n}\n\n.pre {\n  white-space: pre;\n}\n\n.pre-wrap {\n  white-space: pre-wrap;\n}";

  @Output()
  HTMLstaticExample2: string = "<pre class='tab'>Настройка \tтабуляции целым числом будет ровнятся количеству пробелов</pre>\n\n<pre class='tab-custom'>Если \tнужно указать более точную величину можно использовать значение px.</pre>";

  @Output()
  CSSstaticExample2: string = ".tab {\n  tab-size: 50;\n}\n\n.tab-custom {\n  tab-size: 150px;\n}";

  @Output()
  HTMLstaticExample3: string = "<p>Данный текст будет переноситься на новую строку по умолчанию.</p>\n<p class='break-all'>Данный текст будет иметь разрывы слов, т.е переносить часть слова на новую строку.</p>\n<p class='keep-word'>次の単語グレートブリテンおよび北アイルランド連合王国で本当に大きな言葉</p>";

  @Output()
  CSSstaticExample3: string = "p {\n  border: 1px solid #c4c4c4;\n  width: 150px;\n}\n\n.break-all {\n  word-break: break-all;\n}\n\n.keep-word {\n  word-break: keep-all;\n}";

  @Output()
  HTMLstaticExample4: string = "<p lang='ru' class='default'>В данном тексте будет использоваться стандартный перенос слов на новую строку.</p>\n<p class='manual'>В данном тексте будут распо&shy;ложены специальные симво&shy;лы для указания мягких переносов в нужных местах.</p>";

  @Output()
  CSSstaticExample4: string = "p {\n  border: 1px solid #c4c4c4;\n  width: 150px;\n}\n\n.default {\n  hyphens: auto;\n}\n\n.manual {\n  hyphens: manual;\n  width: 200px;\n}";

  @Output()
  HTMLstaticExample5: string = "<p class='anywhere'>\n  В данном тексте будет использоваться разрыв строки для избегания проблем с переполнением.\n  <a href='https://developer.mozilla.org/ru/docs/Web/CSS/overflow-wrap'>https://developer.mozilla.org/ru/docs/Web/CSS/overflow-wrap</a>\n</p>\n<p class='normal'>\n  В данном тексте правило разрыва строки будет стандартным.\n  <a href='https://developer.mozilla.org/ru/docs/Web/CSS/overflow-wrap'>https://developer.mozilla.org/ru/docs/Web/CSS/overflow-wrap</a>\n</p>";

  @Output()
  CSSstaticExample5: string = "p {\n  margin-right: 20px;\n  float: left;\n  border: 1px solid #c4c4c4;\n  width: 150px;\n}\n\n.anywhere {\n  overflow-wrap: anywhere;\n}\n\n.narmal {\n  overflow-wrap: normal;\n}";

  @Output()
  HTMLstaticExample6: string = "<p>\n  В данном тексте будет выравние по ширине, т.е пробелы между словами и буквами распределяются\n  таким образом, чтобы длина всех строк была равна. Последняя строка в тексте будет иметь\n  выравние по центру.\n</p>";

  @Output()
  CSSstaticExample6: string = "p {\n  text-align: justify;\n  text-align-last: center;\n  width: 300px;\n}";

  @Output()
  HTMLstaticExample7: string = "<p>\n  В данном тексте будет выравние по ширине, т.е пробелы между словами и буквами распределяются\n  таким образом, чтобы длина всех строк была равна. Последняя строка в тексте будет иметь\n  выравние по центру. Добавим промежутки между слов в пикселях.\n</p>";

  @Output()
  CSSstaticExample7: string = "p {\n  text-align: justify;\n  text-align-last: center;\n  width: 300px;\n  word-spacing: 20px;\n}";

  @Output()
  HTMLstaticExample8: string = "<p>\n  В данном тексте будет выравние по ширине, т.е пробелы между словами и буквами распределяются\n  таким образом, чтобы длина всех строк была равна. Последняя строка в тексте будет иметь\n  выравние по центру. Добавим промежутки между символами в пикселях.\n</p>";

  @Output()
  CSSstaticExample8: string = "p {\n  text-align: justify;\n  text-align-last: center;\n  width: 300px;\n  letter-spacing: 5px;\n}";

  @Output()
  HTMLstaticExample9: string = "<p>Только первая строка будет иметь отступ 30%. Остальные строки будут отображаться по умолчанию.</p>";

  @Output()
  CSSstaticExample9: string = "p {\n  text-align: justify;\n  width: 300px;\n  text-indent: 30%;\n}";

  ngOnInit(): void {
    let headers = document.querySelectorAll("h2.head");
    this.transportData.changeTitle(this.title, headers, this.textPath);
  }

}
