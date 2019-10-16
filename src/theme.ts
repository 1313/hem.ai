import emotionStyled, { CreateStyled } from '@emotion/styled';

export const theme = {
  color: {
    background: '#fefefe',
    secondaryBackground: '#ffffff',
    primary: '#34495e',
    secondaryText: '#fefefe',
    text: '#333',
    clickable: '#5469ae',
  },
  breakpoints: {
    small: 'min-width: 600px',
  },
};

export const styled = emotionStyled as CreateStyled<typeof theme>;
