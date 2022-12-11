import { Component, OnInit } from '@angular/core';
import { TransportData } from '../../../TrasportData.service';
import { EditorState } from "@codemirror/state";
import { EditorView, keymap, lineNumbers, } from "@codemirror/view";
import { defaultKeymap } from "@codemirror/commands";
import { tags, Tag } from "@lezer/highlight";
import { syntaxHighlighting, HighlightStyle } from "@codemirror/language";
import { html } from "@codemirror/lang-html";

@Component({
  selector: 'app-html-cite',
  templateUrl: './html-cite.component.html',
  styleUrls: ['../../../general-style.css']
})
export class HtmlCiteComponent implements OnInit {

  constructor(
    private transportData: TransportData,
  ) { }

  title: string = "Элементы для оформления цитат и определений";
  textPath: Array<object> = [
    { section: 'Раздел HTML', path: '/#part-1' },
    { section: 'HTML-текст', path: 'html/basics' }
  ];

  ngOnInit(): void {
    let headers = document.querySelectorAll("h2.head");
    this.transportData.changeTitle(this.title, headers, this.textPath);

    const MyHighlightStyle = HighlightStyle.define([
      { tag: tags.tagName, color: "#905" },
      { tag: tags.attributeName, color: "#690" },
      { tag: tags.attributeValue, color: "#0089c4" },
    ])

    let startStateTemplate = EditorState.create({
      extensions: [keymap.of(defaultKeymap), EditorView.theme({
        ".cm-content": { color: "white" },
        ".cm-gutters": { background: "#282a36", border: "none" },
        ".cm-gutterElement": { padding: "0 10px 0 5px !important" }
      }),
      lineNumbers(), EditorView.editable.of(false), html(),
      syntaxHighlighting(MyHighlightStyle),
      ],
    })

    let startViewH1_1 = new EditorView({
      state: startStateTemplate,
      parent: document.querySelector(".code-mirror.head1_1")!,
    })

    let startViewH1_2 = new EditorView({
      state: startStateTemplate,
      parent: document.querySelector(".code-mirror.head1_2")!,
    })

    let startViewH2 = new EditorView({
      state: startStateTemplate,
      parent: document.querySelector(".code-mirror.head2")!,
    })

    let startViewH3_1 = new EditorView({
      state: startStateTemplate,
      parent: document.querySelector(".code-mirror.head3_1")!,
    })

    let startViewH3_2 = new EditorView({
      state: startStateTemplate,
      parent: document.querySelector(".code-mirror.head3_2")!,
    })

    let startViewH4 = new EditorView({
      state: startStateTemplate,
      parent: document.querySelector(".code-mirror.head4")!,
    })

    let startViewH5_1 = new EditorView({
      state: startStateTemplate,
      parent: document.querySelector(".code-mirror.head5_1")!,
    })

    // Содержимое представлений
    startViewH1_1.dispatch(startViewH1_1.state.update({ changes: {from: 0, insert: "<blockquote cite ='httр:/\/ru.wikipedia.org.wiki\/ВинниПух'>\n\t<p>\n\t\t- Интересно, что это так бумкнуло?<br> Не мог же я\n\t\tодин наделать столько шума.<br> И где, интересно знать,\n\t\tмой воздушный шарик?<br> И откуда, интересно, взялась\n\t\tэта тряпочка?\n\t</p>\n</blockquote>" } }))
    startViewH1_2.dispatch(startViewH1_2.state.update({ changes: { from: 0, insert: "<p>\n\tКак сказал А. А. Милн, <q>некоторые люди говорят с животными.\n\t<br>И лишь немногие слушают. Вот в чем проблема</q>.\n</p>" } }))
    startViewH2.dispatch(startViewH2.state.update({changes: {from: 0, insert: "<p>\n\t<abbr title='Профессор'>Пр.</abbr> Стивен Хокинг - физик-теоретик и космолог.\n</p>\n\n<p>\n\t<abbr title='Национальное агентство по аэронавтике\n\t и исследованию космического пространства'>NASA</abbr>\n\t - проводит несколько невероятных космических экспериментов.\n</p>" } }))
    startViewH3_1.dispatch(startViewH3_1.state.update({changes: { from: 0, insert: "<p>\n\tПо всему миру быпо продано более десяти миллионов<br>\n\tкопий книги <cite>Краткая история времени</cite> Стивена Хокинга.\n</p>" } }))
    startViewH3_2.dispatch(startViewH3_2.state.update({ changes: { from: 0, insert: "<p>\n\t<dfn>Черная дыpa</dfn> - это область в пространстве-времени,<br>\n\tгравитационное притяжение которой настолько велико, что покинуть<br>\n\tеё не могут даже объекты, движущиеся со скоростью света (в том числе<br>\n\tи кванты самого света).\n</p> " } }))
    startViewH4.dispatch(startViewH4.state.update({changes: {from: 0, insert: "<address>\n\t<p>\n\t\t<a href ='mailto:email@mywebsite.ua'>email@mywebsite.ru</a>\n\t</p>\n\t<p>г.Киев, ул.Долгоруковская, д. 25.</p>\n</address>" } }))
    startViewH5_1.dispatch(startViewH5_1.state.update({ changes: { from: 0, insert: "<p><bdo dir='rtl'>Текст в <b>обратном</b> направлении</bdo></p>\n\n<p><bdo dir='rtl'>Текст в <bdi><b>обратном</b></bdi> направлении</bdo></p>" } }))

    // Вывод результата
    document.querySelector(".code-result.head1_1")?.insertAdjacentHTML('beforeend', String(startViewH1_1.state.doc));
    document.querySelector(".code-result.head1_2")?.insertAdjacentHTML('beforeend', String(startViewH1_2.state.doc));
    document.querySelector(".code-result.head2")?.insertAdjacentHTML('beforeend', String(startViewH2.state.doc));
    document.querySelector(".code-result.head3_1")?.insertAdjacentHTML('beforeend', String(startViewH3_1.state.doc));
    document.querySelector(".code-result.head3_2")?.insertAdjacentHTML('beforeend', String(startViewH3_2.state.doc));
    document.querySelector(".code-result.head4")?.insertAdjacentHTML('beforeend', String(startViewH4.state.doc));
    document.querySelector(".code-result.head5_1")?.insertAdjacentHTML('beforeend', String(startViewH5_1.state.doc));

  }

}
