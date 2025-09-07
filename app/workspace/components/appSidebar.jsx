"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import AddNewButton from "./addNewCourse";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { Button } from "@/components/ui/button";
import {
  BookOpen,
  BrainCircuit,
  HandCoins,
  LayoutGrid,
  LineSquiggle,
  LogOut,
  Settings,
  UserRoundPen,
} from "lucide-react";

const sideBarOptions = [
  { title: "Dashboard", icon: LayoutGrid, link: "/workspace" },
  { title: "My Learning", icon: BrainCircuit, link: "/my-learning" },
  { title: "Courses", icon: BookOpen, link: "/courses" },
  { title: "AI Tools", icon: LineSquiggle, link: "/ai-tools" },
  { title: "Billing", icon: HandCoins, link: "/billing" },
  { title: "Profile", icon: UserRoundPen, link: "/profile" },
  { title: "Settings", icon: Settings, link: "/settings" },
  { title: "Logout", icon: LogOut, link: "/logout" },
];

const AppSidebar = () => {
  const path = usePathname();

  return (
    <Sidebar>
      {/* Logo */}
      <SidebarHeader className="p-1 m-0">
        <Image
          className="mx-auto"
          src="/logo.svg"
          alt="logo"
          width={200}
          height={120}
        />
      </SidebarHeader>

      <SidebarContent>
        {/* Button Section */}
        <SidebarGroup className="px-4">
          <AddNewButton>
          <Button className="w-full">Create New Course</Button>
          </AddNewButton>
        </SidebarGroup>

        {/* Navigation Section */}
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {sideBarOptions.map((item, index) => {
                const isActive = path === item.link; // exact match
                return (
                  <SidebarMenuItem key={index}>
                    <SidebarMenuButton asChild >
                      <Link 
                        href={item.link}
                        className={`flex items-center space-x-4 p-3 rounded-md transition-colors 
                          ${isActive
                            ? "bg-blue-200 text-blue-700 dark:bg-blue-800 dark:text-white"
                            : "text-muted-foreground hover:bg-accent hover:text-accent-foreground"
                          }`}
                      >
                        <item.icon className="h-6 w-6" />
                        <span className="font-medium text-[16px]">
                          {item.title}
                        </span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                );
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter />
    </Sidebar>
  );
};

export default AppSidebar;
