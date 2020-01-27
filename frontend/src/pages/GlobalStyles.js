import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
@import url('https://fonts.googleapis.com/css?family=Roboto|Roboto+Slab&display=swap');
@import url('https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css');

:root {
  font-size: 62.5%;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

html,
body {
  height: 100%;
  width: 100%;
}

html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video, button {
  margin: 0;
  padding: 0;
  border: 0;
  font: inherit;
  vertical-align: baseline;
}

/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}

body {
  font-size: 1.8rem;
  font-family: 'Roboto', 'Roboto Slab', serif;
  line-height: 1.2;
  color: #000000;
  background: hsla(230,7%,97%,1)
}

h1 {
  font-size:7.5rem;
}

h2 {
  font-size: 5.5rem;
}

h3 {
  font-size: 3.5rem;
}

h3 {
  font-size: 2.5rem;
}

a {
	font-weight: 400;
  margin: 0 1rem;
	color: #2d2d2d;
	text-decoration: none;
	transition: all 100ms ease-in-out;
	cursor: pointer;
}
`;
