import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar
} from '@renderer/components/sidebar'
import { Settings } from 'lucide-react'
import { Link } from 'react-router'
import { Tooltip, TooltipContent, TooltipTrigger } from '@renderer/components/tooltip'
import { NavItems } from './../model'
import React, { useCallback } from 'react'
import { PanelLeft } from 'lucide-react'

export const AppSidebar = (): React.JSX.Element => {
  const { open, setOpen } = useSidebar()

  const toggleSidebar = useCallback(() => setOpen(!open), [open, setOpen])

  return (
    <Sidebar variant="sidebar" collapsible="icon">
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Ollama Models</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {NavItems.map((NavItem) => (
                <Tooltip key={NavItem.title} defaultOpen={false}>
                  <TooltipTrigger asChild>
                    <SidebarMenuItem>
                      <SidebarMenuButton asChild>
                        <Link to={NavItem.to}>
                          <NavItem.icon />
                          <span>{NavItem.title}</span>
                        </Link>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  </TooltipTrigger>
                  {!open && (
                    <TooltipContent side="right">
                      <p>{NavItem.title}</p>
                    </TooltipContent>
                  )}
                </Tooltip>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <SidebarMenu>
          <Tooltip defaultOpen={false}>
            <TooltipTrigger asChild>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <Link to="/settings">
                    <Settings />
                    Settings
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </TooltipTrigger>
            {!open && (
              <TooltipContent side="right">
                <p>Settings</p>
              </TooltipContent>
            )}
          </Tooltip>
        </SidebarMenu>
        <SidebarMenu>
          <Tooltip defaultOpen={false}>
            <TooltipTrigger asChild>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <button onClick={toggleSidebar}>
                    <PanelLeft />
                    <span>Close Sidebar</span>
                  </button>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </TooltipTrigger>
            {!open && (
              <TooltipContent side="right">
                <p>Open Sidebar</p>
              </TooltipContent>
            )}
          </Tooltip>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  )
}
