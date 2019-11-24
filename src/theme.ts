import emotionStyled, { CreateStyled } from '@emotion/styled';
import { lighten } from 'polished';

const baseColor = '#2c3e50';
export const theme = {
  color: {
    background: lighten(0.7, baseColor),
    secondaryBackground: '#ffffff',
    primary: baseColor,
    secondaryText: '#fefefe',
    border: '#ababab',
    text: '#333',
  },
  boxShadow: 'rgba(0,0,0, 0.3) 0px 4px 3px -3px',
  boxShadowActive: 'rgba(0,0,0, 0.3) 0px 0px 1px 0px',
  borderRadius: '4px',
  breakpoints: {
    small: 'min-width: 600px',
  },
};

export const styled = emotionStyled as CreateStyled<typeof theme>;
