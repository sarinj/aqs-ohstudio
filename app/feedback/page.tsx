import FeedbackForm from './components/feedbackForm'

export default function FeedbackPage() {
  return (
    <div className='flex flex-col w-full h-[74vh] md:h-[77.3vh] max-w-[1400px] mx-auto'>
      <div className='p-10'>
        <div className='max-w-[400px] m-auto'>
          <FeedbackForm />
        </div>
      </div>
    </div>
  )
}
