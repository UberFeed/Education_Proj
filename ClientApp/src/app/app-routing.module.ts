import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { SectionComponent } from './section/section.component';
import { SubsectionComponent } from './sub-section/subsection.component';

import { HtmlBasicsComponent } from './sub-section/html/html-basics/html-basics.component';
import { HtmlTagHeadComponent } from './sub-section/html/html-tag-head/html-tag-head.component';
import { HtmlTagBodyComponent } from './sub-section/html/html-tag-body/html-tag-body.component';

const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'html/basics', component: SectionComponent },
  {
    path: 'subsection', component: SubsectionComponent,
    children: [
      { path: 'html-basic', component: HtmlBasicsComponent },
      { path: 'html-tagHead', component: HtmlTagHeadComponent },
      { path: 'html-tagBody', component: HtmlTagBodyComponent }
    ]
  },
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
})
export class AppRoutingModule { }

