/**
 * Definition of Interval:
 * class Interval {
 *   constructor(start, end) {
 *     this.start = start;
 *     this.end = end;
 *   }
 * }
 */

class Solution {
    /**
     * @param {Interval[]} intervals
     * @returns {number}
     */
    minMeetingRooms(intervals) {
        if (!intervals || intervals.length === 0) return 0;

        const starts = intervals.map(({ start }) => start).sort((a, b) => a - b);
        const ends = intervals.map(({ end }) => end).sort((a, b) => a - b);

        let rooms = 0;
        let startPointer = 0;
        let endPointer = 0;

        while (startPointer < intervals.length) {
            // If a meeting starts before the oldest meeting ends, allocate a room
            if (starts[startPointer] < ends[endPointer]) {
                rooms++;
            } else {
                // A room opened up! Move the end pointer to the next checkout time
                endPointer++;
            }

            // Move to the next meeting start time
            startPointer++;
        }

        return rooms;
    }
}
