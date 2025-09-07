"use client"
import React, { Profiler } from 'react'
import Image from 'next/image'
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem
} from "@/components/ui/sidebar"
import { Button } from '@/components/ui/button'
import { BookOpen, BookOpenText, BrainCircuit, HandCoins, LayoutDashboard, LayoutDashboardIcon, LayoutGrid, LineSquiggle, LogOut, Settings, ToolCase, UserRoundPen } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const sideBarOptions=[
  {
    title: "Dashboard",
    icon: LayoutGrid,
    link: "/workspace"

  },
  {
    id: 2,
    title: "My Learning",
    icon: BrainCircuit,
    link: "/my-learning"
  },
  
  {
    id: 2,
    title: "Courses",
    icon: BookOpen,
    link: "/#"
  },
  {
    id: 2,
    title: "AI Tools",
    icon: LineSquiggle,
    link: "/#"
  },
  {
    id: 2,
    title: "Billing",
    icon: HandCoins,
    link: "/#"
  },
  {
    id: 3,
    title: "Profile", 
    icon: UserRoundPen,
    link: "/#"
  }, 
  {
    id: 4,
    title: "Settings",  
    icon: Settings,
    link: "/#"
  },
  {
    id: 5,
    title: "Logout",  
    icon: LogOut  ,
    link: "/#"
  }
]

const AppSidebar = () => {

  const path = usePathname();

  return (
    <Sidebar >
      <SidebarHeader className='p-1 m-0'>
  <Image className='mx-auto' src="/logo.svg" alt="logo" width={200} height={120} />
        </SidebarHeader>

      <SidebarContent >
        <SidebarGroup className='px-4'>
          <Button>Create New Course</Button>
        </SidebarGroup>

          <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {sideBarOptions.map((item, index) => (
                <SidebarMenuItem key={index}>
                  <SidebarMenuButton asChild className='p-6'>
                    <Link href={item.link} className={`font-medium text-[17px] ${path.includes(item.link) && 'text-primary bg-blue-200 '}`}>
                      <item.icon className='h-7 w-7' />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        
      </SidebarContent>
      <SidebarFooter />
    </Sidebar>
  )
}

export default AppSidebar