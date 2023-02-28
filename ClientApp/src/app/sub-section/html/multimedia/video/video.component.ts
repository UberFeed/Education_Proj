import { Component, OnInit, Output } from '@angular/core';
import { TransportData } from '../../../TrasportData.service';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['../../../general-style.css']
})
export class VideoComponent implements OnInit {

  constructor(
    private transportData: TransportData,
  ) { }

  title: string = "Видео";

  textPath: Array<object> = [
    { section: 'Раздел HTML', path: '/#part-1' },
    { section: 'Мультимедиа и встраивание', path: 'html/basics' }
  ];

  @Output()
  NameComponent: string = "Использование элемента <video>";

  @Output()
  interactiveExample: string = "<video width='250' height='150' controls>\n  <source  src='/assets/video/flower.mp4' />\n</video>";

  @Output()
  codeExample1: string = "<video controls>\n  <source src='myVideo.webm' type='video/webm' />\n  <source src='myVideo.mp4' type='video/mp4' />\n  <p>Ваш браузер не поддерживает HTML-видео. Ссылка для скачивания - \n  <a href = 'myVideo.mp4'>Скачать</a></p>\n</video>";

  @Output()
  staticExample2: string = "<form id='userInfo'>\n <fieldset>\n\t<legend>Контактная информация:</legend>\n\t<label>Email:</label> <br/>\n\t<input type='email'> <br/>\n\t<label>Телефон:</label> <br/>\n\t<input type='tel'> <br/>\n\t<label>Факс:</label> <br/>\n\t<input type='text'> <br/>\n  </fieldset>\n</form>\n\n <fieldset>\n\t<legend>Контактная информация:</legend>\n\t<label>Email:</label> <br/>\n\t<input type='email'> <br/>\n\t<label>Телефон:</label> <br/>\n\t<input type='tel'> <br/>\n\t<label>Факс:</label> <br/>\n\t<input type='text'> <br/>\n  </fieldset>";

  ngOnInit(): void {
    let headers = document.querySelectorAll("h2.head");
    this.transportData.changeTitle(this.title, headers, this.textPath);
  }

}
