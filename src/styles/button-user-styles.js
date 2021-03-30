import { css } from 'lit-element';

export const styles = css`
    button {
        display: block;
        margin: 0 10px 50px;
        cursor: pointer;
        background: #f55214;
        color: #fff;
        border: none;
        box-shadow: 1px 1px 1px #ccc;
        padding: 8px 15px;
        border-radius: 3px;
        font-size: 15px;
        float: right;
    }
    @media(max-width: 480px) {
        button {
            margin-bottom: 25px;
        }
    }
    `