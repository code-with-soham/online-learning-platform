import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar'
import React from 'react'

const layout = ({children}) => {
  return (
    
    <SidebarProvider>
     
        
        <SidebarTrigger/>
        <>{children}</>
    </SidebarProvider>
  )
}

export default layout