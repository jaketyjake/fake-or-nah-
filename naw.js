// initializing variables
var i = 0 
let fakearticle ={}
let nawarticle = {}

//fetching articles from fake news reddit api
fetch('https://www.reddit.com/r/TheOnion/new.json?sort=all', {
}).then(function(response){
  return response.json()
}).then(function(json){
// loop to pull specific data from api and add to local dictionary
  json.data.children.forEach(function(fake){
    let fakeid = fake.data.id
    fakearticle.id = fakeid
    let fakeurl = fake.data.url
    fakearticle.url = fakeurl
    let fakesub = fake.data.subreddit
    fakearticle.subreddit = fakesub
    let fakethumb = fake.data.thumbnail
    fakearticle.thumb = fakethumb
    let faketitle = fake.data.title
    fakearticle.title = faketitle
//create reference to firebase database and send dictionary
    var database = firebase.database().ref()
    var articlesRef = database.child("articles")
// "i" as child creates node in firebase numbered in sequence
    articlesRef.child(i).set(fakearticle)
    i = i+ 1
    })
  })

//fetching articles from real news reddit api
fetch('https://www.reddit.com/r/notTheOnion/new.json?sort=all', {
}).then(function(response){
  return response.json()
}).then(function(json){
 // loop to pull specific data from api and add to local dictionary 
  json.data.children.forEach(function(naw){
    let nawid = naw.data.id
    nawarticle.id = nawid
    let nawurl = naw.data.url
    nawarticle.url = nawurl
    let nawsub = naw.data.subreddit
    nawarticle.sub = nawsub
    let nawthumb = naw.data.thumbnail
    nawarticle.thumb = nawthumb
    let nawtitle = naw.data.title
    nawarticle.title = nawtitle
//create reference to firebase database and send dictionary
    var database = firebase.database().ref()
    var articlesRef = database.child("articles")
// "i" as child creates node in firebase numbered in sequence
    articlesRef.child(i).set(nawarticle)
    i = i+1
    })
  })

