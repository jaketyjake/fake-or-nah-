

/* Event fired on the drag target */

//variables
let database = firebase.database().ref()


let newsThumb = document.getElementById('cardDiv')


// populating card from database
function populateCard (article) {
  console.log(article)
  cardDiv.innerHTML = ""
  cardDiv.innerHTML +=
  `<div class='card droptarget ${article.subreddit}' id='dragtarget' draggable='true'>
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

buttonFake.addEventListener("click", function(){
  onionDetector(article)
})

/* Events fired on the drop target */
buttonNaw.addEventListener("click", function() {
  notTheOnionDetector(article)
})

function onionDetector(article) {
      if(`${article.subreddit}` == "TheOnion"){
          // alert('this is the onion')
          theOnionPopup(src="TheOnion.html", "", '900', '500')
      }
      else {
        // alert('this is the not onion')
          wrongPopup(src="wrong.html", "", '900', '500')
      }
  }

  function notTheOnionDetector(article) {
        if(`${article.subreddit}` == "nottheonion"){
            // alert('this is the onion')
            notTheOnionPopup(src="notTheOnion.html", "", '900', '500')
        }
        else {
          // alert('this is the not onion')
            wrongPopup(src="wrong.html", "", '900', '500')
    }
  }

function theOnionPopup(url, title, w, h) {
    var left = (screen.width/2)-(w/2);
    var top = (screen.height/2)-(h/2);
    // draghome.append(dragtarget)
    return window.open(url, title, 'toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no, copyhistory=no, width='+w+', height='+h+', top='+top+', left='+left);

}

function notTheOnionPopup(url, title, w, h) {
    var left = (screen.width/2)-(w/2);
    var top = (screen.height/2)-(h/2);
    // draghome.append(dragtarget)
    return window.open(url, title, 'toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no, copyhistory=no, width='+w+', height='+h+', top='+top+', left='+left);
  }

function wrongPopup(url, title, w, h) {
    var left = (screen.width/2)-(w/2);
    var top = (screen.height/2)-(h/2);
    // draghome.append(dragtarget)
    return window.open(url, title, 'toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no, copyhistory=no, width='+w+', height='+h+', top='+top+', left='+left);
}

// var draghome = document.querySelector('draghome')

// var dragtarget = document.getElementById('dragtarget')

// draghome.append(dragtarget)
