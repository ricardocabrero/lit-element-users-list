
import { LitElement, html } from 'lit-element';
import { styles } from '../styles/list-item-styles';
import './card-item';

class ListItem extends LitElement {
    
    static get properties() {
        return {
            data: { type: Array },
        }
    }

    static get styles() {
        return [styles];
    }

    connectedCallback() {
        super.connectedCallback();
        this.addEventListener('item-delete', this.deleteItem)
    }

    deleteItem({detail}) {
        const filterItems = this.data.filter(el => el.id !== detail);
        this.data = filterItems;
        localStorage.setItem('users', JSON.stringify(this.data))
    }

    render() {
        return html`
        <ul>
        ${this.data.map(el => html`
            <card-item id=${el.id} name=${el.name} website=${el.website} email=${el.email}></card-item>`)}
        </ul>
        `;
    }
}

customElements.define('list-item', ListItem );