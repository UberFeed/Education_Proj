import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { SectionComponent } from './section/section.component';
import { SubsectionComponent } from './sub-section/subsection.component';

import { HtmlBasicsComponent } from './sub-section/html/html-basics/html-basics.component';
import { HtmlHeadlinesComponent } from './sub-section/html/html-text/html-headlines/html-headlines.component';
import { HtmlFormattingComponent } from './sub-section/html/html-text/html-formatting/html-formatting.component';
import { HtmlCompTextComponent } from './sub-section/html/html-text/html-comp-text/html-comp-text.component';
import { HtmlCiteComponent } from './sub-section/html/html-text/html-cite/html-cite.component';
import { OrderedListComponent } from './sub-section/html/html-lists/ordered-list/ordered-list.component';
import { UnorderedListComponent } from './sub-section/html/html-lists/unordered-list/unordered-list.component';
import { ListOfDefinitionsComponent } from './sub-section/html/html-lists/list-of-definitions/list-of-definitions.component';
import { HtmlHyperlinkComponent } from './sub-section/html/html-links/html-hyperlink/html-hyperlink.component';
import { HtmlLinkComponent } from './sub-section/html/html-links/html-link/html-link.component';
import { AddImageComponent } from './sub-section/html/html-img/add-image/add-image.component';
import { FigureComponent } from './sub-section/html/html-img/figure/figure.component';
import { ImageMapComponent } from './sub-section/html/html-img/image-map/image-map.component';

const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'html/basics', component: SectionComponent },
  {
    path: 'subsection', component: SubsectionComponent,
    children: [
      { path: 'html-basic', component: HtmlBasicsComponent },
      { path: 'html-headlines', component: HtmlHeadlinesComponent },
      { path: 'html-formatting', component: HtmlFormattingComponent },
      { path: 'html-compText', component: HtmlCompTextComponent },
      { path: 'html-cite', component: HtmlCiteComponent },
      { path: 'html-ordered-list', component: OrderedListComponent },
      { path: 'html-unordered-list', component: UnorderedListComponent },
      { path: 'html-list-of-definitions', component: ListOfDefinitionsComponent },
      { path: 'html-hyperlinks', component: HtmlHyperlinkComponent },
      { path: 'html-link', component: HtmlLinkComponent },
      { path: 'html-add-img', component: AddImageComponent },
      { path: 'html-figure', component: FigureComponent },
      { path: 'html-image-map', component: ImageMapComponent },
    ]
  },
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
})
export class AppRoutingModule { }

