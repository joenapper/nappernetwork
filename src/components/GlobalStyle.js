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
}

@font-face {
    font-family: "Kollektif";
    src: url(../fonts/Kollektif.ttf);
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

h2 {
    font-size: 3rem;
    font-family: "Kollektif", sans-serif;
}

/* .primary {
    color: #374251
} */

.secondary {
    color: #8bd0f2;
}

.container {
    width: 60%;
    margin: auto;
}

.row {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
}
`;

export default GlobalStyle;
