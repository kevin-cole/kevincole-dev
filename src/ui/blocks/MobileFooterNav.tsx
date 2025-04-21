import { Home, Briefcase } from 'lucide-react'
import { HeaderTabs } from '@libs/enums'
import type { FC } from 'react'

type Props = {
  activeTab: HeaderTabs
  onTabSwitch: (tab: HeaderTabs) => void
}

export const MobileFooterNav: FC<Props> = ({ activeTab, onTabSwitch }) => {
  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 bg-secondary border-t border-gray-700 text-white">
      <div className="flex justify-around items-center h-16">
        <button
          onClick={() => onTabSwitch(HeaderTabs.OVERVIEW)}
          className={`flex flex-col items-center ${activeTab === HeaderTabs.OVERVIEW ? 'text-turquoise' : 'text-gray-700'}`}
        >
          <Home className="w-6 h-6" />
          <span className="text-xs mt-1">{HeaderTabs.OVERVIEW}</span>
        </button>

        <button
          onClick={() => onTabSwitch(HeaderTabs.DETAILS)}
          className={`flex flex-col items-center ${activeTab === HeaderTabs.DETAILS ? 'text-turquoise' : 'text-gray-700'}`}
        >
          <Briefcase className="w-6 h-6" />
          <span className="text-xs mt-1">{HeaderTabs.DETAILS}</span>
        </button>
      </div>
    </nav>
  )
}
