import { HeaderTabs } from '@libs/enums'
import { useTab } from '@ui/components/ReactContext/TabContext'
import { Home } from '@ui/components/Home'
import { Work } from '@ui/components/Work'

export const TabView = () => {
  const { activeTab } = useTab()

  return (
    <>
      {activeTab === HeaderTabs.HOME && <Home />}
      {activeTab === HeaderTabs.DETAILS && <Work />}
    </>
  )
}
