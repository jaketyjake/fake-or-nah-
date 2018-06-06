let fakediv= document.getElementById("fake")
let nawdiv= document.getElementById("naw")
let fakedata = {}
var i = 0 
let fakearticle ={}
let nawarticle = {}

fetch('https://www.reddit.com/r/TheOnion/new.json?sort=all', {
}).then(function(response){
  return response.json()
}).then(function(json){
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
    fakeartictitle = faketitle
    let articleInfo=
    `<div id=${fake.id}>
      <ul display-style="none">
        <li><b>${faketitle}</b></li>
        <li><a href="${fakeurl}">Link to article on original site</a></li>
        <img src="${fakethumb}"/>
        <li>unique id if needed is ${fakeid}</li>
        <li>subreddit-->${fakesub}</li>
    `
    fakediv.innerHTML += articleInfo
    console.log(fakearticle)
    var database = firebase.database().ref()
    var articlesRef = database.child("articles")
    articlesRef.child(i).set(fakearticle)
    i = i+ 1
    })
  })

fetch('https://www.reddit.com/r/notTheOnion/new.json?sort=all', {

}).then(function(response){
  return response.json()
}).then(function(json){
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
    let nawrticleInfo=
    `<div id=${naw.id}>
      <ul display-style="none">
        <li><b>${nawtitle}</b></li>
        <li><a href="${nawurl}">Link to article on original site</a></li>
        <img src="${nawthumb}"/>
        <li>unique id if needed is ${nawid}</li>
        <li>subreddit-->${nawsub}</li>
    `
    nawdiv.innerHTML += nawrticleInfo
    var database = firebase.database().ref()
    var articlesRef = database.child("articles")
    articlesRef.child(i).set(nawarticle)
    i = i+1
    })
  })

