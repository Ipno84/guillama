import { createMemoryRouter, type RouteObject } from 'react-router'

//---LAYOUTS---
import { PageLayout } from '@renderer/layouts/page'
import { MainLayout } from '@renderer/layouts/main'

//---PAGES---
import { Dashboard } from '@renderer/pages/dashboard'
import { RemoteCatalog } from '@renderer/pages/remote-catalog'
import { LocalModels } from '@renderer/pages/local-models'
import { NotFound } from '@renderer/pages/not-found'
import { ModelDetail } from '@renderer/pages/model'
import { Operations } from '@renderer/pages/operations'
import { Settings } from './pages/settings'

const routes: RouteObject[] = [
  {
    element: <PageLayout />,
    children: [
      {
        element: <MainLayout />,
        children: [
          { index: true, element: <Dashboard /> },
          {
            path: '/remote-catalog',
            element: <RemoteCatalog />
          },
          {
            path: '/local-models',
            element: <LocalModels />
          },
          {
            path: '/model/:slug',
            element: <ModelDetail />
          },
          {
            path: '/operations',
            element: <Operations />
          },
          {
            path: '/settings',
            element: <Settings />
          }
        ]
      }
    ]
  },
  {
    path: '*',
    element: <NotFound />
  }
]

export const router = createMemoryRouter(routes)
