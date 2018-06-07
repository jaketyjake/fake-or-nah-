

let ref = firebase.database().ref('articles');
/*
let articleRandom = Math.floor(Math.random() * 49)



var hasGottenArticle = false

var aRandoArticle = firebase.database().ref(`articles/${articleRandom}`)

aRandoArticle.on('value',function(snapshot){

  oneArticle = snapshot.val()
  if(oneArticle && hasGottenArticle == false ){
    hasGottenArticle = true
    render_article(oneArticle)

  }

})

function render_article(article){

  var articleTemplate = `

    <div>

      <h5>${article.title}</h5>

    </div>

  `

  var newArticleElement = document.createElement("div")
  newArticleElement.innerHTML = articleTemplate
  document.body.appendChild(newArticleElement)

}

*/


function setupObservers() {
  var articleArray = []
  ref.on('value',function(snapshot){
    for(key in snapshot.val()) {
      let articleKeys = snapshot.val()[key]
      articleArray.push(articleKeys)
    }
    randomArticle(articleArray)
  })

}


function randomArticle(articleArray) {
  let articleRandom = Math.floor(Math.random() * articleArray.length)
  let random = articleArray[articleRandom]
  console.log(articleRandom)
  console.log(random)
  populateCard(random)
}


setTimeout(function() {
  setupObservers()
},
500)
