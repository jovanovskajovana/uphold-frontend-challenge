const colors = {
  white: '#fff',
  navy: '#091135',
  grey: '#94a2b0',
  green: '#49cc68',
  transparent: 'transparent',
}

export interface Theme {
  // background
  backgroundPrimary: string
  // text
  textPrimary: string
  textSecondary: string
  textHighlight: string
  // loader
  loaderBorder: string
  loaderBorderActive: string
}

export const theme: Theme = {
  // background
  backgroundPrimary: colors.white,
  // text
  textPrimary: colors.navy,
  textSecondary: colors.grey,
  textHighlight: colors.green,
  // loader
  loaderBorder: colors.grey,
  loaderBorderActive: colors.green,
}
