import { Component, OnInit } from '@angular/core';
import { TransportData } from '../../../TrasportData.service';
import { EditorState } from "@codemirror/state";
import { EditorView, keymap, lineNumbers, } from "@codemirror/view";
import { defaultKeymap } from "@codemirror/commands";
import { tags, Tag } from "@lezer/highlight";
import { syntaxHighlighting, HighlightStyle } from "@codemirror/language";
import { html } from "@codemirror/lang-html";

@Component({
  selector: 'app-html-formatting',
  templateUrl: './html-formatting.component.html',
  styleUrls: ['../../../general-style.css']
})
export class HtmlFormattingComponent implements OnInit {

  constructor(private transportData: TransportData) { }

  title: string = "Элементы для форматирования текста";
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

    let startStateH1 = EditorState.create({
      doc: "<p>" + "\n\t" +
        "Абзац состоит из одного или нескольких \n\tпредложений, формирующих самодостаточную часть \n\tкакого-либо высказывания. Абзац начинается с красной строки." + "\n" +
        "</p>" + "\n\n" +
        "<p>" + "\n\t" +
        "Текст, разделенный на части, легче понимать.\n\tНапример текст книги может быть разделен на \n\tглавы. В главах могут быть подзаголовки. \n\tПод каждым из подзаголовков будет следовать текст, \n\tсостоящий из одного или нескольких абзацев." + "\n" +
        "</p>"
      ,
      extensions: [keymap.of(defaultKeymap), EditorView.theme({
        ".cm-content": { color: "white" },
        ".cm-gutters": { background: "#282a36", border: "none" },
        ".cm-gutterElement": { padding: "0 10px 0 5px !important" }
      }),
      lineNumbers(), EditorView.editable.of(false), html(),
      syntaxHighlighting(MyHighlightStyle),
      ],
    })

    new EditorView({
      state: startStateH1,
      parent: document.querySelector(".code-mirror.head1")!,
    })

    let startStateH2_1 = EditorState.create({
      doc: "<p>" + "\n\t" +
        "Вот так можно вывести текст с <b>полужирным</b> \n\tначертанием шрифта" + "\n" +
        "</p>" + "\n\n" +
        "<p>" + "\n\t" +
        "В аннотации основные характеристики какого-либо \n\tпродукта могут быть выделены <b>полужирным</Ь> начертанием шрифта." + "\n" +
        "</p>"
      ,
      extensions: [keymap.of(defaultKeymap), EditorView.theme({
        ".cm-content": { color: "white" },
        ".cm-gutters": { background: "#282a36", border: "none" },
        ".cm-gutterElement": { padding: "0 10px 0 5px !important" }
      }),
      lineNumbers(), EditorView.editable.of(false), html(),
      syntaxHighlighting(MyHighlightStyle),
      ],
    })

    new EditorView({
      state: startStateH2_1,
      parent: document.querySelector(".code-mirror.head2_1")!,
    })

    let startStateH2_2 = EditorState.create({
      doc: "<p>Вот так можно отобразить текст <i>курсивом</i></p>" + "\n\n" +
        "<p>Это сорт картофеля <i>Solanum tuberosum</i></p>" + "\n\n" +
        "<p>Капитан Кук прибыл в Австралию на корабле <i>Индевор</i></p>",
      extensions: [keymap.of(defaultKeymap), EditorView.theme({
        ".cm-content": { color: "white" },
        ".cm-gutters": { background: "#282a36", border: "none" },
        ".cm-gutterElement": { padding: "0 10px 0 5px !important" }
      }),
      lineNumbers(), EditorView.editable.of(false), html(),
      syntaxHighlighting(MyHighlightStyle),
      ],
    })

    new EditorView({
      state: startStateH2_2,
      parent: document.querySelector(".code-mirror.head2_2")!,
    })

    let startStateH3_1 = EditorState.create({
      doc: "<p>" + "\n\t" +
        "Земля<br> становится тяжелее день ото дня<br> из-за падающей на нее космической пыли." + "\n" +
        "</p>",
      extensions: [keymap.of(defaultKeymap), EditorView.theme({
        ".cm-content": { color: "white" },
        ".cm-gutters": { background: "#282a36", border: "none" },
        ".cm-gutterElement": { padding: "0 10px 0 5px !important" }
      }),
      lineNumbers(), EditorView.editable.of(false), html(),
      syntaxHighlighting(MyHighlightStyle),
      ],
    })

    new EditorView({
      state: startStateH3_1,
      parent: document.querySelector(".code-mirror.head3_1")!,
    })

