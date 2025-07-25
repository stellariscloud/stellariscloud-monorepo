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

export function FolderTasksScreen() {
  const { folderId, folder } = useFolderContext()
  const [filters, setFilters] = React.useState<
    { id: string; value: unknown }[]
  >([])

  const [sorting, setSorting] = React.useState<SortingState>([])
  const [pagination, setPagination] = React.useState<PaginationState>({
    pageIndex: 0,
    pageSize: 10,
  })

  const searchFilter = filters.find((f) => f.id === 'taskKey')
  const statusFilterValue = filters.find((f) => f.id === 'status')?.value ?? []

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
          ...(typeof searchFilter?.value === 'string'
            ? {
                search: searchFilter.value,
              }
            : {}),
          ...((statusFilterValue as string[]).includes('COMPLETE')
            ? { includeComplete: 'true' }
            : {}),
          ...((statusFilterValue as string[]).includes('FAILED')
            ? { includeFailed: 'true' }
            : {}),
          ...((statusFilterValue as string[]).includes('RUNNING')
            ? { includeRunning: 'true' }
            : {}),
          ...((statusFilterValue as string[]).includes('WAITING')
            ? { includeWaiting: 'true' }
            : {}),
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
              onColumnFiltersChange={setFilters}
              rowCount={listFolderTasksQuery.data?.meta.totalCount}
              data={listFolderTasksQuery.data?.result ?? []}
              columns={folderTasksTableColumns}
              onPaginationChange={setPagination}
              onSortingChange={setSorting}
              filterOptions={{
                status: {
                  label: 'Status',
                  options: [
                    { value: 'WAITING', label: 'Waiting', icon: Clock10Icon },
                    { value: 'RUNNING', label: 'Running', icon: Play },
                    { value: 'COMPLETE', label: 'Complete', icon: CircleCheck },
                    { value: 'FAILED', label: 'Failed', icon: CircleX },
                  ],
                },
              }}
            />
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
