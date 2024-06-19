export type Option = {
  label: string
  value: string
}

export type Question = {
  question: string
  name: string
  options: Option[]
}

export type Answer = {
  question: string
  answer: Option
}
