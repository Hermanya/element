function Element(element, attributes, children) {
    if(attributes===undefined)
        return element;
    if (attributes.length === undefined){
        for (var key in attributes) {
            element.setAttribute(key, attributes[key])
        }
    }else{
        children = attributes;
    }
    if(children!=undefined){
        for (var i = 0; i < children.length; i++) {
            if (typeof children[i] === "string" || typeof children[i] === "number") {
                element.appendChild(document.createTextNode(children[i]))
            } else {
                element.appendChild(children[i])
            }
        }
    }
    return element;
}

function A(e, t) {
    var n = document.createElement("a");
    return new Element(n, e, t)
}

function Abbr(e, t) {
    var n = document.createElement("abbr");
    return new Element(n, e, t)
}

function Acronym(e, t) {
    var n = document.createElement("acronym");
    return new Element(n, e, t)
}

function Address(e, t) {
    var n = document.createElement("address");
    return new Element(n, e, t)
}

function Applet(e, t) {
    var n = document.createElement("applet");
    return new Element(n, e, t)
}

function Area(e, t) {
    var n = document.createElement("area");
    return new Element(n, e, t)
}

function B(e, t) {
    var n = document.createElement("b");
    return new Element(n, e, t)
}

function Base(e, t) {
    var n = document.createElement("base");
    return new Element(n, e, t)
}

function basefont(e, t) {
    var n = document.createElement(" basefont");
    return new Element(n, e, t)
}

function Bdo(e, t) {
    var n = document.createElement("bdo");
    return new Element(n, e, t)
}

function Big(e, t) {
    var n = document.createElement("big");
    return new Element(n, e, t)
}

function blockquote(e, t) {
    var n = document.createElement(" blockquote");
    return new Element(n, e, t)
}

function Body(e, t) {
    var n = document.createElement("body");
    return new Element(n, e, t)
}

function Br(e, t) {
    var n = document.createElement("br");
    return new Element(n, e, t)
}

function Button(e, t) {
    var n = document.createElement("button");
    return new Element(n, e, t)
}

function Caption(e, t) {
    var n = document.createElement("caption");
    return new Element(n, e, t)
}

function Center(e, t) {
    var n = document.createElement("center");
    return new Element(n, e, t)
}

function Cite(e, t) {
    var n = document.createElement("cite");
    return new Element(n, e, t)
}

function Code(e, t) {
    var n = document.createElement("code");
    return new Element(n, e, t)
}

function Col(e, t) {
    var n = document.createElement("col");
    return new Element(n, e, t)
}

function colgroup(e, t) {
    var n = document.createElement(" colgroup");
    return new Element(n, e, t)
}

function Dd(e, t) {
    var n = document.createElement("dd");
    return new Element(n, e, t)
}

function Del(e, t) {
    var n = document.createElement("del");
    return new Element(n, e, t)
}

function Dfn(e, t) {
    var n = document.createElement("dfn");
    return new Element(n, e, t)
}

function Dir(e, t) {
    var n = document.createElement("dir");
    return new Element(n, e, t)
}

function Div(e, t) {
    var n = document.createElement("div");
    return new Element(n, e, t)
}

function Dl(e, t) {
    var n = document.createElement("dl");
    return new Element(n, e, t)
}

function Dt(e, t) {
    var n = document.createElement("dt");
    return new Element(n, e, t)
}

function Em(e, t) {
    var n = document.createElement("em");
    return new Element(n, e, t)
}

function fieldset(e, t) {
    var n = document.createElement(" fieldset");
    return new Element(n, e, t)
}

function Font(e, t) {
    var n = document.createElement("font");
    return new Element(n, e, t)
}

function Form(e, t) {
    var n = document.createElement("form");
    return new Element(n, e, t)
}

function Frame(e, t) {
    var n = document.createElement("frame");
    return new Element(n, e, t)
}

function frameset(e, t) {
    var n = document.createElement(" frameset");
    return new Element(n, e, t)
}

function H1(e, t) {
    var n = document.createElement("h1");
    return new Element(n, e, t)
}

function H2(e, t) {
    var n = document.createElement("h2");
    return new Element(n, e, t)
}

function H3(e, t) {
    var n = document.createElement("h3");
    return new Element(n, e, t)
}

function H4(e, t) {
    var n = document.createElement("h4");
    return new Element(n, e, t)
}

function H5(e, t) {
    var n = document.createElement("h5");
    return new Element(n, e, t)
}

function H6(e, t) {
    var n = document.createElement("h6");
    return new Element(n, e, t)
}

function Head(e, t) {
    var n = document.createElement("head");
    return new Element(n, e, t)
}

function Hr(e, t) {
    var n = document.createElement("hr");
    return new Element(n, e, t)
}

function Html(e, t) {
    var n = document.createElement("html");
    return new Element(n, e, t)
}

