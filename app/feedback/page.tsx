import FeedbackForm from './components/feedbackForm'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Feedback — OH.STUDIO',
  description: 'A brand and product designer working with clients globally.',
}

export default function FeedbackPage() {
  return (
    <div className='flex flex-col w-full min-h-[calc(100vh-278px)] md:min-h-[calc(100vh-208px)] max-w-[1400px] mx-auto'>
      <div className='p-10'>
        <div className='max-w-[400px] m-auto'>
          <FeedbackForm />
        </div>
      </div>
    </div>
  )
}
