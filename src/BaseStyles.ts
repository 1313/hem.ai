import { injectGlobal as css } from 'emotion';

import { lighten } from 'polished';
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
  }

  html,
  body,
  #root {
    height: 100%;
  }

  body {
    font-size: calc(0.5vw + 12px);
    font-family: 'Open Sans', sans-serif;
    color: ${theme.color.text};
    background-color: ${theme.color.background};
    margin: 0;
    scroll-behavior: smooth;
    text-rendering: optimizeSpeed;
  }

  p,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin: 0;
  }
  h1 {
    font-size: var(--s5);
  }
  h2 {
    font-size: var(--s4);
  }
  h3 {
    font-size: var(--s3);
  }
  h4 {
    font-size: var(--s2);
  }
  h5 {
    font-size: var(--s1);
  }
  h6 {
    font-size: var(--s0);
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
    cursor: pointer;
    border: none;
    &:hover {
      background-color: ${lighten(0.01, theme.color.primary)};
    }
    &:active {
      transform-origin: center center;

      transform: translateY(1px);
      transition: none;
    }
    transition: transform 100ms ease-in-out;
    color: ${lighten(0.6, theme.color.primary)};
    background-color: ${theme.color.primary};

    border-radius: ${theme.borderRadius};

    box-shadow: ${theme.boxShadow};
    padding: var(--s-2) var(--s-2);
  }

  textarea,
  select,
  input {
    border-radius: ${theme.borderRadius};
    padding: var(--s-5) var(--s-4);
    border: 1px solid ${theme.color.border};
  }
  main > * + * {
    margin-top: var(--s-5);
  }
  main {
    margin-left: var(--s-3);
    overflow: auto;
    flex: 1;
    -webkit-overflow-scrolling: touch;
    scroll-behavior: smooth;
  }
  [disabled] {
    opacity: 0.5;
  }
  img {
    max-width: 100%;
    object-fit: contain;
    display: inline-block;
    vertical-align: middle;
  }
  label {
    display: block;
  }
  textarea,
  input {
    display: block;
    padding: var(--s-5) var(--s-4);
    border: 1px solid ${theme.color.border};
    border-radius: ${theme.borderRadius};
    width: 100%;
  }
  button,
  textarea,
  input,
  select {
    &:focus {
      outline: none;
      box-shadow: ${theme.boxShadow},
        ${lighten(0.35, theme.color.primary)} 0px 0px 4px 1px;
    }
  }
`;
