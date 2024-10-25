import React from 'react'
import clsx from 'clsx'
import Image from 'next/image'
import { LayoutGrid } from 'lucide-react'
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
  TypographyH2,
} from '@stellariscloud/ui-toolkit'
import {
  ChartLine,
  Database,
  Folders,
  HardDrive,
  Users,
  ListChecks,
  AppWindow,
  Settings,
} from 'lucide-react'
import { StatCardGroup } from '../../../../components/stat-card-group/stat-card-group'
import { ServerUsersScreen } from '../../users/server-users-screen/server-users-screen.view'
import { ServerEventsScreen } from '../../events/server-events-screen/server-events-screen.view'
import { ServerAppsScreen } from '../../apps/server-apps-screen/server-apps-screen.view'
import { useRouter } from 'next/router'
import { ServerSettingsScreen } from '../../settings/server-settings-screen/server-settings-screen'
import { ServerEventDetailScreen } from '../../events/server-event-detail-screen/server-event-detail-screen.view'
import { ServerUserDetailScreen } from '../../users/server-user-detail-screen/server-user-detail-screen.view'
import { ServerAppDetailScreen } from '../../apps/server-app-detail-screen/server-app-detail-screen.view'
import { ServerTaskDetailScreen } from '../../tasks/server-task-detail-screen/server-task-detail-screen.view'
import { ServerTasksScreen } from '../../tasks/server-tasks-screen/server-tasks-screen.view'

export function ServerScreen({ serverPage }: { serverPage: string[] }) {
  const router = useRouter()
  return (
    <div className={clsx('items-center flex flex-1 flex-col h-full ')}>
      <div className="container flex-1 flex flex-col">
        <div className="md:hidden">
          <Image
            src="/examples/dashboard-light.png"
            width={1280}
            height={866}
            alt="Dashboard"
            className="block dark:hidden"
          />
          <Image
            src="/examples/dashboard-dark.png"
            width={1280}
            height={866}
            alt="Dashboard"
            className="hidden dark:block"
          />
        </div>
        <div className="hidden flex-col md:flex">
          <div className="flex-1 space-y-2">
            <Tabs defaultValue={serverPage[0]} value={serverPage[0]}>
              <div className="flex items-start flex-col gap-5">
                <TabsList>
                  <TabsTrigger
                    onClick={() => router.push('/server')}
                    value="overview"
                  >
                    <div className="flex items-center gap-2">
                      <LayoutGrid className="w-4 h-4" />
                      Overview
                    </div>
                  </TabsTrigger>
                  <TabsTrigger
                    onClick={() => router.push('/server/users')}
                    value="users"
                  >
                    <div className="flex items-center gap-2">
                      <Users className="w-4 h-4" />
                      Users
                    </div>
                  </TabsTrigger>
                  <TabsTrigger
                    onClick={() => router.push('/server/apps')}
                    value="apps"
                  >
                    <div className="flex items-center gap-2">
                      <AppWindow className="w-4 h-4" />
                      Apps
                    </div>
                  </TabsTrigger>
                  <TabsTrigger
                    onClick={() => router.push('/server/events')}
                    value="events"
                  >
                    <div className="flex items-center gap-2">
                      <ChartLine className="w-4 h-4" />
                      Events
                    </div>
                  </TabsTrigger>
                  <TabsTrigger
                    onClick={() => router.push('/server/tasks')}
                    value="tasks"
                  >
                    <div className="flex items-center gap-2">
                      <ListChecks className="w-4 h-4" />
                      Tasks
                    </div>
                  </TabsTrigger>
                  <TabsTrigger
                    onClick={() => router.push('/server/config')}
                    value="config"
                  >
                    <div className="flex items-center gap-2">
                      <Settings className="w-4 h-4" />
                      Config
                    </div>
                  </TabsTrigger>
                </TabsList>
                <TypographyH2>
                  Server {serverPage[0][0].toUpperCase()}
                  {serverPage[0].slice(1)}
                </TypographyH2>
              </div>
              {(serverPage.length === 1 || serverPage[0] === 'config') && (
                <div className="pt-2 pb-6">
                  <TabsContent value="users">
                    <ServerUsersScreen />
                  </TabsContent>
                  <TabsContent value="events">
                    <ServerEventsScreen />
                  </TabsContent>
                  <TabsContent value="apps">
                    <ServerAppsScreen />
                  </TabsContent>
                  <TabsContent value="tasks">
                    <ServerTasksScreen />
                  </TabsContent>
                  <TabsContent value="config">
                    {router.query.serverPage?.[0] === 'config' && (
                      <ServerSettingsScreen
                        tab={router.query.serverPage[1] ?? 'general'}
                      />
                    )}
                  </TabsContent>
                  <TabsContent value="overview">
                    <div className="flex flex-col gap-4">
                      <StatCardGroup
                        stats={[
                          {
                            title: 'Total Users',
                            label: '47',
                            subtitle: '+ 3 in the last week',
                            icon: Users,
                          },
                          {
                            title: 'Total Folders',
                            label: '389',
                            subtitle: '+27 in the last week',
                            icon: Folders,
                          },
                          {
                            title: 'Total Indexed',
                            label: '45.53TB',
                            subtitle: '+354GB in the last week',
                            icon: HardDrive,
                          },
                        ]}
                      />
                      <StatCardGroup
                        stats={[
                          {
                            title: 'Storage Provisions',
                            label: '4',
                            subtitle:
                              'MinIO NL, Minio FR, AWS USEast1 and one more',
                            icon: Database,
                          },
                          {
                            title: 'Storage Used',
                            label: '10.19TB',
                            subtitle: '+42GB in the last week',
                            icon: HardDrive,
                          },
                          {
                            title: 'Total Folders',
                            label: '389',
                            subtitle: '+27 in the last week',
                            icon: Folders,
                          },
                        ]}
                      />
                    </div>
                    <StatCardGroup stats={[]} />
                  </TabsContent>
                </div>
              )}
            </Tabs>
          </div>
        </div>
        {serverPage[0] === 'events' && typeof serverPage[1] === 'string' && (
          <div className="pt-6">
            <ServerEventDetailScreen eventId={serverPage[1]} />
          </div>
        )}
        {serverPage[0] === 'apps' && typeof serverPage[1] === 'string' && (
          <div className="pt-6">
            <ServerAppDetailScreen appIdentifier={serverPage[1]} />
          </div>
        )}
        {serverPage[0] === 'users' && typeof serverPage[1] === 'string' && (
          <div className="pt-6">
            <ServerUserDetailScreen userId={serverPage[1]} />
          </div>
        )}
        {serverPage[0] === 'tasks' && typeof serverPage[1] === 'string' && (
          <div className="pt-6">
            <ServerTaskDetailScreen taskId={serverPage[1]} />
          </div>
        )}
      </div>
    </div>
  )
}
