import { createContext, useContext, useState, type ReactNode } from 'react'
import { HeaderTabs } from '@libs/enums'

type TabContextType = {
  activeTab: HeaderTabs
  switchTab: (tab: HeaderTabs) => void
}

const TabContext = createContext<TabContextType | undefined>(undefined)

export const TabProvider = ({ children }: { children: ReactNode }) => {
  const [activeTab, setActiveTab] = useState(HeaderTabs.HOME)

  const switchTab = (tab: HeaderTabs) => {
    setActiveTab(tab)
  }

  return (
    <TabContext.Provider value={{ activeTab, switchTab }}>
      {children}
    </TabContext.Provider>
  )
}

export const useTab = () => {
  const context = useContext(TabContext)
  if (!context) {
    throw new Error('useTab must be used within a TabProvider')
  }
  return context
}