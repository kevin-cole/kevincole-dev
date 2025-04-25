import { type Employment } from 'content/employments'
import { type FC } from 'react'
import { CheckCircle } from 'lucide-react'


type EmploymentSectionProps = {
  employments: Employment[]
}

type EmploymentComponentProps = {
  employment: Employment
}

const EmploymentComponent: FC<EmploymentComponentProps> = ({employment}) => (
  <div
    key={employment.company}
    className="bg-secondary/80 rounded-xl p-4 hover:bg-secondary transition-all"
  >
  <div className="flex gap-3 pb-3 border-b border-gray-300">
    <a
      href={employment.url}
      target="_blank"
      rel="noopener noreferrer"
      className="text-h4 font-semibold text-primary hover:text-primary/80 transition-colors flex items-start gap-3"
    >
      {employment.image ? (
        <img src={employment.image} alt={employment.company} className="h-18 flex-shrink-0" />
      ) : (
        <p>{employment.company}</p>
      )}
    </a>
  </div>
  <div className="py-3 border-b border-gray-300">
    <div className="text-primary/80">{employment.dates}</div>
    <div className="text-primary/80">{employment.jobTitle}</div>
  </div>
  <div className="text-primary/80 pb-3 border-b border-gray-300 my-4">{employment.description}</div>
  <ul className="space-y-2">
    {employment.bullets.map((bullet) => (
      <li key={bullet} className="text-primary/60 text-sm flex items-center gap-2">
        <CheckCircle className="w-3 h-3 text-primary/40 flex-shrink-0" />
        <span className="flex-grow">{bullet}</span>
      </li>
    ))}
  </ul>
</div>
)

export const EmploymentSection: FC<EmploymentSectionProps> = ({
  employments,
}) => {
  if (!employments.length) {
    return null
  }

  return (
    <div className="max-w-6xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {employments.map((employment) => <EmploymentComponent key={employment.company} employment={employment} />)}
      </div>
    </div>
  )
}
