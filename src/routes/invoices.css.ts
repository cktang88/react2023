import { createTheme, style } from '@vanilla-extract/css';

export const [themeClass, vars] = createTheme({
    color: {
        brand: 'blue',
        white: '#fff'
    },
    space: {
        small: '4px',
        medium: '8px',
        large: '12px',
        xl: '16px'
    }
});

export const hero = style({
    backgroundColor: vars.color.brand,
    color: vars.color.white,
    padding: vars.space.medium
});

export const btnStyle = style({
    all: 'unset',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: vars.space.small,
    paddingRight: vars.space.large,
    paddingLeft: vars.space.large,
    fontSize: vars.space.xl,
    lineHeight: 1,
    fontWeight: 500,
    height: 35,
    border: '1px solid black',
    userSelect: 'none'
})