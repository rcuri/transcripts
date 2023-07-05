
export default function Transcript({ transcripts, speakers, refreshAction }) {
    return (
        <div className="relative flex flex-col bg-rose-950">
            <div className="flex-grow w-full max-w-3xl mx-auto xl:px-8 lg:flex">
                <div className="flex-1 min-w-0 bg-white xl:flex">
                    <div className="bg-rose-950 lg:min-w-0 lg:flex-1">
                        <div className="h-full py-6 px-4 sm:px-6 lg:px-8">
                            <div className="relative h-full" style={{ minHeight: '46rem' }}>
                                <div className="absolute inset-0 ring-4 ring-offset-4 ring-offset-yellow-100 ring-yellow-500 rounded-lg bg-orange-100 overflow-auto">
                                    <div className="px-4 sm:px-6 lg:px-8 py-6">
                                        <div className="sm:flex sm:items-center">

                                            <div className="sm:flex-auto">
                                                <h1 className="text-xl font-semibold text-gray-900">Transcript</h1>
                                                <p className="mt-2 text-sm text-gray-700">
                                                    This will take about 10 seconds. Thank you for your patience.
                                                </p>
                                            </div>
                                            <div className="flex-auto mt-4 sm:mt-0 sm:ml-16 drop-shadow-md">
                                                <button
                                                    onClick={() => refreshAction()}
                                                    type="button"
                                                    className="drop-shadow-md inline-flex items-center justify-center rounded-md border border-transparent bg-emerald-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:w-auto"
                                                >
                                                    Refresh
                                                </button>
                                            </div>
                                        </div>
                                        {transcripts ?
                                            <div className="sm:flex sm:items-center mt-8 overflow-y-scroll ring-4 ring-offset-4 px-2 ring-offset-amber-100 ring-red-950 rounded-lg bg-amber-100 drop-shadow-md">
                                                <ul role="list" className="divide-y divide-gray-200">
                                                    {transcripts.map((transcript) => (
                                                        <li key={transcript.id} className="py-4">
                                                            <div className="flex space-x-3">
                                                                <img className="h-6 w-6 rounded-full" src={speakers[transcript.speaker_name]} alt="" />
                                                                <div className="flex-1 space-y-1">
                                                                    <div className="flex items-center justify-between">
                                                                        <h3 className="text-sm font-medium">{transcript.speaker_name}</h3>
                                                                        <p className="text-sm text-gray-500">{transcript.time_spoken}</p>
                                                                    </div>
                                                                    <p className="text-sm text-slate-800">
                                                                        {transcript.spoken_line}
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div> : ''}
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