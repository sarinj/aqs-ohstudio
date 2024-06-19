export default function Footer() {
  return (
    <footer className='w-full p-10 pb-20 md:pb-10 flex flex-col md:flex-row gap-[10px] mx-auto items-center justify-between max-w-[1400px]'>
      <div className='relative flex flex-col md:flex-row gap-[10px] items-center'>
        <p className='text-sm'>&copy; Oli Harris 2023</p>
      </div>
      <div className='flex gap-[15px] text-sm'>
        <a className='hover:text-gray-2' href='https://twitter.com/olvhrs'>
          Twitter
        </a>
        <a
          className='hover:text-gray-2'
          href='https://www.linkedin.com/in/oliiharris/'
        >
          Linkedin
        </a>
        <a className='hover:text-gray-2' href='mailto:oli@oh.studio'>
          Mail
        </a>
      </div>
    </footer>
  )
}
