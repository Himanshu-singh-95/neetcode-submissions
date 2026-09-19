class Solution {
  /**
   * @param {string} s
   * @param {string} t
   * @return {string}
   */
  minWindow(s, t) {
    if (t == '') return '';
    const charsMap = {};
    for (const c of t) {
      charsMap[c] = (charsMap[c] || 0) + 1;
    }
    let res = [-1, -1];
    let resLen = Infinity;
    const currWindowMap = {};
    let have = 0;
    let need = Object.keys(charsMap).length;
    let l = 0;
    let r = 0;
    while (r < s.length) {
      const c = s[r];
      currWindowMap[c] = (currWindowMap[c] || 0) + 1;
      if (charsMap[c] !== undefined && currWindowMap[c] == charsMap[c]) {
        have++;
      }
      while (have == need) {
        if (r - l + 1 < resLen) {
          resLen = r - l + 1;
          res = [l, r];
        }
        currWindowMap[s[l]] = currWindowMap[s[l]] - 1;
        if (charsMap[s[l]] !== undefined && currWindowMap[s[l]] < charsMap[s[l]]) {
          have--;
        }
        l++;
      }
      r++;
    }
    [l, r] = res;
    return resLen > s.length ? '' : s.substring(l, r+1);
  }
}