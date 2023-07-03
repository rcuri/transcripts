import Pagination from "./pagination"
import MyTabs from "./myTabs"


  export default function PlayByPlayNew({playByPlay, switchTabs, currentPage, changePBPPage, generateTranscript, pbpResultsBeginning, pbpResultsEnding, totalPbpResults}) {
    return (
        <div className="px-4 pt-4 sm:px-6 lg:px-8">
          <div className="sm:flex sm:items-center">
            <div className="sm:flex-auto">
              <h1 className="text-xl font-semibold text-gray-900">Play-By-Play</h1>
              <p className="mt-2 text-sm text-gray-700">
                Play-by-play data of selected game.
              </p>
            </div>
            <div className="mt-4 sm:mt-0 sm:ml-16 sm:flex-none">
              <button
                onClick={() => generateTranscript()}
                type="button"
                className="drop-shadow-md inline-flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:w-auto"
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
            resultBeginning={pbpResultsBeginning} 
            resultEnding={pbpResultsEnding} 
            totalResults={totalPbpResults} 
            currentPage={currentPage}
            changePage={changePBPPage}
          />
        </div>

        </div>
      )
    }