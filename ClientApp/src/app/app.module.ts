import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { SectionComponent } from './section/section.component';
import { SubsectionComponent } from './sub-section/subsection.component';
import { OrderedListComponent } from './sub-section/html/html-lists/ordered-list/ordered-list.component';
import { UnorderedListComponent } from './sub-section/html/html-lists/unordered-list/unordered-list.component';
import { ListOfDefinitionsComponent } from './sub-section/html/html-lists/list-of-definitions/list-of-definitions.component';
import { HtmlHyperlinkComponent } from './sub-section/html/html-links/html-hyperlink/html-hyperlink.component';
import { HtmlLinkComponent } from './sub-section/html/html-links/html-link/html-link.component';
import { AddImageComponent } from './sub-section/html/html-img/add-image/add-image.component';
import { FigureComponent } from './sub-section/html/html-img/figure/figure.component';
import { InteractiveExampleComponent } from './interactive-example/interactive-example.component';
import { StaticExampleComponent } from './static-example/static-example.component';
import { CodeExampleComponent } from './code-example/code-example.component';

import { AppRoutingModule } from './app-routing.module';
import { LessonsData } from './LessonsData.service';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    SectionComponent,
    SubsectionComponent,
    OrderedListComponent,
    UnorderedListComponent,
    ListOfDefinitionsComponent,
    HtmlHyperlinkComponent,
    HtmlLinkComponent,
    AddImageComponent,
    FigureComponent,
    InteractiveExampleComponent,
    StaticExampleComponent,
    CodeExampleComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    RouterModule
  ],
  providers: [LessonsData],
  bootstrap: [AppComponent],
})
export class AppModule { }
