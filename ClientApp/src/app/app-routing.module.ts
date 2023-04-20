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
import { TableCreateComponent } from './sub-section/html/table/table-create/table-create.component';
import { TableSectionComponent } from './sub-section/html/table/table-section/table-section.component';
import { TableRowComponent } from './sub-section/html/table/table-row/table-row.component';
import { TableDataSpanComponent } from './sub-section/html/table/table-data-span/table-data-span.component';
import { InputComponent } from './sub-section/html/form/input/input.component';
import { TextareaComponent } from './sub-section/html/form/textarea/textarea.component';
import { ButtonComponent } from './sub-section/html/form/button/button.component';
import { SelectComponent } from './sub-section/html/form/select/select.component';
import { DatalistComponent } from './sub-section/html/form/datalist/datalist.component';
import { MeterComponent } from './sub-section/html/form/meter/meter.component';
import { FieldsetComponent } from './sub-section/html/form/fieldset/fieldset.component';
import { VideoComponent } from './sub-section/html/multimedia/video/video.component';
import { AudioComponent } from './sub-section/html/multimedia/audio/audio.component';
import { IframeComponent } from './sub-section/html/multimedia/iframe/iframe.component';
import { CssBasicsComponent } from './sub-section/css/css-basics/css-basics.component';
import { TypeSeletorComponent } from './sub-section/css/selectors/type-seletor/type-seletor.component';
import { SelectorGroupComponent } from './sub-section/css/selectors/selector-group/selector-group.component';
import { InheritanceComponent } from './sub-section/css/selectors/inheritance/inheritance.component';

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
      { path: 'html-table-create', component: TableCreateComponent },
      { path: 'html-table-section', component: TableSectionComponent },
      { path: 'html-table-row', component: TableRowComponent },
      { path: 'html-table-data-span', component: TableDataSpanComponent },
      { path: 'html-form-input', component: InputComponent },
      { path: 'html-form-textarea', component: TextareaComponent },
      { path: 'html-form-button', component: ButtonComponent },
      { path: 'html-form-select', component: SelectComponent },
      { path: 'html-form-datalist', component: DatalistComponent },
      { path: 'html-form-meter', component: MeterComponent },
      { path: 'html-form-fieldset', component: FieldsetComponent },
      { path: 'html-multimedia-video', component: VideoComponent },
      { path: 'html-multimedia-audio', component: AudioComponent },
      { path: 'html-multimedia-iframe', component: IframeComponent },
      { path: 'css-basics', component: CssBasicsComponent },
      { path: 'type-selectors', component: TypeSeletorComponent },
      { path: 'group-selector', component: SelectorGroupComponent },
      { path: 'inheritance', component: InheritanceComponent },
    ]
  },
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
})
export class AppRoutingModule { }

