import { css } from 'lit-element';

export const styles = css`
    :host {
        width: 25%;
    }

    @media(max-width: 1400px) {
        :host {
            width: 33.33%;
        }
    }
    @media(max-width: 1050px) {
        :host {
            width: 50%;
        }
    }
    @media(max-width: 680px) {
        :host {
            width: 100%;
        }
    }       
    .card {
        display: flex;
        flex-direction: column;
        margin: 0px 10px 20px;
        border-radius: 5px;
        background: #fff;
        box-shadow: 0 0 5px #666;
        padding: 15px;
    }
    p {
        margin: 5px 0;
    }
    .btns {
        display: flex;
        justify-content: flex-end;
        margin-top: 15px;
    }
    button {
        color: #fff;
        background: #05b4f7;
        border: none;
        box-shadow: 1px 1px 1px #807e7e;
        padding: 5px 10px;
        border-radius: 3px;
        cursor:pointer;
        outline:none;
        letter-spacing: .6px;
    }
    @media(max-width: 680px) {
        button {
            font-size: 15px;
        }
    }
    button:first-child {
        margin-right: 5px;
    }`