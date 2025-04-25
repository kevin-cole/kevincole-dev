import { Hero } from '@ui/components/Hero'
import { DesktopBio, TabletBio, MobileBio } from '@ui/components/Bio'

export const Home = () => (
  <div className='animate-slide-down overflow-y-auto'>
    <Hero />
    <DesktopBio />
    <TabletBio />
    <MobileBio />
  </div>
)