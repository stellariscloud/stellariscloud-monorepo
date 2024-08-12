import {
  ChevronRightIcon,
  UserPlusIcon,
  UsersIcon,
} from '@heroicons/react/24/outline'
import type { UserDTO } from '@stellariscloud/api-client'
import clsx from 'clsx'
import React from 'react'

import { Avatar } from '../../../../design-system/avatar'
import { Button } from '../../../../design-system/button/button'
import { apiClient } from '../../../../services/api'
import { StackedList } from '../../../../design-system/stacked-list/stacked-list'
import { PageHeading } from '../../../../design-system/page-heading/page-heading'
import { ServerUserCreatePanel } from '../server-user-create-panel/server-user-create-panel.view'
import { Badge } from '../../../../design-system/badge/badge'
import Link from 'next/link'

export function ServerUsersScreen() {
  const [addingUser, setAddingUser] = React.useState(false)
  const [users, setUsers] =
    React.useState<(UserDTO & { permissions: { label: string }[] })[]>()
  React.useEffect(() => {
    void apiClient.usersApi
      .listUsers()
      .then((response) =>
        setUsers(response.data.result.map((r) => ({ ...r, permissions: [] }))),
      )
  }, [])
  return (
    <div
      className={clsx(
        'p-4 items-center flex flex-1 flex-col h-full overflow-x-hidden overflow-y-auto',
      )}
    >
      <div className="container flex-1 flex flex-col">
        <PageHeading
          titleIcon={UsersIcon}
          title={'Users'}
          subtitle="Create and manage users on this server."
        />
        {users && (
          <div className="inline-block min-w-full py-2 align-middle">
            <StackedList
              items={users.map((u, i) => (
                <Link
                  href={`/server/users/${u.id}`}
                  className="w-full p-4 py-2"
                >
                  <div className="flex min-w-0 gap-x-4 items-center">
                    <Avatar
                      uniqueKey={u.id}
                      size="sm"
                      className="bg-indigo-100"
                    />
                    <div className="min-w-0 flex-auto">
                      <p className="text-sm font-semibold leading-6 text-gray-900 dark:text-white">
                        {u.username} - {u.id}
                      </p>
                      <div className="mt-1 flex items-center gap-x-2 text-xs leading-5 text-gray-500 dark:text-gray-100">
                        <p className="whitespace-nowrap">{u.email}</p>
                        <svg
                          viewBox="0 0 2 2"
                          className="h-0.5 w-0.5 fill-current"
                        >
                          <circle r={1} cx={1} cy={1} />
                        </svg>
                        {u.isAdmin && (
                          <>
                            <p className="truncate">
                              <Badge style="warn">admin</Badge>
                            </p>
                            <svg
                              viewBox="0 0 2 2"
                              className="h-0.5 w-0.5 fill-current"
                            >
                              <circle r={1} cx={1} cy={1} />
                            </svg>
                          </>
                        )}
                        <p className="truncate">Created {u.createdAt}</p>
                      </div>
                    </div>
                    <div className="ml-auto">
                      <Button key={i} link icon={ChevronRightIcon} />
                    </div>
                  </div>
                </Link>
              ))}
            />
            {addingUser ? (
              <div className="pt-10">
                <PageHeading title={'Create User'} titleIcon={UserPlusIcon} />
                <ServerUserCreatePanel
                  onCancel={() => void setAddingUser(false)}
                />
              </div>
            ) : (
              <div className="pt-4">
                <Button onClick={() => setAddingUser(true)}>Add User</Button>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  )
}
