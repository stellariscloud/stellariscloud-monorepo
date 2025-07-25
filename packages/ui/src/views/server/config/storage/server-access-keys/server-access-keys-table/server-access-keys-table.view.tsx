import { cn, DataTable } from '@stellariscloud/ui-toolkit'
import type { PaginationState, SortingState } from '@tanstack/react-table'
import React from 'react'

import { $api } from '@/src/services/api'

import { configureServerAccessKeysTableColumns } from './server-access-keys-table-columns'

export function ServerAccessKeysTable() {
  const [sorting, setSorting] = React.useState<SortingState>([])
  const [pagination, setPagination] = React.useState<PaginationState>({
    pageIndex: 0,
    pageSize: 10,
  })

  const { data: accessKeys, refetch } = $api.useQuery(
    'get',
    '/api/v1/server/access-keys',
    {
      queries: {
        limit: pagination.pageSize,
        offset: pagination.pageSize * pagination.pageIndex,
        sort: sorting[0]
          ? `${sorting[0].id}-${sorting[0].desc ? 'desc' : 'asc'}`
          : undefined,
      },
    },
  )

  return (
    <div className={cn('flex h-full flex-1 flex-col items-center')}>
      <DataTable
        rowCount={accessKeys?.meta.totalCount}
        data={accessKeys?.result ?? []}
        columns={configureServerAccessKeysTableColumns(() => {
          void refetch()
        })}
        onPaginationChange={setPagination}
        onSortingChange={setSorting}
      />
    </div>
  )
}
