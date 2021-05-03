import React, { useState } from "react"
import useInterval from "../../Hooks/useInterval"
import { timeToString } from "../../utils"
import "./controls.scss"

export default function Controls({
  addRunner,
  startTime,
  startTimer,
  stopRun,
}) {
  const [nameInput, setNameInput] = useState("")

  const [displayedTime, setDisplayedTime] = useState("00: 00 : 00.000")
  const [isRunning, setIsRunning] = useState(false)

  useInterval(
    () => {
      setDisplayedTime(timeToString(Date.now() - startTime))
    },
    isRunning ? 1 : null
  )

  function handleChange(e) {
    const { value } = e.target
    setNameInput(value)
  }

  function handleAddSubmit(e) {
    e.preventDefault()
    addRunner(nameInput)
    setNameInput("")
  }

  return (
    <>
      <div className="controls">
        <h2 className="controls__title">1Km Timer</h2>
        <form
          className="controls__add-runner"
          onSubmit={(e) => handleAddSubmit(e)}
        >
          <input value={nameInput} onChange={(e) => handleChange(e)} />
          <button disabled={isRunning} className="btn btn--add">
            Add Name
          </button>
        </form>
        <form className="controls__commands">
          <button
            className="btn btn--start"
            disabled={isRunning}
            onClick={(e) => {
              e.preventDefault()
              startTimer()
              setIsRunning(true)
            }}
          >
            Start Race
          </button>
          <button
            onClick={(e) => {
              e.preventDefault()
              setIsRunning(false)
              stopRun()
            }}
            className="btn btn--end"
          >
            End Race
          </button>
        </form>
        <p className="controls__time">Time passed: {displayedTime}</p>
      </div>

      {/* <div>start: {startTime}</div>
      <div>current: {currentTime}</div>
      <div>diff: {currentTime - startTime}</div>
      <div>formatted: {timeToString(currentTime - startTime)}</div>
      <div>pretend average: {timeToString((currentTime - startTime) / 3)}</div> */}
    </>
  )
}
