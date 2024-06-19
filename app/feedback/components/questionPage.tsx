import RadioButton from '@/components/input/radioButton'
import { Answer, Question } from './interface'
import Button from '@/components/button/button'

interface QuestionPageProps {
  question: Question
  answer: Answer
  isFirst?: boolean
  isLast?: boolean
  onNext: (answer: Answer) => void
  onPrevious: () => void
}

export default function QuestionPage({
  question,
  answer,
  isFirst = false,
  isLast = false,
  onNext,
  onPrevious,
}: QuestionPageProps) {
  function handleNext(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const value = event.currentTarget[question.name].value
    const label =
      question.options.find(option => option.value === value)?.label || ''
    onNext({ question: question.question, answer: { label, value } })
  }

  return (
    <form key={question.name} className='space-y-4' onSubmit={handleNext}>
      <div>
        <p className='text-[18px] font-semibold'>{question.question}</p>
        <p className='text-gray-600'>
          Please select one of the following options:
        </p>
      </div>
      <div className='space-y-2'>
        {question.options.map(option => (
          <RadioButton
            key={option.value}
            label={option.label}
            value={option.value}
            name={question.name}
            defaultChecked={answer?.answer.value === option.value}
            required
          />
        ))}
      </div>
      <div className='flex justify-between'>
        {isFirst ? (
          <div></div>
        ) : (
          <Button onClick={onPrevious} type='button'>
            Back
          </Button>
        )}
        <Button
          type='submit'
          className='bg-gray-600 text-white hover:bg-gray-700'
        >
          {isLast ? 'Finish' : 'Next'}
        </Button>
      </div>
    </form>
  )
}
