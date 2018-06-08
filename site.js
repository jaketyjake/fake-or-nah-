

/* Event fired on the drag target */

//variables
let database = firebase.database().ref()


let newsThumb = document.getElementById('cardDiv')


// populating card from database
function populateCard (random) {
  console.log(random)
  cardDiv.innerHTML = ""
  cardDiv.innerHTML +=
  `<div class='card droptarget ${random.subreddit}' id='dragtarget' draggable='true'>
  <img class='card-img-top' id='newsThumb' src='${random.img}'>
    <div class='card-body'>
      <h3 class='card-title' id='newsHeadline'>
        ${random.title}
      </h3>
    </div>
  </div>`
}

/*-- Event fired on the drag target --*/
let targetAreaFake = document.getElementById('targetAreaFake')
let targetAreaNaw = document.getElementById('targetAreaNaw')

document.addEventListener("dragstart", function(event) {
  event.dataTransfer.setData("Text", event.target.id)
})

/* Events fired on the drop target */
document.addEventListener("dragover", function(event) {

  event.preventDefault()
})

function onionDetector(random) {
  targetAreaFake.addEventListener("drop", function(event) {
    event.preventDefault()
    var data = event.dataTransfer.getData("Text")
    event.target.appendChild(document.getElementById(data))
    
    console.log(random.subreddit)
      if(`${random.subreddit}` == "TheOnion"){
          // alert('this is the onion')
          theOnionPopup(src="TheOnion.html", "", '900', '500')
      }
      else {
        // alert('this is the not onion')
          wrongPopup(src="wrong.html", "", '900', '500')
      }
  })
  }
  
  function notTheOnionDetector(random) {
    targetAreaNaw.addEventListener("drop", function(event) {
      event.preventDefault()
      var data = event.dataTransfer.getData("Text")
      event.target.appendChild(document.getElementById(data))
      
      console.log(random.subreddit)
        if(`${random.subreddit}` == "nottheonion"){
            // alert('this is the onion')
            notTheOnionPopup(src="notTheOnion.html", "", '900', '500')
        }
        else {
          // alert('this is the not onion')
            wrongPopup(src="wrong.html", "", '900', '500')
    }
  })
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

