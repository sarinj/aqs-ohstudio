'use client'

import { cn } from '@/libs/utils'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function NavBarMenuItem({
  title,
  href,
  className,
}: {
  title: React.ReactNode
  href: string
  className?: string
}) {
  const currentPath = usePathname()

  return (
    <Link
      href={href}
      className={cn(
        'flex items-center justify-center p-[20px_10px] rounded-[100px] text-sm h-10 w-[94px]',
        { 'bg-white ': href === currentPath },
        className
      )}
    >
      {title}
    </Link>
  )
}
