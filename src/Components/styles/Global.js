import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    *,
*::before,
*::after {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  border: none;
  background: transparent;
}

html {
    font-size: 62.5%;
    font-family: 'Antonio', sans-serif;
    font-family: 'Spartan', sans-serif;
    scroll-behavior: smooth;
    overflow-x: hidden;
    background-image: url('../assets/background-stars.svg');
    position: relative;
    background-size: 300%;
    background-repeat: repeat;
    background-position: center;
    top: 0;
    left: 0;
    background-color: #070724;
}

body {
  padding: 2rem;
}

h1, h2, h3, h4, p, li, ul, span, a, button {
    color: #fff;
    list-style-type: none;
    text-decoration: none;
}

h1 {
    font-family: 'Antonio', sans-serif;
    font-size: 8rem;
    line-height: 10.3rem;
    text-transform: uppercase;
}

h2 {
    font-family: 'Antonio', sans-serif;
    font-size: 4rem;
    line-height: 5.2rem;
    letter-spacing: -0.15rem;
    text-transform: uppercase;
}

h3 {
    font-family: 'Spartan', sans-serif;
    font-size: 1.2rem;
    line-height: 2.5rem;
    letter-spacing: 0.26rem;
    text-transform: uppercase;
}

h4 {
    font-family: 'Spartan', sans-serif;
    font-size: 1.1rem;
    line-height: 2.5rem;
    letter-spacing: 0.1rem;
    text-transform: uppercase;
}

p {
    font-family: 'Spartan', sans-serif;
    font-size: 1.4rem;
    line-height: 2.5rem;
}

ul, li, button {
    font-family: 'Spartan', sans-serif;
    font-weight: bold;
    cursor: pointer;
}
`;

export default GlobalStyles;
