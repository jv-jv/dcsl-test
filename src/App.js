import React, { useState } from "react"
import Tracker from "./components/Tracker/Tracker"
import Controls from "./components/Controls/Controls"
import Results from "./components/Results/Results"

import "./App.scss"

export default function App() {
  const [runners, setRunners] = useState([])
  const [startTime, setStartTime] = useState()
  const [isRunOver, setIsRunOver] = useState(false)
  // const [isRunning, setIsRunning] = useState(false)

  // function handleRunning(bool) {
  //   setIsRunning(bool)
  // }

  function stopRun() {
    setIsRunOver(true)
  }

  function startTimer() {
    setStartTime(Date.now())
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

  // console.log(runners)

  return (
    <div className="container">
      <Tracker runners={runners} startTime={startTime} logLap={logLap} />
      <Controls
        addRunner={addRunner}
        startTime={startTime}
        startTimer={startTimer}
        stopRun={stopRun}
      />
      {isRunOver && <Results runners={runners} />}
    </div>
  )
}
