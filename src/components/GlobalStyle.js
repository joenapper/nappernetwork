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
    border-color: #fff;
    font-size: 1.2rem;
    text-transform: uppercase;
    color: #374251;
    font-family: 'Kollektif', sans-serif;
    transition: 0.3s ease-in-out
}

.button:hover {
    background-color: #374251;
    color: #fff;
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

@media (max-width: 1400px) {
    .container {
        width: 70%
    }
}

/* @media (max-width: 1165px) {
    .container {
      width: 60%;
    }
} */


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
