const { HtmlExporter, TextElement, ImageElement } = require('./visitor');


// Usage
const textElement = new TextElement('This is a paragraph.');
const imageElement = new ImageElement('image.jpg', 'A beautiful image');

const htmlExporter = new HtmlExporter();
const textHtml = textElement.accept(htmlExporter);
console.log(textHtml);

const imageHtml = imageElement.accept(htmlExporter);
console.log(imageHtml);