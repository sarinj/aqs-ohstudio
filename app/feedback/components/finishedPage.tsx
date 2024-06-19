import Image from 'next/image'
import { Answer } from './interface'
import { CheckedCircleIcon } from '@/components/icons/checkedCircleIcon'

export default function FinishedPage({ answers }: { answers: Answer[] }) {
  console.log(answers)
  return (
    <div>
      <div className='flex flex-col space-y-2 text-center items-center py-8'>
        <Image src='/checked.svg' alt='check' width={100} height={100} />
        <p className='text-[18px] font-black'>Thank you!</p>
        <p className='text-gray-600 font-semibold'>
          We appreciate your feedback.
        </p>
      </div>
      <div>
        {
          <div>
            <div className='flex items-center gap-x-4'>
              <CheckedCircleIcon />
              <p className='text-gray-600 text-[16px] font-semibold'>
                Welcome Card
              </p>
            </div>
            <div className='space-y-4 mt-3'>
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
          </div>
        }
      </div>
    </div>
  )
}
