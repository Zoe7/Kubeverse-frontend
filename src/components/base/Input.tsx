import React from 'react'
import {
  FormControl,
  InputLabel,
  Input as MuiInput,
  makeStyles,
  Theme,
  createStyles,
} from '@material-ui/core'
import { customTheme } from '../../theme'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    label: {
      position: 'relative',
      transform: 'none',
      color: `${customTheme.palette.neutral.base500}`,
      textTransform: 'capitalize',
      fontSize: `${customTheme.fontSize.M}`,
      '&+$input': {
        marginTop: `${theme.spacing(1)}px`,
      },
      '&+.Mui-focused': {
        color: `${customTheme.palette.primary.base900}`,
      },
    },
    formControl: {
      display: 'block',
      marginBottom: `${theme.spacing(4)}px`,
    },
    input: {
      backgroundColor: `${customTheme.palette.neutral.base0}`,
      border: `1px solid ${customTheme.palette.neutral.base100}`,
      borderRadius: `${theme.spacing(0.5)}px`,
      padding: `${theme.spacing(0.5)}px ${theme.spacing(1)}px `,
      '&:hover': {
        backgroundColor: `${customTheme.palette.neutral.base100}`,
        border: `1px solid ${customTheme.palette.neutral.base200}`,
      },
      '&.Mui-focused': {
        border: `1px solid ${customTheme.palette.primary.base400}`,
      },
      color: `${customTheme.palette.neutral.base700}`,
    },
  })
)

const Input = ({
  id,
  label,
  value,
  required,
  onChange: handleChange,
  fullWidth,
}: {
  id: string
  label: string
  value: string
  required: boolean
  onChange: (value: string) => any
  fullWidth: boolean
}) => {
  const classes = useStyles()
  return (
    <FormControl className={classes.formControl}>
      <InputLabel
        htmlFor={id}
        shrink={false}
        disableAnimation
        className={classes.label}
      >
        {label}
      </InputLabel>
      <MuiInput
        id={id}
        value={value}
        onChange={e => handleChange(e.target.value)}
        required={required}
        fullWidth={fullWidth}
        disableUnderline
        className={classes.input}
      />
    </FormControl>
  )
}

export default Input
