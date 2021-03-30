import { css } from 'lit-element';

export const styles = css`
    :host {
        display: flex;
    }
    .form-view {
        margin: 0 auto;
        font-family: Arial, helvetica, sans-serif;
    }
    @media(max-width: 480px) {
        .form-view {
            width: 90%;
        }
    }`