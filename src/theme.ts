import emotionStyled, { CreateStyled } from '@emotion/styled';

export const theme = {
  color: {
    background: '#fefefe',
    secondaryBackground: '#ffffff',
    primary: '#7986CB',
    secondaryText: '#fefefe',
    text: '#333',
    clickable: '#7986CB',
  },
  breakpoints: {
    small: 'min-width: 600px',
  },
};

export const styled = emotionStyled as CreateStyled<typeof theme>;
