class Button {
  button;

  constructor(content) {
    this.button = document.createElement("button");
    this.button.innerHTML = content;
    document.body.appendChild(this.button);
  }

  set height(height) {
    this.button.style.height = height + "px";
  }

  get height() {
    return this.button.style.height;
  }

  set width(width) {
    this.button.style.width = width + "px";
  }

  get width() {
    return this.button.style.width;
  }

  onClick(fn) {
    this.button.onclick = fn;
  }
}

let btn = new Button("click me");

btn.height = 200;
console.log("height : ", btn.height);

btn.width = 500;
console.log("width : ", btn.width);

btn.onClick(function () {
  console.log("button clicked...");
});

class YellowButton extends Button {
  onClick(fn) {
    this.button.onclick = function () {
      this.button.style.background = "yellow";
      fn();
    }.bind(this);
  }
}

let yellowButton = new YellowButton("click here");

yellowButton.width = 100;
yellowButton.height = 100;

yellowButton.onClick(function () {
  console.log("yellow button clicked....");
});

class Paragraph {
  paragraph;

  constructor(content) {
    this.paragraph = document.createElement("p");
    this.paragraph.innerHTML = content;
    document.body.appendChild(this.paragraph);
  }

  set height(height) {
    this.paragraph.style.height = height + "px";
  }

  get height() {
    return this.paragraph.style.height;
  }

  set width(width) {
    this.paragraph.style.width = width + "px";
  }

  get width() {
    return this.paragraph.style.width;
  }

  set color(color) {
    this.paragraph.style.color = color;
  }

  get color() {
    return this.paragraph.style.color;
  }

  set background(background) {
    this.paragraph.style.background = background;
  }

  get background() {
    return this.paragraph.style.background;
  }

  set padding(padding) {
    this.paragraph.style.padding = padding + "px";
  }

  get padding() {
    return this.paragraph.style.padding;
  }

  set fontSize(fontSize) {
    this.paragraph.style.fontSize = fontSize + "px";
  }

  get fontSize() {
    return this.paragraph.style.fontSize;
  }

  set border(border) {
    this.paragraph.style.border = "5px solid red";
  }

  get border() {
    return this.paragraph.style.border;
  }


  set margin(margin) {
    this.paragraph.style.margin = margin + "px";
  }

  get margin() {
    return this.paragraph.style.margin;
  }


  set lineHeight(lineHeight) {
    this.paragraph.style.lineHeight = lineHeight + "rem";
  }

  get lineHeight() {
    return this.paragraph.style.lineHeight;
  }

  onClick(fn) {
    this.paragraph.onclick = fn;
  }
}

let p = new Paragraph(
  "Amidst the bustling city streets, where neon signs flicker and conversations blend into a symphony of voices, a solitary figure walks. Their footsteps echo, carrying memories of forgotten dreams and whispered promises. In this urban labyrinth, hope and despair intertwine, seeking refuge in the shadows."
);

p.height = 200;
console.log("height : ", p.height);

p.width = 500;
console.log("width : ", p.width);

p.color = "red";
console.log("color : ", p.color);

p.background = "black";
console.log("background color : ", p.background);

p.padding = 20;
console.log("padding : ", p.padding);

p.fontSize = 20;
console.log("fontsize : ", p.fontSize);

p.border = "";
console.log("Border : ", p.border);


p.margin = "20";
console.log("margin : ", p.margin);


p.lineHeight = "2";
console.log("lineheight : ", p.lineHeight);

p.onClick(function () {
  console.log("button clicked...");
});
