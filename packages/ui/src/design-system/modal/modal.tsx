import { Dialog, Transition } from '@headlessui/react'
import { cn } from '@stellariscloud/ui-toolkit'
import React from 'react'

export function Modal({
  title,
  onClose,
  children,
  disableClose = false,
}: {
  title?: string
  onClose: () => void
  children: React.ReactNode
  disableClose?: boolean
}) {
  const [open, setOpen] = React.useState(true)

  const handleClose = React.useCallback(() => {
    if (!disableClose) {
      setOpen(false)
      onClose()
    }
  }, [setOpen, onClose, disableClose])

  return (
    <Transition.Root show={open} as={React.Fragment}>
      <Dialog
        as="div"
        className="relative z-50"
        onClose={handleClose}
        open={open}
      >
        <Transition.Child
          as={React.Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black/60 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center text-gray-900 sm:items-center sm:p-0 dark:text-white">
            <Transition.Child
              as={React.Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel
                className={cn(
                  'relative overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-sm sm:p-6 dark:bg-gray-900',
                  'min-w-[40rem]',
                )}
              >
                {title && (
                  <Dialog.Title as="h3" className="leading-6">
                    {title}
                  </Dialog.Title>
                )}
                {children}
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  )
}
