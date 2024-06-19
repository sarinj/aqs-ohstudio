import { cn } from '@/libs/utils'

export default function Button({
  children,
  className,
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      {...props}
      className={cn(
        'px-[15px] py-[10px] rounded-lg cursor-pointer border border-gray-200 hover:bg-gray-200',
        className
      )}
    >
      {children}
    </button>
  )
}
