import {
  BoltIcon,
  Cog8ToothIcon,
  DocumentTextIcon,
  SignalIcon,
} from '@heroicons/react/24/outline'
import clsx from 'clsx'
import React from 'react'

import { Button } from '../../design-system/button/button'

export type ModulesTab = 'config' | 'logs' | 'events' | 'workers'

export function ModulesTabs({
  activeTab,
  onChange,
}: {
  activeTab: string
  onChange: (tab: string) => void
}) {
  const tabs = [
    { name: 'config', label: 'Config', icon: Cog8ToothIcon, href: '/config' },
    {
      name: 'workers',
      label: 'Workers',
      icon: BoltIcon,
    },
    {
      name: 'events',
      label: 'Events',
      icon: SignalIcon,
    },
    {
      name: 'logs',
      label: 'Logs',
      icon: DocumentTextIcon,
    },
  ]
  return (
    <div>
      <div className="sm:hidden">
        <label htmlFor="tabs" className="sr-only">
          Select a tab
        </label>
        {/* Use an "onChange" listener to redirect the user to the selected tab URL. */}
        <select
          id="tabs"
          name="tabs"
          className="block w-full rounded-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500"
          defaultValue={activeTab}
        >
          {tabs.map((tab) => (
            <option key={tab.name}>{tab.label}</option>
          ))}
        </select>
      </div>
      <div className="hidden sm:block">
        <div className="">
          <nav className="-mb-px flex space-x-8" aria-label="Tabs">
            {tabs.map((tab) => (
              <div key={tab.name} className="group">
                <Button
                  onClick={() => onChange(tab.name)}
                  className={clsx(
                    'active',
                    tab.name === activeTab
                      ? 'border-indigo-500 text-indigo-600'
                      : 'border-transparent text-gray-500 dark:text-gray-300 hover:border-gray-300 hover:text-gray-700 group-hover:text-gray-500',
                    'inline-flex items-center border-b-2 py-4 px-1 text-sm font-medium',
                  )}
                  aria-current={tab.name === activeTab ? 'page' : undefined}
                >
                  <tab.icon
                    className={clsx(
                      tab.name === activeTab
                        ? 'text-indigo-500'
                        : 'text-gray-400 dark:text-gray-300 group-hover:text-gray-500',
                      '-ml-0.5 mr-2 h-5 w-5',
                    )}
                    aria-hidden="true"
                  />
                  <span className="">{tab.label}</span>
                </Button>
              </div>
            ))}
          </nav>
        </div>
      </div>
    </div>
  )
}