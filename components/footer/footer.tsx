export default function Footer() {
  return (
    <footer className='w-full p-10 flex items-center justify-between'>
      <div>
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
