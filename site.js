/* Event fired on the drag target */
document.addEventListener("dragstart", function(event) {
  event.dataTransfer.setData("Text", event.target.id)
})

/* Events fired on the drop target */
document.addEventListener("dragover", function(event) {
  event.preventDefault()
})

document.addEventListener("drop", function(event) {
  event.preventDefault()
  var data = event.dataTransfer.getData("Text")
  event.target.appendChild(document.getElementById(data))

    if(event.target.id == "theOnion"){
        theOnionPopup(src="TheOnion.html", "", '900', '500')
    }
    else {
        wrongPopup(src="wrong.html", "", '900', '500')
    }
    if(event.target.id == "notTheOnion"){
        notTheOnionPopup(src="notTheOnion.html", "", '900', '500')
    }
    else {
        wrongPopup(src="wrong.html", "", '900', '500')
    }
    })
  
function theOnionPopup(url, title, w, h) {
    var left = (screen.width/2)-(w/2);
    var top = (screen.height/2)-(h/2);
    draghome.append(dragtarget)
    return window.open(url, title, 'toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no, copyhistory=no, width='+w+', height='+h+', top='+top+', left='+left);
    
} 

function notTheOnionPopup(url, title, w, h) {
    var left = (screen.width/2)-(w/2);
    var top = (screen.height/2)-(h/2);
    draghome.append(dragtarget)
    return window.open(url, title, 'toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no, copyhistory=no, width='+w+', height='+h+', top='+top+', left='+left);
  } 

function wrongPopup(url, title, w, h) {
    var left = (screen.width/2)-(w/2);
    var top = (screen.height/2)-(h/2);
    draghome.append(dragtarget)
    return window.open(url, title, 'toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no, copyhistory=no, width='+w+', height='+h+', top='+top+', left='+left);
} 

var draghome = document.getElementById('draghome')

var dragtarget = document.getElementById('dragtarget')

draghome.append(dragtarget)