import { useEffect, type FC } from 'react'
import { HeaderTabs } from '@libs/enums'
import { Home } from '@ui/components/Home'
import { Work } from '@ui/components/Work'

export const TabView: FC = () => {
  useEffect(() => {
    const setVisibility = () => {
      const search = new URLSearchParams(window.location.search)
      const tab = search.get('tab')

      const isHome = !tab || tab === HeaderTabs.HOME

      const homeEl = document.getElementById('tab-home')
      const workEl = document.getElementById('tab-details')

      if (homeEl) homeEl.style.display = isHome ? 'block' : 'none'
      if (workEl) workEl.style.display = isHome ? 'none' : 'block'
    }

    window.addEventListener('popstate', setVisibility)
    window.addEventListener('tabchange', setVisibility) // custom event

    return () => {
      window.removeEventListener('popstate', setVisibility)
      window.removeEventListener('tabchange', setVisibility)
    }
  }, [])

  return (
    <>
      <div id="tab-home" style={{ display: 'block' }}>
        <Home />
      </div>
      <div id="tab-details" style={{ display: 'none' }}>
        <Work />
      </div>
    </>
  )
}
