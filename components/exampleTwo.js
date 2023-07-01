import Filters from './filters'
import PlayByPlayNew from './playByPlayNew'

export default function ExampleTwo({playByPlay, switchTabs, getNextPage, getPreviousPage, currentPage}) {
  return (
    <div>
      <div className="relative flex flex-col">
        {/* 3 column wrapper */}
        <div className="flex-grow w-full max-w-7xl mx-auto xl:px-8 lg:flex">

          <div className="flex-1 min-w-0 bg-white xl:flex">


            <div className="bg-white lg:min-w-0 lg:flex-1">
              <div className="h-full py-6 px-4 sm:px-6 lg:px-8">
                {/* Start main area*/}
                <div className="relative h-full" style={{ minHeight: '46rem' }}>
                  <div className="absolute inset-0 border-2 border-gray-200 border-dashed rounded-lg">
                    <PlayByPlayNew 
                      playByPlay={playByPlay} 
                      switchTabs={switchTabs}
                      getNextPage={getNextPage}
                      getPreviousPage={getPreviousPage}
                      currentPage={currentPage}
                    />
                  </div>
                </div>
                {/* End main area */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}