function roundRobin(jobs, slice, index) {
  const queue = jobs.map((cc, index_) => ({ index: index_, remainingCC: cc }))
  let totalTime = 0

  // Loop through the queue
  for (let index_ = 0; queue.length > 0; index_ = (index_ + 1) % queue.length) {
    // Get the current job and current remaining CC
    let { index: currentIndex, remainingCC } = queue[index_]

    // Determine the current slice, which is the minimum of the slice and the remaining CC
    const currentSlice = Math.min(slice, remainingCC)
    // Subtract the current slice from the remaining CC
    remainingCC -= currentSlice
    // Add the current slice to the total time
    totalTime += currentSlice

    // If the remaining CC is greater than 0, then we still need to process this job
    if (remainingCC > 0) {
      // Update the job in the queue
      queue[index_] = { index: currentIndex, remainingCC }
    } else {
      // Otherwise, remove the job from the queue
      queue.splice(index_, 1)
      // Adjust the loop index after removing the current job
      index_--
    }

    // If the current index is equal to the given index and the remaining CC is equal to 0, then we are done
    if (currentIndex === index && remainingCC === 0) {
      return totalTime
    }
  }

  // If we get to this point, then we did not find the given index
  return -1
}

export default roundRobin
