import { EmploymentSection } from '@ui/blocks/EmploymentSection'
import { SkillsTree } from '@ui/blocks/SkillsTree'
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
import { EducationSection } from '@ui/blocks/EducationSection'

export const Work = () => (
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