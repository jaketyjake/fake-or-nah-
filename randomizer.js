


let ref = firebase.database().ref('articles');

let articleRandom = Math.floor(Math.random() * 49)



var hasGottenArticle = false

var aRandoArticle = firebase.database().ref(`articles/${articleRandom}`)

aRandoArticle.on('value',function(snapshot){

  oneArticle = snapshot.val()
  if(oneArticle && hasGottenArticle == false ){
    hasGottenArticle = true
    renderArticle(oneArticle)

  }

})


function renderArticle(article) {
  populateCard(article)

  buttonNaw.addEventListener("click", function() {
    notTheOnionDetector(article)
  })

  buttonFake.addEventListener("click", function(){
    onionDetector(article)
  })
}
