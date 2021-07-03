import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    *,
*:before,
*:after {
  box-sizing: border-box;
}

ul,
ol {
  padding: 0;
  list-style: none;
  list-style-type: none;
}

body,
h1,
h2,
h3,
h4,
p,
ul,
ol,
li,
figure,
figcaption,
blockquote,
dl,
dd {
  margin: 0;
}

body {
  min-height: 100vh;
  scroll-behavior: smooth;
  text-rendering: optimizeSpeed;
  font-family: 'Helvetica LT','Helvetica Neue', Helvetica, Arial, 'Lucida Grande', sans-serif;
  font-size: 14px;
  line-height: 24px;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  overflow-x: hidden;
}

ul[class],
ol[class] {
  list-style: none;
  list-style-type: none;

}

img {
  max-width: 100%;
  display: block;
}

article > * + * {
  margin-top: 1em;
}

input,
textarea,
select,
button
 {
  font: inherit;
}


@media (prefers-reduced-motion: reduce) {
* {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}

h1 {
  font-size: 80px;
  line-height: 100px;
}

[data-whatintent='mouse'] *:focus {
  outline: none;
}

.tippy-box[data-theme~='notheme'] {
  background-color: transparent;
}

.visually-hidden {
  position: absolute !important;
  clip: rect(1px, 1px, 1px, 1px);
  padding:0 !important;
  border:0 !important;
  height: 1px !important;
  width: 1px !important;
  overflow: hidden;
  white-space: nowrap;
}

.Toastify__toast--default {
  background: #121212;
  color: #fff;
}

.Toastify__close-button--default {
  color:#fff;
  opacity: 0.7;
}

html.disable-scroll {
  overflow: hidden;
}

button:focus {
     outline: none;
  }

button:focus-visible {
  outline: auto;
}
`
