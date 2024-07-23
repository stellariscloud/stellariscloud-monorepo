import type { EventDTO } from '@stellariscloud/api-client'
import { useRouter } from 'next/router'
import React from 'react'

import { Table } from '../../../design-system/table/table'
import { apiClient } from '../../../services/api'
import { timeSinceOrUntil } from '@stellariscloud/utils'

export function ServerEventsScreen() {
  const router = useRouter()
  const [events, setEvents] = React.useState<EventDTO[]>()
  React.useEffect(() => {
    void apiClient.eventsApi
      .listEvents()
      .then((response) => setEvents(response.data.result))
  }, [])
  return (
    <div className="">
      {events && (
        <div className="flow-root">
          <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
              <Table
                headers={['Event ID', 'Event Key', 'Data', 'Timestamp']}
                rows={events.map((event, i) => [
                  <div key={i} className="flex items-center gap-4">
                    <div className="flex flex-col pl-4">
                      <div>{event.id.slice(0, 8)}</div>
                    </div>
                  </div>,
                  <div>
                    <div className="flex flex-col">
                      <div>{event.eventKey}</div>
                    </div>
                  </div>,
                  <div>
                    <div className="flex flex-col">
                      <pre className="p-2 rounded-md bg-black/20 text-xs">
                        {JSON.stringify(event.data, null, 2)}
                      </pre>
                    </div>
                  </div>,
                  <div>
                    <div className="flex flex-col">
                      <div>{timeSinceOrUntil(new Date(event.createdAt))}</div>
                      <div className="text-xs">
                        {new Date(event.createdAt).toLocaleString()}
                      </div>
                    </div>
                  </div>,
                ])}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
