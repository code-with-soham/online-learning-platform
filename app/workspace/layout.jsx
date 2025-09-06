import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar'
import React from 'react'
import AppSidebar from './components/appSidebar'
import AppHeaader from './components/appHeaader'

const layout = ({children}) => {
  return (
    
    <SidebarProvider>
      <AppSidebar/>
        <div className='w-full'>
        
        <AppHeaader/>
        {children}
        </div>
    </SidebarProvider>
  )
}

export default layout