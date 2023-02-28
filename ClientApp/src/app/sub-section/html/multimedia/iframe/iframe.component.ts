import { Component, OnInit, Output } from '@angular/core';
import { TransportData } from '../../../TrasportData.service';

@Component({
  selector: 'app-iframe',
  templateUrl: './iframe.component.html',
  styleUrls: ['../../../general-style.css']
})
export class IframeComponent implements OnInit {

  constructor(
    private transportData: TransportData,
  ) { }

  title: string = "Внедрение";

  textPath: Array<object> = [
    { section: 'Раздел HTML', path: '/#part-1' },
    { section: 'Мультимедиа и встраивание', path: 'html/basics' }
  ];

  @Output()
  NameComponent: string = "Использование элемента <iframe>";

  @Output()
  interactiveExample: string = "<iframe src='https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d20309.075323923767!2d30.4721233!3d50.4851493!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sru!2sua!4v1676456763148!5m2!1sru!2sua' \n\t\twidth='260' \n\t\theight='260' style='border:0;' \n\t\tloading='lazy' \n\t\treferrerpolicy='no-referrer-when-downgrade' />";

  @Output()
  staticExample1: string = "<iframe src='https://www.youtube.com/watch?v=Whg1_TtnksI' \n\t\twidth='400' \n\t\theight='250' />";

  @Output()
  staticExample2: string = "<iframe width='560' \n\t\theight='315' \n\t\tsrc='https://www.youtube.com/embed/Whg1_TtnksI' \n\t\ttitle='YouTube video player' \n\t\tframeborder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share' \n\t\tallowfullscreen />";

  @Output()
  staticExample3: string = "<iframe style='border-radius: 12px' \n\t\tsrc='https://open.spotify.com/embed/track/4Rd8k82FTMfYFuBbKFl6sf?utm_source=generator' \n\t\twidth='100%' \n\t\theight='352' \n\t\tframeBorder='0' \n\t\tallowfullscreen='' \n\t\tallow='autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture' \n\t\tloading='lazy' />";

  @Output()
  staticExample4: string = "<iframe width='100%' \n\t\theight='300' \n\t\tscrolling='no' \n\t\tframeborder='no' \n\t\tallow='autoplay' \n\t\tsrc='https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1001865832&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true' />";

  ngOnInit(): void {
    let headers = document.querySelectorAll("h2.head");
    this.transportData.changeTitle(this.title, headers, this.textPath);
  }

}
