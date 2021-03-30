import { LitElement, html } from 'lit-element';
import { styles } from '../styles/form-user-styles';
import handleValidate from '../utils/simpleValidate';
import './error-message';

class FormUser extends LitElement {

    static get properties() {
        return {
            displayformList: { type: Boolean },
            errors: { type: Object },
            edit: { type: Object }
        }
    }

    static get styles() {
        return [styles]
    }

    constructor() {
        super();
        this.displayFormList = false;
        this.name = '';
        this.website = '';
        this.email = '';
        this.errors = {};
    }

    handleSubmit(e) {
        e.preventDefault();

        const { validate, errors } = handleValidate(this.name, this.website, this.email);

        if(!validate) {
            this.errors = errors;
            return;
        }
        
        this.dispatchEvent(new CustomEvent('display-view-form', {
            bubbles: true,
            composed: true,
            detail: this.displayFormList 
        }));

        this.dispatchEvent(new CustomEvent('form-data', {
            bubbles: true,
            composed: true,
            detail: {
                name: this.name,
                website: this.website,
                email: this.email,
                id: this.edit ? this.edit.id : new Date().getTime(),
            } 
        }))      
    }

    handleChange({target}) {
        const { id, value } = target;
        this[id] = value;
    }

    handleFocus({target}) {
        const { id } = target;
        this.errors = {...this.errors, [id]: ''}; 
    }

    handleEditData() {
        if(!this.edit) {
            return;
        }
        
        const { name, website, email, id } = this.edit;
        
        this.name = name;
        this.website = website;
        this.email = email;
        this.id = id;
    }

    connectedCallback() {
        super.connectedCallback();
        this.handleEditData()
    }

    render() {

        const errorName = this.errors.name &&  html `<error-message .text=${this.errors.name}></error-message>`;
        const errorWebsite = this.errors.website &&  html `<error-message .text=${this.errors.website}></error-message>`;
        const errorEmail = this.errors.email &&  html `<error-message .text=${this.errors.email}></error-message>`;

        return html`
        <form @submit=${this.handleSubmit}>
            <legend>
                <p><strong>User Register Form</strong></p>
            </legend>
            <div class="field">
                <label for="name">Name</label>
                <input 
                @change=${this.handleChange} 
                @focus=${this.handleFocus}
                placeholder="user name"
                autocomplete="off"
                type="text" id="name" value=${this.name}>
                ${errorName}
            </div>
            <div class="field">
                <label for="website">Website</label>
                <input 
                @change=${this.handleChange}
                @focus=${this.handleFocus}
                placeholder="your website"
                autocomplete="off" 
                type="text" id="website" value=${this.website}>
                ${errorWebsite}
            </div>
            <div class="field">
                <label for="email">Email</label>
                <input 
                @change=${this.handleChange} 
                @focus=${this.handleFocus}
                placeholder="email@example.com"
                autocomplete="off"
                type="text" id="email" value=${this.email}>
                ${errorEmail}
            </div>
            <button type="submit">Enviar</button>
        </form>`
    }
}

customElements.define('form-user', FormUser);