    let startStateH3_2 = EditorState.create({
      doc: "<p>Венера - единственная планета, вращающаяся по часовой стрелке.</p>" + "\n" +
        "<hr>" + "\n" +
        "<p>Юпитер больше, чем все остальные планеты вместе взятые.</p>",
      extensions: [keymap.of(defaultKeymap), EditorView.theme({
        ".cm-content": { color: "white" },
        ".cm-gutters": { background: "#282a36", border: "none" },
        ".cm-gutterElement": { padding: "0 10px 0 5px !important" }
      }),
      lineNumbers(), EditorView.editable.of(false), html(),
      syntaxHighlighting(MyHighlightStyle),
      ],
    })

    new EditorView({
      state: startStateH3_2,
      parent: document.querySelector(".code-mirror.head3_2")!,
    })

    let startStateH4 = EditorState.create({
      doc: "<p>Сейчас мы изучим формулу E=mc<sup>2</sup></p>" + "\n\n" +
        "<p>" + "\n\t" +
        "В 2009 году концентрация CO<sub>2</sub> \n\tв атмосферном воздухе возросла на 2 ppm." + "\n" +
        "</p>",
      extensions: [keymap.of(defaultKeymap), EditorView.theme({
        ".cm-content": { color: "white" },
        ".cm-gutters": { background: "#282a36", border: "none" },
        ".cm-gutterElement": { padding: "0 10px 0 5px !important" }
      }),
      lineNumbers(), EditorView.editable.of(false), html(),
      syntaxHighlighting(MyHighlightStyle),
      ],
    })

    new EditorView({
      state: startStateH4,
      parent: document.querySelector(".code-mirror.head4")!,
    })

    let startStateH5 = EditorState.create({
      doc: "<p>Луна понемногу отдаляется от Земли.</p>" + "\n\n" +
        "<p>Луна       понемногу отдаляется от Земли. " + "\n\n" +
        "<p>Луна понемногу отдаляется от " + "                 " +
        "          \n                           Земли.</p>",
      extensions: [keymap.of(defaultKeymap), EditorView.theme({
        ".cm-content": { color: "white" },
        ".cm-gutters": { background: "#282a36", border: "none" },
        ".cm-gutterElement": { padding: "0 10px 0 5px !important" }
      }),
      lineNumbers(), EditorView.editable.of(false), html(),
      syntaxHighlighting(MyHighlightStyle),
      ],
    })

    new EditorView({
      state: startStateH5,
      parent: document.querySelector(".code-mirror.head5")!,
    })

    let startStateH6 = EditorState.create({
      doc: "<p><small>Умешьшенный размер текста на одну единицу</small></p>" + "\n\n" +
        "<p><big>Увеличенный размер текста на одну единицу</big> ",
      extensions: [keymap.of(defaultKeymap), EditorView.theme({
        ".cm-content": { color: "white" },
        ".cm-gutters": { background: "#282a36", border: "none" },
        ".cm-gutterElement": { padding: "0 10px 0 5px !important" }
      }),
      lineNumbers(), EditorView.editable.of(false), html(),
      syntaxHighlighting(MyHighlightStyle),
      ],
    })

    new EditorView({
      state: startStateH6,
      parent: document.querySelector(".code-mirror.head6")!,
    })

    let startStateH7 = EditorState.create({
      doc: "<p>Это была <del>худшая</del> <ins>лyчшaя</ins> из ее идей</p>",
      extensions: [keymap.of(defaultKeymap), EditorView.theme({
        ".cm-content": { color: "white" },
        ".cm-gutters": { background: "#282a36", border: "none" },
        ".cm-gutterElement": { padding: "0 10px 0 5px !important" }
      }),
      lineNumbers(), EditorView.editable.of(false), html(),
      syntaxHighlighting(MyHighlightStyle),
      ],
    })

    new EditorView({
      state: startStateH7,
      parent: document.querySelector(".code-mirror.head7")!,
    })

    let startStateH8 = EditorState.create({
      doc: "<p>HTML-элементы используются для <mark>описания структуры</mark> страницы</p>",
      extensions: [keymap.of(defaultKeymap), EditorView.theme({
        ".cm-content": { color: "white" },
        ".cm-gutters": { background: "#282a36", border: "none" },
        ".cm-gutterElement": { padding: "0 10px 0 5px !important" }
      }),
      lineNumbers(), EditorView.editable.of(false), html(),
      syntaxHighlighting(MyHighlightStyle),
      ],
    })

