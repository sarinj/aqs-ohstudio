import localFont from 'next/font/local'

export const neueMontreal = localFont({
  src: [
    {
      path: '../assets/fonts/NeueMontreal-Light.otf',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../assets/fonts/NeueMontreal-Regular.otf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../assets/fonts/NeueMontreal-Medium.otf',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../assets/fonts/NeueMontreal-Bold.otf',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--font-neue',
})
