import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/24/outline'
import clsx from 'clsx'
import React from 'react'

import type { IconProps } from '../icon'
import { Icon } from '../icon'

interface Item {
  name: string
  icon?: IconProps['icon']
  onClick?: React.ButtonHTMLAttributes<HTMLButtonElement>['onClick']
}

export function ButtonDropdown({
  items,
  label,
  labelIcon,
}: {
  items: Item[]
  label: string
  labelIcon?: IconProps['icon']
}) {
  return (
    <div className="inline-flex rounded-md h-content">
      <button
        type="button"
        className="relative h-full inline-flex items-center rounded-l-md px-3 py-2 text-sm font-semibold text-gray-900 dark:text-gray-300 ring-1 ring-inset ring-gray-300 dark:ring-gray-500 hover:bg-gray-50 dark:hover:bg-gray-50/5 focus:z-10 shadow-sm"
      >
        <div className="flex gap-2">
          {labelIcon && (
            <Icon
              icon={labelIcon}
              size="sm"
              className="text-gray-800 dark:text-gray-800"
            />
          )}
          {label}
        </div>
      </button>
      <Menu as="div" className="relative -ml-px block">
        <Menu.Button className="relative inline-flex h-full items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 dark:ring-gray-500 hover:bg-gray-50 dark:hover:bg-gray-50/5 focus:z-10">
          <span className="sr-only">Open options</span>
          <ChevronDownIcon className="h-full w-5" aria-hidden="true" />
        </Menu.Button>
        <Transition
          as={React.Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute right-0 z-10 -mr-1 mt-2 w-content origin-top-right bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div className="py-1">
              {items.map((item) => (
                <Menu.Item key={item.name}>
                  {({ active }) => (
                    <button
                      onClick={(e: React.MouseEvent) => {
                        // e.preventDefault()
                        if (item.onClick) {
                          item.onClick(e as React.MouseEvent<HTMLButtonElement>)
                        }
                      }}
                      className={clsx(
                        'w-full',
                        active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                        'w-full block px-4 py-2 text-sm',
                      )}
                    >
                      <div className="flex gap-2 whitespace-pre">
                        {item.icon && (
                          <Icon
                            icon={item.icon}
                            size="sm"
                            className="text-gray-800 dark:text-gray-800"
                          />
                        )}
                        {item.name}
                      </div>
                    </button>
                  )}
                </Menu.Item>
              ))}
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  )
}
