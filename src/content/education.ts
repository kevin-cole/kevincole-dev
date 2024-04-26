export type EducationDegree = {
  degree: string

}

export type Education = {
  institution: string
  degrees: EducationDegree[]
  url: string
  background?: string
  logo?: string
}


export const educations: Education[] = [
  {
    institution: 'The University if Texas at Austin',
    degrees: [
      {
        degree: 'BS in Computer Sciences',
      }, {
        degree: 'BA in Linguistics'
      }
    ],
    url: 'https://www.utexas.edu/',
    background: 'https://www.utexas.edu/sites/default/files/sotu_1500x675.jpg',
    logo: 'https://www.utexas.edu/themes/coresite/coretheme/images/logo.svg'
  }
]