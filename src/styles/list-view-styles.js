import { css } from 'lit-element';

export const styles = css`
    .list-view {
        width: 90%;
        margin: 0 auto;
    }
    @media(max-width: 1050px) {
        .list-view {
            width: 96%;
        }
    }
    h1 {
        font-family: Arial, Helvetica, sans-serif;
        font-size: 26px;
        padding: 50px 0 0 15px;
        margin: 0;
    }
    @media(max-width: 680px) {
        h1 {
            font-size: 22px;
            padding-top: 20px;
        }
    }`