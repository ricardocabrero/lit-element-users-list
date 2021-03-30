import { LitElement, html } from 'lit-element';
import fetchData from '../utils/dataFetch';
import { styles } from '../styles/main-styles';
import './list-view';
import './form-view';

class MainView extends LitElement {

    static get properties() {
        return {
            switchView: { type: Boolean },
            data: { type: Array },
            edit: { type: Object }
        }
    }

    static get styles() {
        return [styles]
    }

    constructor() {
        super();
        this.switchView = false;
        this.data = [];
        this.edit = null;
    }

    firstUpdated() {
        super.firstUpdated();

        if(localStorage.getItem('users')) {
            this.data = JSON.parse(localStorage.getItem('users'));
            return;
        }

        fetchData()
            .then(res => this.data = res)
            .then(res => localStorage.setItem('users', JSON.stringify(res)))
    }

    connectedCallback() {
        super.connectedCallback();
        this.addEventListener('display-view-list', this.handleSwitch);
        this.addEventListener('display-view-form', this.handleSwitch);
        this.addEventListener('form-data', this.handleAdd);
        this.addEventListener('item-edit', this.handleEdit);
    }

    handleAdd({detail}) {
        const findEl = this.data.find(el => el.id === detail.id);
        this.edit = null;

        findEl 
        ? this.data = this.data.map(el => el.id === detail.id ? detail : el)
        : this.data = [...this.data, detail];
        
        localStorage.setItem('users', JSON.stringify(this.data))
    }

    handleEdit({detail}) {
        this.switchView = true;
        this.edit = detail;
    }

    handleSwitch({detail}) {
        this.switchView = detail;
    }

    render() {
        return html`
        ${this.switchView 
        ? html`<form-view .edit=${this.edit}></form-view>` 
        : html`<list-view .data=${this.data}></list-view>`}`
    }
}

customElements.define('main-view', MainView );