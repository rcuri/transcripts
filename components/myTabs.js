import { Tab } from '@headlessui/react'
import PbpTable from "./pbpTable"

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function MyTabs({playByPlay, switchTabs}) {
  return (
    <Tab.Group
      as="div"
      onChange={(index) => {
        switchTabs(index)
      }}
      className="min-w-full border-separate" style={{ borderSpacing: 0 }}
      defaultIndex={0}
    >
      <Tab.List className="flex space-x-1 rounded-xl bg-blue-900/20 p-1 my-3 drop-shadow-lg">
      <Tab
              key={1}
              className={({ selected }) =>
                classNames(
                  'w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-blue-700',
                  'ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2',
                  selected
                    ? 'bg-white shadow'
                    : 'text-blue-100 hover:bg-white/[0.12] hover:text-white'
                )
              }
            >
              Period 1
        </Tab>
        <Tab
              key={2}
              className={({ selected }) =>
                classNames(
                  'w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-blue-700',
                  'ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2',
                  selected
                    ? 'bg-white shadow'
                    : 'text-blue-100 hover:bg-white/[0.12] hover:text-white'
                )
              }
            >
              Period 2
        </Tab>
        <Tab
              key={3}
              className={({ selected }) =>
                classNames(
                  'w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-blue-700',
                  'ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2',
                  selected
                    ? 'bg-white shadow'
                    : 'text-blue-100 hover:bg-white/[0.12] hover:text-white'
                )
              }
            >
              Period 3
        </Tab>
        <Tab
              key={4}
              className={({ selected }) =>
                classNames(
                  'w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-blue-700',
                  'ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2',
                  selected
                    ? 'bg-white shadow'
                    : 'text-blue-100 hover:bg-white/[0.12] hover:text-white'
                )
              }
            >
              Period 4
        </Tab>                        
      </Tab.List>
      <Tab.Panels className="block w-full focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-lg bg-white">
        <Tab.Panel>
            <PbpTable 
              pbpEvents={playByPlay}
            />
        </Tab.Panel>
        <Tab.Panel>
            <PbpTable 
              pbpEvents={playByPlay}
            />
        </Tab.Panel>
        <Tab.Panel>
            <PbpTable 
              pbpEvents={playByPlay}
            />
        </Tab.Panel>
        <Tab.Panel>
            <PbpTable 
              pbpEvents={playByPlay}
            />
        </Tab.Panel>
      </Tab.Panels>
    </Tab.Group>
  )
}