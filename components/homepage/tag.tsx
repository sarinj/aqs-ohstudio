import { cn } from '@/libs/utils'
import { ReactNode } from 'react'

export default function Tag({
  label,
  className,
}: {
  label: ReactNode
  className?: string
}) {
  return (
    <div className={cn('text-sm bg-gray py-2 px-3 rounded-[100px]', className)}>
      {label}
    </div>
  )
}
