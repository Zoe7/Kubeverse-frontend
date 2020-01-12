import { createMuiTheme } from '@material-ui/core/styles'

export const customTheme = {
  palette: {
    primary: {
      base0: 'hsl(221, 68%, 93%)',
      base100: 'hsl(221, 78%, 86%)',
      base200: 'hsl(224, 67%, 76%)',
      base300: 'hsl(225, 57%, 67%)',
      base400: 'hsl(227, 42%, 51%)',
      base500: 'hsl(227, 50%, 59%)',
      base600: 'hsl(228, 45%, 45%)',
      base700: 'hsl(230, 49%, 41%)',
      base800: 'hsl(232, 51%, 36%)',
      base900: 'hsl(234, 62%, 26%)',
    },
    secondary: {
      base0: 'hsl(171, 82%, 94%)',
      base100: 'hsl(172, 97%, 88%)',
      base200: 'hsl(174, 96%, 78%)',
      base300: 'hsl(176, 87%, 67%)',
      base400: 'hsl(178, 78%, 57%)',
      base500: 'hsl(180, 77%, 47%)',
      base600: 'hsl(182, 85%, 39%)',
      base700: 'hsl(184, 90%, 34%)',
      base800: 'hsl(186, 91%, 29%)',
      base900: 'hsl(188, 91%, 23%)',
    },
    neutral: {
      base0: 'hsl(216, 33%, 97%)',
      base100: 'hsl(214, 15%, 91%)',
      base200: 'hsl(210, 16%, 82%)',
      base300: 'hsl(211, 13%, 65%)',
      base400: 'hsl(211, 10%, 53%)',
      base500: 'hsl(211, 12%, 43%)',
      base600: 'hsl(209, 14%, 37%)',
      base700: 'hsl(209, 18%, 30%)',
      base800: 'hsl(209, 20%, 25%)',
      base900: 'hsl(210, 24%, 16%)',
    },
  },
  boxShadow: {
    base0: '0 1px 3px hsla(0, 0%, 0%, .12), 0 1px 2px hsla(0, 0%, 0%, .24)',
    base200: '0 3px 6px hsla(0, 0%, 0%, .15), 0 2px 4px hsla(0, 0%, 0%, .12)',
    base400: '0 10px 20px hsla(0, 0%, 0%, .15), 0 3px 6px hsla(0, 0%, 0%, .10)',
    base600:
      '0 15px 25px hsla(0, 0%, 0%, .15), 0 5px 10px hsla(0, 0%, 0%, .05)',
    base800: '0 20px 40px hsla(0, 0%, 0%, .2)',
  },
  fontSize: {
    XS: '12px',
    S: '14px',
    M: '16px',
    L: '18px',
    XL: '20px',
    XXL: '24px',
    XXXL: '32px',
    XXXXL: '48px',
  },
}

const theme = createMuiTheme({
  palette: {
    primary: { main: customTheme.palette.primary.base600 },
    secondary: { main: customTheme.palette.secondary.base600 },
  },
})

export default theme
