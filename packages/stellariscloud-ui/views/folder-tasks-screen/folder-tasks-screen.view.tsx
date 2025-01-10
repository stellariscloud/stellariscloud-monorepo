import type {
  ServerTasksApiListTasksRequest,
  TaskDTO,
} from '@stellariscloud/api-client'
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

import { useFolderContext } from '../../contexts/folder.context'
import { apiClient } from '../../services/api'
import { folderTasksTableColumns } from './folder-tasks-table-columns'

export function FolderTasksScreen() {
  const [tasks, setTasks] = React.useState<{
    meta: { totalCount: number }
    result: TaskDTO[]
  }>()
  const { folder } = useFolderContext()
  const [filters, setFilters] = React.useState<
    { id: string; value: unknown }[]
  >([])

  const [sorting, setSorting] = React.useState<SortingState>([])
  const [pagination, setPagination] = React.useState<PaginationState>({
    pageIndex: 0,
    pageSize: 10,
  })

  const searchFilter = filters.find((f) => f.id === 'taskKey')
  const fetchTasks = React.useCallback(() => {
    const statusFilterValue =
      filters.find((f) => f.id === 'status')?.value ?? []
    if (folder?.id) {
      void apiClient.tasksApi
        .listFolderTasks({
          folderId: folder.id,
          limit: pagination.pageSize,
          offset: pagination.pageSize * pagination.pageIndex,
          ...(sorting[0]
            ? {
                sort: `${sorting[0].id}-${sorting[0].desc ? 'desc' : 'asc'}` as ServerTasksApiListTasksRequest['sort'],
              }
            : {}),
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
        })
        .then((resp) => setTasks(resp.data))
    }
  }, [
    filters,
    folder?.id,
    pagination.pageSize,
    pagination.pageIndex,
    sorting,
    searchFilter?.value,
  ])

  React.useEffect(() => {
    if (folder?.id) {
      fetchTasks()
    }
  }, [folder?.id, filters, sorting, pagination, fetchTasks])

  return (
    <div className={cn('items-center flex flex-1 flex-col h-full')}>
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
              onColumnFiltersChange={(updater) => {
                setFilters((old) =>
                  updater instanceof Function ? updater(old) : updater,
                )
              }}
              rowCount={tasks?.meta.totalCount}
              data={tasks?.result ?? []}
              columns={folderTasksTableColumns}
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
