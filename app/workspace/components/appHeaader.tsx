import { SidebarTrigger } from '@/components/ui/sidebar'
import { UserButton } from '@clerk/nextjs'
import React from 'react'

const AppHeaader = () => {
  return (
    <div className='p-4 flex items-center justify-between  shadow-md'>
      <SidebarTrigger/>
      <UserButton/>
      </div>
  )
}

export default AppHeaader