import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    *,
*::before,
*::after {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

/* $white: hsl(0, 0, 100%);
$backgroundColor: hsl(240, 67%, 8%);
$blueGrey: hsl(240, 17%, 26%);
$grey: hsl(240, 6%, 54%);
$lightBlue: hsl(194, 48%, 49%);
$darkYellow: hsl(33, 82%, 61%);
$purple: hsl(263, 67%, 51%);
$lightRed: hsl(10, 63%, 51%);
$red: hsl(2, 68%, 53%);
$orange: hsl(20, 7%, 17%);
$lightGreen: hsl(169, 73%, 44%);
$blue: hsl(222, 87%, 56%); */

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
