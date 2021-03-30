import { css } from 'lit-element';

export const styles = css`
    ul {
        display: flex;
        margin: 50px auto 20px;
        padding: 0;
        flex-wrap: wrap;
        font-family: Arial, helvetica, sans-serif;
    }
    @media(max-width: 680px) {
        ul {
            margin-top: 20px;
        }
    @media(max-width: 680px) {
        ul {
            margin-bottom: 0;
        }
    }`