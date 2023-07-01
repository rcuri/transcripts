import Pagination from "./pagination"
import MyTabs from "./myTabs"

  
  
  function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }
  
  export default function PlayByPlay() {
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
          <div className="mt-8 flex flex-col">
            <div className="-my-2 -mx-4 sm:-mx-6 lg:-mx-8 overflow-x-auto">
              <div className="inline-block min-w-full py-2 align-middle">
                <div className="shadow-sm ring-1 ring-black ring-opacity-5">
                    <MyTabs />
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    }