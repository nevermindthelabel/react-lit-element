import { html, LitElement, css } from 'lit-element';

class CustomElement extends LitElement {
  static get styles() {
    return [
      css `
      p {
        color: green;
      }
      `
    ]
  }

  static get properties() {
    return {
      text: { type: String }
    }
  }
  constructor() {
    super();
    this.text = '';
  }

  render() {
   return html `<button>Stuff ${this.text}</button>`
  }

}

customElements.define('custom-element', CustomElement);
