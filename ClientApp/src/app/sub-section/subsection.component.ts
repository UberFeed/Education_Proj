import { Component, OnInit, AfterViewInit, AfterViewChecked, ChangeDetectorRef } from '@angular/core';
import { CommonModule, NgForOf } from '@angular/common';
import { TransportData } from './TrasportData.service';
import { Scroll } from '@angular/router';


@Component({
  selector: 'app-subsection',
  templateUrl: './subsection.component.html',
  styleUrls: ['./subsection.component.css'],
})
export class SubsectionComponent implements OnInit, AfterViewInit {

  constructor(
    public transportData: TransportData,
    private cd: ChangeDetectorRef
  ) { }

  public title!: string;
  public Headers!: any;
  public TextPath!: any;

  heads: any;
  temp: any;


  ngOnInit() {
    if (window.scrollY > 0) {
      window.scrollTo(0, 0);
    }

    this.transportData.Title.subscribe((data) => {
      this.title = data;
    });

    this.transportData.Headers.subscribe((data) => {
      this.Headers = data;
      console.log(this.Headers);
    });

    this.transportData.TextPath.subscribe((data) => {
      this.TextPath = data;
    });

    this.cd.detectChanges();
  }

  ngAfterViewInit() {

    this.heads = document.querySelectorAll('.test-1');
    this.heads.forEach((elem: any) => {
      elem.addEventListener('click', this.Scrolling);
    });

    for (let i = 0; i < this.heads.length; i++) {
      this.heads[i].dataset.custom = this.Headers[i].dataset.custom;
    }

    console.log("test");
  }

  Scrolling(e: any) {
    let elem = e.target;

    this.temp = document.querySelector(`h2[data-custom='${elem.dataset.custom}']`);

    window.scrollTo(0, this.temp.offsetTop);
  }

  setting = {
    sidebarToggle: false
  };

  SwitchToggle() {
    this.setting.sidebarToggle = !this.setting.sidebarToggle;
  }

}
