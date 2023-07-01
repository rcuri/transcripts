import Example from '../components/example'
import ExampleTwo from '../components/exampleTwo'
import { useState, useEffect } from "react";



export default function Home() {
  const [activeGame, setActiveGame] = useState(null)
  const [activePeriod, setActivePeriod] = useState(1)
  const [playByPlay, setPlayByPlay] = useState([])
  const [currentPage, setCurrentPage] = useState(1)

  const switchTabs = async (tabIndex) => {
    const currentPeriod = tabIndex + 1
    setActivePeriod(currentPeriod)
    setCurrentPage(1)
    const queryStrings = []
    queryStrings.push("period=" + currentPeriod)
    const queryStringParameters = queryStrings.join('&')
    console.log("queryString + " + queryStringParameters)
    const url = 'http://localhost:3000/play_by_play/' + activeGame + '?' + queryStringParameters
    const resp = await fetch(url)
    const playByPlay = await resp.json()
    setPlayByPlay(playByPlay)
  }

  const getPlayByPlayData = async (game_id) => {
    setActiveGame(game_id)
    const queryStrings = []
    if (activePeriod) {
      queryStrings.push("period=" + activePeriod)
    }
    console.log(game_id)
    const queryStringParameters = queryStrings.join('&')
    console.log("queryString + " + queryStringParameters)
    const url = 'http://localhost:3000/play_by_play/' + game_id + '/?' + queryStringParameters
    const resp = await fetch(url)
    const playByPlay = await resp.json()
    setPlayByPlay(playByPlay)
  }

  const selectGame = async () => {

    const queryStrings = []
    setActivePeriod(1)
    if (activePeriod) {
      queryStrings.push("period=" + activePeriod)
    }
    const queryStringParameters = queryStrings.join('&')
    console.log("queryString + " + queryStringParameters)
    const url = 'http://localhost:3000/play_by_play/' + activeGame + '?' + queryStringParameters
    const resp = await fetch(url)
    const playByPlay = await resp.json()
    setPlayByPlay(playByPlay)
  }

  function incrementPage() {
    setCurrentPage(s => s + 1);
  }
  function decrementPage() {
    setCurrentPage(s => s - 1);
  }
  const getNextPage = async () => {
    const queryStrings = []
    const nextPageValue = currentPage + 1
    console.log(nextPageValue)
    const nextPageString = "page_number=" + nextPageValue
    queryStrings.push(nextPageString)
    const currentPeriodString = "period=" + activePeriod
    queryStrings.push(currentPeriodString)
    const queryStringParameters = queryStrings.join('&')
    const url = 'http://localhost:3000/play_by_play/' + activeGame + '?' + queryStringParameters
    console.log(url)
    const resp = await fetch(url)
    const playByPlay = await resp.json()
    setPlayByPlay(playByPlay)
    incrementPage()
  }

  const getPreviousPage = async () => {
    const queryStrings = []
    const prevPageValue = currentPage - 1
    console.log(prevPageValue)
    const prevPageString = "page_number=" + prevPageValue
    queryStrings.push(prevPageString)
    const currentPeriodString = "period=" + activePeriod
    queryStrings.push(currentPeriodString)
    const queryStringParameters = queryStrings.join('&')
    const url = 'http://localhost:3000/play_by_play/' + activeGame + '?' + queryStringParameters
    console.log(url)
    const resp = await fetch(url)
    const playByPlay = await resp.json()
    setPlayByPlay(playByPlay)
    decrementPage()
  }

  return (
   <main>
    <div>
      <Example
        activeGame={activeGame}
        setActiveGame={setActiveGame} 
        getPlayByPlayData={getPlayByPlayData}
      />
      <ExampleTwo 
        playByPlay={playByPlay}
        switchTabs={switchTabs}
        getNextPage={getNextPage}
        getPreviousPage={getPreviousPage}
        currentPage={currentPage}
      />
    </div>
   </main>
  )
}