import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    *,
*::before,
*::after {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

html {
    font-family: 'Antonio', sans-serif;
        font-family: 'Spartan', sans-serif;
        background-color: lightblue;
  font-size: 62.5%;
  scroll-behavior: smooth;
  overflow-x: hidden;
  position: relative;
}

// COLORS
// Primary
h1,
h2,
h3,
p,
a,
button,
ul,
li,
input,
::placeholder {
  font-family: "Antonio", sans-serif;
  font-weight: 500;
}

div,
p,
span,
button {
  font-size: 1.6rem;
}

ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
}

a {
  color: inherit;
  text-decoration: none;
}

input {
  outline: none;
}

input,
button {
  cursor: pointer;
}

button {
  border: 0;
  background: none;
}

body {
  padding: 2rem;
}
`;

export default GlobalStyles;
