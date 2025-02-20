import { useAuthContext } from '@stellariscloud/auth-utils'
import { ContentLayout } from '../../components/sidebar/components/content-layout'
import { ServerScreen } from '../../views/server/overview/server-screen/server-screen.view'
import { useParams } from 'react-router-dom'

const ServerIndexPage = () => {
  const authContext = useAuthContext()
  const { '*': subPath } = useParams()
  const serverPage = subPath?.length ? subPath.split('/') : []
  console.log({ serverPage, subPath })
  return (
    authContext.authState.isAuthenticated &&
    authContext.viewer?.isAdmin && (
      <ContentLayout
        breadcrumbs={[{ label: 'Server', href: '/server' }].concat(
          serverPage.map((serverPagePart, i) => ({
            label: `${serverPagePart[0].toUpperCase()}${serverPagePart.slice(1)}`,
            href:
              i === serverPage.length - 1
                ? ''
                : `/server/${serverPage.slice(0, i + 1).join('/')}`,
          })),
        )}
      >
        <ServerScreen
          serverPage={!serverPage.length ? ['overview'] : serverPage}
        />
      </ContentLayout>
    )
  )
}

export default ServerIndexPage
