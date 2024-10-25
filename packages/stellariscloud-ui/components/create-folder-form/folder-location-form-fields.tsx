import React from 'react'
import * as r from 'runtypes'

import { useFormState } from '../../utils/forms'
import { Input, Label } from '@stellariscloud/ui-toolkit'

export interface FolderLocationFormValues {
  name: string
  prefix: string
  bucket: string
  region: string
  description: string
  endpoint: string
  accessKeyId: string
  secretAccessKey: string
}

export const FolderLocationFormFields = ({
  onChange,
  value = {},
  secretAccessKeyObfuscated = false,
}: {
  onChange: (updatedFormValue: {
    valid: boolean
    value: Partial<FolderLocationFormValues>
  }) => void
  value?: Partial<FolderLocationFormValues>
  secretAccessKeyObfuscated?: boolean
}) => {
  const form = useFormState(
    {
      label: { validator: r.String },
      description: { validator: r.String },
      endpoint: { validator: r.String },
      bucket: { validator: r.String },
      prefix: { validator: r.String },
      region: { validator: r.String },
      accessKeyId: { validator: r.String },
      secretAccessKey: { validator: r.String.optional(), defaultValue: '' },
    },
    value,
    onChange,
  )

  return (
    <>
      <div>
        <Label>Name</Label>
        <Input
          value={form.values.label}
          onChange={(e: any) => form.setValue('label', e.target.value)}
        />
      </div>
      <div>
        <Label>Description</Label>
        <Input
          value={form.values.description}
          onChange={(e: any) => form.setValue('description', e.target.value)}
        />
      </div>
      <div>
        <Label>Access Key ID</Label>
        <Input
          value={form.values.accessKeyId}
          onChange={(e: any) => form.setValue('accessKeyId', e.target.value)}
        />
      </div>
      <div>
        <Label>Secret Access Key</Label>
        <Input
          disabled={secretAccessKeyObfuscated}
          value={
            secretAccessKeyObfuscated
              ? form.values.secretAccessKey ??
                '_______________________________________'
              : form.values.secretAccessKey
          }
          type={'password'}
          onChange={(e: any) =>
            form.setValue('secretAccessKey', e.target.value)
          }
        />
      </div>
      <div>
        <Label>Endpoint</Label>
        <Input
          value={form.values.endpoint}
          onChange={(e: any) => form.setValue('endpoint', e.target.value)}
        />
      </div>
      <div>
        <Label>Region</Label>
        <Input
          value={form.values.region}
          onChange={(e: any) => form.setValue('region', e.target.value)}
        />
      </div>
      <div>
        <Label>Bucket</Label>
        <Input
          value={form.values.bucket}
          onChange={(e: any) => form.setValue('bucket', e.target.value)}
        />
      </div>
      <div>
        <Label>Prefix</Label>
        <Input
          value={form.values.prefix}
          onChange={(e: any) => form.setValue('prefix', e.target.value)}
        />
      </div>
    </>
  )
}
