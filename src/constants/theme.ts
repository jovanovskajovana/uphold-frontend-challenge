const colors = {
  white: '#fff',
  navy_500: '#091135',
  navy_400: '#3c4a5a',
  grey_500: '#94a2b0',
  grey_400: '#f5f9fc',
  green: '#49cc68',
  transparent: 'transparent',
}

export interface Theme {
  // background
  backgroundPrimary: string
  backgroundSecondary: string
  // text
  textPrimary: string
  textSecondary: string
  textTertiary: string
  // loader
  loaderBorder: string
  loaderBorderActive: string
}

export const theme: Theme = {
  // background
  backgroundPrimary: colors.white,
  backgroundSecondary: colors.grey_400,
  // text
  textPrimary: colors.navy_500,
  textSecondary: colors.navy_400,
  textTertiary: colors.grey_500,
  // loader
  loaderBorder: colors.grey_500,
  loaderBorderActive: colors.green,
}