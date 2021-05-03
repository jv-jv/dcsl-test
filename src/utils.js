function timeToString(time) {
  let diffInMin = time / 60000
  let mm = Math.floor(diffInMin)

  let diffInSec = (diffInMin - mm) * 60
  let ss = Math.floor(diffInSec)

  let diffInMilli = (diffInSec - ss) * 1000
  let sss = Math.floor(diffInMilli)

  return `${mm}:${ss}.${sss}`
}

export { timeToString }
