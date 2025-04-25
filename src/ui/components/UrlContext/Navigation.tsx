import { useEffect, useState, type FC } from 'react'
import { HeaderTabs } from '@libs/enums'
import { Button } from 'ui/components/button'
import { Briefcase, Home } from 'lucide-react'
import { paramToTab } from '@libs/utils'

// Helpers
const tabToParam = (tab: HeaderTabs) => tab.toLowerCase()

const useUrlTab = () => {

  // Default active tab to home
  const [activeTab, setActiveTab] = useState<HeaderTabs>(HeaderTabs.HOME)

  const setTab = (tab: HeaderTabs) => {
    const url = new URL(window.location.toString())
    url.searchParams.set('tab', tabToParam(tab))
    history.pushState({}, '', url)
    if (tab !== activeTab)
      setActiveTab(tab)

    // Trigger visibility update manually
    const event = new CustomEvent('tabchange')
    window.dispatchEvent(event)
  }

  useEffect(() => {
    //On mount, set tab to HOME
    //setTab(HeaderTabs.HOME)
    const url = new URL(window.location.toString())
    const urlTab = url.searchParams.get('tab')
    if (!urlTab || urlTab === HeaderTabs.DETAILS) {
      url.searchParams.set('tab', HeaderTabs.HOME)
      history.pushState({}, '', url)
    }

    // add op state listener
    const onPopState = () => {
      const search = new URLSearchParams(window.location.search)
      setActiveTab(paramToTab(search.get('tab')))
    }
    window.addEventListener('popstate', onPopState)
    return () => window.removeEventListener('popstate', onPopState)
  }, [])

  return { activeTab, setTab }
}

const SiteHeader: FC = () => {
  const { activeTab, setTab } = useUrlTab()
  const [exitingTab, setExitingTab] = useState<HeaderTabs | null>(null)

  const onTab = (tab: HeaderTabs) => {
    if (tab === activeTab) return // noop
    setExitingTab(activeTab)
    setTab(tab)
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
            {[HeaderTabs.HOME, HeaderTabs.DETAILS].map((tab) => {
              const isActive = activeTab === tab
              const isExiting = exitingTab === tab
              const Icon = tab === HeaderTabs.HOME ? Home : Briefcase
              return (
                <Button
                  key={tab}
                  className={`${tabBase} ${isActive ? activeTabClass : isExiting ? exitingTabClass : inactiveTabClass}`}
                  onClick={() => onTab(tab)}
                >
                  <span className={isActive ? '' : isExiting ? exitingTextClass : inactiveTextClass}>
                    <div className="flex items-center gap-x-2">
                      <Icon className="flex-shrink-0" />
                      <span className="text-base">{tab}</span>
                    </div>
                  </span>
                </Button>
              )
            })}
          </div>
        </div>
      </div>
    </header>
  )
}

const MobileFooterNav: FC = () => {
  const { activeTab, setTab } = useUrlTab()

  const onTab = (tab: HeaderTabs) => {
    if (tab === activeTab) return // noop
    setTab(tab)
  }

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 bg-secondary border-t border-gray-700 text-white">
      <div className="flex justify-around items-center h-16">
        {[HeaderTabs.HOME, HeaderTabs.DETAILS].map((tab) => {
          const Icon = tab === HeaderTabs.HOME ? Home : Briefcase
          return (
            <button
              key={tab}
              onClick={() => onTab(tab)}
              className={`flex flex-col items-center ${activeTab === tab ? 'text-turquoise' : 'text-gray-700'}`}
            >
              <Icon className="w-6 h-6" />
              <span className="text-xs mt-1">{tab}</span>
            </button>
          )
        })}
      </div>
    </nav>
  )
}

export const Navigation: FC = () => (
  <>
    <header className='hidden md:block'>
      <SiteHeader />
    </header>
    <div className='block md:hidden'>
      <MobileFooterNav />
    </div>
  </>
)
