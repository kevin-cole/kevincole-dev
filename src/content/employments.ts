export type Employment = {
  company: string
  jobTitle: string
  dates: string
  description: string
  bullets: string[]
  url: string
  image?: string
}

const emds: Employment = {
  company: 'e-MDs',
  jobTitle: 'Software Developer and Manager',
  dates: '2005 - 2012',
  description: 'Client server EMR (electronic medical records) application written in Delphi eventually migrated to a javascript/jquery online application',
  bullets: [
    'Maintained and improved Charting application including use of natural language processing methodologies',
    'Rewrote prescription writing module for better maintainability as well add threaded services for electronic delivery',
    'Learned how to debug OO structure with deep inheritance structure',
    'Eventually promoted to team manager overseeing the work of 5 developers',
    'Maintained application build scripts',
    'Helped chart the migration to javascript/jquery solution'
  ],
  url: 'https://www.cgm.com/usa_en/products/electronic-health-records/other-ehrs/cgm-emds.html',
  image: '/e-mds.png'
}
const generationReady: Employment = {
  company: 'Generation Ready',
  jobTitle: 'Software Developer',
  dates: '2012 - 2014',
  description: 'Educational CRM and Consultant Solutions',
  bullets: [
    'Maintain legacy CRM written in proprietary PHP framework',
    'Built education consultation software with a CodeIgniter (php) backend and a backbonejs frontend',
  ],
  url: 'https://generationready.com/',
  image: '/generation-ready.png'
}
const favor: Employment = {
  company: 'favor delivery',
  jobTitle: 'Staff Software Engineer',
  dates: '2014 - 2020',
  description: 'On demand delivery marketplace app',
  bullets: [
    'Helped to rewrite and re-architect PHP monolith into a more service oriented structure',
    'Collaborated in architecting, building and maintaining real-time monitoring of active deliveries',
    'Led team in re-factoring payment services to use Stripe',
    'Architected, built and maintained service for maintaining customer coupons and credits',
    'Refactored code to better protect our data and servers from malicious actors',
  ],
  url: 'https://www.favordelivery.com/',
  image: '/favor.svg'
}
const oseNewMexico: Employment = {
  company: 'OSE of New Mexico',
  jobTitle: 'Software Developer',
  dates: '2025 - Present',
  description: 'State agency managing New Mexico water rights',
  bullets: [
    'Hired to complete a full rebuild of a legacy Access-based water rights management application into a modern Laravel application utilizing Livewire',
    'Architected a framework to easily recreate legal reports required for business operations that export wysiwyg to pdf and MS Word',
    'Oversaw ETL process to ensure all water right data is properly transferred to a new SQL schema',
    'Worked with business owners to expedite delivery in 8 months',
  ],
  url: 'https://www.ose.nm.gov/',
  image: '/ose-logo.png'
}
const buildforce: Employment = {
  company: 'buildforce',
  jobTitle: 'Staff Software Engineer and Architect',
  dates: '2020 - 2025',
  description: 'Marketplace application for construction contractors',
  bullets: [
    'Built an serverless (SST) typescript/graphql backend leveraging AWS services, Apollo Server and a Postgresql datastore',
    'Architected an event driven backend architecture using AWS Kinesis stream',
    'Built and supported React, React native, Next.js and Retool (low-code) frontend',
    'Integrated Segment as a third party pub/sub',
    'Set up CustomerIO (using Segment events) for customer communications',
    'Integrated other third party applications including Front, Aircall, CheckR and Check Payroll',
  ],
  url: 'https://www.buildforce.com/',
  image: '/buildforce.svg'
}

export const employments: Employment[] = [
  oseNewMexico,
  buildforce,
  favor,
  generationReady,
  emds,
]