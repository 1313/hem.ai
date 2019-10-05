import emotionStyled, { CreateStyled } from '@emotion/styled';
import { lighten, darken } from 'polished';

export const theme = {
  color: {
    background: darken(0.1, '#34495e'),
    secondaryBackground: '#fefefe',
    primary: '#34495e',
    secondaryText: '#333',
    text: '#fefefe',
    clickable: lighten(0.3, '#34495e'),
  },
  breakpoints: {
    small: 'min-width: 600px',
  },
};

export const styled = emotionStyled as CreateStyled<typeof theme>;
