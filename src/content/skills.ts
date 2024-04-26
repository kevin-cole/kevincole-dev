import { icons } from "lucide-react"

export enum SkillTreeItemIconType {
  Folder,
  File
}
export type SkillTree = {
  name: string
  iconType: SkillTreeItemIconType
  description?: string
  url?: string
  items?: SkillTree[]
}

export const fullStackFrameworkSkills: SkillTree = {
  name: 'fullstack frameworks',
  iconType: SkillTreeItemIconType.Folder,
  items: [
    {
      name: 'django',
      iconType: SkillTreeItemIconType.File,
    },
    {
      name: 'next.js',
      iconType: SkillTreeItemIconType.File,
    },
    {
      name: 'laravel',
      iconType: SkillTreeItemIconType.File,
    },
  ],
}

export const languageSkills: SkillTree = {
  name: 'languages',
  iconType: SkillTreeItemIconType.Folder,
  items: [
    {
      name: 'ECMAScrypt',
      iconType: SkillTreeItemIconType.Folder,
      items: [
        {
          name: 'typescript',
          iconType: SkillTreeItemIconType.File
        },
        {
          name: 'javascript',
          iconType: SkillTreeItemIconType.File
        },
      ]
    },
    {
      name: 'python',
      iconType: SkillTreeItemIconType.File
    },
    {
      name: 'php',
      iconType: SkillTreeItemIconType.File
    },
    {
      name: 'java',
      iconType: SkillTreeItemIconType.Folder,
      items: [
        {
          name: 'scala',
          iconType: SkillTreeItemIconType.File
        }
      ]
    },
  ]
}

export const frontEndSkills: SkillTree = {
  name: 'frontend',
  iconType: SkillTreeItemIconType.Folder,
  items: [
    {
      name: 'frameworks',
      iconType: SkillTreeItemIconType.Folder,
      items: [
        {
          name: 'vite',
          iconType: SkillTreeItemIconType.File,
        },
        {
          name: 'astro',
          iconType: SkillTreeItemIconType.File,
        },
      ]
    },
    {
      name: 'libraries',
      iconType: SkillTreeItemIconType.Folder,
      items: [
        {
          name: 'react',
          iconType: SkillTreeItemIconType.Folder,
          items: [
            {
              name: 'redux',
              iconType: SkillTreeItemIconType.File
            },
            {
              name: 'hooks',
              iconType: SkillTreeItemIconType.File
            }
          ]
        },
        {
          name: 'angular',
          iconType: SkillTreeItemIconType.File,
        },
        {
          name: 'backbonejs',
          iconType: SkillTreeItemIconType.File
        }
      ],
    },
    {
      name: 'low code',
      iconType: SkillTreeItemIconType.Folder,
      items: [
        {
          name: 'retool',
          iconType: SkillTreeItemIconType.File
        }
      ]
    },
    {
      name: 'concepts',
      iconType: SkillTreeItemIconType.Folder,
      items: [
        {
          name: 'SEO',
          iconType: SkillTreeItemIconType.File
        },
        {
          name: 'SSR',
          iconType: SkillTreeItemIconType.File
        },
      ]
    },
  ]
}

