
  export default function Transcript({transcripts, speakers}) {
    return (
      <div className="relative flex flex-col bg-rose-950">
        <div className="flex-grow w-full max-w-3xl mx-auto xl:px-8 lg:flex">
        <div className="flex-1 min-w-0 bg-white xl:flex">
        <div className="bg-rose-950 lg:min-w-0 lg:flex-1">
        <div className="h-full py-6 px-4 sm:px-6 lg:px-8">
        <div className="relative h-full" style={{ minHeight: '46rem' }}>
        <div className="absolute inset-0 ring-4 ring-offset-4 ring-offset-yellow-100 ring-yellow-500 rounded-lg bg-orange-100 overflow-auto">
        <div className="px-4 sm:px-6 lg:px-8">
        <div className="sm:flex sm:items-center">

        <ul role="list" className="divide-y divide-gray-200">
          {transcripts.map((transcript) => (
            <li key={transcript.id} className="py-4">
              <div className="flex space-x-3">
                <img className="h-6 w-6 rounded-full" src={speakers[transcript.speaker_name]} alt="" />
                <div className="flex-1 space-y-1">
                  <div className="flex items-center justify-between">
                    <h3 className="text-sm font-medium">{transcript.speaker_name}</h3>
                    <p className="text-sm text-gray-500">{transcript.speaker_begin_time}</p>
                  </div>
                  <p className="text-sm text-gray-500">
                    {transcript.line}
                  </p>
                </div>
              </div>
            </li>
          ))}
        </ul>
        </div>
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