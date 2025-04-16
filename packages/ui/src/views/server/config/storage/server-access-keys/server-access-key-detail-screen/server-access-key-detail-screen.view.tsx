import {
  Card,
  CardContent,
  CardHeader,
  cn,
  TypographyH3,
} from '@stellariscloud/ui-toolkit'
import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'

import { AccessKeyAttributeList } from '../../../../../../components/access-key-attribute-list/access-key-attributes-list'
import { AccessKeyRotateForm } from '../../../../../../components/access-key-rotate-form/access-key-rotate-form'
import {
  apiClient,
  serverAccessKeysApiHooks,
} from '../../../../../../services/api'

export function ServerAccessKeyDetailScreen({
  accessKeyHashId,
}: {
  accessKeyHashId: string
}) {
  const navigate = useNavigate()
  const params = useParams()
  const accessKeyQuery = serverAccessKeysApiHooks.useGetServerAccessKey(
    { accessKeyHashId },
    { enabled: !!accessKeyHashId },
  )

  const handleRotate = React.useCallback(
    async (input: { accessKeyId: string; secretAccessKey: string }) => {
      const updatedAccessKey =
        await apiClient.serverAccessKeysApi.rotateServerAccessKey({
          // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
          accessKeyHashId: params.accessKeyHashId!,
          rotateAccessKeyInputDTO: {
            accessKeyId: input.accessKeyId,
            secretAccessKey: input.secretAccessKey,
          },
        })
      await navigate(
        `/server/storage/keys/${updatedAccessKey.data.accessKeyHashId}`,
      )
      await accessKeyQuery.refetch()
    },
    [navigate, accessKeyQuery, params.accessKeyHashId],
  )

  return (
    <>
      <div
        className={cn(
          'flex h-full flex-1 flex-col items-center gap-6 overflow-y-auto',
        )}
      >
        <div className="container flex flex-1 flex-col gap-4">
          <AccessKeyAttributeList accessKey={accessKeyQuery.data?.accessKey} />
          <Card>
            <CardHeader>
              <TypographyH3>Rotate Key</TypographyH3>
            </CardHeader>
            <CardContent>
              {accessKeyQuery.data?.accessKey && (
                <AccessKeyRotateForm
                  onSubmit={(input) => handleRotate(input)}
                />
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  )
}
