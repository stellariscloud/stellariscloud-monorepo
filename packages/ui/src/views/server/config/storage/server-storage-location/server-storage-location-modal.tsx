'use client'

import type { ServerStorageLocationInputDTO } from '@stellariscloud/api-client'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@stellariscloud/ui-toolkit'
import React from 'react'

import { ServerStorageLocationForm } from './server-storage-location-form/server-storage-location-form.component'

const ServerStorageLocationModal = ({
  modalData,
  setModalData,
  onSubmit,
}: {
  modalData: { open: boolean }
  setModalData: (modalData: { open: boolean }) => void
  onSubmit: (values: ServerStorageLocationInputDTO) => Promise<void>
}) => {
  const { open } = modalData

  return (
    <Dialog
      open={open}
      onOpenChange={(_open) => {
        setModalData({ ...modalData, open: _open })
      }}
    >
      <DialogContent
        className="top-0 mt-[50%] rounded-none border-0 sm:top-1/2 sm:mt-0 [&_svg]:size-6"
        aria-describedby={undefined}
      >
        <DialogHeader className="text-left">
          <DialogTitle>Set the server storage location.</DialogTitle>
          <DialogDescription>
            An S3 location where your server can store server level data, like
            app assets and payloads.
          </DialogDescription>
        </DialogHeader>
        <div className="w-full">
          <ServerStorageLocationForm
            onCancel={() => setModalData({ open: false })}
            onSubmit={async (serverStorageLocation) =>
              onSubmit(serverStorageLocation)
            }
          />
        </div>
      </DialogContent>
    </Dialog>
  )
}

export { ServerStorageLocationModal }
