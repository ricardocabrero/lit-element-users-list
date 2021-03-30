
import { LitElement, html } from 'lit-element';
import { styles } from '../styles/error-message-styles';

class ErrorMessage extends LitElement {
    
    static get properties() {
        return {
            text: { type: String },
        }
    }

    static get styles() {
        return [styles]
    }

    render() {
        return html`
        <p>${this.text}</p>`;
    }
}

customElements.define('error-message', ErrorMessage);