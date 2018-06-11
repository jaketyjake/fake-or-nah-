# Fake or Nah
[Live Demo](https://fakeornah.surge.sh/index.html)
## Contents
- What It Is
- What We Used
- Challenges and Solutions
- Authors
- Screenshots
- Github Link
- Code Examples
## What It Is
This is a collaborative project wherein we made a game utiziling our front end knowledge. We created an interactive game, which pulls articles from the subreddits r/TheOnion and r/nottheonion to allow users to guess if the headlines are real news or not.
## What We Used
The following languages and API were used in the making of this app:
- HTML
- CSS
- Bootstrap
- JavaScript
- Reddit API
- Firebase
## Challenges and Solutions
- Challenge #1:
First off, we needed to determine the best way to utilize APIs to populate the information for the game. We looked over The Onion's own API, while also working with Reddit's API. Eventually, we determined that it was easier to just utilize one API for all of our information. Luckily, there was a subreddit that contained the information for both.

- Challenge #2:
Our next challenge was making this information more workable. To be able to use only what was necessary and to make it a bit easier to work with, we utilized Firebase to combine our combined APIs from the subreddits. From there, we used Javascript to randomize the information, so that each gameplay would produce a different article.

- Challenge #3:
From there, we worked on code to check the source of each article, and from there, to check the user's guess against the source to determine the veracity of their guess. This was done with a number of functions in Javascript. We styled the app to give a popup based on each guess. Initially, we used a drag and drop feature to make guesses, but switched to a simple button click after it became clear that the drop feature would pose a problem for mobile use.
## Authors
- [Jake Kretzschmar](https://github.com/jaketyjake)
- [Micah Finley](https://github.com/mjayfinley)
- [Ray Medalla](https://github.com/rmedalla)
- [Molly Wood](https://github.com/mollywood)
## Screenshots
## Github Link
[Fake News Or Nah](https://github.com/jaketyjake/fake-or-nah-)

