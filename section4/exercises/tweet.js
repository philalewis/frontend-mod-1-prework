/*
In the space below, add to the existing skeleton of a Tweet class.

- A tweet should have a (dynamic) author, content, timeStamp, numberOfLikes, and comments.
- A tweet should be able to increment the numberOfLikes and add to the list of comments.

Create several instances of your Tweet and log them to the console. Make sure the
tweet object instances _behave_ as expected.
*/

class Tweet {
  constructor(author, content, timeStamp, numberOfLikes, comments) {
    this.author = author;
    this.content = content;
    this.timeStamp = timeStamp;
    this.numberOfLikes = numberOfLikes;
    this.comments = comments;
  }
  incrementNumberOfLikes() {
    this.numberOfLikes ++;
  }
  addComment(comment) {
    this.comments.push(comment);
    return this.comments;
  }
};

var firstTweet = new Tweet ("Phil", "This is my first Tweet", "09/17/21 10:48", 5, ["Nice of you to join", "Hi there!"]);
console.log(firstTweet);

var secondTweet = new Tweet ("Phil", "Lion's Park is the best disc golf course in Norman", "09/18/21 12:01", 20, ["Disagree. Griffin is better", "I like Ruby Grant more"]);
console.log(secondTweet);

var thirdTweet = new Tweet ("Chad", "I like to throw 172g destroyers", "09/16/21", 15, ["I like to throw those as well", "Agreed"]);
console.log(thirdTweet);

firstTweet.incrementNumberOfLikes();
console.log(firstTweet);

secondTweet.addComment("At least everyone is in agreement that Colonial is the worst!");
console.log(secondTweet);

thirdTweet.addComment("Me too!");
thirdTweet.incrementNumberOfLikes();
console.log(thirdTweet);
