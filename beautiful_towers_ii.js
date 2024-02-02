const maximumSumOfHeights = function (maxHeights) {
  const heights = [];
  const peak = [-1];

  for (let i = 0, curr = 0; i < maxHeights.length; ++i) {
    while (
      peak[peak.length - 1] !== peak[0] &&
      maxHeights[peak[peak.length - 1]] >= maxHeights[i]
    ) {
      const j = peak.pop();
      curr -= (j - peak[peak.length - 1]) * maxHeights[j];
    }

    curr += (i - peak[peak.length - 1]) * maxHeights[i];
    peak.push(i);
    heights[i] = curr;
  }

  let maxSum = 0;
  let right = 0;
  peak.length = 1;
  peak[0] = maxHeights.length;

  for (let i = maxHeights.length - 1, curr = 0; i >= 0; --i) {
    while (
      peak[peak.length - 1] !== peak[0] &&
      maxHeights[peak[peak.length - 1]] >= maxHeights[i]
    ) {
      const j = peak.pop();
      curr -= (peak[peak.length - 1] - j) * maxHeights[j];
    }

    curr += (peak[peak.length - 1] - i) * maxHeights[i];
    peak.push(i);
    right = curr;
    maxSum = Math.max(maxSum, heights[i] + right - maxHeights[i]);
  }

  return maxSum;
};
