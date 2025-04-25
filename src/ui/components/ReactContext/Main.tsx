import { TabProvider } from '@ui/components/ReactContext/TabContext'
import { Navigation } from '@ui/components/ReactContext/Navigation'
import { TabView } from '@ui/components/ReactContext/TabView'
import { ContactButton } from '@ui/components/ContactButton'


export const Main = () => (
  <TabProvider>
    <main className='h-full overflow-y-auto'>
      <Navigation />
      <ContactButton />
      <TabView />
    </main>
  </TabProvider>
)