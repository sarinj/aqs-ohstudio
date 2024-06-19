import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Profile — OH.STUDIO',
  description: 'A brand and product designer working with clients globally.',
}

export default function ProfilePage() {
  return (
    <div className='flex flex-col w-full min-h-[calc(100vh-278px)] md:min-h-[calc(100vh-208px)] max-w-[1400px] mx-auto'>
      <p>Profile page</p>
    </div>
  )
}
