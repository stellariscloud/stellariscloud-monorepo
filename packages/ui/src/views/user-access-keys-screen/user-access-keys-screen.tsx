import type {
  AccessKeyPublicDTO,
  AccessKeysApiListAccessKeysRequest,
} from '@stellariscloud/api-client'
import { DataTable, Separator, TypographyH2 } from '@stellariscloud/ui-toolkit'
import type { PaginationState, SortingState } from '@tanstack/react-table'
import React from 'react'

import { apiClient } from '../../services/api'
import { userAccessKeysTableColumns } from './user-access-keys-table-columns'

export function UserAccessKeysScreen() {
  const [accessKeys, setAccessKeys] = React.useState<{
    result: AccessKeyPublicDTO[]
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

  const fetchAccessKeys = React.useCallback(() => {
    void apiClient.accessKeysApi
      .listAccessKeys({
        limit: pagination.pageSize,
        offset: pagination.pageSize * pagination.pageIndex,
        ...(sorting[0]
          ? {
              sort: `${sorting[0].id}-${sorting[0].desc ? 'desc' : 'asc'}` as AccessKeysApiListAccessKeysRequest['sort'],
            }
          : {}),
      })
      .then((resp) => {
        setAccessKeys(resp.data)
      })
  }, [sorting, pagination])

  React.useEffect(() => {
    fetchAccessKeys()
  }, [sorting, pagination, filters, fetchAccessKeys])

  return (
    <div className="container flex flex-1 flex-col gap-3 self-center">
      <TypographyH2 className="pb-0">Access Keys</TypographyH2>
      <Separator className="mb-3 bg-foreground/10" />

      <DataTable
        onColumnFiltersChange={setFilters}
        rowCount={accessKeys?.meta.totalCount}
        data={accessKeys?.result ?? []}
        columns={userAccessKeysTableColumns}
        onPaginationChange={setPagination}
        onSortingChange={(updater) => {
          setSorting((old) =>
            updater instanceof Function ? updater(old) : updater,
          )
        }}
        // filterOptions={{
        //   status: {
        //     label: 'Status',
        //     options: [
        //       { value: 'WAITING', label: 'Waiting', icon: Clock10Icon },
        //       { value: 'RUNNING', label: 'Running', icon: Play },
        //       { value: 'COMPLETE', label: 'Complete', icon: CircleCheck },
        //       { value: 'FAILED', label: 'Failed', icon: CircleX },
        //     ],
        //   },
        // }}
      />
    </div>
  )
}
