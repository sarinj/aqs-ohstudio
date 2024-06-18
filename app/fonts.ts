import localFont from 'next/font/local'

export const regularFont = localFont({
  src: '../assets/fonts/NeueMontreal-Regular.otf',
  weight: '400',
  variable: '--font-reg',
})
export const mediumFont = localFont({
  src: '../assets/fonts/NeueMontreal-Medium.otf',
  weight: '400',
  variable: '--font-med',
})
