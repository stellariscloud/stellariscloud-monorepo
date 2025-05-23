import type {
  UserDTO,
  UsersApiListUsersRequest,
} from '@stellariscloud/api-client'
import { cn, DataTable } from '@stellariscloud/ui-toolkit'
import type { PaginationState, SortingState } from '@tanstack/react-table'
import React from 'react'

import { apiClient } from '../../../../services/api'
import { ServerUserCreatePanel } from '../server-user-create-panel/server-user-create-panel.view'
import { serverUsersTableColumns } from './server-users-table-columns'

export function ServerUsersScreen() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [addingUser, setAddingUser] = React.useState(false)
  const [users, setUsers] = React.useState<{
    result: (UserDTO & { permissions: { label: string }[] })[]
    meta: { totalCount: number }
  }>()

  const [filters, setFilters] = React.useState<
    { id: string; value: unknown }[]
  >([])

  const [sorting, setSorting] = React.useState<SortingState>([])
  const [pagination, setPagination] = React.useState<PaginationState>({
    pageIndex: 0,
    pageSize: 10,
  })
  const searchFilter = filters.find((f) => f.id === '__HIDDEN__')

  React.useEffect(() => {
    void apiClient.usersApi
      .listUsers({
        limit: pagination.pageSize,
        offset: pagination.pageSize * pagination.pageIndex,
        ...(sorting[0]
          ? {
              sort: `${sorting[0].id}-${sorting[0].desc ? 'desc' : 'asc'}` as UsersApiListUsersRequest['sort'],
            }
          : {}),
        ...(typeof searchFilter?.value === 'string'
          ? {
              search: searchFilter.value,
            }
          : {}),
      })
      .then((response) =>
        setUsers({
          result: response.data.result.map((r) => ({ ...r, permissions: [] })),
          meta: response.data.meta,
        }),
      )
  }, [filters, sorting, pagination, searchFilter?.value])

  return (
    <div className={cn('flex h-full flex-1 flex-col items-center')}>
      <DataTable
        title="Users"
        enableSearch={true}
        searchColumn="__HIDDEN__"
        onColumnFiltersChange={(updater) => {
          setFilters((old) =>
            updater instanceof Function ? updater(old) : updater,
          )
        }}
        rowCount={users?.meta.totalCount}
        data={users?.result ?? []}
        columns={serverUsersTableColumns}
        onPaginationChange={(updater) => {
          setPagination((old) =>
            updater instanceof Function ? updater(old) : updater,
          )
        }}
        onSortingChange={(updater) => {
          setSorting((old) =>
            updater instanceof Function ? updater(old) : updater,
          )
        }}
      />
    </div>
  )
}
