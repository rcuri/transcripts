import Games from './games'
import Filters from './filters'
import { useState, useEffect } from "react";

const seasons = [
  {},
  { id: 1, name: '1997-98' },
  { id: 2, name: '1998-99' },
  { id: 3, name: '1999-00' },
  { id: 4, name: '2000-01' },
  { id: 5, name: '2001-02' },
  { id: 6, name: '2002-03' },
  { id: 7, name: '2003-04' },
  { id: 8, name: '2004-05' },
  { id: 9, name: '2005-06' },
  { id: 10, name: '2006-07' },
  { id: 11, name: '2007-08' },
  { id: 12, name: '2008-09' },
  { id: 13, name: '2009-10' },
  { id: 14, name: '2010-11' },
  { id: 15, name: '2011-12' },
  { id: 16, name: '2012-13' },
  { id: 17, name: '2013-14' },
  { id: 18, name: '2014-15' },
  { id: 19, name: '2015-16' },
  { id: 20, name: '2016-17' },
  { id: 21, name: '2017-18' },
  { id: 22, name: '2018-19' },
  { id: 23, name: '2019-20' },
  { id: 24, name: '2020-21' },
  { id: 25, name: '2021-22' },
  { id: 26, name: '2022-23' }
]


const teams = [
  {},
  { team_id: 1610612737, name: 'Atlanta Hawks' },
  { team_id: 1610612738, name: 'Boston Celtics' },
  { team_id: 1610612739, name: 'Cleveland Cavaliers' },
  { team_id: 1610612740, name: 'New Orleans Pelicans' },
  { team_id: 1610612741, name: 'Chicago Bulls' },
  { team_id: 1610612742, name: 'Dallas Mavericks' },
  { team_id: 1610612743, name: 'Denver Nuggets' },
  { team_id: 1610612744, name: 'Golden State Warriors' },
  { team_id: 1610612745, name: 'Houston Rockets' },
  { team_id: 1610612746, name: 'Los Angeles Clippers' },
  { team_id: 1610612747, name: 'Los Angeles Lakers' },
  { team_id: 1610612748, name: 'Miami Heat' },
  { team_id: 1610612749, name: 'Milwaukee Bucks' },
  { team_id: 1610612750, name: 'Minnesota Timberwolves' },
  { team_id: 1610612751, name: 'Brooklyn Nets' },
  { team_id: 1610612752, name: 'New York Knicks' },
  { team_id: 1610612753, name: 'Orlando Magic' },
  { team_id: 1610612754, name: 'Indiana Pacers' },
  { team_id: 1610612755, name: 'Philadelphia 76ers' },
  { team_id: 1610612756, name: 'Phoenix Suns' },
  { team_id: 1610612757, name: 'Portland Trail Blazers' },
  { team_id: 1610612758, name: 'Sacramento Kings' },
  { team_id: 1610612759, name: 'San Antonio Spurs' },
  { team_id: 1610612760, name: 'Oklahoma City Thunder' },
  { team_id: 1610612761, name: 'Toronto Raptors' },
  { team_id: 1610612762, name: 'Utah Jazz' },
  { team_id: 1610612763, name: 'Memphis Grizzlies' },
  { team_id: 1610612764, name: 'Washington Wizards' },
  { team_id: 1610612765, name: 'Detroit Pistons' },
  { team_id: 1610612766, name: 'Charlotte Hornets' }
]

