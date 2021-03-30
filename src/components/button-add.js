import { LitElement, html } from 'lit-element';
import { styles } from '../styles/button-user-styles';

class ButtonAdd extends LitElement {

    static get styles() {
        return [styles]
    }

    render() {
        return html`
        <button>Add New User</button>`
    }
}

customElements.define('button-add', ButtonAdd );