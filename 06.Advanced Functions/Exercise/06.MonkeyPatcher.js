function solution(command) {
    if (command == 'upvote') {
        this.upvotes++;
    }
    else if (command == 'downvote') {
        this.downvotes++;
    }
    else {
        let rating = 'new';
        let reportedUpvotes = this.upvotes;
        let reportedDownvotes = this.downvotes;
        let balance = this.upvotes - this.downvotes;
        let totalVotes = this.upvotes + this.downvotes;

        if (totalVotes > 50) {
            let inflation = Math.ceil(Math.max(reportedUpvotes, reportedDownvotes) * 0.25);

            reportedUpvotes += inflation;
            reportedDownvotes += inflation;
        }

        if (totalVotes < 10) {
            rating = 'new';
        }
        else if (this.upvotes > totalVotes * 0.66) {
            rating = 'hot';
        }
        else if (balance >= 0 && totalVotes > 100) {
            rating = 'controversial';
        }
        else if (balance < 0) {
            rating = 'unpopular';
        }

        return [reportedUpvotes, reportedDownvotes, balance, rating];
    }
}

let post = {
    id: '3',
    author: 'emil',
    content: 'wazaaaaa',
    upvotes: 100,
    downvotes: 100
};
solution.call(post, 'upvote');
solution.call(post, 'downvote');
let score = solution.call(post, 'score'); // [127, 127, 0, 'controversial']
solution.call(post, 'downvote');         // (executed 50 times)
score = solution.call(post, 'score');     // [139, 189, -50, 'unpopular']
