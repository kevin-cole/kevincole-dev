import { HeaderTabs } from '@libs/enums'
import { useState, useEffect, type FC } from 'react'

import { ContactButton } from '@ui/components/ContactButton'

import { SiteHeader } from '@ui/blocks/SiteHeader'
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

const MOBILE_WIDTH = 768
const TABLET_WIDTH = 1250

type ResizableComponentProps = {
  innerWidth?: number
}

const useInnerWidth = () => {
  const [innerWidth, setInnerWidth] = useState(
    typeof window !== 'undefined' ? window.innerWidth : TABLET_WIDTH + 1
  )

  useEffect(() => {
    const handleResize = () => setInnerWidth(window.innerWidth)
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return innerWidth
}

const Hero: FC<ResizableComponentProps> = ({ innerWidth }) => {
  const flexType = innerWidth <= MOBILE_WIDTH ? 'flex-col' : 'float-left flex-row'
  const nameMargin = innerWidth <= MOBILE_WIDTH ? ' m-4' : 'm-8 mt-16'
  const imageMargin = innerWidth <= MOBILE_WIDTH ? ' m-4' : 'm-8'
  return (<div className={`flex ${flexType}`}>
    <img src='kevin-cole.jpg' alt='' className={`h-40 w-40 rounded-lg ${imageMargin}`} />
    <div className={`bg-transparent px-4 bg-secondary ${nameMargin}`}>
      <div className='text-h2-md md:text-h2 font-bold text-white'>Kevin Cole</div>
      <div className='text-white'>kev.cole@yahoo.com</div>
      <div className='text-white'>+15126959682</div>
    </div>
  </div>
  )
}

const DesktopBio = () => (
  <div className='my-16 mx-12 text-4xl leading-normal text-turquoise-light'>
    <div className='text-turquoise-light'>20 years creating and maintaining software.</div>
    <div className='text-turquoise-light'>Primarily for early stage start-ups.</div>
    <div className='text-turquoise-light'> I have programmed in many</div>
    <div className='text-turquoise'>languages and architectures, which gives me a firm basis</div>
    <div className='text-turquoise'>in software development frameworks and strategies on both</div>
    <div className='text-turquoise'> the front and backend. My experience ranges from</div>
    <div className='text-turquoise'>CI/CD to CSS. I can learn new technologies quickly.</div>
    <div className='text-turquoise'>I enjoy collaborating with others</div>
    <div style={{color: '#16a998'}}>and mentoring new developers.</div>
    <div className='text-turquoise-dark'>I am always looking forward</div>
    <div className='text-gray-700'>to a new adventure.</div>
  </div>
)

const TabletBio = () => (
  <div className='my-16 mx-12 text-3xl leading-tight text-turquoise-light max-w-[66vw]'>
    <div className='text-turquoise-light'>20 years creating and maintaining software.
      Primarily for early stage start-ups.
      I have programmed in many languages and architectures,
      which gives me a firm basis in software development frameworks and strategies on both the front and backend.
      My experience ranges from CI/CD to CSS. I can learn new technologies quickly
      I enjoy collaborating with others and mentoring new developers.</div>
    <div className='text-primary'>I am always looking forward to a new adventure.</div>
  </div>
)

const MobileBio = () => (
  <div className='my-4 mx-12 text-3xl leading-none text-turquoise-light'>
    <div className='text-white'>20 years creating and maintaining software and always looking for a new</div>
    <div className='text-turquoise-light'>adventure.</div>
  </div>
)

const Home: FC<ResizableComponentProps> = ({ innerWidth }) => {
  const [isVisible, setIsVisible ] = useState(false)
  useEffect(() => {
    setIsVisible(true)
  }, [])
  const mainClassName = isVisible ? 'animate-slide-down overflow-y-auto' : 'opacity-0'
  return (<div className={mainClassName}>
    { <Hero innerWidth={innerWidth} /> }
    { innerWidth > TABLET_WIDTH && <DesktopBio />}
    { innerWidth <= TABLET_WIDTH && innerWidth > MOBILE_WIDTH && <TabletBio /> }
    { innerWidth <= MOBILE_WIDTH && <MobileBio /> }
    <ContactButton innerWidth={innerWidth}/>
  </div>)
}

const Work = () => (
  <div className='animate-slide-down h-full overflow-y-auto'>
    <div id='skills' className='flex flex-col'>
      <section id='Skills' className='mt-20 mb-10 px-4 bg-transparent'>
        <div
          className="p-4 rounded-xl max-w-[1480px] mx-auto bg-[url('/code-waterfall.gif')] bg-top bg-no-repeat bg-cover filter brightness-150"
        >
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

export const MainComponent = () => {

  // This prevents any rendering until client-side mount
  const [hasMounted, setHasMounted] = useState(false)

  useEffect(() => {
    setHasMounted(true)
  }, [])

  const [activeTab, setActiveTab] = useState(HeaderTabs.OVERVIEW)
  const innerWidth = useInnerWidth()

  const switchTab = (tab: HeaderTabs): void => {
    setActiveTab(tab)
  }

  if (!hasMounted) return null

  return (
    <main className='h-full overflow-y-auto'>
      <header>
        <SiteHeader activeTab={activeTab} onTabSwitch={switchTab} />
      </header>
      { activeTab === HeaderTabs.OVERVIEW && <Home innerWidth={innerWidth} />}
      { activeTab === HeaderTabs.DETAILS && <Work />}
    </main>
  )
}