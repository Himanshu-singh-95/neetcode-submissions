class Twitter {
  constructor() {
    this.time = 0;
    this.tweetsMap = new Map();
    this.followMap = new Map();
  }

  /**
   * @param {number} userId
   * @param {number} tweetId
   * @return {void}
   */
  postTweet(userId, tweetId) {
    this.time++;
    if (!this.tweetsMap.has(userId)) {
      this.tweetsMap.set(userId, []);
    }
    this.tweetsMap.get(userId).push({ tweetId, time: this.time });
  }

  /**
   * @param {number} userId
   * @return {number[]}
   */
  getNewsFeed(userId) {
    const feed = [];
    const followees = this.followMap.get(userId) || new Set();
    followees.add(userId); // Include the user's own tweets

    const minHeap = new MinPriorityQueue((data) => data[0]);

    for (const followeeId of followees) {
      const tweets = this.tweetsMap.get(followeeId) || [];
      for (const tweet of tweets) {
        minHeap.enqueue([tweet.time, tweet.tweetId]);
        if (minHeap.size() > 10) {
          minHeap.dequeue();
        }
      }
    }

    while (!minHeap.isEmpty()) {
      const [_, tweetId] = minHeap.dequeue();
      feed.push(tweetId);
    }
    return feed.reverse();
  }

  /**
   * @param {number} followerId
   * @param {number} followeeId
   * @return {void}
   */
  follow(followerId, followeeId) {
    if (followerId === followeeId) return;
    if (!this.followMap.has(followerId)) {
      this.followMap.set(followerId, new Set());
    }
    this.followMap.get(followerId).add(followeeId);
  }

  /**
   * @param {number} followerId
   * @param {number} followeeId
   * @return {void}
   */
  unfollow(followerId, followeeId) {
    if (!this.followMap.has(followerId)) return;
    this.followMap.get(followerId).delete(followeeId);
  }
}
