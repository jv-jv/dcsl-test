// import React from "react"
// import "./tracker.scss"
// import { timeToString } from "../../utils"
// export default function Tracker({ runners, startTime, logLap }) {
//   return (
//     <div className="table">
//       <div className="table__header">
//         <span>Name</span>
//         <span>Lap Count</span>
//         <span>Total Time</span>
//         <span>Average Time</span>
//         <span>Last Lap Time</span>
//       </div>

//       {runners
//         .sort((a, b) => a.id - b.id)
//         .map((runner) => (
//           <div className="table__header" key={runner.name}>
//             <button onClick={() => logLap(runner)}>{runner.name}</button>
//             <span>{runner.numLaps}</span>
//             <span>{timeToString(runner.totalTime)}</span>
//             <span>
//               {runner.totalTime / runner.numLaps
//                 ? runner.totalTime / runner.numLaps
//                 : "0"}
//             </span>
//             <span>
//               {runner.laps.length > 0
//                 ? timeToString(runner.laps[runner.laps.length - 1])
//                 : "0"}
//             </span>
//           </div>
//         ))}
//     </div>
//   )
// }

import React from "react"
import "./tracker.scss"
import { timeToString } from "../../utils"
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
            <tr className="table__header" key={runner.name}>
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

// {runners.map((runner) => (
//     <div>
//       <span>{runner.id}</span>
//       <span>name: {runner.name} </span>
//       <span>numLaps: {runner.numLaps} </span>
//       <span>totalTime: {runner.totalTime} </span>
//       <span>laps: {runner.laps} </span>
//     </div>
//   ))}
