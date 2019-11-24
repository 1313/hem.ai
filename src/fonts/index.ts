import { injectGlobal as css } from 'emotion';

export const loadFontCss = (): void => css`
  /* lato-100 - latin */
  @font-face {
    font-family: 'Lato';
    font-style: normal;
    font-weight: 100;
    src: url(${require('./lato-v16-latin/100.eot')}); /* IE9 Compat Modes */
    src: local('Lato Hairline'), local('Lato-Hairline'),
      url(${require('./lato-v16-latin/100.eot')}?#iefix)
        format('embedded-opentype'),
      /* IE6-IE8 */ url(${require('./lato-v16-latin/100.woff2')})
        format('woff2'),
      /* Super Modern Browsers */ url(${require('./lato-v16-latin/100.woff')})
        format('woff'),
      /* Modern Browsers */ url(${require('./lato-v16-latin/100.ttf')})
        format('truetype'),
      /* Safari, Android, iOS */
        url(${require('./lato-v16-latin/100.svg')}#Lato) format('svg'); /* Legacy iOS */
  }
  /* lato-300 - latin */
  @font-face {
    font-family: 'Lato';
    font-style: normal;
    font-weight: 300;
    src: url(${require('./lato-v16-latin/300.eot')}); /* IE9 Compat Modes */
    src: local('Lato Light'), local('Lato-Light'),
      url(${require('./lato-v16-latin/300.eot')}?#iefix)
        format('embedded-opentype'),
      /* IE6-IE8 */ url(${require('./lato-v16-latin/300.woff2')})
        format('woff2'),
      /* Super Modern Browsers */ url(${require('./lato-v16-latin/300.woff')})
        format('woff'),
      /* Modern Browsers */ url(${require('./lato-v16-latin/300.ttf')})
        format('truetype'),
      /* Safari, Android, iOS */
        url(${require('./lato-v16-latin/300.svg')}#Lato) format('svg'); /* Legacy iOS */
  }
  /* lato-300italic - latin */
  @font-face {
    font-family: 'Lato';
    font-style: italic;
    font-weight: 300;
    src: url(${require('./lato-v16-latin/300italic.eot')}); /* IE9 Compat Modes */
    src: local('Lato Light Italic'), local('Lato-LightItalic'),
      url(${require('./lato-v16-latin/300italic.eot')}?#iefix)
        format('embedded-opentype'),
      /* IE6-IE8 */ url(${require('./lato-v16-latin/300italic.woff2')})
        format('woff2'),
      /* Super Modern Browsers */
        url(${require('./lato-v16-latin/300italic.woff')}) format('woff'),
      /* Modern Browsers */ url(${require('./lato-v16-latin/300italic.ttf')})
        format('truetype'),
      /* Safari, Android, iOS */
        url(${require('./lato-v16-latin/300italic.svg')}#Lato) format('svg'); /* Legacy iOS */
  }
  /* lato-100italic - latin */
  @font-face {
    font-family: 'Lato';
    font-style: italic;
    font-weight: 100;
    src: url(${require('./lato-v16-latin/100italic.eot')}); /* IE9 Compat Modes */
    src: local('Lato Hairline Italic'), local('Lato-HairlineItalic'),
      url(${require('./lato-v16-latin/100italic.eot')}?#iefix)
        format('embedded-opentype'),
      /* IE6-IE8 */ url(${require('./lato-v16-latin/100italic.woff2')})
        format('woff2'),
      /* Super Modern Browsers */
        url(${require('./lato-v16-latin/100italic.woff')}) format('woff'),
      /* Modern Browsers */ url(${require('./lato-v16-latin/100italic.ttf')})
        format('truetype'),
      /* Safari, Android, iOS */
        url(${require('./lato-v16-latin/100italic.svg')}#Lato) format('svg'); /* Legacy iOS */
  }
  /* lato-regular - latin */
  @font-face {
    font-family: 'Lato';
    font-style: normal;
    font-weight: 400;
    src: url(${require('./lato-v16-latin/regular.eot')}); /* IE9 Compat Modes */
    src: local('Lato Regular'), local('Lato-Regular'),
      url(${require('./lato-v16-latin/regular.eot')}?#iefix)
        format('embedded-opentype'),
      /* IE6-IE8 */ url(${require('./lato-v16-latin/regular.woff2')})
        format('woff2'),
      /* Super Modern Browsers */
        url(${require('./lato-v16-latin/regular.woff')}) format('woff'),
      /* Modern Browsers */ url(${require('./lato-v16-latin/regular.ttf')})
        format('truetype'),
      /* Safari, Android, iOS */
        url(${require('./lato-v16-latin/regular.svg')}#Lato) format('svg'); /* Legacy iOS */
  }
  /* lato-italic - latin */
  @font-face {
    font-family: 'Lato';
    font-style: italic;
    font-weight: 400;
    src: url(${require('./lato-v16-latin/italic.eot')}); /* IE9 Compat Modes */
    src: local('Lato Italic'), local('Lato-Italic'),
      url(${require('./lato-v16-latin/italic.eot')}?#iefix)
        format('embedded-opentype'),
      /* IE6-IE8 */ url(${require('./lato-v16-latin/italic.woff2')})
        format('woff2'),
      /* Super Modern Browsers */
        url(${require('./lato-v16-latin/italic.woff')}) format('woff'),
      /* Modern Browsers */ url(${require('./lato-v16-latin/italic.ttf')})
        format('truetype'),
      /* Safari, Android, iOS */
        url(${require('./lato-v16-latin/italic.svg')}#Lato) format('svg'); /* Legacy iOS */
  }
  /* lato-700italic - latin */
  @font-face {
    font-family: 'Lato';
    font-style: italic;
    font-weight: 700;
    src: url(${require('./lato-v16-latin/700italic.eot')}); /* IE9 Compat Modes */
    src: local('Lato Bold Italic'), local('Lato-BoldItalic'),
      url(${require('./lato-v16-latin/700italic.eot')}?#iefix)
        format('embedded-opentype'),
      /* IE6-IE8 */ url(${require('./lato-v16-latin/700italic.woff2')})
        format('woff2'),
      /* Super Modern Browsers */
        url(${require('./lato-v16-latin/700italic.woff')}) format('woff'),
      /* Modern Browsers */ url(${require('./lato-v16-latin/700italic.ttf')})
        format('truetype'),
      /* Safari, Android, iOS */
        url(${require('./lato-v16-latin/700italic.svg')}#Lato) format('svg'); /* Legacy iOS */
  }
  /* lato-700 - latin */
  @font-face {
    font-family: 'Lato';
    font-style: normal;
    font-weight: 700;
    src: url(${require('./lato-v16-latin/700.eot')}); /* IE9 Compat Modes */
    src: local('Lato Bold'), local('Lato-Bold'),
      url(${require('./lato-v16-latin/700.eot')}?#iefix)
        format('embedded-opentype'),
      /* IE6-IE8 */ url(${require('./lato-v16-latin/700.woff2')})
        format('woff2'),
      /* Super Modern Browsers */ url(${require('./lato-v16-latin/700.woff')})
        format('woff'),
      /* Modern Browsers */ url(${require('./lato-v16-latin/700.ttf')})
        format('truetype'),
      /* Safari, Android, iOS */
        url(${require('./lato-v16-latin/700.svg')}#Lato) format('svg'); /* Legacy iOS */
  }
  /* lato-900 - latin */
  @font-face {
    font-family: 'Lato';
    font-style: normal;
    font-weight: 900;
    src: url(${require('./lato-v16-latin/900.eot')}); /* IE9 Compat Modes */
    src: local('Lato Black'), local('Lato-Black'),
      url(${require('./lato-v16-latin/900.eot')}?#iefix)
        format('embedded-opentype'),
      /* IE6-IE8 */ url(${require('./lato-v16-latin/900.woff2')})
        format('woff2'),
      /* Super Modern Browsers */ url(${require('./lato-v16-latin/900.woff')})
        format('woff'),
      /* Modern Browsers */ url(${require('./lato-v16-latin/900.ttf')})
        format('truetype'),
      /* Safari, Android, iOS */
        url(${require('./lato-v16-latin/900.svg')}#Lato) format('svg'); /* Legacy iOS */
  }
  /* lato-900italic - latin */
  @font-face {
    font-family: 'Lato';
    font-style: italic;
    font-weight: 900;
    src: url(${require('./lato-v16-latin/900italic.eot')}); /* IE9 Compat Modes */
    src: local('Lato Black Italic'), local('Lato-BlackItalic'),
      url(${require('./lato-v16-latin/900italic.eot')}?#iefix)
        format('embedded-opentype'),
      /* IE6-IE8 */ url(${require('./lato-v16-latin/900italic.woff2')})
        format('woff2'),
      /* Super Modern Browsers */
        url(${require('./lato-v16-latin/900italic.woff')}) format('woff'),
      /* Modern Browsers */ url(${require('./lato-v16-latin/900italic.ttf')})
        format('truetype'),
      /* Safari, Android, iOS */
        url(${require('./lato-v16-latin/900italic.svg')}#Lato) format('svg'); /* Legacy iOS */
  }
`;