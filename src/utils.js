function timeToString(time) {
  //   let diffInHrs = time / 3600000
  //   let hh = Math.floor(diffInHrs)

  //   let diffInMin = (diffInHrs - hh) * 60
  //   let mm = Math.floor(diffInMin)

  let diffInMin = time / 60000
  let mm = Math.floor(diffInMin)

  let diffInSec = (diffInMin - mm) * 60
  let ss = Math.floor(diffInSec)

  // do milliseconds work like this?
  let diffInMilli = (diffInSec - ss) * 1000
  let sss = Math.floor(diffInMilli)

  //   return `${hh}:${mm}:${ss}.${sss}`
  return `${mm}:${ss}.${sss}`
}

export { timeToString }
