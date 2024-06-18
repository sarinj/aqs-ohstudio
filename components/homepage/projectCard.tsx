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
      className='w-full cursor-pointer project-card relative flex flex-col items-start justify-center gap-2'
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className={cn(
          'absolute item w-full hidden md:flex top-0 left-0 justify-between items-start px-5 pt-5 xl:px-5 xl:pt-5 z-30 transition-opacity ease-in-out duration-300',
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
            'w-[40px] h-[40px] xl:w-[50px] xl:h-[50px] rounded-full cursor-pointer flex items-center justify-center transition-transform duration-300',
            available ? 'bg-white' : 'bg-black'
          )}
          style={{
            transform: isHovered ? 'translate(0)' : 'translate(-20px, 20px)',
          }}
        >
          {available ? (
            <MoreArrowIcon className='text-black' width='20' height='20' />
          ) : (
            <LockedIcon className='text-white' width='20' height='20' />
          )}
        </div>
      </div>
      <div
        className={cn(
          'overlay absolute w-full flex-col h-full rounded-xl hidden md:flex',
          isHovered ? 'opacity-100' : 'opacity-0'
        )}
      ></div>
      {type === 'image' ? (
        <Image
          src={src}
          width={715}
          height={546}
          alt='project'
          className='w-full rounded-xl justify-center object-cover bg-cover bg-center'
        />
      ) : (
        <div className='h-full w-full'>
          <video
            className='rounded-xl  h-full w-full object-cover'
            autoPlay
            loop
            playsInline
            muted
          >
            <source src={src} type='video/mp4' />
          </video>
        </div>
      )}

      <div className='text-sm md:hidden flex gap-2'>
        <p>{title}</p>
        <p className={cn('text-gray-1', available ? 'hidden' : 'block')}>
          Coming Soon
        </p>
      </div>
    </div>
  )
}
