'use client'

import { MoonIcon, SunIcon } from '@radix-ui/react-icons'
import {
  Button,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@stellariscloud/ui-toolkit'
import React from 'react'
import useLocalStorageState from 'use-local-storage-state'

export function useTheme() {
  const [theme, setTheme] = useLocalStorageState('theme', {
    defaultValue: 'light',
  })

  React.useEffect(() => {
    document.documentElement.classList.remove('light', 'dark', 'system')
    document.documentElement.classList.add(theme)
  }, [theme])

  return { theme, setTheme }
}
export function ModeToggle() {
  const { setTheme } = useTheme()

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="sm">
          <SunIcon className="size-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <MoonIcon className="absolute size-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => setTheme('light')}>
          Light
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme('dark')}>
          Dark
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme('system')}>
          System
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
