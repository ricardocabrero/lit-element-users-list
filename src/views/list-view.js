import { LitElement, html } from 'lit-element';
import { styles } from '../styles/list-view-styles';
import '../components/list-item';
import '../components/button-add';

class ListView extends LitElement {

    static get properties() {
        return {
            displayViewList: { type: Boolean },
            data: { type: Array },
        }
    }

    constructor() {
        super();
        this.displayViewList = true;
    }

    static get styles() {
        return [styles]
    }
    
    handleClick() {
        this.dispatchEvent(new CustomEvent('display-view-list', {
            bubbles: true,
            composed: true,
            detail: this.displayViewList
        }))
    }

    render() {
        return html`
        <div class="list-view">
            <h1>Users List</h1>
            <list-item .data=${this.data}></list-item>
            <button-add @click=${this.handleClick}></button-add>
        </div>`
    }
}

customElements.define('list-view', ListView );