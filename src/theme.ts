import emotionStyled, { CreateStyled } from '@emotion/styled';

export const theme = {
  color: {
    primary: '#34495e',
    text: '#333',
    secondaryText: '#fefefe',
  },
  breakpoints: {
    small: 'min-width: 600px',
  },
};

export const styled = emotionStyled as CreateStyled<typeof theme>;
