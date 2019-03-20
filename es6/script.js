class Options {
    constructor(height, width, bg, fontSize, textAlign) {
        this.height = height;
        this.width  = width;
        this.bg = bg;
        this.fontSize = fontSize;
        this.textAlign = textAlign;
    }
    createDiv() {
        let div = document.createElement('div'); // создаётся div

        div.style.cssText = `height: ${this.height}px;
        width: ${this.width}px;
        background: ${this.bg};
        font-size: ${this.fontSize}px;
        text-align: ${this.textAlign};`;
        div.textContent = 'qwqwqw';
        document.body.appendChild(div); // добавляется в DOM
      
    }
    
}


let obj = new Options(200, 150, 'red', 32, 'center');

obj.createDiv();

let newObf = new Options(300, 100, 'green', 16, 'right');
newObf.createDiv();
