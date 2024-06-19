import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact — OH.STUDIO',
  description: 'A brand and product designer working with clients globally.',
}

export default function ContactPage() {
  return (
    <div
      className='flex flex-col flex-grow items-center justify-center p-5 md:p-10 w-full 
    min-h-[calc(100vh-278px)] md:min-h-[calc(100vh-208px)] max-w-[1400px] mx-auto text-[36px] 
    font-medium md:text-[48px] xl:text-[72px] leading-[1.2em]'
    >
      <p>Let&apos;s work together.</p>
      <a
        href='mailto:oli@oh.studio'
        className='text-gray-1 hover:text-gray-1/50 '
      >
        {' '}
        Get in touch.
      </a>
    </div>
  )
}
