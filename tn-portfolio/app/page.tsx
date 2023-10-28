import Image from 'next/image'
import RootLayout from './layout'
import Homes from '@/components/Home/page'
import About from '@/components/About/page'
import Experiences from '@/components/Experiences/page'

export default function Home() {
  return (

    <div>
      <Homes/>
      <About/>
      <Experiences/>
    </div>

  )
}
