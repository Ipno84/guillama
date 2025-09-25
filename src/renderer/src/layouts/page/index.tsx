import { SidebarProvider } from '@renderer/components/sidebar'
import { AppSidebar } from '@renderer/features/app-sidebar'
import React from 'react'
import { Outlet } from 'react-router'

export const PageLayout: React.FC = () => {
  return (
    <>
      <SidebarProvider defaultOpen={false}>
        <AppSidebar />
        <main className="w-full">
          <Outlet />
        </main>
      </SidebarProvider>
    </>
  )
}
