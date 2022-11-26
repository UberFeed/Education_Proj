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
  subSections: any;
  temp: any;

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
    this.cloneSection = document.querySelector('.breadcrumb li:nth-child(3) a')?.cloneNode(true);
    document.querySelector('.section-mark')?.insertAdjacentElement('beforeend', this.cloneSection);

    let leftMenu = document.querySelectorAll('#hide_menu-inner li a');
    this.subSections = document.querySelectorAll('div[data-custom]');
    console.log(this.subSections);
    for (var i = 0; i < this.Headers.length; i++) {
      leftMenu[i].setAttribute('data-custom', this.subSections[i].dataset.custom);
    }

    window.document.addEventListener("scroll", () => {
      this.subSections.forEach((elem: any) => {
        if (window.scrollY >= elem.offsetTop && window.scrollY <= (elem.offsetTop + elem.offsetHeight)) {
          document.querySelector(`#hide_menu-inner li a[data-custom='${elem.dataset.custom}']`)?.
            classList.add('active');
        }
        else {
          document.querySelector(`#hide_menu-inner li a[data-custom='${elem.dataset.custom}']`)?.
            classList.remove('active');
        }
      })
    });
  }

  setting = {
    sidebarToggle: false
  };

  SwitchToggle() {
    this.setting.sidebarToggle = !this.setting.sidebarToggle;
  }

}
