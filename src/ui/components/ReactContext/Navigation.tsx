import { HeaderTabs } from '@libs/enums'
import { Button } from 'ui/components/button' // Adjust the import path
import { useEffect, useState, type FC } from 'react'
import { Briefcase, Home } from 'lucide-react'
import { useTab } from '@ui/components/ReactContext/TabContext'

const SiteHeader: FC = () => {

  const { activeTab, switchTab } = useTab()

  const [exitingTab, setExitingTab] = useState<HeaderTabs | null>(null)
  const onTab = (tab: HeaderTabs) => {
    if(tab === activeTab) return
    setExitingTab(activeTab)
    switchTab(tab)
  }
  useEffect(() => {
    setExitingTab(null)
  }, [activeTab])

  const whiteBlur = 'before:absolute before:top-0 before:left-0 before:w-2 before:h-full before:bg-gradient-to-l before:from-gray-300 before:to-white before:opacity-0 before:transition-opacity before:duration-300 hover:before:opacity-50'

  const tabBase = 'border border-gray-300 group w-30 relative py-2 pl-5 rounded-b-none rounded-tr-2xl transition-[width] duration-500 ease-in-out hover:shadow-lg hover:shadow-tab-inactive'
  const activeTabClass = 'bg-tab-active text-white shadow-md z-20 hover:bg-tab-active-hover'
  const inactiveTabClass = `bg-tab-inactive text-tab-inactive w-5 overflow-hidden hover:w-30 hover:bg-tab-inactive hover:z-10 ${whiteBlur}`
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
                activeTab === HeaderTabs.HOME
                  ? activeTabClass
                  : exitingTab === HeaderTabs.HOME
                  ? exitingTabClass
                  : inactiveTabClass
              }`}
              onClick={() => onTab(HeaderTabs.HOME)}
            >
              <span className={
                activeTab === HeaderTabs.HOME
                  ? ''
                  : exitingTab === HeaderTabs.HOME
                  ? exitingTextClass
                  : inactiveTextClass
              }
              >
                <div className="flex items-center gap-x-2">
                  <Home className="flex-shrink-0" />
                  <span className="text-base">{HeaderTabs.HOME}</span>
                </div>
              </span>
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
              >
                <div className="flex items-center gap-x-2">
                  <Briefcase className="flex-shrink-0" />
                  <span className="text-base">{HeaderTabs.DETAILS}</span>
                </div>
              </span>
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}

const MobileFooterNav: FC = () => {
  const { activeTab, switchTab } = useTab()
  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 bg-secondary border-t border-gray-700 text-white">
      <div className="flex justify-around items-center h-16">
        <button
          onClick={() => switchTab(HeaderTabs.HOME)}
          className={`flex flex-col items-center ${activeTab === HeaderTabs.HOME ? 'text-turquoise' : 'text-gray-700'}`}
        >
          <Home className="w-6 h-6" />
          <span className="text-xs mt-1">{HeaderTabs.HOME}</span>
        </button>

        <button
          onClick={() => switchTab(HeaderTabs.DETAILS)}
          className={`flex flex-col items-center ${activeTab === HeaderTabs.DETAILS ? 'text-turquoise' : 'text-gray-700'}`}
        >
          <Briefcase className="w-6 h-6" />
          <span className="text-xs mt-1">{HeaderTabs.DETAILS}</span>
        </button>
      </div>
    </nav>
  )
}

export const Navigation = () => (
  <>
    <header className='hidden md:block'>
      <SiteHeader />
    </header>
    <div className='block md:hidden'>
      <MobileFooterNav />
    </div>
  </>
)