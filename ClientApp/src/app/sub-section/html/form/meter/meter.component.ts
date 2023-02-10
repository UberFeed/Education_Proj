import { Component, OnInit, Output } from '@angular/core';
import { TransportData } from '../../../TrasportData.service';

@Component({
  selector: 'app-meter',
  templateUrl: './meter.component.html',
  styleUrls: ['../../../general-style.css']
})
export class MeterComponent implements OnInit {

  constructor(
    private transportData: TransportData,
  ) { }

  title: string = "Измеритель";

  textPath: Array<object> = [
    { section: 'Раздел HTML', path: '/#part-1' },
    { section: 'Формы', path: 'html/basics' }
  ];

  @Output()
  NameComponent: string = "Использование элементов <progress>, <meter>";

  @Output()
  interactiveExample: string = "<form>\n  <label for='download'>Процесс загрузки файлов:</label>\n  <br/>\n  <progress max='100' id='download' name='download'>\n  </progress>\n  <label for='space'>Свободное место на диске:</label>\n  <br/>\n  <meter min='0' max='100' value='70' low='40' \n  high='60'></meter>  \n</form>";

  @Output()
  staticExample1: string = "<form>\n  <label for='myBrowser'>Выбери свой браузер:</label>\n  <br/>\n  <input list='browsers' id='myBrowser' name='myBrowser'>\n  <datalist id='browsers'>\n\t<option value='Chrome'></option>\n\t<option value='Firefox'></option>\n\t<option value='Explorer'></option>\n\t<option value='Opera'></option>\n  </datalist>\n</form>";

  @Output()
  staticExample2: string = "<form>\n  <label for='time'>Во сколько у вас обед:</label>\n  <br/>\n  <input type='time' list='lunchTime' id='time' name='time'>\n  <datalist id='lunchTime'>\n\t<option value='12:00'></option>\n\t<option value='13:00'></option>\n\t<option value='14:00'></option>\n\t<option value='15:00'></option>\n  </datalist>\n</form>";

  @Output()
  staticExample3: string = "<form>\n  <label for='tick'>Выбери количество:</label>\n  <br/>\n  <input type='range' list='range' min='0' max='100' id='tick' name='tick'>\n  <datalist id='range'>\n\t<option value='0'></option>\n\t<option value='25'></option>\n\t<option value='50'></option>\n\t<option value='75'></option>\n\t<option value='100'></option>\n  </datalist>\n</form>";

  ngOnInit(): void {
    let headers = document.querySelectorAll("h2.head");
    this.transportData.changeTitle(this.title, headers, this.textPath);
  }

}
