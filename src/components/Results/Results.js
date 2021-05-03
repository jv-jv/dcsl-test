import React from "react"
import { timeToString } from "../../utils"

export default function Results({ runners, reset }) {
  // 1. The name of the competitor that had the highest lap count and lowest overall time

  // I wasn't entirely clear on the requirements to win.
  // My understanding is that the person with the highest lap count will win.
  // In case more then one person has the same lap count, the one with the lowest overall time will win
  // Hope that's correct

  function highestLapLowestTime() {
    const bestLapCount = Math.max(...runners.map((runner) => runner.numLaps))
    const bestLapCountsRunners = runners.filter(
      (runner) => runner.numLaps === bestLapCount
    )

    if (bestLapCountsRunners.length === 1) {
      return bestLapCountsRunners[0]
    } else if (bestLapCountsRunners.length > 1) {
      return bestLapCountsRunners.sort((a, b) => a.totalTime - b.totalTime)[0]
    }
  }

  // 2. The name of the competitor with the fastest (completed) lap and the time taken for it
  const allLapsTimes = runners.map((runner) => ({
    name: runner.name,
    bestLap: Math.min(...runner.laps),
  }))

  const bestLapTimeRunner = allLapsTimes.sort(
    (a, b) => a.bestLap - b.bestLap
  )[0]

  return (
    <>
      {runners.every((runner) => runner.numLaps === 0) ? (
        <p>The runners have not run</p>
      ) : (
        <>
          <p>
            The competitor that had the highest lap count and lowest overall
            time is
            <strong> {highestLapLowestTime().name} </strong>
            with
            <strong> {highestLapLowestTime().numLaps} </strong> laps and
            <strong> {timeToString(highestLapLowestTime().totalTime)} </strong>
          </p>

          <p>
            The competitor with the fastest (completed) lap is
            <strong> {bestLapTimeRunner.name} </strong> with
            <strong> {timeToString(bestLapTimeRunner.bestLap)} </strong>
          </p>
        </>
      )}
      <button onClick={reset} className="btn btn--reset">
        Reset
      </button>
    </>
  )
}
