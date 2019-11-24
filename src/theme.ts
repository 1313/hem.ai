import emotionStyled, { CreateStyled } from '@emotion/styled';

export const theme = {
  color: {
    background: '#fefefe',
    secondaryBackground: '#ffffff',
    primary: '#3c40c6',
    secondaryText: '#fefefe',
    border: '#ababab',
    text: '#333',
  },
  boxShadow: 'rgba(0,0,0, 0.5) 0px 0px 6px -3px',
  borderRadius: '2px',
  breakpoints: {
    small: 'min-width: 600px',
  },
};

export const styled = emotionStyled as CreateStyled<typeof theme>;
