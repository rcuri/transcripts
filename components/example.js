import Games from './games'
import Filters from './filters'
import { useState, useEffect } from "react";

const seasons = [
  {},
  { id: 1, name: '1997-1998' },
  { id: 2, name: '1998-1999' },
  { id: 3, name: '1999-2000' },
  { id: 4, name: '2000-2001' },
  { id: 5, name: '2001-2002' },
  { id: 6, name: '2002-2003' },
  { id: 7, name: '2003-2004' },
  { id: 8, name: '2004-2005' },
  { id: 9, name: '2005-2006' },
  { id: 10, name: '2006-2007' },
]  

const teams = [
  {  },
  { team_id: 1610612737, name: 'Atlanta Hawks' },
  { team_id: 1610612738, name: 'Boston Celtics' },
  { team_id: 1610612739, name: 'Cleveland Cavaliers' },
  { team_id: 1610612740, name: 'New Orleans Pelicans' },
  { team_id: 1610612741, name: 'Chicago Bulls' },
  { team_id: 1610612742, name: 'Dallas Mavericks' },
  { team_id: 1610612743, name: 'Denver Nuggets' }
]

export default function Example({activeGame, setActiveGame, getPlayByPlayData}) {
  const [season, setSeason] = useState({})
  const [hometeam, setHometeam] = useState({})
  const [visitorteam, setVisitorteam] = useState({})
  const [currentPage, setCurrentPage] = useState(1)

  const [games, setGames] = useState([])

  const getAllGames = async () => {
    const url = 'http://localhost:3000/games'
    const resp = await fetch(url)
    const games = await resp.json()
    setGames(games)
    setCurrentPage(1)
  }

  const filterGames = async () => {
    const queryStrings = []
    if (hometeam !== {} && hometeam !== null && hometeam?.team_id) {
      queryStrings.push("home_team_id=" + hometeam.team_id)
    }
    if (visitorteam !== {} && visitorteam !== null && visitorteam?.team_id) {
      queryStrings.push("visitor_team_id=" + visitorteam.team_id)
    }
    const queryStringParameters = queryStrings.join('&')
    console.log("queryString + " + queryStringParameters)
    const url = 'http://localhost:3000/games?' + queryStringParameters
    const resp = await fetch(url)
    const games = await resp.json()
    setGames(games)
    setCurrentPage(1)
  }
  function incrementPage() {
    setCurrentPage(s => s + 1);
  }
  function decrementPage() {
    setCurrentPage(s => s - 1);
  }
  const getNextPage = async () => {
    incrementPage()
    const queryStrings = []
    if (hometeam !== {} && hometeam !== null && hometeam?.team_id) {
      queryStrings.push("home_team_id=" + hometeam.team_id)
    }
    if (visitorteam !== {} && visitorteam !== null && visitorteam?.team_id) {
      queryStrings.push("visitor_team_id=" + visitorteam.team_id)
    }
    const nextPageValue = currentPage + 1
    const nextPageString = "page_number=" + nextPageValue
    queryStrings.push(nextPageString)
    const queryStringParameters = queryStrings.join('&')
    const url = 'http://localhost:3000/games?' + queryStringParameters
    const resp = await fetch(url)
    const games = await resp.json()
    setGames(games)
  }

  const getPreviousPage = async () => {
    decrementPage()
    const queryStrings = []
    if (hometeam !== {} && hometeam !== null && hometeam?.team_id) {
      queryStrings.push("home_team_id=" + hometeam.team_id)
    }
    if (visitorteam !== {} && visitorteam !== null && visitorteam?.team_id) {
      queryStrings.push("visitor_team_id=" + visitorteam.team_id)
    }
    const nextPageValue = currentPage - 1
    const nextPageString = "page_number=" + nextPageValue
    queryStrings.push(nextPageString)
    const queryStringParameters = queryStrings.join('&')
    const url = 'http://localhost:3000/games?' + queryStringParameters
    const resp = await fetch(url)
    const games = await resp.json()
    setGames(games)
  }

  useEffect(() => {
    getAllGames()
  }, [])

  return (
    <div>
      <div className="relative flex flex-col">
        {/* 3 column wrapper */}
        <div className="flex-grow w-full max-w-7xl mx-auto xl:px-8 lg:flex">

          <div className="flex-1 min-w-0 bg-white xl:flex">
            <div className="border-b border-gray-200 xl:border-b-0 xl:flex-shrink-0 xl:w-64 xl:border-r xl:border-gray-200 bg-white">
              <div className="h-full pl-4 pr-6 py-6 sm:pl-6 lg:pl-8 xl:pl-0">
                {/* Start left column area */}
                <div className="h-full relative" style={{ height: '36rem' }}>
                  <div className="absolute inset-0 border-2 border-gray-200 border-dashed rounded-lg">
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
                      />
                  </div>
                </div>
                {/* End left column area */}
              </div>
            </div>

            <div className="bg-white lg:min-w-0 lg:flex-1">
              <div className="h-full py-6 px-4 sm:px-6 lg:px-8">
                {/* Start main area*/}
                <div className="relative h-full" style={{ minHeight: '56rem' }}>
                  <div className="absolute inset-0 border-2 border-gray-200 border-dashed rounded-lg">
                    <Games 
                      games={games} 
                      setGames={setGames} 
                      activeGame={activeGame} 
                      setActiveGame={setActiveGame} 
                      onNextPage={getNextPage} 
                      onPreviousPage={getPreviousPage} 
                      currentPage={currentPage} 
                      getPlayByPlayData={getPlayByPlayData}
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