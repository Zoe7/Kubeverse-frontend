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
  },
}

const theme = createMuiTheme({
  palette: {
    primary: { main: customTheme.palette.primary.base600 },
    secondary: { main: customTheme.palette.secondary.base600 },
  },
})

export default theme
