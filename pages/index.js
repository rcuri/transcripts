import Example from '../components/example'
import ExampleTwo from '../components/exampleTwo'
import { useState, useEffect } from "react";
import Landing from '../components/landing';
import Transcript from '../components/transcript';

const sampleTranscripts = [{'id': 1,
'speaker_begin_time': '0:00',
'speaker_name': 'Kevin Harlan',
'line': " Harlan: And we're underway here in Boston as the Celtics host the Cavaliers."},
{'id': 2,
'speaker_begin_time': '0:04',
'speaker_name': 'Reggie Miller',
'line': " That's right, Kevin. It's always exciting to see these two teams go head-to-head."},
{'id': 3,
'speaker_begin_time': '0:10',
'speaker_name': 'Kevin Harlan',
'line': ' Harlan: The tip-off goes to Horford, and the Celtics start with possession.'},
{'id': 4,
'speaker_begin_time': '0:14',
'speaker_name': 'Reggie Miller',
'line': " A good start for the Celtics, winning the tip-off. Let's see if they can convert it into points."},
{'id': 5,
'speaker_begin_time': '0:20',
'speaker_name': 'Kevin Harlan',
'line': " Harlan: Horford with a fadeaway jumper, and it's good!"},
{'id': 6,
'speaker_begin_time': '0:24',
'speaker_name': 'Reggie Miller',
'line': " Nice shot by Horford. He's showing off his scoring touch early in the game."},
{'id': 7,
'speaker_begin_time': '0:30',
'speaker_name': 'Kevin Harlan',
'line': ' Harlan: Mitchell misses a pull-up jumper for the Cavaliers.'},
{'id': 8,
'speaker_begin_time': '0:34',
'speaker_name': 'Reggie Miller',
'line': " Tough break for Mitchell. He couldn't find the mark on that shot."},
{'id': 9,
'speaker_begin_time': '0:40',
'speaker_name': 'Kevin Harlan',
'line': ' Harlan: Horford grabs the rebound for the Celtics.'},
{'id': 10,
'speaker_begin_time': '0:44',
'speaker_name': 'Reggie Miller',
'line': " Horford doing it all for the Celtics. He's making an impact on both ends of the court."},
{'id': 11,
'speaker_begin_time': '0:50',
'speaker_name': 'Kevin Harlan',
'line': " Harlan: Brown with a running layup, and it's good! Smart with the assist."},
{'id': 12,
'speaker_begin_time': '0:55',
'speaker_name': 'Reggie Miller',
'line': ' Great teamwork by the Celtics. Brown finishes strong at the rim.'},
{'id': 13,
'speaker_begin_time': '1:00',
'speaker_name': 'Kevin Harlan',
'line': ' Harlan: Allen responds with a cutting layup for the Cavaliers.'},
{'id': 14,
'speaker_begin_time': '1:04',
'speaker_name': 'Reggie Miller',
'line': ' Nice finish by Allen. He took advantage of the opening in the defense.'},
{'id': 15,
'speaker_begin_time': '1:10',
'speaker_name': 'Kevin Harlan',
'line': ' Harlan: Tatum misses a driving floating jump shot for the Celtics.'},
{'id': 16,
'speaker_begin_time': '1:14',
'speaker_name': 'Reggie Miller',
'line': " Tough shot attempt by Tatum. He couldn't get it to fall."},
{'id': 17,
'speaker_begin_time': '1:20',
'speaker_name': 'Kevin Harlan',
'line': ' Harlan: Williams III grabs the rebound for the Celtics.'},
{'id': 18,
'speaker_begin_time': '1:24',
'speaker_name': 'Reggie Miller',
'line': " Williams III with the hustle play. He's making his presence felt on the boards."},
{'id': 19,
'speaker_begin_time': '1:30',
'speaker_name': 'Kevin Harlan',
'line': ' Harlan: Williams III with an alley-oop dunk! Horford with the assist.'},
{'id': 20,
'speaker_begin_time': '1:34',
'speaker_name': 'Reggie Miller',
'line': ' What a finish by Williams III! Horford set him up perfectly for the dunk.'},
{'id': 21,
'speaker_begin_time': '1:40',
'speaker_name': 'Kevin Harlan',
'line': ' Harlan: And that brings us to the end of the first quarter. The Celtics are leading the Cavaliers 6-2.'},
{'id': 22,
'speaker_begin_time': '1:46',
'speaker_name': 'Reggie Miller',
'line': " The Celtics have started strong in this game. They're playing with energy and executing well. The Cavaliers will need to regroup and find their rhythm in the second quarter."}]

  const speakers = {
    'Kevin Harlan': '/kevin-harlan-avatar.png',
    'Reggie Miller': '/reggie-miller-avatar.png'
  }

