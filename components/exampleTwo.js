import Filters from './filters'
import PlayByPlayNew from './playByPlayNew'

export default function ExampleTwo({playByPlay, switchTabs, currentPage, changePBPPage, generateTranscript, pbpResultsBeginning, pbpResultsEnding, totalPbpResults}) {
  return (
    <div>
      <div className="relative flex flex-col bg-rose-950">
        <div className="flex-grow w-full max-w-7xl mx-auto xl:px-8 lg:flex">
          <div className="flex-1 min-w-0 bg-white xl:flex">
            <div className="bg-rose-950 lg:min-w-0 lg:flex-1">
              <div className="h-full py-6 px-4 sm:px-6 lg:px-8">
                <div className="relative h-full" style={{ minHeight: '50rem' }}>
                  <div className="absolute inset-0 ring-4 ring-offset-4 ring-offset-yellow-100 ring-yellow-500 rounded-lg bg-orange-100">
                    <PlayByPlayNew 
                      playByPlay={playByPlay} 
                      switchTabs={switchTabs}
                      currentPage={currentPage}
                      changePBPPage={changePBPPage}
                      generateTranscript={generateTranscript}
                      pbpResultsBeginning={pbpResultsBeginning}
                      pbpResultsEnding={pbpResultsEnding}
                      totalPbpResults={totalPbpResults}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}