export default function GamesDisplay({ activeGame, setActiveGame, getPlayByPlayData }) {
  const [season, setSeason] = useState({})
  const [hometeam, setHometeam] = useState({})
  const [visitorteam, setVisitorteam] = useState({})
  const [games, setGames] = useState([])
  const [currentGamePage, setCurrentGamePage] = useState(1)
  const [totalResults, setTotalResults] = useState(0)
  const [resultBeginning, setResultBeginning] = useState(0)
  const [resultEnding, setResultEnding] = useState(0)


  const paginate = (page, total, per) => {
    const output = {
      beginning: ((Number(page) - 1) * Number(per)) + 1,
      end: page * per
    }
    if (output['end'] > total)
      output['end'] = total
    return output
  }


  const changeGamePage = async (direction) => {
    const queryStrings = []
    if (season?.name) {
      queryStrings.push("season=" + season.name)
    }
    if (direction === 'next') {
      var destinationPageValue = currentGamePage + 1
    }
    else if (direction === 'previous') {
      var destinationPageValue = currentGamePage - 1
    }
    const destinationPageString = "page_number=" + destinationPageValue
    queryStrings.push(destinationPageString)
    if (hometeam?.team_id) {
      queryStrings.push("home_team_id=" + hometeam.team_id)
    }
    if (visitorteam?.team_id) {
      queryStrings.push("visitor_team_id=" + visitorteam.team_id)
    }

    const queryStringParameters = queryStrings.join('&')
    const url = 'https://qaepfy74ej.execute-api.us-east-1.amazonaws.com/games?' + queryStringParameters
    const resp = await fetch(url)
    const games = await resp.json()
    const gamesData = games['data']
    const responseTotalResults = games['total']
    setTotalResults(responseTotalResults)
    setGames(gamesData)
    if (direction === 'next')
      setCurrentGamePage(s => s + 1)
    else if (direction === 'previous')
      setCurrentGamePage(s => s - 1)
    const pagination = paginate(games['page'], games['total'], games['per_page'])
    const pageBeginning = pagination['beginning']
    const pageEnding = pagination['end']
    setResultBeginning(pageBeginning)
    setResultEnding(pageEnding)
  }

  const getAllGames = async () => {
    try {
    const url = 'https://qaepfy74ej.execute-api.us-east-1.amazonaws.com/games'
    const response = await fetch(url)
    if (!response.ok) {
      if (response.status === 404) {
      } else if (response.status === 403) {
      } else {
      }
      throw new Error(response);
    }
    else {
      const games = await response.json()
      const gamesData = games['data']
      const pagination = paginate(games['page'], games['total'], games['per_page'])
      const pageBeginning = pagination['beginning']
      const pageEnding = pagination['end']
      setResultBeginning(pageBeginning)
      setResultEnding(pageEnding)
      const responseTotalResults = games['total']
      setTotalResults(responseTotalResults)
      setGames(gamesData)
      setCurrentGamePage(1)
    }
    } catch(exception) {
      console.log(exception)
  }
  }

  const resetGames = async () => {
    getAllGames()
    setSeason({})
    setHometeam({})
    setVisitorteam({})
  }

  const filterGames = async () => {
    const queryStrings = []
    if (season?.name) {
      queryStrings.push("season=" + season.name)
    }
    if (hometeam?.team_id) {
      queryStrings.push("home_team_id=" + hometeam.team_id)
    }
    if (visitorteam?.team_id) {
      queryStrings.push("visitor_team_id=" + visitorteam.team_id)
    }
    const queryStringParameters = queryStrings.join('&')
    const url = 'https://qaepfy74ej.execute-api.us-east-1.amazonaws.com/games?' + queryStringParameters
    try {
      const response = await fetch(url)
      if (!response.ok) {
        if (response.status === 404) {
        } else if (response.status === 403) {
        } else {
        }
        setGames([])
        setCurrentGamePage(0)
        setResultBeginning(0)
        setResultEnding(0)
        setTotalResults(0)
        throw new Error(response);
      }
      const games = await response.json()
      const gamesData = games['data']
      setGames(gamesData)
      setCurrentGamePage(1)
      const pagination = paginate(games['page'], games['total'], games['per_page'])
      const pageBeginning = pagination['beginning']
      const pageEnding = pagination['end']
      setResultBeginning(pageBeginning)
      setResultEnding(pageEnding)
      const responseTotalResults = games['total']
      setTotalResults(responseTotalResults)
    } catch (exception) {
    }
  }


  useEffect(() => {
    getAllGames()
  }, [])

  return (
    <div>
      <div className="relative flex flex-col bg-rose-950">
        <div className="flex-grow w-full max-w-7xl mx-auto xl:px-8 lg:flex">

          <div className="flex-1 min-w-0 bg-rose-950 xl:flex">
            <div className=" xl:border-b-0 xl:flex-shrink-0 xl:w-64  bg-rose-950">
              <div className="h-full pl-4 pr-6 py-6 sm:pl-6 lg:pl-8 xl:pl-0">
                <div className="h-full relative" style={{ height: '36rem' }}>
                  <div className="absolute inset-0 ring-4 ring-offset-4 ring-offset-yellow-100 ring-yellow-500 rounded-lg bg-orange-100">
                    <Filters
                      seasons={seasons}
                      teams={teams}
                      season={season}
                      setSeason={setSeason}
                      hometeam={hometeam}
                      setHometeam={setHometeam}
                      visitorteam={visitorteam}
                      setVisitorteam={setVisitorteam}
                      onFilter={filterGames}
                      onReset={resetGames}
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-rose-950 lg:min-w-0 lg:flex-1">
              <div className="h-full py-6 px-4 sm:px-6 lg:px-8">
                <div className="relative h-full" style={{ minHeight: '56rem' }}>
                  <div className="absolute inset-0 ring-4 ring-offset-4 ring-offset-yellow-100 ring-yellow-500 rounded-lg bg-orange-100">
                    <Games
                      games={games}
                      setGames={setGames}
                      activeGame={activeGame}
                      setActiveGame={setActiveGame}
                      currentPage={currentGamePage}
                      getPlayByPlayData={getPlayByPlayData}
                      changeGamePage={changeGamePage}
                      resultBeginning={resultBeginning}
                      resultEnding={resultEnding}
                      totalResults={totalResults}
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