import GamesDisplay from '../components/gamesDisplay'
import PlayByPlayDisplay from '../components/playByPlayDisplay'
import { useState, useEffect } from "react";
import Landing from '../components/landing';
import Transcript from '../components/transcript';
import pRetry from 'p-retry';
import { toast } from "react-toastify";


export default function Home() {
  const [activeGame, setActiveGame] = useState(null)
  const [activePeriod, setActivePeriod] = useState(1)
  const [playByPlay, setPlayByPlay] = useState(null)
  const [currentPbpPage, setCurrentPbpPage] = useState(1)
  const [transcripts, setTranscripts] = useState(null)
  const [transactionId, setTransactionId] = useState(null)
  const [generateDisabled, setGenerateDisabled] = useState(false)

  const [totalPbpResults, setTotalPbpResults] = useState(0)
  const [pbpResultsBeginning, setPbpResultsBeginning] = useState(0)
  const [pbpResultsEnding, setPbpResultsEnding] = useState(0)

  const speakers = {
    'Kevin Harlan': '/kevin-harlan-avatar.png',
    'Reggie Miller': '/reggie-miller-avatar.png'
  }
  const paginate = (page, total, per) => {
    const output = {
      beginning: ((Number(page) - 1) * Number(per)) + 1,
      end: page * per
    }
    if (output['end'] > total)
      output['end'] = total
    return output
  }

  const switchTabs = async (tabIndex) => {
    const currentPeriod = tabIndex + 1
    setActivePeriod(currentPeriod)
    setCurrentPbpPage(1)
    const queryStrings = []
    queryStrings.push("period=" + currentPeriod)
    const queryStringParameters = queryStrings.join('&')
    const url = process.env.NEXT_PUBLIC_AWS_API_BASE_URL + '/play_by_play/' + activeGame + '?' + queryStringParameters
    const resp = await fetch(url)
    const playByPlay = await resp.json()
    setPlayByPlay(playByPlay['data'])
    setTotalPbpResults(playByPlay['total'])
    const pagination = paginate(playByPlay['page'], playByPlay['total'], playByPlay['per_page'])
    setPbpResultsBeginning(pagination['beginning'])
    setPbpResultsEnding(pagination['end'])
  }

  const getPlayByPlayData = async (game_id) => {
    const queryStrings = []
    if (activePeriod) {
      queryStrings.push("period=" + activePeriod)
    }
    const queryStringParameters = queryStrings.join('&')
    const url = process.env.NEXT_PUBLIC_AWS_API_BASE_URL + '/play_by_play/' + game_id + '?' + queryStringParameters
    try {
      const response = await fetch(url)
      if (!response.ok) {
        if (response.status === 404) {
        } else if (response.status === 403) {
        } else {
        }
        throw new Error(response);
      }
      else {
        const playByPlay = await response.json()
        setActiveGame(game_id)
        setCurrentPbpPage(1)
        setPlayByPlay(playByPlay['data'])
        setTotalPbpResults(playByPlay['total'])
        const pagination = paginate(playByPlay['page'], playByPlay['total'], playByPlay['per_page'])
        setPbpResultsBeginning(pagination['beginning'])
        setPbpResultsEnding(pagination['end'])
      }
    } catch (exception) {
      toast('Play-by-play data not available for selected game. Check back another day!', { hideProgressBar: true, autoClose: 2500, type: 'error', position: 'bottom-right' })
    }
  }


  function incrementPbpPage() {
    setCurrentPbpPage(s => s + 1);
  }
  function decrementPbpPage() {
    setCurrentPbpPage(s => s - 1);
  }
  const changePBPPage = async (direction) => {
    const queryStrings = []
    if (direction === 'next') {
      var destinationPageValue = currentPbpPage + 1
    }
    else if (direction === 'previous') {
      var destinationPageValue = currentPbpPage - 1
    }
    const destinationPageString = "page_number=" + destinationPageValue
    queryStrings.push(destinationPageString)
    const currentPeriodString = "period=" + activePeriod
    queryStrings.push(currentPeriodString)
    const queryStringParameters = queryStrings.join('&')
    const url = process.env.NEXT_PUBLIC_AWS_API_BASE_URL + '/play_by_play/' + activeGame + '?' + queryStringParameters
    const resp = await fetch(url)
    const playByPlay = await resp.json()
    const pbpData = playByPlay['data']
    setPlayByPlay(pbpData)
    if (direction === 'next')
      incrementPbpPage()
    else if (direction === 'previous')
      decrementPbpPage()
    setTotalPbpResults(playByPlay['total'])
    const pagination = paginate(playByPlay['page'], playByPlay['total'], playByPlay['per_page'])
    setPbpResultsBeginning(pagination['beginning'])
    setPbpResultsEnding(pagination['end'])
  }

  const generateTranscript = async () => {
    var body = {
      game_id: activeGame,
      page_number: currentPbpPage,
      period: activePeriod
    }
    body = JSON.stringify(body)
    try {
      const url = process.env.NEXT_PUBLIC_AWS_TRANSCRIPTS_API_BASE_URL + "/transcripts"
      const response = await fetch(url, {
        headers: {
          Accept: 'application.json',
          "Content-Type": "application/json",
        },
        body: body,
        method: "POST"
      });
      if (!response.ok) {
        if (response.status === 429) {
        } else if (response.status === 403) {
        } else {
        }
        throw new Error(response);
      }
      const transcripts = await response.json();
      const transactionId = transcripts['transcript_id']
      console.log(transactionId)
      setTransactionId(transactionId)
      setGenerateDisabled(true)
      setTimeout(() => setGenerateDisabled(false), 20000);
    } catch (exception) {
    }
    toast('Successfully created transcript request. Scroll below and refresh.', { hideProgressBar: true, autoClose: 3500, type: 'success', position: 'bottom-right' })
  }

  const retrieveTranscriptStatus = async () => {
    try {
      const url = process.env.NEXT_PUBLIC_AWS_API_BASE_URL + "/transcripts/" + transactionId
      const response = await fetch(url);
      if (!response.ok) {
        if (response.status === 429) {
        } else if (response.status === 403) {
        } else {
        }
        throw new Error(response);
      }
      const transcripts = await response.json();
      const transcriptsData = transcripts['data']
      setTranscripts(transcriptsData)
      return transcripts
    } catch (exception) {
    }
  }

  useEffect(() => {
    if (transactionId) {
      setTimeout(() => pRetry(retrieveTranscriptStatus, {
        maxTimeout: 3000,
        retries: 5
      }
    ), 12000)
    }

  }, [transactionId]); 

  return (
    <main>
      <div>
        <Landing />
        <GamesDisplay
          activeGame={activeGame}
          setActiveGame={setActiveGame}
          getPlayByPlayData={getPlayByPlayData}
        />
        {playByPlay ?
          <PlayByPlayDisplay
            playByPlay={playByPlay}
            switchTabs={switchTabs}
            currentPage={currentPbpPage}
            changePBPPage={changePBPPage}
            pbpResultsBeginning={pbpResultsBeginning}
            pbpResultsEnding={pbpResultsEnding}
            totalPbpResults={totalPbpResults}
            generateTranscript={generateTranscript}
            isGenerateDisabled={generateDisabled}
          /> : ''
        }
        {transactionId ?
          <Transcript
            transcripts={transcripts}
            speakers={speakers}
            refreshAction={retrieveTranscriptStatus}
          />
          : ''
        }
      </div>
    </main>
  )
}