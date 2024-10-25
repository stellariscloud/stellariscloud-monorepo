import { Button } from '@stellariscloud/ui-toolkit'
import clsx from 'clsx'
import React from 'react'

export function FolderTaskDetailScreen() {
  return (
    <div className={clsx('items-center flex flex-1 flex-col h-full')}>
      <div className="container flex-1 flex flex-col">
        <div className="inline-block min-w-full py-2 align-middle">
          <div className="py-4">
            <Button>Detail screen</Button>
          </div>
        </div>
      </div>
    </div>
  )
}
