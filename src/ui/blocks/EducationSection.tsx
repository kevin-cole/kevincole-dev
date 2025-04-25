import { type FC } from 'react'
import {
  GraduationCap,
} from 'lucide-react'
import { type Education } from 'content/education'


type EducationSectionProps = {
  educations: Education[]
}

export const EducationSection: FC<EducationSectionProps> = ({
  educations
}) => {

  return (
    <div className="max-w-6xl mx-auto">
      <div className="gap-8">
        {educations.map((education) => {
          return (
            <div
              className="p-8 rounded-xl transition-all opacity-90 hover:opacity-100"
              style={{
                backgroundImage: `url(${education.background})`,
                backgroundPosition: 'top',
                backgroundRepeat: 'no-repeat',
                filter: 'brightness(1)'
              }}
              key={education.institution}
            >
              <a className="flex flex-row items-center" target="_blank" href={education.url}>
                <GraduationCap className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-center text-h3 font-bold text-primary mb-2 pl-6 text-center">
                  {education.institution}
                </h3>
              </a>
              {
                education.degrees.map((degree, index) => (<p key={index} className="text-h5 font-bold tex-primary mb-2">{degree.degree}</p>))
              }
            </div>
          )
        })}
      </div>
    </div>
  )
}
