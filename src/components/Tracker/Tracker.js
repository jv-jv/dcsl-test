import React from "react"
import { timeToString } from "../../utils"
import "./tracker.scss"

export default function Tracker({ runners, logLap, isRunOver }) {
  return (
    <table className="table">
      <thead className="table__header">
        <tr>
          <th>Name</th>
          <th>Lap Count</th>
          <th>Total Time</th>
          <th>Average Time</th>
          <th>Last Lap Time</th>
        </tr>
      </thead>
      <tbody>
        {runners
          .sort((a, b) => a.id - b.id)
          .map((runner) => (
            <tr className="table__header" key={runner.id}>
              <td>
                <button
                  className="btn btn--runner"
                  disabled={isRunOver}
                  onClick={() => logLap(runner)}
                >
                  {runner.name}
                </button>
              </td>
              <td>{runner.numLaps}</td>
              <td>{timeToString(runner.totalTime)}</td>
              <td>
                {runner.totalTime / runner.numLaps
                  ? timeToString(runner.totalTime / runner.numLaps)
                  : "0"}
              </td>
              <td>
                {runner.laps.length > 0
                  ? timeToString(runner.laps[runner.laps.length - 1])
                  : "0"}
              </td>
            </tr>
          ))}
      </tbody>
    </table>
  )
}
