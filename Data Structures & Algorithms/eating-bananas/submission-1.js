class Solution {
  /**
   * @param {number[]} piles
   * @param {number} h
   * @return {number}
   */
  minEatingSpeed(piles, h) {
    // const max = piles.slice().sort()[piles.length - 1];
    const max = Math.max(...piles);
    let minK = max;
    let l = 1;
    let r = max;
    while (l <= r) {
      const m = Math.floor((l + r) / 2);
      const timeToEat = this.calculateTotalHours(piles, m);
      if (timeToEat <= h) {
        minK = m;
        r = m - 1;
      } else if (timeToEat > h) {
        l = m + 1;
      }
    }
    return minK;
  }

  calculateTotalHours(piles, rate) {
    let ans = 0;
    for (let i = 0; i < piles.length; i++) {
      const pile = piles[i];
      ans += Math.ceil(pile / rate);
    }
    return ans;
  }
}