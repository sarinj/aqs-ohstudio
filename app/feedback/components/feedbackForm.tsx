'use client'

import { useState } from 'react'
import FinishedPage from './finishedPage'
import QuestionPage from './questionPage'
import { feedbackQuestions } from './questions'
import StartPage from './startPage'
import { Answer } from './interface'

export default function FeedbackForm() {
  const [step, setStep] = useState(0)
  const [answers, setAnswers] = useState<Answer[]>([])

  function nextStep(answer?: Answer) {
    if (answer) {
      setAnswers(prev => {
        const newAnswers: Answer[] = [...prev]
        newAnswers[step - 1] = answer
        return newAnswers
      })
    }
    setStep(prev => prev + 1)
  }

  function prevStep() {
    setStep(prev => prev - 1)
  }

  switch (step) {
    case 0:
      return <StartPage onNext={nextStep} />
    case feedbackQuestions.length + 1:
      return <FinishedPage answers={answers} />
    default:
      return (
        <QuestionPage
          question={feedbackQuestions[step - 1]}
          onNext={nextStep}
          onPrevious={prevStep}
          isFirst={step === 1}
          isLast={step === feedbackQuestions.length}
          answer={answers[step - 1]}
        />
      )
  }
}
