import { HeaderTabs } from '@libs/enums'
import { Button } from 'ui/components/button' // Adjust the import path
import { useEffect, useState, type FC } from 'react'

type SiteHeaderProps = {
  activeTab: HeaderTabs
  onTabSwitch: (tab: HeaderTabs) => void
}

export const SiteHeader: FC<SiteHeaderProps> = ({ activeTab, onTabSwitch }) => {

  const [exitingTab, setExitingTab] = useState<HeaderTabs | null>(null)
  const onTab = (tab: HeaderTabs) => {
    if(tab === activeTab) return
    setExitingTab(activeTab)
    onTabSwitch(tab)
  }
  useEffect(() => {
    setExitingTab(null)
  }, [activeTab])

  const whiteBlur = 'before:absolute before:top-0 before:left-0 before:w-2 before:h-full before:bg-gradient-to-l before:from-gray-300 before:to-white before:opacity-0 before:transition-opacity before:duration-300 hover:before:opacity-50'

  const tabBase = 'group w-20 relative py-2 pl-5 rounded-b-none rounded-tr-2xl transition-[width] duration-500 ease-in-out hover:shadow-lg hover:shadow-tab-inactive'
  const activeTabClass = 'bg-tab-active text-white shadow-md z-20 hover:bg-tab-active-hover'
  const inactiveTabClass = `bg-tab-inactive text-tab-inactive w-5 overflow-hidden hover:w-20 hover:bg-tab-inactive hover:z-10 ${whiteBlur}`
  const exitingTabClass = 'transition-all duration-500 ease-in-out bg-tab-inactive w-5'

  const inactiveTextClass = 'transition-colors duration-500 group-hover:text-gray-700 opacity-100 scale-100'
  const exitingTextClass = 'transition-all duration-500 opacity-0 scale-0'

  return (
    <header className='bg-transparent sticky top-0 z-50 w-full border-b border-gray-300 backdrop-blur-md shadow-md'>
      <div className='container mx-auto px-4'>
        <div className='relative flex h-16'>
          <div className='relative flex items-end space-x-[-16px]'>

            <Button
              className={`${tabBase} ${
                activeTab === HeaderTabs.OVERVIEW
                  ? activeTabClass
                  : exitingTab === HeaderTabs.OVERVIEW
                  ? exitingTabClass
                  : inactiveTabClass
              }`}
              onClick={() => onTab(HeaderTabs.OVERVIEW)}
            >
              <span className={
                activeTab === HeaderTabs.OVERVIEW
                  ? ''
                  : exitingTab === HeaderTabs.OVERVIEW
                  ? exitingTextClass
                  : inactiveTextClass
              }
              >{HeaderTabs.OVERVIEW}</span>
            </Button>

            <Button
              className={`${tabBase} ${
                activeTab === HeaderTabs.DETAILS
                  ? activeTabClass
                  : exitingTab === HeaderTabs.DETAILS
                  ? exitingTabClass
                  : inactiveTabClass
              }`}
              onClick={() => onTab(HeaderTabs.DETAILS)}
            >
              <span className={
                activeTab === HeaderTabs.DETAILS
                  ? ''
                  : exitingTab === HeaderTabs.DETAILS
                  ? exitingTextClass
                  : inactiveTextClass
              }
              >{HeaderTabs.DETAILS}</span>
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}
