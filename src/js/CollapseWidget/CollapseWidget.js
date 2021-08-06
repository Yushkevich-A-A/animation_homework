export default class CollapseWidget {
  constructor() {
    this.deleteContent = this.deleteContent.bind(this);
    this.init();
  }

  init() {
    this.drawCollapseWidget();
    this.createContent();
    this.listeners();
  }

  listeners() {
    document.addEventListener('click', (event) => {
      if (event.target.closest('.collapse-button')) {
        this.checkExsistContent();
      }
    });
  }

  checkExsistContent() {
    const content = document.querySelector('.collapse-block-text');
    if (!content) {
      this.addContent();
      this.buttonClicked();
      return;
    }
    this.hiddenContent();
  }

  drawCollapseWidget() {
    this.widget = document.createElement('div');
    this.widget.classList.add('widget-collapsable');
    this.widget.innerHTML = ` <div class="collapse-block-button">
                                <button class="collapse-button">Collapse</button>
                              </div>
                              <div class="collapse-block-content">
                              </div>`;
    document.body.appendChild(this.widget);
    this.button = document.querySelector('.collapse-button');
    this.contentBlock = document.querySelector('.collapse-block-content');
    this.contentBlockHeight = this.contentBlock.getBoundingClientRect().height;
    this.contentBlock.style.height = `${this.contentBlockHeight}px`;
  }

  createContent() {
    this.contentBlockText = document.createElement('p');
    this.contentBlockText.classList.add('collapse-block-text');
    this.contentBlockText.textContent = 'Стихотворение в прозе (фр. Poème en prose, petit poème en prose) — литературная форма, в которой прозаический (не осложнённый, как в стихе, дополнительной ритмической организацией) принцип развёртывания речи сочетается с относительной краткостью и лирическим пафосом, свойственными поэзии. Повествовательное начало в этой форме зачастую ослаблено, а внимание к языковой, выразительной стороне текста, в том числе к образности и собственно прозаическому ритму — повышено. При дальнейшем повышении ритмической упорядоченности текста, выходящей за пределы речевой нормы, возникают такие смежные со стихотворением в прозе формы, как версэ и ритмическая проза (в русской традиции ассоциирующаяся, прежде всего, с именем Андрея Белого); по другую сторону стихотворения в прозе лежат сверхкраткие прозаические жанры (в частности, афоризм). Не следует путать стихотворение в прозе со свободным стихом (верлибром), ритмическая структура которого однозначно задана стихоразделами.';
  }

  addContent() {
    this.contentBlock.appendChild(this.contentBlockText);
    this.contentBlockTextHeight = this.contentBlockText.getBoundingClientRect().height;
    this.contentBlock.style.height = `${this.contentBlockHeight + this.contentBlockTextHeight}px`;
  }

  hiddenContent() {
    this.contentBlock.style.height = `${this.contentBlockHeight}px`;
    this.contentBlock.addEventListener('transitionend', this.deleteContent);
  }

  deleteContent() {
    this.contentBlockText.parentElement.removeChild(this.contentBlockText);
    this.contentBlock.removeEventListener('transitionend', this.deleteContent);
  }

  buttonClicked() {
    if (this.button.classList.contains('collapse-button-clicked')) {
      return;
    }
    this.button.classList.add('collapse-button-clicked');
  }
}