export const backendSkills: SkillTree = {
  name: 'backend',
  iconType: SkillTreeItemIconType.Folder,
  items: [
   {
     name: 'frameworks',
     iconType: SkillTreeItemIconType.Folder,
     items: [
        {
          name: 'express',
          iconType: SkillTreeItemIconType.File
        },
        {
          name: 'node.js',
          iconType: SkillTreeItemIconType.File
        },
        {
          name: 'flask',
          iconType: SkillTreeItemIconType.File
        },
        {
          name: 'akka',
          iconType: SkillTreeItemIconType.File
        },
        {
          name: 'codeigniter',
          iconType: SkillTreeItemIconType.File
        }
     ]
   },
   {
      name: 'datastores',
      iconType: SkillTreeItemIconType.Folder,
      items: [
        {
          name: 'sql',
          iconType: SkillTreeItemIconType.Folder,
          items: [
            {
              name: 'mysql',
              iconType: SkillTreeItemIconType.File
            },
            {
              name: 'postgresql',
              iconType: SkillTreeItemIconType.File
            },
            {
              name: 'sql server',
              iconType: SkillTreeItemIconType.File
            }
          ]
        },
        {
          name: 's3',
          iconType: SkillTreeItemIconType.File
        },
      ]
    },
    {
      name: 'apis',
      iconType: SkillTreeItemIconType.Folder,
      items: [
        {
          name: 'rest',
          iconType: SkillTreeItemIconType.File
        },
        {
          name: 'graphql',
          iconType: SkillTreeItemIconType.File
        },
      ]
     },
  ]
}

export const infrastructureSkills = {
  name: 'infrastructure',
  iconType: SkillTreeItemIconType.Folder,
  items: [
    {
      name: 'aws',
      iconType: SkillTreeItemIconType.Folder,
      items: [
        {
          name: 'ec2',
          iconType: SkillTreeItemIconType.File
        },
        {
          name: 'aurora rds',
          iconType: SkillTreeItemIconType.File
        },
        {
          name: 'lambda',
          iconType: SkillTreeItemIconType.File
        },
        {
          name: 'kinesis',
          iconType: SkillTreeItemIconType.File
        },
        {
          name: 'cloudfront',
          iconType: SkillTreeItemIconType.File
        },
        {
          name: 'cloudformation',
          iconType: SkillTreeItemIconType.File
        },
        {
          name: 'sqs',
          iconType: SkillTreeItemIconType.File
        },
        {
          name: 'cognito',
          iconType: SkillTreeItemIconType.File
        },
        {
          name: 'api gateway',
          iconType: SkillTreeItemIconType.File
        },
        {
          name: 'route 53',
          iconType: SkillTreeItemIconType.File
        }
      ]
    },
    {
      name: 'git',
      iconType: SkillTreeItemIconType.File
    },
    {
      name: 'sst - serverless stack',
      iconType: SkillTreeItemIconType.File
    },
    {
      name: 'docker',
      iconType: SkillTreeItemIconType.File
    },
    {
      name: 'jenkins',
      iconType: SkillTreeItemIconType.File
    }
  ]
}

export const integrationsSkills: SkillTree = {
  name: 'integrations',
  iconType: SkillTreeItemIconType.Folder,
  items: [
    {
      name: 'stripe',
      iconType: SkillTreeItemIconType.File,
      url: 'https://stripe.com/'
    },
    {
      name: 'twillio',
      iconType: SkillTreeItemIconType.File,
      url: 'https://www.twilio.com/en-us'
    },
    {
      name: 'segment',
      iconType: SkillTreeItemIconType.File,
      url: 'https://segment.com/'
    },
    {
      name: 'customerio',
      iconType: SkillTreeItemIconType.File,
      url: 'https://customer.io/'
    },
    {
      name: 'check',
      iconType: SkillTreeItemIconType.File,
      url: 'https://www.checkhq.com/'
    },
    {
      name: 'front',
      iconType: SkillTreeItemIconType.File,
      url: 'https://front.com/'
    },
    {
      name: 'checkr',
      iconType: SkillTreeItemIconType.File,
      url: 'https://checkr.com/'
    },
  ],
}

export const skillsTree: SkillTree[] = [
  languageSkills,
  fullStackFrameworkSkills,
  frontEndSkills,
  backendSkills,
  infrastructureSkills,
  integrationsSkills
]

const getAllSkillNames = (tree: SkillTree): string[] => {
  if (tree.items) {
    return [tree.name, ...tree.items.flatMap(getAllSkillNames)]
  }

  return [tree.name]
}

export const skillNames = skillsTree.flatMap(getAllSkillNames)