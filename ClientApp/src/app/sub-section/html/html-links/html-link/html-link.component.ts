import { Component, OnInit, Output } from '@angular/core';
import { TransportData } from '../../../TrasportData.service';

@Component({
  selector: 'app-html-link',
  templateUrl: './html-link.component.html',
  styleUrls: ['../../../general-style.css', './StyleSheet.css']
})
export class HtmlLinkComponent implements OnInit {

  constructor(
    private transportData: TransportData,
  ) { }

  title: string = "Ссылки на внешние ресурсы";

  textPath: Array<object> = [
    { section: 'Раздел HTML', path: '/#part-1' },
    { section: 'Ссылки', path: 'html/basics' }
  ];

  @Output()
  NameComponent: string = "Подключение стилей";

  @Output()
  interactiveExample: string = "<link href='/assets/example/StyleSheet.css' rel='stylesheet' type='text/css'>\n\n<p>Этот текст будет красным, как определено во внешней таблице стилей.</p>\n<p style='color: white'>Однако, при помощи атрибута можно переопределить стиль.</p>";

  @Output()
  codeExample1: string = "<link href='main.css' rel='stylesheet'>";

  @Output()
  codeExample2: string = "<link rel='icon' href='favicon.ico'>";

  @Output()
  codeExample3: string = "<link rel='apple-touch-icon-precomposed' sizes='114x114'\n\t  href='apple-icon-114.png' type='image/png' >";

  @Output()
  codeExample4: string = "<link href='print.css' rel='stylesheet' media='print'>\n<link href='mobile.css' rel='stylesheet' media='screen and(max-width: 600px)'>";

  @Output()
  codeExample5: string = "<link rel='preload' href='myFont.woff2' as='font'\n\t  type = 'font/woff2' crossorigin = 'anonymous'>";

  @Output()
  codeExample6: string = "<link href='default.css' rel='stylesheet' title='Default Style'>\n<link href='fancy.css' rel='alternate stylesheet' title='Fancy'>\n<link href='basic.css' rel='alternate stylesheet' title='Basic'>";

  @Output()
  codeExample7: string = "<link rel='apple-touch - icon - precomposed' sizes='144x144' href='favicon144.png'>\n<link rel='apple - touch - icon - precomposed' sizes='114x114' href='favicon114.png'>\n<link rel='apple - touch - icon - precomposed' sizes='72x72' href='favicon72.png'>\n<link rel='apple - touch - icon - precomposed' href='favicon57.png'>\n<link rel='icon' href='favicon32.png'>";

  @Output()
  codeExample8: string = "<link href='print.css' rel='stylesheet' media='print'>\n<link href='mobile.css' rel='stylesheet' media='all'>\n<link href='desktop.css' rel='stylesheet' media='screen and (min-width: 600px)' >\n<link href='highres.css' rel='stylesheet' media='screen and (min-resolution: 300dpi)'>";

  ngOnInit(): void {
    let headers = document.querySelectorAll("h2.head");
    this.transportData.changeTitle(this.title, headers, this.textPath);
  }

}
