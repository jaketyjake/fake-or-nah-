

/* Event fired on the drag target */

//variables
let database = firebase.database().ref()


let newsThumb = document.getElementById('cardDiv')


// populating card from database
function populateCard (article) {
  console.log(article)
  cardDiv.innerHTML = ""
  cardDiv.innerHTML +=
  `<div class='card droptarget shadow-lg ${article.subreddit}' id='dragtarget' draggable='true'>
  <img class='card-img-top' id='newsThumb' src='${article.img}'>
    <div class='card-body'>
      <h3 class='card-title' id='newsHeadline'>
        ${article.title}
      </h3>
    </div>
  </div>`
}

/*-- Event fired on the drag target --*/
let buttonFake = document.getElementById('buttonFake')
let buttonNaw = document.getElementById('buttonNaw')


function onionDetector(article) {
  if(`${article.subreddit}` == "TheOnion"){
      theOnionPopup()
  }
  else {
      wrongPopup()
  }
}

function notTheOnionDetector(article) {
    if(`${article.subreddit}` == "nottheonion"){
        notTheOnionPopup()
    }
    else {
        wrongPopup()
}
}

function theOnionPopup(){
swal({
    title: "Good job!",
    text: "You guessed it! This is an Onion article! FAKE NEWS!",
    icon: "success",
    button: "Next",
}).then(function() {
  window.location.reload()
    })
}

function notTheOnionPopup(){
swal({
    title: "Good job!",
    text: "You guessed it! This is a REAL article!",
    icon: "success",
    button: "Next",
}).then(function() {
    window.location.reload()
  })
}

function wrongPopup() {
swal({
type: 'error',
icon: 'https://media0.giphy.com/media/3oz8xLd9DJq2l2VFtu/giphy.gif',
animation: true,
customClass: 'animated tada'
})
}
