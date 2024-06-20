'use client'

import { motion } from 'framer-motion'

export default function ContactSection() {
  return (
    <div
      className='flex flex-col items-center justify-center p-10 w-full h-[50vh] md:h-[30vh] lg:h-[50vh] max-w-[1400px]
       mx-auto text-[30px] font-medium md:text-[38px] leading-[1.2em]'
    >
      <motion.p
        initial={{ y: 70, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        Let&apos;s work together.
      </motion.p>
      <motion.a
        href='mailto:oli@oh.studio'
        className='text-gray-1 hover:text-gray-1/50 '
        initial={{ y: 70, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.1 }}
      >
        {' '}
        Get in touch.
      </motion.a>
    </div>
  )
}
