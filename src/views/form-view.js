import { LitElement, html } from 'lit-element';
import { styles } from '../styles/form-view-styles';
import '../components/form-user';

class FormView extends LitElement {

    static get properties() {
        return {
            edit: { type: Object }
        }
    }

    static get styles() {
        return [styles]
    }

    render() {
        return html`
        <div class="form-view">
            <form-user .edit=${this.edit}></form-user>
        </div>`
    }
}

customElements.define('form-view', FormView);