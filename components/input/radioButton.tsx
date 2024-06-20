import { cn } from '@/libs/utils'

interface RadioButtonProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string
  labelClassName?: string
}

export default function RadioButton({
  label,
  className,
  labelClassName,
  ...props
}: RadioButtonProps) {
  return (
    <label
      className={cn(
        'flex items-center gap-x-2 p-4 border-2 border-gray-300 bg-gray-100 hover:bg-gray-200 rounded-lg cursor-pointer',
        className
      )}
      htmlFor={props.id}
    >
      <input
        type='radio'
        {...props}
        className={cn(
          'size-[14px] border rounded-full border-gray-400  checked:border-gray-600',
          className
        )}
      />
      <p className={cn('text-[14px]', labelClassName)}>{label}</p>
    </label>
  )
}
