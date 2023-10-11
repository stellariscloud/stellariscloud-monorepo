import type { FolderObjectData } from '@stellariscloud/api-client'
import clsx from 'clsx'
import React from 'react'

import { Button } from '../../design-system/button/button'
import { Heading } from '../../design-system/typography'

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
          <Button size="lg" primary preventDefaultOnClick onClick={onConfirm}>
            Delete
          </Button>
          <Button size="lg" preventDefaultOnClick onClick={onCancel}>
            Cancel
          </Button>
        </div>
      </div>
    </div>
  )
}