export default function Home() {
  const [activeGame, setActiveGame] = useState(null)
  const [activePeriod, setActivePeriod] = useState(1)
  const [playByPlay, setPlayByPlay] = useState(null)
  const [currentPbpPage, setCurrentPbpPage] = useState(1)
  const [transcripts, setTranscripts] = useState(null)

  const [totalPbpResults, setTotalPbpResults] = useState(0)
  const [pbpResultsBeginning, setPbpResultsBeginning] = useState(0)
  const [pbpResultsEnding, setPbpResultsEnding] = useState(0)

  const paginate = (page, total, per) => {
    const beginning = ((page - 1) * per) + 1
    console.log("beginning number" + beginning)
    const output = {
      beginning: ((Number(page) - 1) * Number(per)) + 1,
      end: page * per
    }
    if (output['end'] > total)
      output['end'] = total
    console.log(per + " per")
    console.log(output['beginning'] + " "+ "beginning")
    return output
}

  const switchTabs = async (tabIndex) => {
    const currentPeriod = tabIndex + 1
    setActivePeriod(currentPeriod)
    setCurrentPbpPage(1)
    const queryStrings = []
    queryStrings.push("period=" + currentPeriod)
    const queryStringParameters = queryStrings.join('&')
    console.log("queryString + " + queryStringParameters)
    const url = 'http://localhost:3000/play_by_play/' + activeGame + '?' + queryStringParameters
    const resp = await fetch(url)
    const playByPlay = await resp.json()
    setPlayByPlay(playByPlay['data'])

    setTotalPbpResults(playByPlay['total'])
    const pagination = paginate(playByPlay['page'], playByPlay['total'], playByPlay['per_page'])
    setPbpResultsBeginning(pagination['beginning'])
    setPbpResultsEnding(pagination['end'])
  }

  const getPlayByPlayData = async (game_id) => {
    setActiveGame(game_id)
    setCurrentPbpPage(1)
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
    setPlayByPlay(playByPlay['data'])

    setTotalPbpResults(playByPlay['total'])
    const pagination = paginate(playByPlay['page'], playByPlay['total'], playByPlay['per_page'])
    setPbpResultsBeginning(pagination['beginning'])
    setPbpResultsEnding(pagination['end'])
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
    console.log(queryStringParameters)
    const url = 'http://localhost:3000/play_by_play/' + activeGame + '?' + queryStringParameters
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
    setTranscripts(sampleTranscripts)
  }
  

  return (
   <main>
    <div>
      <Landing />
      <Example
        activeGame={activeGame}
        setActiveGame={setActiveGame} 
        getPlayByPlayData={getPlayByPlayData}
      />
      {playByPlay ?
      <ExampleTwo 
        playByPlay={playByPlay}
        switchTabs={switchTabs}
        currentPage={currentPbpPage}
        changePBPPage={changePBPPage}
        pbpResultsBeginning={pbpResultsBeginning}
        pbpResultsEnding={pbpResultsEnding}
        totalPbpResults={totalPbpResults}
        generateTranscript={generateTranscript}
      /> : ''
    }
    {transcripts ? 
      <Transcript transcripts={transcripts} speakers={speakers} />
      : ''
    }
    </div>
   </main>
  )
}