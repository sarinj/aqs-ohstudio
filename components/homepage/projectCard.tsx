'use client'

import Image from 'next/image'
import { useState } from 'react'
import { ProjectType } from './interface'
import { cn } from '@/libs/utils'
import { MoreArrowIcon } from '../icons/MoreArrowIcon'
import { LockedIcon } from '../icons/LockedIcon'

export default function ProjectCard({
  src,
  title,
  type,
  available = true,
}: ProjectType) {
  const [isHovered, setIsHovered] = useState(false)
  return (
    <div
      className='relative flex flex-col items-start justify-center gap-2 w-full cursor-pointer'
      onMouseOver={() => setIsHovered(true)}
      onMouseOut={() => setIsHovered(false)}
    >
      <div
        className={cn(
          'absolute md:flex w-full hidden top-0 left-0 justify-between items-start px-5 pt-5 xl:px-5 xl:pt-5 z-[1] transition-opacity ease-in-out duration-300',
          isHovered ? 'opacity-100' : 'opacity-0'
        )}
      >
        <div>
          <p className='text-white text-sm xl:text-[18px]'>{title}</p>
          <p
            className={cn(
              'text-white/50 text-sm xl:text-[18px]',
              available ? 'hidden' : 'inline'
            )}
          >
            Coming Soon
          </p>
        </div>
        <div
          className={cn(
            'flex items-center justify-center w-[40px] h-[40px] xl:w-[50px] xl:h-[50px] rounded-full cursor-pointer bg-white ',
            'translate-x-[-20px] translate-y-[20px] transition-transform duration-300',
            { 'bg-black': !available },
            { 'translate-x-[0px] translate-y-[0px]': isHovered }
          )}
        >
          {available ? (
            <MoreArrowIcon className='text-black' width='15' height='15' />
          ) : (
            <LockedIcon className='text-white' width='20' height='20' />
          )}
        </div>
      </div>
      <div
        className={cn(
          'absolute w-full flex-col h-full rounded-xl hidden md:flex bg-black bg-opacity-30 backdrop-blur-md transition-all ease-blur duration-300',
          isHovered ? 'opacity-100' : 'opacity-0'
        )}
      ></div>
      {type === 'image' ? (
        <Image
          src={src}
          width={715}
          height={546}
          alt='project'
          className='w-full justify-center rounded-xl object-cover bg-cover bg-center'
        />
      ) : (
        <video
          className='h-full w-full rounded-xl object-cover'
          autoPlay
          loop
          playsInline
          muted
        >
          <source src={src} type='video/mp4' />
        </video>
      )}

      <div className='flex md:hidden gap-2 text-sm'>
        <p>{title}</p>
        <p className={cn('text-gray-1', available ? 'hidden' : 'block')}>
          Coming Soon
        </p>
      </div>
    </div>
  )
}
