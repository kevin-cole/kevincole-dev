import { HeaderTabs } from '@libs/enums'
import { useEffect, useState } from 'react'

import { ContactButton } from '@ui/components/ContactButton'
import { SiteHeader } from '@ui/blocks/SiteHeader'
import { MobileFooterNav } from '@ui/blocks/MobileFooterNav'
import { SkillsTree } from '@ui/blocks/SkillsTree'
import { EmploymentSection } from '@ui/blocks/EmploymentSection'
import { EducationSection } from '@ui/blocks/EducationSection'

import {
  languageSkills,
  frontEndSkills,
  backendSkills,
  integrationsSkills,
  infrastructureSkills,
  fullStackFrameworkSkills,
} from 'content/skills'

import { employments } from 'content/employments'
import { educations } from 'content/education'
import { TabProvider, useTab } from './TabContext'

// 👇 Hero now uses responsive Tailwind classes instead of innerWidth
const Hero = () => (
  <div className='float-none flex flex-col md:flex-row lg:float-left'>
    <img src='kevin-cole.jpg' alt='' className='h-40 w-40 rounded-lg m-4 md:m-8' />
    <div className='px-4 bg-transparent m-4 md:m-8 md:mt-16'>
      <div className='text-h2-md md:text-h2 font-bold text-white'>Kevin Cole</div>
      <div className='text-white'>kev.cole@yahoo.com</div>
      <div className='text-white'>+15126959682</div>
    </div>
  </div>
)

const DesktopBio = () => (
  <div className='hidden lg:block my-16 mx-12 text-4xl leading-normal text-turquoise-light'>
    <div className='text-turquoise-light'>20 years creating and maintaining software.</div>
    <div className='text-turquoise-light'>Primarily for early stage start-ups.</div>
    <div className='text-turquoise-light'> I have programmed in many</div>
    <div className='text-turquoise'>languages and architectures, which gives me a firm basis</div>
    <div className='text-turquoise'>in software development frameworks and strategies on both</div>
    <div className='text-turquoise'> the front and backend. My experience ranges from</div>
    <div className='text-turquoise'>CI/CD to CSS. I can learn new technologies quickly.</div>
    <div className='text-turquoise'>I enjoy collaborating with others</div>
    <div style={{ color: '#16a998' }}>and mentoring new developers.</div>
    <div className='text-turquoise-dark'>I am always looking forward</div>
    <div className='text-gray-700'>to a new adventure.</div>
  </div>
)

const TabletBio = () => (
  <div className='hidden md:block lg:hidden my-16 mx-12 text-3xl leading-tight text-turquoise-light max-w-[66vw]'>
    <div className='text-turquoise-light'>
      20 years creating and maintaining software.
      Primarily for early stage start-ups.
      I have programmed in many languages and architectures,
      which gives me a firm basis in software development frameworks and strategies on both the front and backend.
      My experience ranges from CI/CD to CSS. I can learn new technologies quickly
      I enjoy collaborating with others and mentoring new developers.
    </div>
    <div className='text-primary'>I am always looking forward to a new adventure.</div>
  </div>
)

const MobileBio = () => (
  <div className='block md:hidden my-4 mx-12 text-3xl leading-none text-turquoise-light'>
    <div className='text-white'>
      20 years creating and maintaining software and always looking for a new
    </div>
    <div className='text-turquoise-light'>adventure.</div>
  </div>
)

const Home = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const mainClassName = isVisible ? 'animate-slide-down overflow-y-auto' : 'opacity-0'

  return (
    <div className={mainClassName}>
      <Hero />
      <DesktopBio />
      <TabletBio />
      <MobileBio />
    </div>
  )
}

const Work = () => (
  <div className='animate-slide-down h-full overflow-y-auto'>
    <div id='skills' className='flex flex-col'>
      <section id='Skills' className='mt-20 mb-10 px-4 bg-transparent'>
        <div className="p-4 rounded-xl max-w-[1480px] mx-auto bg-[url('/code-waterfall.gif')] bg-top bg-no-repeat bg-cover filter brightness-150">
          <div className='flex flex-row flex-wrap p-4'>
            <SkillsTree className='p-2' items={[languageSkills]} />
            <SkillsTree className='p-2' items={[fullStackFrameworkSkills]} />
            <SkillsTree className='p-2' items={[frontEndSkills]} />
            <SkillsTree className='p-2' items={[backendSkills]} />
            <SkillsTree className='p-2' items={[infrastructureSkills]} />
            <SkillsTree className='p-2' items={[integrationsSkills]} />
          </div>
        </div>
      </section>
      <section id='Employment' className='my-10 px-4 bg-transparent'>
        <EmploymentSection employments={employments} />
      </section>
      <section id='Education' className='my-10 mb-20 px-4 bg-transparent'>
        <EducationSection educations={educations} />
      </section>
    </div>
  </div>
)

const TabView = () => {
  const { activeTab } = useTab()

  return (
    <>
      {activeTab === HeaderTabs.OVERVIEW && <Home />}
      {activeTab === HeaderTabs.DETAILS && <Work />}
    </>
  )
}

export const MainComponent = () => {
  return (
    <TabProvider>
      <main className='h-full overflow-y-auto'>
        <header className='hidden md:block'>
          <SiteHeader />
        </header>
        <div className='block md:hidden'>
          <MobileFooterNav />
        </div>
        <ContactButton />
        <TabView />
      </main>
    </TabProvider>
  )
}