import type { CSSProperties } from 'react'
import { EmploymentSection } from '@ui/blocks/EmploymentSection'
import { SkillsTree } from '@ui/blocks/SkillsTree'
import {
  languageSkills,
  frontEndSkills,
  backendSkills,
  integrationsSkills,
  infrastructureSkills,
  fullStackFrameworkSkills,
  aiSkills,
} from 'content/skills'
import { employments } from 'content/employments'
import { educations } from 'content/education'
import { EducationSection } from '@ui/blocks/EducationSection'

/** Inline mask avoids Tailwind rewriting gradient stops; nested layer keeps brightness off the mask. */
const skillsCardBgMask: CSSProperties = {
  WebkitMaskImage:
    'radial-gradient(ellipse 115% 115% at 50% 50%, #fff 32%, rgba(255,255,255,0.5) 100%)',
  maskImage:
    'radial-gradient(ellipse 115% 115% at 50% 50%, #fff 32%, rgba(255,255,255,0.5) 100%)',
  WebkitMaskSize: '100% 100%',
  maskSize: '100% 100%',
  WebkitMaskRepeat: 'no-repeat',
  maskRepeat: 'no-repeat',
  WebkitMaskPosition: 'center',
  maskPosition: 'center',
}

export const Work = () => (
  <div className='animate-slide-down h-full overflow-y-auto'>
    <div id='skills' className='flex flex-col'>
      <section id='Skills' className='mt-20 mb-10 px-4 bg-transparent'>
        <div className='relative overflow-hidden rounded-xl p-4 max-w-[1480px] mx-auto'>
          <div
            aria-hidden
            className='pointer-events-none absolute inset-0 z-0 overflow-hidden rounded-xl'
            style={skillsCardBgMask}
          >
            <div className='h-full w-full bg-[url("/sandias-cropped.png")] bg-top bg-no-repeat bg-cover filter brightness-150' />
          </div>
          <div className='relative z-10 flex flex-row flex-wrap p-4'>
            <SkillsTree className='p-2' items={[languageSkills, fullStackFrameworkSkills]} />
            <SkillsTree className='p-2' items={[aiSkills]} />
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