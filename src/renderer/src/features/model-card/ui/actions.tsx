import { Button } from '@renderer/components/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger
} from '@renderer/components/dropdown-menu'
import { Ellipsis } from 'lucide-react'
import { ModelCardProps } from '../typings'
import React from 'react'

export const Actions = ({
  actionGroups
}: Pick<ModelCardProps, 'actionGroups'>): React.JSX.Element | null => {
  if (!actionGroups) return null

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost">
          <Ellipsis />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56" align="end">
        {actionGroups.map((actionGroup, index) => {
          return (
            <React.Fragment key={index}>
              <DropdownMenuGroup>
                {actionGroup.label && <DropdownMenuLabel>{actionGroup.label}</DropdownMenuLabel>}
                {actionGroup.actions?.map((action) => {
                  return (
                    <DropdownMenuItem
                      key={action.label}
                      onClick={action.onClick}
                      variant={action.variant}
                    >
                      {action.label}
                      {action.shortcut && (
                        <DropdownMenuShortcut>{action.shortcut}</DropdownMenuShortcut>
                      )}
                    </DropdownMenuItem>
                  )
                }) ?? null}
              </DropdownMenuGroup>
              {index !== actionGroups.length - 1 && <DropdownMenuSeparator />}
            </React.Fragment>
          )
        })}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
