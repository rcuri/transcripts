import { Tab } from '@headlessui/react'
import StickyTable from './stickyTable'
import PbpTable from "./pbpTable"

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
      <Tab.List className="block w-full border-gray-300">
        <Tab className="ui-selected:bg-blue-500 ui-selected:text-white ui-not-selected:bg-white ui-not-selected:text-black rounded-t-md border-y-1 px-2">Period 1</Tab>
        <Tab className="ui-selected:bg-blue-500 ui-selected:text-white ui-not-selected:bg-white ui-not-selected:text-black rounded-t-md border-y-1 px-2">Period 2</Tab>
        <Tab className="ui-selected:bg-blue-500 ui-selected:text-white ui-not-selected:bg-white ui-not-selected:text-black rounded-t-md border-y-1 px-2">Period 3</Tab>
        <Tab className="ui-selected:bg-blue-500 ui-selected:text-white ui-not-selected:bg-white ui-not-selected:text-black rounded-t-md border-y-1 px-2">Period 4</Tab>
      </Tab.List>
      <Tab.Panels className="block w-full focus:ring-indigo-500 focus:border-indigo-500 border-gray-300">
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