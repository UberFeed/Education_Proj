import { Component, OnInit, Output } from '@angular/core';
import { TransportData } from '../../../TrasportData.service';

@Component({
  selector: 'app-font-prop',
  templateUrl: './font-prop.component.html',
  styleUrls: ['../../../general-style.css']
})
export class FontPropComponent implements OnInit {

  constructor(
    private transportData: TransportData,
  ) { }

  title: string = "Свойства шрифтов";

  textPath: Array<object> = [
    { section: 'Раздел CSS', path: '/#part-1' },
    { section: 'Селекторы', path: 'html/basics' }
  ];

  @Output()
  NameComponent: string = "Пример использования свойств шрифтов";

  @Output()
  HTMLinteractiveExample: string = "<p>Данный текст будет оформлен шрифтом Arial, стиль шрифта - курсив, насыщенность шрифта - bold</p>";

  @Output()
  CSSinteractiveExample: string = "p {\n  font-family: Arial;\n  font-style: italic;\n  font-weight: bold;\n}";

  @Output()
  HTMLstaticExample1: string = "<p>Для данного текста будет применяться несколько шрифтов во избежание ситуаций отсутствия шрифтов у пользователя</p>";

  @Output()
  CSSstaticExample1: string = "p {\n  font-family: Helvetica, 'Andele Mono', 'Comic sans', Western, Georgia;\n}";

  @Output()
  HTMLstaticExample2: string = "<div>\n  Данный текст имеет стандартную насыщенность.\n  <p>Насыщенность шрифта будет больше, чем у предка.</p>\n</div>";

  @Output()
  CSSstaticExample2: string = "div {\n  font-weight: normal;\n}\n\ndiv p {\n  font-weight: bolder;\n}";

  @Output()
  HTMLstaticExample3: string = "<p class='ultra-condensed'>Данный текст имеет наиболее сжатый шрифт.</p>\n<p class='normal'>Данный текст имеет стандартный шрифт.</p>\n<p class='expanded'>Данный текст имеет немного сжатый шрифт.</p>";

  @Output()
  CSSstaticExample3: string = ".ultra-condensed {\n  font-stretch: ultra-condensed;\n}\n\n.normal {\n  font-stretch: normal;\n}\n\n.expanded {\n  font-stretch: semi-condesed;\n}";

  @Output()
  HTMLstaticExample4: string = "<p class='italic'>Данный текст будет выделен курсивом.</p>\n\n<p class='oblique'>Данный текст будет иметь наклонное начертание шрифта.</p>";

  @Output()
  CSSstaticExample4: string = ".italic {\n  font-style: italic;\n}\n\n.oblique {\n  font-style: oblique;\n}";

  @Output()
  HTMLstaticExample5: string = "<p class='small'>Данный текст будет иметь маленький размер шрифта x-small.</p>\n\n<p class='medium'>Данный текст будет иметь средний размер шрифта medium.</p>\n\n<p class='large'>Данный текст будет иметь большой размер шрифта large.</p>";

  @Output()
  CSSstaticExample5: string = ".small {\n  font-size: x-small;\n}\n\n.medium {\n  font-size: medium;\n}\n\n.large {\n  font-size: x-large;\n}";

  @Output()
  HTMLstaticExample6: string = "<p class='Times'>Данный текст имеет относительный размер и будет удобен для чтения при смене шрифта</p>\n\n<p class='Arial'>Как например в этом тексте, шрифт изменился но у нас есть относительный размер.</p>\n\n<p>Данный текст будет не имеет свойства относительного шрифта и при его изменении шрифта текст может стать мелким.</p>\n\n<p style='font-family: Times;'>Как например в текущем тексте. Размер шрифта остался неизменным однако визуально он стал мельче.</p>";

  @Output()
  CSSstaticExample6: string = ".Times {\n  font-family: 'Times';\n  font-size-adjust: 0.6;\n}\n\n.Arial {\n  font-family: 'Arial';\n  font-size-adjust: 0.6;\n}";

  @Output()
  HTMLstaticExample7: string = "<p class='font'>Данный текст будет имеет курсивное начертание, малые заглавные буквы, насыщенность шрифта полужирная, размер шрифта и высота строки 1.2rem/1.5, семейство шрифтов Arial, sans-serif</p>";

  @Output()
  CSSstaticExample7: string = ".font {\n  font: italic small-caps bold 1.2rem/1.5 Arial, sans-serif;\n}";

  @Output()
  HTMLstaticExample8: string = "<link rel='preconnect' href='https://fonts.googleapis.com'><link rel = 'preconnect' href = 'https://fonts.gstatic.com' crossorigin><link href = 'https://fonts.googleapis.com/css2?family=Coming+Soon&display=swap' rel = 'stylesheet'>\n\n<p class='font'>No one shall be subjected to arbitrary arrest, detention or exile. Everyone is entitled in full equality to a fair and public hearing by an independent and impartial tribunal, in the determination of his rights and obligations and of any criminal charge against him.</p>";

  @Output()
  CSSstaticExample8: string = ".font {\n  font-family: 'Coming Soon', sans-serif;\n  font-synthesis: weight style;\n  font-style: italic;\n  font-weight: bold;\n}";

  ngOnInit(): void {
    let headers = document.querySelectorAll("h2.head");
    this.transportData.changeTitle(this.title, headers, this.textPath);
  }

}
