import { Answer } from './interface'
import { CheckedCircleIcon } from '@/components/icons/checkedCircleIcon'

export default function FinishedPage({ answers }: { answers: Answer[] }) {
  return (
    <div>
      <div className='flex flex-col space-y-2 text-center items-center py-8'>
        <CheckedCircleIcon className='text-gray-500' width='120' height='120' />
        <p className='text-[18px] font-black'>Thank you!</p>
        <p className='text-gray-600 font-semibold'>
          We appreciate your feedback.
        </p>
      </div>
      <div>
        <div className='flex items-center gap-x-4'>
          <CheckedCircleIcon className='text-gray-600' width='30' height='30' />
          <p className='text-gray-600 text-[16px] font-semibold'>
            Welcome Card
          </p>
        </div>
        <div className='space-y-4 mt-3 overflow-y-auto'>
          {answers.map((answer, index) => (
            <div key={index}>
              <p className='text-gray-500 text-[16px] font-semibold'>
                {answer.question}
              </p>
              <p className='text-gray-800 text-[18px] font-black'>
                {answer.answer.label}
              </p>
            </div>
          ))}
        </div>
        <div className='flex items-center gap-x-4 mt-5'>
          <CheckedCircleIcon className='text-gray-600' width='30' height='30' />
          <div className='text-gray-600 text-[16px] font-semibold bg-gray-100 px-3 rounded-xl'>
            Completed
          </div>
        </div>
      </div>
    </div>
  )
}
