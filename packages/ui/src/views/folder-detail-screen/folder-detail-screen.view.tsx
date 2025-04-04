import {
  ArrowPathIcon,
  ArrowUpOnSquareIcon,
  TrashIcon,
} from '@heroicons/react/24/outline'
import type { FolderObjectDTO } from '@stellariscloud/api-client'
import { FolderPermissionEnum, FolderPushMessage } from '@stellariscloud/types'
import {
  cn,
  DataTable,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@stellariscloud/ui-toolkit'
import type {
  ColumnFiltersState,
  PaginationState,
  SortingState,
} from '@tanstack/table-core'
import { Ellipsis, Folder } from 'lucide-react'
import React from 'react'
import { useNavigate, useParams, useSearchParams } from 'react-router-dom'

import type { ForgetFolderModalData } from '../../components/confirm-forget-folder-modal/confirm-forget-folder-modal'
import { ForgetFolderModal } from '../../components/confirm-forget-folder-modal/confirm-forget-folder-modal'
import {
  ReindexFolderModal,
  type ReindexFolderModalData,
} from '../../components/reindex-folder-modal/reindex-folder-modal'
import {
  UploadModal,
  type UploadModalData,
} from '../../components/upload-modal/upload-modal'
import { useLocalFileCacheContext } from '../../contexts/local-file-cache.context'
import { EmptyState } from '../../design-system/empty-state/empty-state'
import { useFolderContext } from '../../pages/folders/folder.context'
import { apiClient, foldersApiHooks } from '../../services/api'
import { FolderSidebar } from '../folder-sidebar/folder-sidebar.view'
import { folderObjectsTableColumns } from './folder-objects-table-columns'

export const FolderDetailScreen = () => {
  const navigate = useNavigate()
  // const query = useQuery()
  const [searchParams, setSearchParams] = useSearchParams()

  const params = useParams()
  const [folderId, focusedObjectKeyFromParams] = params['*']?.split('/') ?? []
  // const [queryParams] = useSearchParams()
  const [filters, setFilters] = React.useState<
    { id: string; value: unknown }[]
  >(
    searchParams.get('search')
      ? [{ id: 'search', value: searchParams.get('search') }]
      : [],
  )
  const searchFilter = filters.find((f) => f.id === 'objectKey')
  const [sidebarOpen, _setSidebarOpen] = React.useState(true)
  const { uploadFile, uploadingProgress } = useLocalFileCacheContext()

  const [uploadModalData, setUploadModalData] = React.useState<UploadModalData>(
    {
      isOpen: false,
      uploadingProgress,
    },
  )
  const [reindexFolderModalData, setReindexFolderModalData] =
    React.useState<ReindexFolderModalData>({
      isOpen: false,
    })
  const [
    forgetFolderConfirmationModelData,
    setForgetFolderConfirmationModelData,
  ] = React.useState<ForgetFolderModalData>({
    isOpen: false,
  })
  const [_sorting, setSorting] = React.useState<SortingState>([])
  const pageFromUrl = searchParams.get('page')
  const [pagination, setPagination] = React.useState<PaginationState>({
    pageIndex: pageFromUrl ? parseInt(pageFromUrl, 10) - 1 : 0,
    pageSize: 10,
  })

  const listFolderObjectsQuery = foldersApiHooks.useListFolderObjects({
    folderId,
    limit: pagination.pageSize,
    offset: pagination.pageIndex * pagination.pageSize,
    ...(searchFilter?.value ? { search: searchFilter.value as string } : {}),
    // sort: sorting[0].id,
  })

  const messageHandler = React.useCallback(
    (name: FolderPushMessage, payload: unknown) => {
      // console.log('folder socker messageHandler message:', { name, payload })
      if (
        [
          FolderPushMessage.OBJECTS_ADDED,
          FolderPushMessage.OBJECTS_REMOVED,
          FolderPushMessage.OBJECT_ADDED,
          FolderPushMessage.OBJECT_REMOVED,
          FolderPushMessage.OBJECT_UPDATED,
        ].includes(name)
      ) {
        void listFolderObjectsQuery.refetch()
      } else if (FolderPushMessage.OBJECT_UPDATED === name) {
        const _folderObject = payload as FolderObjectDTO
        void listFolderObjectsQuery.refetch()
      }
    },
    [listFolderObjectsQuery],
  )
  const folderContext = useFolderContext(messageHandler)

  const startOrContinueFolderReindex = React.useCallback(
    (_t?: string) => {
      if (folderContext.folderMetadata) {
        void apiClient.foldersApi.reindexFolder({
          folderId: folderContext.folderId,
        })
      }
    },
    [folderContext.folderId, folderContext.folderMetadata],
  )

  const handleForgetFolder = React.useCallback(async () => {
    setForgetFolderConfirmationModelData({ isOpen: false })
    await apiClient.foldersApi
      .deleteFolder({ folderId: folderContext.folderId })
      .then(() => navigate('/folders'))
  }, [folderContext.folderId, navigate])

  // eslint-disable-next-line @typescript-eslint/require-await
  const handleReindexFolder = React.useCallback(async () => {
    if (!reindexFolderModalData.isOpen) {
      setReindexFolderModalData({ isOpen: true })
    } else {
      startOrContinueFolderReindex(
        folderContext.folderMetadata?.indexingJobContext
          ?.indexingContinuationKey,
      )
      setReindexFolderModalData({ isOpen: false })
    }
  }, [
    startOrContinueFolderReindex,
    reindexFolderModalData,
    folderContext.folderMetadata?.indexingJobContext?.indexingContinuationKey,
  ])

  const handlePaginationChange = React.useCallback(
    (newPagination: PaginationState) => {
      setPagination(newPagination)
      setSearchParams({
        ...searchParams,
        page: `${newPagination.pageIndex + 1}`,
      })
    },
    [searchParams, setSearchParams],
  )

  const handleFiltersChange = React.useCallback(
    (newFilters: ColumnFiltersState) => {
      setFilters(newFilters)
      setSearchParams({
        ...searchParams,
        ...('search' in newFilters ? { search: newFilters.search } : {}),
      })
      const newSearchParams = {}

      // newSearchParams[]
      setSearchParams(newSearchParams)
    },
    [setSearchParams, searchParams],
  )

  return (
    <>
      {uploadModalData.isOpen && (
        <UploadModal
          onUpload={(file: File) =>
            uploadFile(folderContext.folderId, file.name, file)
          }
          modalData={uploadModalData}
          setModalData={setUploadModalData}
        />
      )}
      {forgetFolderConfirmationModelData.isOpen && (
        <ForgetFolderModal
          onConfirm={handleForgetFolder}
          modalData={forgetFolderConfirmationModelData}
          setModalData={setForgetFolderConfirmationModelData}
        />
      )}
      {reindexFolderModalData.isOpen && (
        <ReindexFolderModal
          modalData={reindexFolderModalData}
          setModalData={setReindexFolderModalData}
          onSubmit={handleReindexFolder}
        />
      )}
      <div className="relative flex size-full flex-1 justify-around">
        <div
          className={cn(
            'z-10 flex size-full flex-1',
            'lg:container',
            focusedObjectKeyFromParams && 'opacity-0',
          )}
        >
          <div className="flex size-full flex-1 flex-col">
            <div className="flex flex-1 overflow-hidden">
              <div className="flex flex-1 overflow-hidden">
                <div className="h-full flex-1 overflow-hidden pr-2">
                  {folderContext.folderMetadata?.totalCount === 0 ? (
                    <div className="flex size-full flex-col items-center justify-around">
                      <div className="min-w-[30rem] max-w-[30rem]">
                        <EmptyState
                          icon={Folder}
                          text={'No objects. Try reindexing the folder.'}
                          onButtonPress={() => void handleReindexFolder()}
                          buttonText="Reindex folder"
                        />
                      </div>
                    </div>
                  ) : (
                    <DataTable
                      fullHeight={true}
                      cellPadding={'p-1.5'}
                      hideHeader={true}
                      title={folderContext.folder?.name}
                      actionComponent={
                        <DropdownMenu>
                          <DropdownMenuTrigger className="m-1 rounded-full">
                            <div className="flex size-8 items-center justify-around rounded-full border">
                              <Ellipsis className="size-5 shrink-0" />
                            </div>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent>
                            {folderContext.folderPermissions?.includes(
                              FolderPermissionEnum.OBJECT_EDIT,
                            ) && (
                              <DropdownMenuItem
                                onClick={() =>
                                  setUploadModalData({
                                    ...uploadModalData,
                                    isOpen: true,
                                  })
                                }
                                className="gap-2"
                              >
                                <ArrowUpOnSquareIcon className="size-5" />
                                Upload
                              </DropdownMenuItem>
                            )}
                            {folderContext.folderPermissions?.includes(
                              FolderPermissionEnum.FOLDER_REINDEX,
                            ) && (
                              <DropdownMenuItem
                                onClick={() =>
                                  setReindexFolderModalData({
                                    ...reindexFolderModalData,
                                    isOpen: true,
                                  })
                                }
                                className="gap-2"
                              >
                                <ArrowPathIcon className="size-5" />
                                Reindex
                              </DropdownMenuItem>
                            )}
                            {folderContext.folderPermissions?.includes(
                              FolderPermissionEnum.FOLDER_FORGET,
                            ) && (
                              <DropdownMenuItem
                                onClick={() =>
                                  setUploadModalData({
                                    ...uploadModalData,
                                    isOpen: true,
                                  })
                                }
                                className="gap-2"
                              >
                                <TrashIcon className="size-5" />
                                Delete
                              </DropdownMenuItem>
                            )}
                          </DropdownMenuContent>
                        </DropdownMenu>
                      }
                      enableSearch={true}
                      searchColumn={'main'}
                      onColumnFiltersChange={handleFiltersChange}
                      rowCount={folderContext.folderMetadata?.totalCount ?? 0}
                      data={listFolderObjectsQuery.data?.result ?? []}
                      columns={folderObjectsTableColumns}
                      onPaginationChange={handlePaginationChange}
                      pageIndex={pagination.pageIndex}
                      onSortingChange={(updater) => {
                        setSorting((old) =>
                          updater instanceof Function ? updater(old) : updater,
                        )
                      }}
                    />
                  )}
                </div>
              </div>
              {sidebarOpen &&
                folderContext.folder &&
                folderContext.folderPermissions && (
                  <div className="xs:w-full md:w-[1/2] lg:w-[1/2] xl:w-2/5 2xl:w-[35%] 2xl:max-w-[35rem]">
                    <FolderSidebar
                      folderMetadata={folderContext.folderMetadata}
                      folderAndPermission={{
                        folder: folderContext.folder,
                        permissions: folderContext.folderPermissions,
                      }}
                    />
                  </div>
                )}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
