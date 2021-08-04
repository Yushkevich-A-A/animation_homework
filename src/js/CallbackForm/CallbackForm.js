export default class CallbackForm {
  constructor() {
    this.init();
  }

  init() {
    this.drawWidget();
    this.listeners();
  }

  listeners() {
    this.widgetCallback.addEventListener('click', event => {
      event.preventDefault();
      if (event.target.closest('.widget-form-button')) {
        event.target.closest('.widget-form-button').classList.add('hidden-element');
      }
    })

    this.widgetFormButton.addEventListener('mouseenter', event => {
      event.target.querySelector('.button-open-form').classList.add('button-open-form-hover');
    })

    this.widgetFormButton.addEventListener('mouseleave', event => {
      event.target.querySelector('.button-open-form').classList.remove('button-open-form-hover');
    })
  }

  drawWidget() {
    this.widgetCallback = document.createElement('div');
    this.widgetCallback.classList.add('widget-callback');
    document.body.appendChild(this.widgetCallback);
    this.drawButton();
    this.drawWidgetForm();
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
  }

  drawButton() {
    this.widgetFormButton = document.createElement('div');
    this.widgetFormButton.classList.add('widget-form-button');
    this.widgetFormButton.innerHTML = `<button class="button-open-form"></button>`;
    this.widgetCallback.appendChild(this.widgetFormButton);
    const { top, left } = this.widgetFormButton.getBoundingClientRect();
    this.topPoint = top + this.widgetFormButton.offsetHeight / 2;
    this.leftPoint = left + this.widgetFormButton.offsetWidth / 2;
  }

  hiddenButton() {
    
  }

  appendForm() {

  }
}