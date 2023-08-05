class Visitor {
    visitTextElement (textElement) {
        throw new Error('visitorTextElement() must be implemented ')
    }
    visitImageElement (imageElement) { 
        throw new Error('visitorImageElement() must be implemented ')
    
    }

}
//concrete Visitor
class HtmlExporter extends Visitor {
    visitTextElement (textElement) { 
        return `<p>${textElement.getText()}</p>`
    
    }
    visitImageElement (imageElement) { 
        return `<img src="${imageElement.getSource()}" alt="${imageElement.getAltText()}" />`
    }
}
//Element
class DocumentElement {
    accept (visitor) {
        throw new Error('accept() must be implemented ')
    
    }
}
//concrete Element

class TextElement extends DocumentElement { 
    constructor (text) {
        super();
        this.text = text;
    }
    getText () {
        return this.text;
    }
    accept (visitor) {
        return visitor.visitTextElement(this);
    
    }
}

class ImageElement extends DocumentElement { 
    constructor (source, altText) { 
        super();
        this.source = source;
        this.altText = altText;
    }
    getSource () {
        return this.source;

    }
    getAltText () { 
        return this.altText;
    
    }
    accept (visitor) { 
        return visitor.visitImageElement(this);
    
    
    }
}

module.exports = {
    HtmlExporter,
    TextElement,
    ImageElement
}