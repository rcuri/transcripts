import Pagination from "./pagination"
import MyTabs from "./myTabs"
import PbpTable from "./pbpTable"


  export default function PlayByPlayNew({playByPlay, switchTabs, getNextPage, getPreviousPage, currentPage}) {
    return (
        <div className="px-4 sm:px-6 lg:px-8">
          <div className="sm:flex sm:items-center">
            <div className="sm:flex-auto">
              <h1 className="text-xl font-semibold text-gray-900">Play-By-Play</h1>
              <p className="mt-2 text-sm text-gray-700">
                Play-by-play data of selected game.
              </p>
            </div>
            <div className="mt-4 sm:mt-0 sm:ml-16 sm:flex-none">
              <button
                type="button"
                className="inline-flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:w-auto"
              >
                Generate Transcript
              </button>
            </div>
          </div>


        <div className="-mx-4 mt-10">
          <MyTabs 
            playByPlay={playByPlay} 
            switchTabs={switchTabs}
          />
        </div>
        <div>
          <Pagination 
            resultBeginning={"1"} 
            resultEnding={"10"} 
            totalResults={"23"} 
            onNextPage={getNextPage}
            onPreviousPage={getPreviousPage}
            currentPage={currentPage}
          />
        </div>

        </div>
      )
    }