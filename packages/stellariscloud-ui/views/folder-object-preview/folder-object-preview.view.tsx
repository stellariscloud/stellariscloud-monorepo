import type { FolderObjectData } from '@stellariscloud/api-client'
import { Icon } from '@stellariscloud/design-system'
import {
  MediaType,
  mediaTypeFromExtension,
  mediaTypeFromMimeType,
} from '@stellariscloud/utils'
import Image from 'next/image'
import React from 'react'

import { VideoPlayer } from '../../components/video-player/video-player'
import { useLocalFileCacheContext } from '../../contexts/local-file-cache.context'
import { foldersApi } from '../../services/api'
import { iconForMimeType } from '../../utils/file'

export const FolderObjectPreview = ({
  folderId,
  objectKey,
  previewObjectKey,
  displayMode = 'object-contain',
  objectMetadata,
}: {
  folderId: string
  objectKey: string
  objectMetadata?: FolderObjectData
  previewObjectKey: string | undefined
  displayMode?: string
}) => {
  const [folderObject, setFolderObject] = React.useState<
    FolderObjectData | undefined
  >(objectMetadata)
  const fileName = objectKey.split('/').at(-1)
  const [file, setFile] = React.useState<
    | {
        previewObjectKey: string
        dataURL: string
        type: string
      }
    | false
  >()
  const { getData } = useLocalFileCacheContext()

  React.useEffect(() => {
    if (folderId && objectKey && !folderObject) {
      void foldersApi
        .getFolderObject({ folderId, objectKey })
        .then((response) => {
          setFolderObject(response.data)
        })
    }
  }, [folderId, objectKey, folderObject])

  React.useEffect(() => {
    if (!file && previewObjectKey) {
      void getData(folderId, previewObjectKey).then((f) => {
        if (f) {
          setFile({ previewObjectKey, dataURL: f.dataURL, type: f.type })
        }
      })
    }
  }, [file, folderId, getData, previewObjectKey])

  if (file === undefined) {
    return <></>
  }

  const mimeType = folderObject?.contentMetadata?.mimeType ?? ''
  const dataURL = file === false ? undefined : file.dataURL
  const fileType = folderObject?.contentMetadata?.mimeType
    ? mediaTypeFromMimeType(folderObject.contentMetadata.mimeType)
    : mediaTypeFromExtension(folderObject?.objectKey.split('.').at(-1) ?? '')

  return dataURL && fileType === MediaType.Image ? (
    <div className="relative w-full h-full">
      <Image
        className={displayMode}
        fill
        alt={fileName ?? objectKey}
        src={dataURL}
      />
    </div>
  ) : dataURL && fileType === MediaType.Video ? (
    <div className="flex justify-center">
      <VideoPlayer
        className="object-cover"
        width="100%"
        height="100%"
        controls
        src={dataURL}
        grayscale={false}
      />
    </div>
  ) : (
    <div className="flex flex-col w-full h-full items-center justify-around bg-black text-white">
      <Icon size={'xl'} icon={iconForMimeType(mimeType)} />
    </div>
  )
}
