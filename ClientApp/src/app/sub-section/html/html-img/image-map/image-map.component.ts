import { Component, OnInit, Output } from '@angular/core';
import { TransportData } from '../../../TrasportData.service';

@Component({
  selector: 'app-image-map',
  templateUrl: './image-map.component.html',
  styleUrls: ['../../../general-style.css']
})
export class ImageMapComponent implements OnInit {

  constructor(
    private transportData: TransportData,
  ) { }

  title: string = "Карта изображений";

  textPath: Array<object> = [
    { section: 'Раздел HTML', path: '/#part-1' },
    { section: 'Изображения', path: 'html/basics' }
  ];

  @Output()
  NameComponent: string = "Создание карты изображений";

  @Output()
  interactiveExample: string = "<map name='infographic'>\n  <area shape = 'poly' \n\t\tcoords = '130,147,200,107,254,219,130,228' \n\t\thref = 'https://developer.mozilla.org/docs/Web\n\t\t\t\t/HTML' \n\t\ttarget = '_blank' \n\t\talt = 'HTML'>\n  <area shape='poly' \n\t\tcoords = '130,147,130,228,6,219,59,107' \n\t\thref = 'https://developer.mozilla.org\n\t\t\t\t/docs/Web/CSS' \n\t\ttarget = '_blank' \n\t\talt = 'CSS' > \n  <area shape='poly' \n\t\tcoords = '130,147,200,107,130,4,59,107' \n\t\thref = 'https://developer.mozilla.org/docs/Web\n\t\t\t\t/JavaScript' \n\t\ttarget = '_blank' \n\t\talt = 'JavaScript' >\n</map>\n\n<img usemap='#infographic' \n\t src='/assets/img/mdn-info2.png' \n\t width='260' \n\t height='232' \n\t alt='MDN infographic'>";

  ngOnInit(): void {
    let headers = document.querySelectorAll("h2.head");
    this.transportData.changeTitle(this.title, headers, this.textPath);
  }

}
