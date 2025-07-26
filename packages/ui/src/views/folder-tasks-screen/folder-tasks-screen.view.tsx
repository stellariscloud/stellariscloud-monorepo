import type { ServerTasksApiListTasksRequest } from '@stellariscloud/types'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  cn,
  DataTable,
} from '@stellariscloud/ui-toolkit'
import type { PaginationState, SortingState } from '@tanstack/react-table'
import { CircleCheck, CircleX, Clock10Icon, Play } from 'lucide-react'
import React from 'react'

import { useFolderContext } from '@/src/pages/folders/folder.context'
import { $api } from '@/src/services/api'

import { folderTasksTableColumns } from './folder-tasks-table-columns'

const FILTER_OPTIONS = {
  status: {
    label: 'Status',
    options: [
      { value: 'WAITING', label: 'Waiting', icon: Clock10Icon },
      { value: 'RUNNING', label: 'Running', icon: Play },
      { value: 'COMPLETE', label: 'Complete', icon: CircleCheck },
      { value: 'FAILED', label: 'Failed', icon: CircleX },
    ],
  },
}

export function FolderTasksScreen() {
  const { folderId, folder } = useFolderContext()

  const [filters, setFilters] = React.useState<Record<string, string[]>>({})

  const tempHandleNewFilters = (newFilters: Record<string, string[]>) => {
    console.log('new filters', newFilters)
    setFilters(newFilters)
  }

  const [sorting, setSorting] = React.useState<SortingState>([])
  const [pagination, setPagination] = React.useState<PaginationState>({
    pageIndex: 0,
    pageSize: 10,
  })

  const searchFilterValue =
    'search' in filters ? filters['search'][0] : undefined
  const statusFilterValue = filters['status'] ?? []

  const listFolderTasksQuery = $api.useQuery(
    'get',
    '/api/v1/folders/{folderId}/tasks',
    {
      params: {
        path: { folderId },
        query: {
          limit: pagination.pageSize,
          offset: pagination.pageSize * pagination.pageIndex,
          sort: sorting[0]
            ? (`${sorting[0].id}-${sorting[0].desc ? 'desc' : 'asc'}` as ServerTasksApiListTasksRequest['sort'])
            : undefined,
          search:
            searchFilterValue === 'string' ? searchFilterValue : undefined,
          includeComplete: statusFilterValue.includes('COMPLETE')
            ? 'true'
            : undefined,
          includeFailed: statusFilterValue.includes('FAILED')
            ? 'true'
            : undefined,
          includeRunning: statusFilterValue.includes('RUNNING')
            ? 'true'
            : undefined,
          includeWaiting: statusFilterValue.includes('WAITING')
            ? 'true'
            : undefined,
        },
      },
    },
    { enabled: !!folderId },
  )

  return (
    <div className={cn('flex h-full flex-1 flex-col items-center')}>
      <div className="container flex flex-1 flex-col">
        <Card className="border-0 bg-transparent">
          <CardHeader className="p-0 pb-4">
            <CardTitle>Folder Tasks</CardTitle>
            <CardDescription>Folder: {folder?.name}</CardDescription>
          </CardHeader>
          <CardContent className="p-0">
            <DataTable
              enableSearch={true}
              searchColumn={'taskKey'}
              filters={filters}
              onColumnFiltersChange={tempHandleNewFilters}
              rowCount={listFolderTasksQuery.data?.meta.totalCount}
              data={listFolderTasksQuery.data?.result ?? []}
              columns={folderTasksTableColumns}
              onPaginationChange={setPagination}
              onSortingChange={setSorting}
              filterOptions={FILTER_OPTIONS}
            />
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
