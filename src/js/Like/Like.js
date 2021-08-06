export default class Liked {
  constructor() {
    this.init();
    this.arrBubbles = ['one', 'two', 'three', 'four'];
  }

  init() {
    this.drawWidget();
    this.listeners();
  }

  drawWidget() {
    this.widget = document.createElement('div');
    this.widget.classList.add('widget-liked');
    this.widget.innerHTML = `<div class="liked-block"></div>
    <div class="liked-button-block">
      <button class="liked-button">Like</button>
    </div>`;
    document.body.appendChild(this.widget);
    this.button = document.querySelector('.liked-button');
    this.pointTop = this.button.offsetTop + this.button.offsetHeight / 2;
    this.pointLeft = this.button.offsetLeft + this.button.offsetWidth / 2;
  }

  listeners() {
    this.button.addEventListener('click', () => {
      this.createHeart();
    });
  }

  createHeart() {
    new Promise((resolve, reject) => {
      const img = document.createElement('img');
      img.classList.add('img-heart');
      img.src = 'heart.png';
      this.widget.appendChild(img);
      img.style.top = `${this.pointTop - img.offsetHeight / 2}px`;
      img.style.left = `${this.pointLeft - img.offsetWidth / 2}px`;
      const indexAnimation = Math.floor(Math.random() * 4);
      img.addEventListener('animationend', () => {
        resolve(img);
      });
      img.classList.add(this.arrBubbles[indexAnimation]);
    }).then((result) => result.parentElement.removeChild(result));
  }
}
