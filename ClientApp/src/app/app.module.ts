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
import { FontPropComponent } from './sub-section/css/css-text/font-prop/font-prop.component';
import { TextDecorComponent } from './sub-section/css/css-text/text-decor/text-decor.component';
import { TextAlignComponent } from './sub-section/css/css-text/text-align/text-align.component';
import { DecorListsComponent } from './sub-section/css/decor/decor-lists/decor-lists.component';
import { DecorTableComponent } from './sub-section/css/decor/decor-table/decor-table.component';
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
    ImageMapComponent,
    TableCreateComponent,
    TableSectionComponent,
    TableRowComponent,
    TableDataSpanComponent,
    InputComponent,
    TextareaComponent,
    ButtonComponent,
    SelectComponent,
    MeterComponent,
    DatalistComponent,
    FieldsetComponent,
    VideoComponent,
    AudioComponent,
    IframeComponent,
    CssBasicsComponent,
    TypeSeletorComponent,
    SelectorGroupComponent,
    InheritanceComponent,
    FontPropComponent,
    TextDecorComponent,
    TextAlignComponent,
    DecorListsComponent,
    DecorTableComponent,
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
