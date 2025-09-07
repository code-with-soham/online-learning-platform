import { SidebarTrigger } from '@/components/ui/sidebar'
import { UserButton } from '@clerk/nextjs'
import React from 'react'
import { ModeToggle } from './darkModeToggle'


const AppHeaader = () => {
  return (
    <div className='p-4 flex items-center justify-between  shadow-md'>
      <SidebarTrigger/>
      <ModeToggle/>
      <UserButton/>
      </div>
  )
}

export default AppHeaader