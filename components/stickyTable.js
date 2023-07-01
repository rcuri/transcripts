const people = [
    {
        game_id: "0022100774",
        event_num: 2,
        event_message_type: 12,
        period: 1,
        wc_timestring: "7:11 PM",
        pc_timestring: "12:00",
        home_description: null,
        neutral_description: "Start of 1st Period (7:11 PM EST)",
        visitor_description: null,
        score: null,
        player1_name: null,
        player1_team_abbreviation: null,
        player2_name: null,
        player2_team_abbreviation: null,
        player3_name: null,
        player3_team_abbreviation: null,
    },
  ]
  
function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}
  
export default function StickyTable() {
  return (
        <div className="inline-block min-w-full align-middle">
            <div className="shadow-sm ring-1 ring-black ring-opacity-5">
                <table className="min-w-full border-separate">
                    <thead className="bg-gray-50">
                    <tr>
                        <th
                        scope="col"
                        className="sticky top-0 z-10 hidden border-b border-gray-300 bg-gray-50 bg-opacity-75 px-3 py-3.5 text-left text-sm font-semibold text-gray-900 backdrop-blur backdrop-filter sm:table-cell"
                        >
                        Event No.
                        </th>
                        <th
                        scope="col"
                        className="sticky top-0 z-10 hidden border-b border-gray-300 bg-gray-50 bg-opacity-75 px-3 py-3.5 text-left text-sm font-semibold text-gray-900 backdrop-blur backdrop-filter lg:table-cell"
                        >
                        Event Type
                        </th>
                        <th
                        scope="col"
                        className="sticky top-0 z-10 border-b border-gray-300 bg-gray-50 bg-opacity-75 px-3 py-3.5 text-left text-sm font-semibold text-gray-900 backdrop-blur backdrop-filter"
                        >
                        Period
                        </th>

                        <th
                        scope="col"
                        className="sticky top-0 z-10 border-b border-gray-300 bg-gray-50 bg-opacity-75 py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 backdrop-blur backdrop-filter sm:pl-6 lg:pl-8"
                        >
                        WC Time
                        </th>
                        <th
                        scope="col"
                        className="sticky top-0 z-10 hidden border-b border-gray-300 bg-gray-50 bg-opacity-75 px-3 py-3.5 text-left text-sm font-semibold text-gray-900 backdrop-blur backdrop-filter sm:table-cell"
                        >
                        Playclock Time
                        </th>
                        <th
                        scope="col"
                        className="sticky top-0 z-10 hidden border-b border-gray-300 bg-gray-50 bg-opacity-75 px-3 py-3.5 text-left text-sm font-semibold text-gray-900 backdrop-blur backdrop-filter lg:table-cell"
                        >
                        Home Description
                        </th>
                        <th
                        scope="col"
                        className="sticky top-0 z-10 border-b border-gray-300 bg-gray-50 bg-opacity-75 px-3 py-3.5 text-left text-sm font-semibold text-gray-900 backdrop-blur backdrop-filter"
                        >
                        Neutral Description
                        </th>

                        <th
                        scope="col"
                        className="sticky top-0 z-10 border-b border-gray-300 bg-gray-50 bg-opacity-75 py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 backdrop-blur backdrop-filter sm:pl-6 lg:pl-8"
                        >
                        Visitor Description
                        </th>
                        <th
                        scope="col"
                        className="sticky top-0 z-10 hidden border-b border-gray-300 bg-gray-50 bg-opacity-75 px-3 py-3.5 text-left text-sm font-semibold text-gray-900 backdrop-blur backdrop-filter sm:table-cell"
                        >
                        Score
                        </th>
                        <th
                        scope="col"
                        className="sticky top-0 z-10 hidden border-b border-gray-300 bg-gray-50 bg-opacity-75 px-3 py-3.5 text-left text-sm font-semibold text-gray-900 backdrop-blur backdrop-filter lg:table-cell"
                        >
                        Player 1
                        </th>
                        <th
                        scope="col"
                        className="sticky top-0 z-10 border-b border-gray-300 bg-gray-50 bg-opacity-75 px-3 py-3.5 text-left text-sm font-semibold text-gray-900 backdrop-blur backdrop-filter"
                        >
                        Player 1 Team
                        </th>

                        <th
                        scope="col"
                        className="sticky top-0 z-10 border-b border-gray-300 bg-gray-50 bg-opacity-75 py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 backdrop-blur backdrop-filter sm:pl-6 lg:pl-8"
                        >
                        Player 2
                        </th>
                        <th
                        scope="col"
                        className="sticky top-0 z-10 hidden border-b border-gray-300 bg-gray-50 bg-opacity-75 px-3 py-3.5 text-left text-sm font-semibold text-gray-900 backdrop-blur backdrop-filter sm:table-cell"
                        >
                        Player 2 Team
                        </th>
                        <th
                        scope="col"
                        className="sticky top-0 z-10 hidden border-b border-gray-300 bg-gray-50 bg-opacity-75 px-3 py-3.5 text-left text-sm font-semibold text-gray-900 backdrop-blur backdrop-filter lg:table-cell"
                        >
                        Player 3
                        </th>
                        <th
                        scope="col"
                        className="sticky top-0 z-10 border-b border-gray-300 bg-gray-50 bg-opacity-75 px-3 py-3.5 text-left text-sm font-semibold text-gray-900 backdrop-blur backdrop-filter"
                        >
                        Player 3 Team
                        </th>                                                                                 
                    </tr>
                    </thead>
                    <tbody className="bg-white">
                    {people.map((person, personIdx) => (
                        <tr key={person.game_id}>
                        <td
                            className={classNames(
                            personIdx !== people.length - 1 ? 'border-b border-gray-200' : '',
                            'whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6 lg:pl-8'
                            )}
                        >
                            {person.event_num}
                        </td>
                        <td
                            className={classNames(
                            personIdx !== people.length - 1 ? 'border-b border-gray-200' : '',
                            'whitespace-nowrap px-3 py-4 text-sm text-gray-500 hidden sm:table-cell'
                            )}
                        >
                            {person.event_message_type}
                        </td>
                        <td
                            className={classNames(
                            personIdx !== people.length - 1 ? 'border-b border-gray-200' : '',
                            'whitespace-nowrap px-3 py-4 text-sm text-gray-500 hidden lg:table-cell'
                            )}
                        >
                            {person.period}
                        </td>
                        <td
                            className={classNames(
                            personIdx !== people.length - 1 ? 'border-b border-gray-200' : '',
                            'whitespace-nowrap px-3 py-4 text-sm text-gray-500'
                            )}
                        >
                            {person.wc_timestring}
                        </td>

                        <td
                            className={classNames(
                            personIdx !== people.length - 1 ? 'border-b border-gray-200' : '',
                            'whitespace-nowrap px-3 py-4 text-sm text-gray-500'
                            )}
                        >
                            {person.pc_timestring}
                        </td>
                        <td
                            className={classNames(
                            personIdx !== people.length - 1 ? 'border-b border-gray-200' : '',
                            'whitespace-nowrap px-3 py-4 text-sm text-gray-500'
                            )}
                        >
                            {person.home_description}
                        </td>
                        <td
                            className={classNames(
                            personIdx !== people.length - 1 ? 'border-b border-gray-200' : '',
                            'whitespace-nowrap px-3 py-4 text-sm text-gray-500'
                            )}
                        >
                            {person.neutral_description}
                        </td>
                        <td
                            className={classNames(
                            personIdx !== people.length - 1 ? 'border-b border-gray-200' : '',
                            'whitespace-nowrap px-3 py-4 text-sm text-gray-500'
                            )}
                        >
                            {person.visitor_description}
                        </td>
                        <td
                            className={classNames(
                            personIdx !== people.length - 1 ? 'border-b border-gray-200' : '',
                            'whitespace-nowrap px-3 py-4 text-sm text-gray-500'
                            )}
                        >
                            {person.score}
                        </td>
                        <td
                            className={classNames(
                            personIdx !== people.length - 1 ? 'border-b border-gray-200' : '',
                            'whitespace-nowrap px-3 py-4 text-sm text-gray-500'
                            )}
                        >
                            {person.player1_name}
                        </td>
                        <td
                            className={classNames(
                            personIdx !== people.length - 1 ? 'border-b border-gray-200' : '',
                            'whitespace-nowrap px-3 py-4 text-sm text-gray-500'
                            )}
                        >
                            {person.player1_team_abbreviation}
                        </td>
                        <td
                            className={classNames(
                            personIdx !== people.length - 1 ? 'border-b border-gray-200' : '',
                            'whitespace-nowrap px-3 py-4 text-sm text-gray-500'
                            )}
                        >
                            {person.player2_name}
                        </td>
                        <td
                            className={classNames(
                            personIdx !== people.length - 1 ? 'border-b border-gray-200' : '',
                            'whitespace-nowrap px-3 py-4 text-sm text-gray-500'
                            )}
                        >
                            {person.player2_team_abbreviation}
                        </td>
                        <td
                            className={classNames(
                            personIdx !== people.length - 1 ? 'border-b border-gray-200' : '',
                            'whitespace-nowrap px-3 py-4 text-sm text-gray-500'
                            )}
                        >
                            {person.player3_name}
                        </td>
                        <td
                            className={classNames(
                            personIdx !== people.length - 1 ? 'border-b border-gray-200' : '',
                            'whitespace-nowrap px-3 py-4 text-sm text-gray-500'
                            )}
                        >
                            {person.player3_team_abbreviation}
                        </td>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        </div>
  )
}