import { Component, OnInit, AfterViewInit, AfterViewChecked, ChangeDetectorRef } from '@angular/core';
import { CommonModule, NgForOf } from '@angular/common';
import { TransportData } from './TrasportData.service';
import { Route, Router } from '@angular/router';


@Component({
  selector: 'app-subsection',
  templateUrl: './subsection.component.html',
  styleUrls: ['./subsection.component.css'],
})
export class SubsectionComponent implements OnInit, AfterViewInit {

  constructor(
    public transportData: TransportData,
    private cd: ChangeDetectorRef,
    public router: Router
  ) { }

  public title!: string;
  public Headers!: any;
  public TextPath!: any;
  public CurrentRouter!: string;

  cloneSection!: any;

  ngOnInit() {
    if (this.router.url.indexOf("#") != -1) {
      this.CurrentRouter = this.router.url.slice(0, this.router.url.indexOf("#"));
    }
    else {
      this.CurrentRouter = this.router.url;
    }

    this.transportData.Title.subscribe((data) => {
      this.title = data;
    });

    this.transportData.Headers.subscribe((data) => {
      this.Headers = data;
    });

    this.transportData.TextPath.subscribe((data) => {
      this.TextPath = data;
    });

    this.cd.detectChanges();
  }

  ngAfterViewInit() {

    this.cloneSection = document.querySelector('a[href="html/basics"]')?.cloneNode(true);
    let output = document.querySelector('.section-mark');
    output?.insertAdjacentElement('beforeend', this.cloneSection);
  }

  setting = {
    sidebarToggle: false
  };

  SwitchToggle() {
    this.setting.sidebarToggle = !this.setting.sidebarToggle;
  }

}
