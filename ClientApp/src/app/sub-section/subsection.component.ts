import { Component, OnInit, AfterViewInit, AfterViewChecked, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TransportData } from './TrasportData.service';


@Component({
  selector: 'app-subsection',
  templateUrl: './subsection.component.html',
  styleUrls: ['./subsection.component.css'],
})
export class SubsectionComponent implements OnInit {

  public title!: string;

  constructor(
    public transportData: TransportData,
    private cd: ChangeDetectorRef
  ) { }

  ngOnInit() {
    if (window.scrollY > 0) {
      window.scrollTo(0, 0);
    }

    this.transportData.Title.subscribe((data) => {
      this.title = data;
      this.cd.detectChanges();
    });
  }

  setting = {
    sidebarToggle: false
  };

  SwitchToggle() {
    this.setting.sidebarToggle = !this.setting.sidebarToggle;
  }

}
