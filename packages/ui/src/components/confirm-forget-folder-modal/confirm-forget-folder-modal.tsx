'use client'

import {
  Button,
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@stellariscloud/ui-toolkit'

export interface ForgetFolderModalData {
  isOpen: boolean
}

const ForgetFolderModal = ({
  modalData,
  setModalData,
  onConfirm,
}: {
  modalData: ForgetFolderModalData
  setModalData: (modalData: ForgetFolderModalData) => void
  onConfirm: () => Promise<void>
}) => {
  return (
    <Dialog
      open={!!modalData.isOpen}
      onOpenChange={(isNowOpen) =>
        setModalData({ ...modalData, isOpen: isNowOpen })
      }
    >
      <DialogContent
        className="top-0 mt-[50%] rounded-none border-0 sm:top-1/2 sm:mt-0 [&_svg]:size-6"
        aria-describedby={undefined}
      >
        <DialogHeader className="text-left">
          <DialogTitle>Remove the folder</DialogTitle>
        </DialogHeader>
        <DialogDescription>
          This will remove all reference to the folder, but leave the underlying
          data intact.
        </DialogDescription>
        <DialogFooter>
          <div className="flex gap-4">
            <Button
              variant={'link'}
              onClick={() => setModalData({ isOpen: false })}
            >
              Cancel
            </Button>
            <Button variant={'destructive'} onClick={() => void onConfirm()}>
              Forget
            </Button>
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

export { ForgetFolderModal }
