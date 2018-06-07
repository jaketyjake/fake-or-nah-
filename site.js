//variables
let database = firebase.database().ref()

let newsThumb = document.getElementById('cardDiv')



// populating card from database
function populateCard (random) {
  cardDiv.innerHTML = ""
  random.forEach(element => {
    let cardInfo =
    "<div class='card'>
      <img class='card-img-top' id='newsThumb' src='${random.thumb}'>
      <div class='card-body'>
        <h3 class="card-title" id="newsHeadline">${random.title}</h3>
      </div>
    </div>"
  cardDiv.innerHTML += cardInfo
  });
}

populateCard()
