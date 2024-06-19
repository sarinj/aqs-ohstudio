export default function ContactPage() {
  return (
    <div className='flex flex-col flex-grow items-center justify-center p-5 md:p-10 w-full h-[74vh] md:h-[77.3vh] max-w-[1400px] mx-auto text-[36px] md:text-[48px] xl:text-[72px] leading-[1.2em]'>
      <p>Let &apos;s work together.</p>
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