function I(e, t) {
    var n = document.createElement("i");
    return new Element(n, e, t)
}

function Iframe(e, t) {
    var n = document.createElement("iframe");
    return new Element(n, e, t)
}

function Img(e, t) {
    var n = document.createElement("img");
    return new Element(n, e, t)
}

function Input(e, t) {
    var n = document.createElement("input");
    return new Element(n, e, t)
}

function Ins(e, t) {
    var n = document.createElement("ins");
    return new Element(n, e, t)
}

function Isindex(e, t) {
    var n = document.createElement("isindex");
    return new Element(n, e, t)
}

function Kbd(e, t) {
    var n = document.createElement("kbd");
    return new Element(n, e, t)
}

function Label(e, t) {
    var n = document.createElement("label");
    return new Element(n, e, t)
}

function Legend(e, t) {
    var n = document.createElement("legend");
    return new Element(n, e, t)
}

function Li(e, t) {
    var n = document.createElement("li");
    return new Element(n, e, t)
}

function Link(e, t) {
    var n = document.createElement("link");
    return new Element(n, e, t)
}

function Map(e, t) {
    var n = document.createElement("map");
    return new Element(n, e, t)
}

function Menu(e, t) {
    var n = document.createElement("menu");
    return new Element(n, e, t)
}

function Meta(e, t) {
    var n = document.createElement("meta");
    return new Element(n, e, t)
}

function noframes(e, t) {
    var n = document.createElement(" noframes");
    return new Element(n, e, t)
}

function noscript(e, t) {
    var n = document.createElement(" noscript");
    return new Element(n, e, t)
}

function Object(e, t) {
    var n = document.createElement("object");
    return new Element(n, e, t)
}

function Ol(e, t) {
    var n = document.createElement("ol");
    return new Element(n, e, t)
}

function optgroup(e, t) {
    var n = document.createElement(" optgroup");
    return new Element(n, e, t)
}

function Option(e, t) {
    var n = document.createElement("option");
    return new Element(n, e, t)
}

function P(e, t) {
    var n = document.createElement("p");
    return new Element(n, e, t)
}

function Param(e, t) {
    var n = document.createElement("param");
    return new Element(n, e, t)
}

function Pre(e, t) {
    var n = document.createElement("pre");
    return new Element(n, e, t)
}

function Q(e, t) {
    var n = document.createElement("q");
    return new Element(n, e, t)
}

function S(e, t) {
    var n = document.createElement("s");
    return new Element(n, e, t)
}

function Samp(e, t) {
    var n = document.createElement("samp");
    return new Element(n, e, t)
}

function Script(e, t) {
    var n = document.createElement("script");
    return new Element(n, e, t)
}

function Select(e, t) {
    var n = document.createElement("select");
    return new Element(n, e, t)
}

function Small(e, t) {
    var n = document.createElement("small");
    return new Element(n, e, t)
}

function Span(e, t) {
    var n = document.createElement("span");
    return new Element(n, e, t)
}

function Strike(e, t) {
    var n = document.createElement("strike");
    return new Element(n, e, t)
}

function Strong(e, t) {
    var n = document.createElement("strong");
    return new Element(n, e, t)
}

function Style(e, t) {
    var n = document.createElement("style");
    return new Element(n, e, t)
}

function Sub(e, t) {
    var n = document.createElement("sub");
    return new Element(n, e, t)
}

function Sup(e, t) {
    var n = document.createElement("sup");
    return new Element(n, e, t)
}

function Table(e, t) {
    var n = document.createElement("table");
    return new Element(n, e, t)
}

function Tbody(e, t) {
    var n = document.createElement("tbody");
    return new Element(n, e, t)
}

function Td(e, t) {
    var n = document.createElement("td");
    return new Element(n, e, t)
}

function textarea(e, t) {
    var n = document.createElement(" textarea");
    return new Element(n, e, t)
}

function Tfoot(e, t) {
    var n = document.createElement("tfoot");
    return new Element(n, e, t)
}

function Th(e, t) {
    var n = document.createElement("th");
    return new Element(n, e, t)
}

function Thead(e, t) {
    var n = document.createElement("thead");
    return new Element(n, e, t)
}

function Title(e, t) {
    var n = document.createElement("title");
    return new Element(n, e, t)
}

function Tr(e, t) {
    var n = document.createElement("tr");
    return new Element(n, e, t)
}

function Tt(e, t) {
    var n = document.createElement("tt");
    return new Element(n, e, t)
}

function U(e, t) {
    var n = document.createElement("u");
    return new Element(n, e, t)
}

function Ul(e, t) {
    var n = document.createElement("ul");
    return new Element(n, e, t)
}

function Var(e, t) {
    var n = document.createElement("var");
    return new Element(n, e, t)
}
