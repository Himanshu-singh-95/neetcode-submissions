class Solution {
  /**
   * @param {number[]} temperatures
   * @return {number[]}
   */
  dailyTemperatures(temperatures) {
    const len = temperatures.length;
    let res = [];
    for (let i = 0; i < len - 1; i++) {
      if (!(i === temperatures.length)) {
        let flag = false;
        for (let j = i + 1; j <= len - 1; j++) {
          if (temperatures[j] > temperatures[i]) {
            res.push(j - i);
            flag = true;
            break;
          }
        }
        if (!flag) {
          res.push(0);
        }
      }
    }
    res.push(0);
    return res;
  }
}
