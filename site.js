//variables
let database = firebase.database().ref()


// populating card from database
function populateCard (random) {
  console.log(random)
  cardDiv.innerHTML = ""
  cardDiv.innerHTML +=
  `<div class='card'>
  <img class='card-img-top' id='newsThumb' src='${random.img}'>
    <div class='card-body'>
      <h3 class='card-title' id='newsHeadline'>
        ${random.title}
      </h3>
    </div>
  </div>`  
}



let articleContainer = document.getElementById("container")

/*-- Event fired on the drag target --*/
document.addEventListener("dragstart", function(event) {
  event.dataTransfer.setData("Text", event.target.id)
  var previousArticle = event.path[1]
  previousArticle.setAttribute("is_selected_article",false);
  previousArticle.setAttribute("previously_selected",true);

  var previousClass = previousArticle.className
  var updatedClass = previousClass.replace("selected_article", " ");
  previousArticle.className = updatedClass

})
//------------------------------------//

/* Events fired on the drop target */
document.addEventListener("dragover", function(event) {
    event.preventDefault()
    
})
//------------------------------------//

//---------Keep article home----------//
var draghome = document.getElementById('draghome')

var dragtarget = document.getElementById('dragtarget')

draghome.append(dragtarget)
//------------------------------------//

document.addEventListener("drop", function(event) {
    event.preventDefault()
    var data = event.dataTransfer.getData("Text")
    event.target.appendChild(document.getElementById(data))
    if (event.target.id == "false"){
      notFakePopup()
    }
      else {
      fakeButNotFake()

    if (event.target.id == "true"){
      fakePopup()
    }
      else {
      notFakeButFake()
      }
    
}

})
  

function notFakePopup() {
  var myWindow = window.open("", "", "width=(,height=200")
  myWindow.document.write("<div> FALSE = FALSE </div")
  draghome.append(dragtarget)
}

function fakePopup() {
  var myWindow = window.open("", "", "width=600, height=400")
  myWindow.document.write("<div> TRUE = TRUE </div>")
  draghome.append(dragtarget)
}

function fakeButNotFake(){
  var myWindow = window.open("", "", "width=600, height=400")
  myWindow.document.write("<div> FALSE = TRUE </div>")
  draghome.append(dragtarget)
}

function notFakeButFake(){
  var myWindow = window.open("", "", "width=600, height=400")
  myWindow.document.write("<div>TRUE = FALSE </div>")
  draghome.append(dragtarget)
}

let w = window.innerWidth
let h = window.innerHeight
