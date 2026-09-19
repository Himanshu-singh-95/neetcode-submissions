class Solution {
  /**
   * @param {character[][]} board
   * @return {boolean}
   */
  isValidSudoku(board) {
    const len = board.length;
    const seen = new Set();
    for (let row = 0; row < len; row++) {
      for (let col = 0; col < len; col++) {
        const cellVal = board[row][col];
        if (cellVal !== '.') {
          const boxId = (Math.floor((row / 3)) * 3) + Math.floor(col / 3);
          const rowVal = `row-${row}-${cellVal}`;
          const colVal = `col-${col}-${cellVal}`;
          const boxVal = `box-${boxId}-${cellVal}`;

          if (seen.has(boxVal) || seen.has(colVal) || seen.has(rowVal)) {
            return false;
          }

          seen.add(rowVal);
          seen.add(colVal);
          seen.add(boxVal);
        }
      }
    }
    return true;
  }
}
