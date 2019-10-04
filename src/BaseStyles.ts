import { injectGlobal as css } from 'emotion';

import { theme } from './theme';

css`
  /* latin */
  @import url('https://fonts.googleapis.com/css?family=Open+Sans&display=swap');
  * {
    box-sizing: border-box;
  }
  :root {
    --ratio: 1.2;
    --s-5: calc(var(--s-4) / var(--ratio));
    --s-4: calc(var(--s-3) / var(--ratio));
    --s-3: calc(var(--s-2) / var(--ratio));
    --s-2: calc(var(--s-1) / var(--ratio));
    --s-1: calc(var(--s0) / var(--ratio));
    --s0: 1rem;
    --s1: calc(var(--s0) * var(--ratio));
    --s2: calc(var(--s1) * var(--ratio));
    --s3: calc(var(--s2) * var(--ratio));
    --s4: calc(var(--s3) * var(--ratio));
    --s5: calc(var(--s4) * var(--ratio));

    font-size: calc(0.5vw + 12px);
    font-family: 'Open Sans', sans-serif;
    color: ${theme.color.text};
  }
  html,
  body,
  #root {
    height: 100%;
  }
  body {
    margin: 0;
    scroll-behavior: smooth;
    text-rendering: optimizeSpeed;
  }
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin-top: 0;
  }
  h1 {
    font-size: var(--s5);
  }
  h2 {
    font-size: var(--s4);
  }
  h3 {
    font-size: var(--s4);
  }
  h4 {
    font-size: var(--s3);
  }
  h5 {
    font-size: var(--s2);
  }
  h6 {
    font-size: var(--s1);
  }
  p,
  a,
  li,
  pre,
  input,
  textarea,
  button,
  nav,
  select {
    font-size: inherit;
    color: inherit;
  }
  a {
    text-decoration: none;
    &:hover {
      color: ${theme.color.primary};
    }
  }

  button {
    background-color: ${theme.color.secondaryText};
    color: ${theme.color.text};
    &[variant='primary'] {
      background-color: ${theme.color.primary};
      color: ${theme.color.secondaryText};
    }
    &:active {
      box-shadow: none;
      transition-duration: 50ms;
    }
    transition: box-shadow 100ms ease-in-out;
    border-radius: 2px;
    border: 1px solid ${theme.color.text};
    box-shadow: rgba(0, 0, 0, 0.2) 0px 1px 3px 0px,
      rgba(0, 0, 0, 0.14) 0px 1px 1px 0px, rgba(0, 0, 0, 0.12) 0px 2px 1px -1px;
    padding: var(--s-4) var(--s-3);
  }

  textarea,
  select,
  input {
    border-radius: 2px;
    padding: var(--s-5) var(--s-4);
    border: 1px solid ${theme.color.text};
  }
  main * + * {
    margin-top: var(--s-2);
  }
  main {
    overflow: auto;
    flex: 1;
    -webkit-overflow-scrolling: touch;
    scroll-behavior: smooth;
    padding: var(--s0) var(--s-1);
  }
  img {
    max-width: 100%;
  }
`;