    new EditorView({
      state: startStateH8,
      parent: document.querySelector(".code-mirror.head8")!,
    })

    let startStateH9_1 = EditorState.create({
      doc: "<p>" + "\n\t" +
        "<strong>Бyдьтe ocтopoжны:</strong> В данной местности орудуют воры-карманники." + "\n" +
        "</p>" + "\n\n" +
        "<p>" + "\n\t" +
        "Данная игрушка содержит большое количество мелких \n\tдеталей и <strong>нe предназначена для детей \n\tмладше пяти лeт.</strong>" + "\n" +
        "</p>",
      extensions: [keymap.of(defaultKeymap), EditorView.theme({
        ".cm-content": { color: "white" },
        ".cm-gutters": { background: "#282a36", border: "none" },
        ".cm-gutterElement": { padding: "0 10px 0 5px !important" }
      }),
      lineNumbers(), EditorView.editable.of(false), html(),
      syntaxHighlighting(MyHighlightStyle),
      ],
    })

    new EditorView({
      state: startStateH9_1,
      parent: document.querySelector(".code-mirror.head9_1")!,
    })

    let startStateH9_2 = EditorState.create({
      doc: "<p>Я <em>думаю</em>, Анна была первой. </p>" + "\n\n" +
        "<p>Я думаю, <em>Анна</em> была первой.</p>" + "\n\n" +
        "<p>Я думаю, Анна была <em>первой</em>.</p>",
      extensions: [keymap.of(defaultKeymap), EditorView.theme({
        ".cm-content": { color: "white" },
        ".cm-gutters": { background: "#282a36", border: "none" },
        ".cm-gutterElement": { padding: "0 10px 0 5px !important" }
      }),
      lineNumbers(), EditorView.editable.of(false), html(),
      syntaxHighlighting(MyHighlightStyle),
      ],
    })

    new EditorView({
      state: startStateH9_2,
      parent: document.querySelector(".code-mirror.head9_2")!,
    })

    // Вывод результата в соответствующие заголовки
    let resultH1code = document.createElement("div");
    resultH1code.insertAdjacentHTML('beforeend', String(startStateH1.doc));
    document.querySelector(".code-result.head1")?.append(resultH1code);

    let resultH2_1code = document.createElement("div");
    resultH2_1code.insertAdjacentHTML('beforeend', String(startStateH2_1.doc));
    document.querySelector(".code-result.head2_1")?.append(resultH2_1code);

    let resultH2_2code = document.createElement("div");
    resultH2_2code.insertAdjacentHTML('beforeend', String(startStateH2_2.doc));
    document.querySelector(".code-result.head2_2")?.append(resultH2_2code);

    let resultH3_1code = document.createElement("div");
    resultH3_1code.insertAdjacentHTML('beforeend', String(startStateH3_1.doc));
    document.querySelector(".code-result.head3_1")?.append(resultH3_1code);

    let resultH3_2code = document.createElement("div");
    resultH3_2code.insertAdjacentHTML('beforeend', String(startStateH3_2.doc));
    document.querySelector(".code-result.head3_2")?.append(resultH3_2code);

    let resultH4code = document.createElement("div");
    resultH4code.insertAdjacentHTML('beforeend', String(startStateH4.doc));
    document.querySelector(".code-result.head4")?.append(resultH4code);

    let resultH5code = document.createElement("div");
    resultH5code.insertAdjacentHTML('beforeend', String(startStateH5.doc));
    document.querySelector(".code-result.head5")?.append(resultH5code);

    let resultH6code = document.createElement("div");
    resultH6code.insertAdjacentHTML('beforeend', String(startStateH6.doc));
    document.querySelector(".code-result.head6")?.append(resultH6code);

    let resultH7code = document.createElement("div");
    resultH7code.insertAdjacentHTML('beforeend', String(startStateH7.doc));
    document.querySelector(".code-result.head7")?.append(resultH7code);

    let resultH8code = document.createElement("div");
    resultH8code.insertAdjacentHTML('beforeend', String(startStateH8.doc));
    document.querySelector(".code-result.head8")?.append(resultH8code);

    let resultH9_1code = document.createElement("div");
    resultH9_1code.insertAdjacentHTML('beforeend', String(startStateH9_1.doc));
    document.querySelector(".code-result.head9_1")?.append(resultH9_1code);

    let resultH9_2code = document.createElement("div");
    resultH9_2code.insertAdjacentHTML('beforeend', String(startStateH9_2.doc));
    document.querySelector(".code-result.head9_2")?.append(resultH9_2code);


  }

}
