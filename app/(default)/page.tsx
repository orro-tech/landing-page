export const metadata = {
  title: 'ORRO - The one team platform for startups',
  description: 'All-inclusive productivity and team collaboration solution, meticulously crafted for founders',
}

import Hero from '@/components/hero'
import Features from '@/components/features'
import Newsletter from '@/components/newsletter'
import Zigzag from '@/components/zigzag'
import Testimonials from '@/components/testimonials'

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <Zigzag />
      {/* <Testimonials /> */}
      <Newsletter />
    </>
  )
}
