import Pagination from "./pagination"


function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Games({ games, onNextPage, onPreviousPage, currentPage, getPlayByPlayData, changeGamePage, resultBeginning, resultEnding, totalResults }) {

  return (
    <div className="px-4 pt-4 sm:px-6 lg:px-8">
      <div className="sm:flex sm:items-center">
        <div className="sm:flex-auto">
          <h1 className="text-xl font-semibold text-gray-900">Games</h1>
          <p className="mt-2 text-sm text-gray-700">
            A list of all the games for the selected filters.
          </p>
        </div>
      </div>
      {games ?
        <div className="-mx-4 mt-10 ring-1 ring-gray-300 sm:-mx-6 md:mx-0 md:rounded-lg bg-white">
          <table className="min-w-full divide-y divide-gray-300">
            <thead>
              <tr>
                <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6">
                  Matchup
                </th>
                <th
                  scope="col"
                  className="hidden px-3 py-3.5 text-left text-sm font-semibold text-gray-900 lg:table-cell"
                >
                  Date
                </th>
                <th
                  scope="col"
                  className="hidden px-3 py-3.5 text-left text-sm font-semibold text-gray-900 lg:table-cell"
                >
                  Final Score
                </th>
                <th
                  scope="col"
                  className="hidden px-3 py-3.5 text-left text-sm font-semibold text-gray-900 lg:table-cell"
                >
                  Home Team
                </th>
                <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                  Visitor Team
                </th>
                <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-6">
                  <span className="sr-only">Select</span>
                </th>
              </tr>
            </thead>
            <tbody>
              {games.map((game, planIdx) => (
                <tr key={game.game_id}>
                  <td
                    className={classNames(
                      planIdx === 0 ? '' : 'border-t border-transparent',
                      'relative py-4 pl-4 sm:pl-6 pr-3 text-sm'
                    )}
                  >
                    <div className="font-medium text-gray-900">
                      {game.matchup}
                    </div>
                    {planIdx !== 0 ? <div className="absolute right-0 left-6 -top-px h-px bg-gray-200" /> : null}
                  </td>
                  <td
                    className={classNames(
                      planIdx === 0 ? '' : 'border-t border-gray-200',
                      'hidden px-3 py-3.5 text-sm text-gray-500 lg:table-cell'
                    )}
                  >
                    {game.game_date}
                  </td>
                  <td
                    className={classNames(
                      planIdx === 0 ? '' : 'border-t border-gray-200',
                      'hidden px-3 py-3.5 text-sm text-gray-500 lg:table-cell'
                    )}
                  >
                    {game.final_score}
                  </td>
                  <td
                    className={classNames(
                      planIdx === 0 ? '' : 'border-t border-gray-200',
                      'hidden px-3 py-3.5 text-sm text-gray-500 lg:table-cell'
                    )}
                  >
                    {game.home_team_name}
                  </td>
                  <td
                    className={classNames(
                      planIdx === 0 ? '' : 'border-t border-gray-200',
                      'px-3 py-3.5 text-sm text-gray-500'
                    )}
                  >
                    {game.visitor_team_name}
                  </td>
                  <td
                    className={classNames(
                      planIdx === 0 ? '' : 'border-t border-transparent',
                      'relative py-3.5 pl-3 pr-4 sm:pr-6 text-right text-sm font-medium'
                    )}
                  >
                    <button
                      type="button"
                      className="inline-flex items-center rounded-md border border-gray-300 bg-white px-3 py-2 text-sm font-medium leading-4 text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-30"
                      //disabled={plan.isCurrent}
                      onClick={() => getPlayByPlayData(game.game_id)}
                    >
                      Select<span className="sr-only">, {game.name}</span>
                    </button>
                    {planIdx !== 0 ? <div className="absolute right-6 left-0 -top-px h-px bg-gray-200" /> : null}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

        </div> : ''}
      <div>
        <Pagination
          resultBeginning={resultBeginning}
          resultEnding={resultEnding}
          totalResults={totalResults}
          onNextPage={onNextPage}
          onPreviousPage={onPreviousPage}
          currentPage={currentPage}
          changePage={changeGamePage}
        />

      </div>
    </div>
  )
}
