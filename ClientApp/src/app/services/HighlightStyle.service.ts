import { Injectable } from '@angular/core';
//import { HighlightStyle } from "@codemirror/highlight";
import { tags } from "@lezer/highlight";
import { HighlightStyle } from "@codemirror/language";

@Injectable({
  providedIn: 'root',
})
export class EditorStyle {
  HighlightStyle = {
    HTML: HighlightStyle.define([
      { tag: tags.tagName, color: "#905" },
      { tag: tags.attributeName, color: "#690" },
      { tag: tags.attributeValue, color: "#0089c4" },
      { tag: tags.propertyName, color: "rgb(156, 220, 254)" },
    ]),
    CSS: HighlightStyle.define([
      { tag: tags.tagName, color: "rgb(215, 186, 125)" },
      { tag: tags.propertyName, color: "rgb(156, 220, 254)" },
      { tag: tags.attributeName, color: "rgb(215, 186, 125)" },
      { tag: tags.attributeValue, color: "rgb(215, 186, 125)" },
      { tag: tags.keyword, color: "rgb(215, 141, 125)" },
      { tag: tags.className, color: "rgb(215, 186, 125)" },
      { tag: tags.number, color: "rgb(214, 114, 164)" },
      { tag: tags.operator, color: "rgb(215, 186, 125)" },
      // Unit - единицы измерения
      { tag: tags.unit, color: "rgb(215, 141, 125)" },
      { tag: tags.color, color: "rgb(215, 141, 125)" },
      // literal - Любой идентификатор
      { tag: tags.name, color: "rgb(215, 186, 125)" },
      { tag: tags.punctuation, color: "white" },
    //  Brace - фигурные скобки
      { tag: tags.paren, color: "rgb(215, 141, 125)" },
      { tag: tags.squareBracket, color: "rgb(215, 186, 125)" },
      { tag: tags.string, color: "rgb(215, 141, 125)" },
      { tag: tags.quote, color: "rgb(215, 141, 125)" },
    ])
  };
}
