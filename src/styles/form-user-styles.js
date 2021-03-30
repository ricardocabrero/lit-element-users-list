import { css } from 'lit-element';

export const styles = css`
    form {
        margin-top: 105px;
        padding: 10px 50px 25px;
        border-radius: 3px;
        box-shadow: rgb(102 102 102) 0px 0px 3px;
        background: #fff;
        min-width: 370px;
        display: flex;
        flex-direction: column;
    }
    @media(max-width: 480px) {
        form {
            min-width: 0;
            padding: 20px;
            margin-top: 25px;
        }
    }
    .field {
        margin-bottom: 20px;
        position: relative;
    }
    legend {
        text-indent: -4px;
        letter-spacing: 0.2px;
        font-size: 20px;
    }
    @media(max-width: 450px) {
        legend  p {
            margin: 0 0 10px;
            font-size: 18px;
        }
    }
    label {
        display: block;
        font-size: 13px;
        color: #aaa;
        margin-bottom: 3px;
    }
    @media(max-width: 680px) {
        label {
            font-size: 14px;
        }
    }
    input {
        width: 100%;
        border: 1px solid #ccc;
        line-height: 20px;
        border-radius: 2px;
        box-sizing: border-box;
        color: #707070;
        line-height: 27px;
        border-radius: 2px;
        box-sizing: border-box;
        padding: 0 8px;
    }

    input::-webkit-input-placeholder { 
        color: pink;
    }
    input::-moz-placeholder { 
        color: pink;
    }
    input:-ms-input-placeholder { 
        color: pink;
    }
    input:-moz-placeholder { 
        color: pink;
    }

    @media(max-width: 680px) {
        input {
            font-size: 14px;
        }
        input::-webkit-input-placeholder { 
            font-size: 14px;
        }
        input::-moz-placeholder { 
            font-size: 14px;
        }
        input:-ms-input-placeholder { 
            font-size: 14px;
        }
        input:-moz-placeholder { 
            font-size: 14px;
        }
    }

    button {
        color: rgb(255, 255, 255);
        background: rgb(5, 180, 247);
        border: none;
        box-shadow: rgb(128 126 126) 1px 1px 1px;
        padding: 5px 10px;
        border-radius: 3px;
        cursor: pointer;
        outline: none;
        letter-spacing: 0.6px;
        margin-top: 10px;
        line-height: 20px;
        font-size: 15px;
    }`