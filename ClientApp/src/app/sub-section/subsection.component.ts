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
  public CurrentRouter: string = this.router.url;

  cloneSection!: any;

  ngOnInit() {
    if (window.scrollY > 0) {
      window.scrollTo(0, 0);
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
