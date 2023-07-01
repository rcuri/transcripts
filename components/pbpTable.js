
  function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }
  
  export default function PbpTable({pbpEvents}) {
    return (
        <div className="ring-1 ring-gray-300 sm:-mx-6 md:mx-0 md:rounded-bl-lg md:rounded-br-lg md:rounded-tr-lg overflow-x-auto">
        <table className="divide-y divide-gray-300 table-auto whitespace-nowrap">
        <thead>
          <tr>
            <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6">
              Event Number
            </th>
            <th
              scope="col"
              className="hidden px-3 py-3.5 text-left text-sm font-semibold text-gray-900 lg:table-cell"
            >
              Event Message Type
            </th>
            <th
              scope="col"
              className="hidden px-3 py-3.5 text-left text-sm font-semibold text-gray-900 lg:table-cell"
            >
              Period
            </th>
            <th
              scope="col"
              className="hidden px-3 py-3.5 text-left text-sm font-semibold text-gray-900 lg:table-cell"
            >
              WC Time
            </th>
            <th
              scope="col"
              className="hidden px-3 py-3.5 text-left text-sm font-semibold text-gray-900 lg:table-cell"
            >
              Playclock Time
            </th>
            <th
              scope="col"
              className="hidden px-3 py-3.5 text-left text-sm font-semibold text-gray-900 lg:table-cell"
            >
              Home Description
            </th>
            <th
              scope="col"
              className="hidden px-3 py-3.5 text-left text-sm font-semibold text-gray-900 lg:table-cell"
            >
              Neutral Description
            </th>
            <th
              scope="col"
              className="hidden px-3 py-3.5 text-left text-sm font-semibold text-gray-900 lg:table-cell"
            >
              Visitor Description
            </th>
            <th
              scope="col"
              className="hidden px-3 py-3.5 text-left text-sm font-semibold text-gray-900 lg:table-cell"
            >
              Score
            </th>
            <th
              scope="col"
              className="hidden px-3 py-3.5 text-left text-sm font-semibold text-gray-900 lg:table-cell"
            >
              Person 1 Type
            </th>
            <th
              scope="col"
              className="hidden px-3 py-3.5 text-left text-sm font-semibold text-gray-900 lg:table-cell"
            >
              Player 1 Name
            </th>
            <th
              scope="col"
              className="hidden px-3 py-3.5 text-left text-sm font-semibold text-gray-900 lg:table-cell"
            >
              Player 1 Team ID
            </th>
            <th
              scope="col"
              className="hidden px-3 py-3.5 text-left text-sm font-semibold text-gray-900 lg:table-cell"
            >
              Person 2 Type
            </th>
            <th
              scope="col"
              className="hidden px-3 py-3.5 text-left text-sm font-semibold text-gray-900 lg:table-cell"
            >
              Player 2 Name
            </th>
            <th
              scope="col"
              className="hidden px-3 py-3.5 text-left text-sm font-semibold text-gray-900 lg:table-cell"
            >
              Player 2 Team ID
            </th> 

            <th
              scope="col"
              className="hidden px-3 py-3.5 text-left text-sm font-semibold text-gray-900 lg:table-cell"
            >
              Person 3 Type
            </th> 
            <th
              scope="col"
              className="hidden px-3 py-3.5 text-left text-sm font-semibold text-gray-900 lg:table-cell"
            >
              Player 3 Name
            </th> 
            <th
              scope="col"
              className="hidden px-3 py-3.5 text-left text-sm font-semibold text-gray-900 lg:table-cell"
            >
              Player 3 Team ID
            </th>                                                                                                                                                                                                                                                                                             
          </tr>
        </thead>        
        <tbody>
              {pbpEvents.map((event, eventIdx) => (
                <tr key={event.event_number}>
                  <td
                    className={classNames(
                      eventIdx === 0 ? '' : 'border-t border-gray-200',
                      'hidden px-3 py-3.5 text-sm text-gray-500 lg:table-cell'
                    )}
                  >
                    {event.event_number}
                  </td>
                  <td
                    className={classNames(
                      eventIdx === 0 ? '' : 'border-t border-gray-200',
                      'hidden px-3 py-3.5 text-sm text-gray-500 lg:table-cell'
                    )}
                  >
                    {event.event_msg_type_code}
                  </td>
                  <td
                    className={classNames(
                      eventIdx === 0 ? '' : 'border-t border-gray-200',
                      'hidden px-3 py-3.5 text-sm text-gray-500 lg:table-cell'
                    )}
                  >
                    {event.period}
                  </td>
                  <td
                    className={classNames(
                      eventIdx === 0 ? '' : 'border-t border-gray-200',
                      'px-3 py-3.5 text-sm text-gray-500'
                    )}
                  >
                    {event.wc_timestring}
                  </td>

                  <td
                    className={classNames(
                      eventIdx === 0 ? '' : 'border-t border-gray-200',
                      'px-3 py-3.5 text-sm text-gray-500'
                    )}
                  >
                    {event.pc_timestring}
                  </td>
                  <td
                    className={classNames(
                      eventIdx === 0 ? '' : 'border-t border-gray-200',
                      'px-3 py-3.5 text-sm text-gray-500'
                    )}
                  >
                    {event.home_description}
                  </td>
                  <td
                    className={classNames(
                      eventIdx === 0 ? '' : 'border-t border-gray-200',
                      'px-3 py-3.5 text-sm text-gray-500'
                    )}
                  >
                    {event.neutral_description}
                  </td>
                  <td
                    className={classNames(
                      eventIdx === 0 ? '' : 'border-t border-gray-200',
                      'px-3 py-3.5 text-sm text-gray-500'
                    )}
                  >
                    {event.visitor_description}
                  </td>
                  <td
                    className={classNames(
                      eventIdx === 0 ? '' : 'border-t border-gray-200',
                      'px-3 py-3.5 text-sm text-gray-500'
                    )}
                  >
                    {event.score}
                  </td>
                  <td
                    className={classNames(
                      eventIdx === 0 ? '' : 'border-t border-gray-200',
                      'px-3 py-3.5 text-sm text-gray-500'
                    )}
                  >
                    {event.person1_type}
                  </td>
                  <td
                    className={classNames(
                      eventIdx === 0 ? '' : 'border-t border-gray-200',
                      'px-3 py-3.5 text-sm text-gray-500'
                    )}
                  >
                    {event.player1_name}
                  </td>
                  <td
                    className={classNames(
                      eventIdx === 0 ? '' : 'border-t border-gray-200',
                      'px-3 py-3.5 text-sm text-gray-500'
                    )}
                  >
                    {event.player1_team_id}
                  </td>
                  <td
                    className={classNames(
                      eventIdx === 0 ? '' : 'border-t border-gray-200',
                      'px-3 py-3.5 text-sm text-gray-500'
                    )}
                  >
                    {event.person2_type}
                  </td>
                  <td
                    className={classNames(
                      eventIdx === 0 ? '' : 'border-t border-gray-200',
                      'px-3 py-3.5 text-sm text-gray-500'
                    )}
                  >
                    {event.player2_name}
                  </td>
                  <td
                    className={classNames(
                      eventIdx === 0 ? '' : 'border-t border-gray-200',
                      'px-3 py-3.5 text-sm text-gray-500'
                    )}
                  >
                    {event.player2_team_id}
                  </td>     
                  <td
                    className={classNames(
                      eventIdx === 0 ? '' : 'border-t border-gray-200',
                      'px-3 py-3.5 text-sm text-gray-500'
                    )}
                  >
                    {event.person3_type}
                  </td>     
                  <td
                    className={classNames(
                      eventIdx === 0 ? '' : 'border-t border-gray-200',
                      'px-3 py-3.5 text-sm text-gray-500'
                    )}
                  >
                    {event.player3_name}
                  </td>     
                  <td
                    className={classNames(
                      eventIdx === 0 ? '' : 'border-t border-gray-200',
                      'px-3 py-3.5 text-sm text-gray-500'
                    )}
                  >
                    {event.player3_team_id}
                  </td>     
                </tr>
              ))}
              </tbody>
              </table>
              </div>
      )
    }