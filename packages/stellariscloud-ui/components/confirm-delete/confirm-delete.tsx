import type { FolderObjectData } from '@stellariscloud/api-client'
import { Button, Heading } from '@stellariscloud/design-system'
import clsx from 'clsx'
import React from 'react'

export const ConfirmDelete = ({
  onConfirm,
  onCancel,
  folderObject,
}: {
  onConfirm: () => void
  onCancel: () => void
  folderObject: FolderObjectData
}) => {
  return (
    <div
      className={clsx(
        'flex gap-4 justify-between rounded-md p-4 bg-secondary hover:bg-secondary-focus text-white min-w-[24rem] min-h-[14rem]',
      )}
    >
      <div className="flex flex-col gap-4 p-6">
        <Heading level={4}>This will permanently delete the object</Heading>
        <div>
          <em>{folderObject.objectKey}</em>
        </div>
        <div className="flex gap-4">
          <Button
            size="lg"
            variant="primary"
            preventDefaultOnClick
            onClick={onConfirm}
          >
            Delete
          </Button>
          <Button
            size="lg"
            variant={'ghost'}
            preventDefaultOnClick
            onClick={onCancel}
          >
            Cancel
          </Button>
        </div>
      </div>
    </div>
  )
}
