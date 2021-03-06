import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    background-color: #374251;
    color: #fff;
    font-family: "Montserrat", sans-serif;
    overflow-x: hidden !important;
}

@font-face {
    font-family: "Kollektif";
    src: url("../fonts/Kollektif.ttf") format('ttf');
}

ul {
    list-style: none;
}

a {
    text-decoration: none;
    color: inherit;
}

button {
    cursor: pointer;
    padding: 1rem 2rem;
    outline: none;
    border: 3px solid #8bd0f2;
    background-color: transparent;
    transition: 0.5s ease-in-out
}

button:hover {
    background-color: #8bd0f2;
}

.button {
    cursor: pointer;
    padding: 1rem 2rem;
    background-color: #fff;
    border: 1px solid #fff;
    font-size: 1.2rem;
    text-transform: uppercase;
    color: #374251;
    font-family: 'Kollektif', sans-serif;
    transition: 0.3s ease-in-out;
}

.button-alt {
    background-color: #374251;
    border: 1px solid #374251;
    color: #fff;
    display: block;
}

.button:hover {
    background-color: #374251;
    color: #fff;
}

.button-alt:hover {
    background-color: #fff;
    color: #374251;
}

.chevron-right {
    margin-left: 0.4rem;
    font-size: 1rem;
}

h2 {
    font-size: 3rem;
    font-family: "Kollektif", sans-serif;
    margin-bottom: 2rem;
}

.primary {
    color: #374251
}

.secondary {
    color: #8bd0f2;
}

.container {
    height: 100%;
    width: 60%;
    margin: auto;
}

.row {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
}

/* -----General Form Support----- */
/* Removes default submit type styles */
input[type=submit] {
   -moz-appearance: none;/* Older Firefox */
   -webkit-appearance: none; /* Safari, Chrome, Edge and IE Mobile */
   appearance: none; /* rest */
}

/* Changes placeholder text color */
input::placeholder,
textarea::placeholder {
    /* Chrome, Firefox, Opera, Safari 10.1+ */
    color: #374251;
    opacity: 1; /* Firefox */
}

input:-ms-input-placeholder,
textarea:-ms-input-placeholder {
    /* Internet Explorer 10-11 */
    color: #374251;
}

input::-ms-input-placeholder,
textarea::-ms-input-placeholder {
    /* Microsoft Edge */
    color: #374251;
}

/* Removes chrome defaults from autocomplete */
input:-webkit-autofill,
input:-webkit-autofill:hover,
input:-webkit-autofill:focus,
input:-webkit-autofill:active {
    box-shadow: 0 0 0 30px transparent inset !important;
    -webkit-box-shadow: 0 0 0 30px transparent inset !important;
    transition: background-color 5000s ease-in-out 0s;
    -webkit-text-fill-color: #374251;
}

/* Removes default lightblue focus */
*:focus {
    outline: 0;
}
  
button:focus,
input:focus,
a:focus {
    text-decoration: none !important;
    outline: none !important;
}

/* Removes default rounded styles on iOS 5+ */
textarea,
input {
    border-radius: 0;
    -webkit-appearance: none;
}

/* Removes number default arrows */
/* Chrome, Safari, Edge, Opera */
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
}

/* Firefox */
input[type=number] {
  -moz-appearance: textfield;
}

textarea {
    resize: none;
}

@media (max-width: 1400px) {
    .container {
        width: 70%
    }
}

@media (max-width: 768px) {
    .container {
      width: 80%;
    }

    .button {
        padding: 0.9rem 1rem;
        font-size: 1rem;
    }

    .chevron-right {
        font-size: .9rem;
    }
}

@media (max-width: 521px) {
    h2 {
        font-size: 2.25rem;
    }
}
`;

export default GlobalStyle;
