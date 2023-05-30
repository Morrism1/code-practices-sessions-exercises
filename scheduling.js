function roundRobin(jobs, slice, index) {
  let queue = jobs.map((cc, i) => ({ index: i, remainingCC: cc }));
  let totalTime = 0;

  // Loop through the queue
  for (let i = 0; queue.length > 0; i = (i + 1) % queue.length) {
    // Get the current job and current remaining CC
    let { index: currentIndex, remainingCC } = queue[i];

    // Determine the current slice, which is the minimum of the slice and the remaining CC
    let currentSlice = Math.min(slice, remainingCC);
    // Subtract the current slice from the remaining CC
    remainingCC -= currentSlice;
    // Add the current slice to the total time
    totalTime += currentSlice;

    // If the remaining CC is greater than 0, then we still need to process this job
    if (remainingCC > 0) {
      // Update the job in the queue
      queue[i] = { index: currentIndex, remainingCC };
    } else {
      // Otherwise, remove the job from the queue
      queue.splice(i, 1);
      // Adjust the loop index after removing the current job
      i--;
    }

    // If the current index is equal to the given index and the remaining CC is equal to 0, then we are done
    if (currentIndex === index && remainingCC === 0) {
      return totalTime;
    }
  }

  // If we get to this point, then we did not find the given index
  return -1;
}
