export default class CallbackForm {
  constructor() {
    this.deleteButton = this.deleteButton.bind(this);
    this.deleteForm = this.deleteForm.bind(this);
    this.init();
  }

  init() {
    this.drawWidget();
    this.listeners();
  }

  listeners() {
    this.widgetCallback.addEventListener('click', (event) => {
      event.preventDefault();
      if (event.target.closest('.widget-form-button')) {
        this.hiddenButton();
        this.appendForm();
        return;
      }

      if (event.target.closest('.button-submit-form')) {
        this.appendButton();
        this.hiddenForm();
      }

      if (event.target.closest('.button-cancel-form')) {
        this.appendButton();
        this.hiddenForm();
      }
    });

    this.widgetFormButton.addEventListener('mouseenter', (event) => {
      event.target.querySelector('.button-open-form').classList.add('button-open-form-hover');
    });

    this.widgetFormButton.addEventListener('mouseleave', (event) => {
      event.target.querySelector('.button-open-form').classList.remove('button-open-form-hover');
    });
  }

  drawWidget() {
    this.widgetCallback = document.createElement('div');
    this.widgetCallback.classList.add('widget-callback');
    document.body.appendChild(this.widgetCallback);
    this.drawButton();
    this.drawWidgetForm();
  }

  drawButton() {
    this.widgetFormButton = document.createElement('div');
    this.widgetFormButton.classList.add('widget-form-button');
    this.widgetFormButton.innerHTML = '<button class="button-open-form"></button>';
    this.widgetCallback.appendChild(this.widgetFormButton);
    this.topPoint = this.widgetFormButton.offsetTop + this.widgetFormButton.offsetHeight / 2;
    this.leftPoint = this.widgetFormButton.offsetLeft + this.widgetFormButton.offsetWidth / 2;
  }

  drawWidgetForm() {
    this.widgetForm = document.createElement('div');
    this.widgetForm.classList.add('widget-form', 'hidden-element');
    this.widgetForm.innerHTML = `<form class="form">
                                  <div class="block-textarea-form">
                                    <label for="textarea-form" class="textarea-form-label">Напишите нам</label>
                                    <textarea name="textarea-form" class="textarea-form"></textarea>
                                  </div>
                                  <div class="block-buttons-form">
                                    <button class="button-submit-form">Отправить</button>
                                    <div class="button-cancel-form"></div>
                                  </div>
                                </form>`;
    this.widgetCallback.appendChild(this.widgetForm);
    this.widgetForm.style.top = `${this.topPoint - this.widgetForm.offsetHeight}px`;
    this.widgetForm.style.left = `${this.leftPoint - this.widgetForm.offsetWidth}px`;
    this.widgetForm.classList.add('disactive');
  }

  hiddenButton() {
    this.widgetFormButton.classList.add('hidden-element');
    this.widgetFormButton.addEventListener('transitionend', this.deleteButton);
  }

  appendButton() {
    this.widgetFormButton.classList.remove('disactive');
    setTimeout(() => this.widgetFormButton.classList.remove('hidden-element'));
  }

  hiddenForm() {
    this.widgetForm.classList.add('hidden-element');
    this.widgetForm.addEventListener('transitionend', this.deleteForm);
  }

  appendForm() {
    this.widgetForm.classList.remove('disactive');
    setTimeout(() => this.widgetForm.classList.remove('hidden-element'));
  }

  deleteButton() {
    this.widgetFormButton.classList.add('disactive');
    this.widgetFormButton.removeEventListener('transitionend', this.deleteButton);
  }

  deleteForm() {
    this.widgetForm.classList.add('disactive');
    this.widgetForm.removeEventListener('transitionend', this.deleteForm);
  }
}
