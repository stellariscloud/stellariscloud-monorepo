import clsx from 'clsx'
import { Badge } from '../../design-system/badge/badge'
import { UserDTO } from '@stellariscloud/api-client'

const LABEL_TEXT_COLOR = 'text-gray-500 dark:text-white'
const VALUE_TEXT_COLOR = 'text-black dark:text-white'
const ROW_SPACING = 'px-4 py-3'

export function UserAttributeList({ user }: { user?: UserDTO }) {
  return (
    <div className="bg-gray-200 dark:bg-transparent rounded-lg dark:rounded-none pl-4">
      <dl className="divide-y divide-white/10">
        <div
          className={clsx(
            'sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0',
            ROW_SPACING,
          )}
        >
          <dt
            className={clsx('text-sm font-medium leading-6', LABEL_TEXT_COLOR)}
          >
            Name
          </dt>
          <dd
            className={clsx(
              'mt-1 text-sm leading-6 sm:col-span-2 sm:mt-0',
              VALUE_TEXT_COLOR,
            )}
          >
            {user?.name ? (
              user.name
            ) : (
              <span className="italic opacity-50">None</span>
            )}
          </dd>
        </div>
        <div
          className={clsx(
            'sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0',
            ROW_SPACING,
          )}
        >
          <dt
            className={clsx('text-sm font-medium leading-6', LABEL_TEXT_COLOR)}
          >
            Username
          </dt>
          <dd
            className={clsx(
              'mt-1 text-sm leading-6 sm:col-span-2 sm:mt-0',
              VALUE_TEXT_COLOR,
            )}
          >
            {user?.username}
          </dd>
        </div>
        <div
          className={clsx(
            'sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0',
            ROW_SPACING,
          )}
        >
          <dt
            className={clsx('text-sm font-medium leading-6', LABEL_TEXT_COLOR)}
          >
            Admin
          </dt>
          <dd className="mt-1 text-sm leading-6 sm:col-span-2 sm:mt-0">
            {typeof user === 'undefined' ? (
              <span className="italic opacity-50">Unknown</span>
            ) : user.isAdmin ? (
              <div className="flex gap-2 items-start">
                <Badge style="warn" size="sm">
                  True
                </Badge>
              </div>
            ) : (
              <Badge>False</Badge>
            )}
          </dd>
        </div>
        <div
          className={clsx(
            'sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0',
            ROW_SPACING,
          )}
        >
          <dt
            className={clsx('text-sm font-medium leading-6', LABEL_TEXT_COLOR)}
          >
            Email
          </dt>
          <dd
            className={clsx(
              'mt-1 text-sm leading-6 sm:col-span-2 sm:mt-0',
              VALUE_TEXT_COLOR,
            )}
          >
            {typeof user === 'undefined' ? (
              <span className="italic opacity-50">Unknown</span>
            ) : (
              user.email
            )}
          </dd>
        </div>
        <div
          className={clsx(
            'sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0',
            ROW_SPACING,
          )}
        >
          <dt
            className={clsx('text-sm font-medium leading-6', LABEL_TEXT_COLOR)}
          >
            Permissions
          </dt>
          <dd
            className={clsx(
              'mt-1 text-sm leading-6 sm:col-span-2 sm:mt-0',
              VALUE_TEXT_COLOR,
            )}
          >
            <div className="flex gap-2">
              {typeof user === 'undefined' ? (
                <span className="italic opacity-50">Unknown</span>
              ) : !user.permissions.length ? (
                <span className="italic opacity-50">None</span>
              ) : (
                user.permissions.map((permission, i) => (
                  <Badge style="info" key={i}>
                    {permission}
                  </Badge>
                ))
              )}
            </div>
          </dd>
        </div>
        <div
          className={clsx(
            'sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0',
            ROW_SPACING,
          )}
        >
          <dt
            className={clsx('text-sm font-medium leading-6', LABEL_TEXT_COLOR)}
          >
            Password
          </dt>
          <dd
            className={clsx(
              'mt-1 text-sm leading-6 sm:col-span-2 sm:mt-0',
              VALUE_TEXT_COLOR,
            )}
          >
            **********
          </dd>
        </div>
      </dl>
    </div>
  )
}
