import { MediaType } from '@stellariscloud/types'

import type {
  AudioMediaMimeTypes,
  DocumentMediaMimeTypes,
  ImageMediaMimeTypes,
  VideoMediaMimeTypes,
} from './constants'
import {
  AUDIO_MEDIA_MIME_TYPES,
  DOCUMENT_MEDIA_MIME_TYPES,
  EXTENSION_TO_MIME_TYPE_MAP,
  IMAGE_MEDIA_MIME_TYPES,
  MIME_TYPE_TO_EXTENSION_MAP,
  VIDEO_MEDIA_MIME_TYPES,
} from './constants'

export const mediaTypeFromMimeType = (mimeType: string) => {
  if (IMAGE_MEDIA_MIME_TYPES.includes(mimeType as ImageMediaMimeTypes)) {
    return MediaType.Image
  } else if (VIDEO_MEDIA_MIME_TYPES.includes(mimeType as VideoMediaMimeTypes)) {
    return MediaType.Video
  } else if (AUDIO_MEDIA_MIME_TYPES.includes(mimeType as AudioMediaMimeTypes)) {
    return MediaType.Audio
  } else if (
    DOCUMENT_MEDIA_MIME_TYPES.includes(mimeType as DocumentMediaMimeTypes)
  ) {
    return MediaType.Document
  }
  return MediaType.Unknown
}

export const mediaTypeFromExtension = (extension: string) => {
  const mimeType =
    EXTENSION_TO_MIME_TYPE_MAP[
      extension.toLowerCase() as keyof typeof EXTENSION_TO_MIME_TYPE_MAP
    ]
  // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
  if (!mimeType) {
    return MediaType.Unknown
  }
  if (IMAGE_MEDIA_MIME_TYPES.includes(mimeType as ImageMediaMimeTypes)) {
    return MediaType.Image
  } else if (VIDEO_MEDIA_MIME_TYPES.includes(mimeType as VideoMediaMimeTypes)) {
    return MediaType.Video
  } else if (AUDIO_MEDIA_MIME_TYPES.includes(mimeType as AudioMediaMimeTypes)) {
    return MediaType.Audio
  } else if (
    DOCUMENT_MEDIA_MIME_TYPES.includes(mimeType as DocumentMediaMimeTypes)
  ) {
    return MediaType.Document
  }
  return MediaType.Unknown
}

export const extensionFromMimeType = (mimeType: string): string | undefined => {
  return (MIME_TYPE_TO_EXTENSION_MAP as any)[mimeType]
}
