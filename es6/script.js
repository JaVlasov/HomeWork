class Options {
    constructor(height, width, bg, fontSize, textAlign) {
        this.height = height;
        this.width  = width;
        this.bg = bg;
        this.fontSize = fontSize;
        this.textAlign = textAlign;
    }
    createDiv() {
        let div = document.createElement('div');
    }
}


let obj = new Options(10, 15, 'red', 32, 'center');
console.log(obj);