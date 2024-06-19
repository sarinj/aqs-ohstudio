import { Question } from './interface'

export const feedbackQuestions: Question[] = [
  {
    question: 'What is your role?',
    name: 'role',
    options: [
      { label: 'Founder', value: 'founder' },
      { label: 'Executive', value: 'executive' },
      { label: 'Product Manager', value: 'product_manager' },
      { label: 'Product Owner', value: 'product_owner' },
      { label: 'Software Engineer', value: 'software_engineer' },
    ],
  },
  {
    question: "What's your company size?",
    name: 'companySize',
    options: [
      { label: 'only me', value: 'only_me' },
      { label: '1-5 employees', value: '1-5_employees' },
      { label: '6-10 employees', value: '6-10_employees' },
      { label: '11-100 employees', value: '11-100_employees' },
      { label: 'over 100 employees', value: 'over_100_employees' },
    ],
  },
  {
    question: 'How did you hear about us first?',
    name: 'howDidYouHear',
    options: [
      { label: 'Recommendation', value: 'recommendation' },
      { label: 'Social Media', value: 'social_media' },
      { label: 'Ads', value: 'ads' },
      { label: 'Google Search', value: 'google' },
      { label: 'In a Podcast', value: 'podcast' },
    ],
  },
]
