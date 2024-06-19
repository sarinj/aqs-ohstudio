import Button from '@/components/button/button'

export default function StartPage({ onNext }: { onNext: () => void }) {
  return (
    <div className='space-y-8'>
      <div>
        <p className='text-[18px] font-semibold'>Welcome!</p>
        <p className='text-gray-600'>
          Thanks for providing feedback - let&apos;s go!
        </p>
      </div>
      <div className='flex items-center gap-x-3'>
        <Button
          onClick={() => onNext()}
          className='bg-gray-600 text-white hover:bg-gray-700'
        >
          Next
        </Button>
        <p className='text-xs'>Press Enter &#9166;</p>
      </div>
      <div className='space-y-2'>
        <p className='text-gray-400 text-center text-sm'>
          Powered by <span className='font-bold text-gray-600'>Formbricks</span>
        </p>
        <div className='h-2 bg-gray-600 rounded-full'></div>
      </div>
    </div>
  )
}
