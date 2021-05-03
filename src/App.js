import React, { useState } from "react"
import Tracker from "./components/Tracker/Tracker"
import Controls from "./components/Controls/Controls"
import Results from "./components/Results/Results"

import "./App.scss"

export default function App() {
  const [runners, setRunners] = useState([])
  const [startTime, setStartTime] = useState()
  const [isRunOver, setIsRunOver] = useState(false)

  function stopRun() {
    setIsRunOver(true)
  }

  function startTimer() {
    setStartTime(Date.now())
  }

  function reset() {
    setIsRunOver(false)
    setStartTime(null)
    setRunners([])
  }

  function logLap(runner) {
    setRunners((prevState) => [
      ...prevState.filter((e) => e.name !== runner.name),
      {
        ...runner,
        numLaps: runner.numLaps + 1,
        totalTime: Date.now() - startTime,
        laps: [...runner.laps, Date.now() - startTime - runner.totalTime],
      },
    ])
  }

  function addRunner(name) {
    if (!name.trim()) return
    setRunners((prevState) => [
      ...prevState,
      {
        id: Date.now(),
        name,
        numLaps: 0,
        totalTime: 0,
        laps: [],
      },
    ])
  }

  return (
    <div className="container">
      <Tracker runners={runners} logLap={logLap} isRunOver={isRunOver} />
      <Controls
        addRunner={addRunner}
        startTime={startTime}
        startTimer={startTimer}
        stopRun={stopRun}
        isRunOver={isRunOver}
      />
      {isRunOver && <Results runners={runners} reset={reset} />}
    </div>
  )
}
