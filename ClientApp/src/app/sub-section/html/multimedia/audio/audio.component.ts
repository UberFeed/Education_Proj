import { Component, OnInit, Output } from '@angular/core';
import { TransportData } from '../../../TrasportData.service';

@Component({
  selector: 'app-audio',
  templateUrl: './audio.component.html',
  styleUrls: ['../../../general-style.css']
})
export class AudioComponent implements OnInit {

  constructor(
    private transportData: TransportData,
  ) { }

  title: string = "Аудио";

  textPath: Array<object> = [
    { section: 'Раздел HTML', path: '/#part-1' },
    { section: 'Мультимедиа и встраивание', path: 'html/basics' }
  ];

  @Output()
  NameComponent: string = "Использование элемента <audio>";

  @Output()
  interactiveExample: string = "<audio controls>\n  <source  src='/assets/audio/t-rex-roar.mp3' />\n</video>";

  @Output()
  codeExample1: string = "<audio controls>\n  <source src='myAudio.mp3' type='audio/mp3' />\n  <source src='myAudio.ogg' type='audio/ogg' />\n  <p>Ссылка для скачивания - <a href = 'myAudio.mp3'>Скачать MP3</a></p>\n</audio>";

  ngOnInit(): void {
    let headers = document.querySelectorAll("h2.head");
    this.transportData.changeTitle(this.title, headers, this.textPath);
  }

}
